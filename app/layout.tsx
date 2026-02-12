import type { Metadata } from "next";
import { Nunito, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sleep6 | American-Made Mattresses | Six Essential Components",
  description:
    "Discover Sleep6 - premium mattresses handcrafted in the USA with 25+ years of expertise. Six essential components for the perfect night's sleep. Free delivery, financing available, up to 20 year warranty.",
  keywords: [
    "American made mattress",
    "USA mattress",
    "direct to consumer mattress",
    "handcrafted mattress",
    "luxury mattress",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${lora.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
