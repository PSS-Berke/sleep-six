import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import https from 'https';
import { getProductBySlug } from '@/data/products';

export const runtime = 'nodejs';

const stripeAgent = new https.Agent({ keepAlive: false });

const MAX_QUANTITY = 10;

type RequestedItem = { slug?: unknown; size?: unknown; quantity?: unknown };

// Prices come from the product catalog, never from the browser.
function toLineItem(item: RequestedItem, origin: string) {
  const product = typeof item.slug === 'string' ? getProductBySlug(item.slug) : undefined;
  const size = product?.sizes.find((s) => s.name === item.size);
  const quantity = item.quantity;
  if (
    !product ||
    !size ||
    !size.inStock ||
    typeof quantity !== 'number' ||
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > MAX_QUANTITY
  ) {
    return null;
  }
  const image = product.images[0];
  return {
    price_data: {
      currency: 'usd',
      unit_amount: Math.round(size.price * 100),
      product_data: {
        name: `${product.name} - ${size.name}`,
        ...(image && origin.startsWith('https') ? { images: [new URL(image, origin).href] } : {}),
      },
    },
    quantity,
  };
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe key not configured' }, { status: 500 });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    httpAgent: stripeAgent,
  });
  try {
    const { items, email } = await req.json();

    const origin = req.nextUrl.origin;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Your cart is empty' }, { status: 400 });
    }
    const lineItems = items.map((item: RequestedItem) => toLineItem(item, origin));
    if (lineItems.some((li) => li === null)) {
      return NextResponse.json(
        { error: 'An item in your cart is no longer available. Please update your cart.' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email || undefined,
      line_items: lineItems.filter((li) => li !== null),
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${origin}/checkout/success`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
