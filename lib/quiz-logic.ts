export type RecommendedProduct = 'luna' | 'mystic' | 'fak-cosmos';

export interface ProductWeights {
  luna: number;
  mystic: number;
  'fak-cosmos': number;
}

export interface QuizOption {
  id: string;
  label: string;
  weights: ProductWeights;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizAnswers {
  [questionId: string]: string; // questionId -> optionId
}

export interface ProductScores {
  luna: number;
  mystic: number;
  'fak-cosmos': number;
}

export interface QuizResult {
  product: RecommendedProduct;
  scores: ProductScores;
  headline: string;
  reason: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'pain',
    question: 'Do you experience back pain, joint pain, or muscle soreness?',
    options: [
      {
        id: 'frequently',
        label: 'Frequently (daily or most days)',
        weights: { luna: 0, mystic: 4, 'fak-cosmos': 1 },
      },
      {
        id: 'sometimes',
        label: 'Sometimes (a few times a week)',
        weights: { luna: 1, mystic: 2, 'fak-cosmos': 1 },
      },
      {
        id: 'rarely',
        label: 'Rarely or never',
        weights: { luna: 2, mystic: 0, 'fak-cosmos': 1 },
      },
    ],
  },
  {
    id: 'recovery',
    question: 'Are you currently recovering from an injury, surgery, or dealing with a chronic condition?',
    options: [
      {
        id: 'recovering',
        label: "Yes, I'm actively recovering",
        weights: { luna: 0, mystic: 4, 'fak-cosmos': 0 },
      },
      {
        id: 'ongoing',
        label: 'I have an ongoing condition I manage',
        weights: { luna: 0, mystic: 3, 'fak-cosmos': 0 },
      },
      {
        id: 'healthy',
        label: "No, I'm in good health",
        weights: { luna: 2, mystic: 0, 'fak-cosmos': 1 },
      },
    ],
  },
  {
    id: 'temperature',
    question: 'How would you describe your body temperature while sleeping?',
    options: [
      {
        id: 'hot',
        label: 'I sleep hot (often kick off blankets)',
        weights: { luna: 0, mystic: 0, 'fak-cosmos': 4 },
      },
      {
        id: 'neutral',
        label: "I'm neutral / comfortable",
        weights: { luna: 2, mystic: 1, 'fak-cosmos': 1 },
      },
      {
        id: 'cold',
        label: 'I sleep cold (need extra blankets)',
        weights: { luna: 2, mystic: 1, 'fak-cosmos': 0 },
      },
    ],
  },
  {
    id: 'position',
    question: "What's your primary sleep position?",
    options: [
      {
        id: 'side',
        label: 'Side sleeper',
        weights: { luna: 1, mystic: 2, 'fak-cosmos': 2 },
      },
      {
        id: 'back',
        label: 'Back sleeper',
        weights: { luna: 1, mystic: 1, 'fak-cosmos': 2 },
      },
      {
        id: 'stomach',
        label: 'Stomach sleeper',
        weights: { luna: 2, mystic: 1, 'fak-cosmos': 1 },
      },
      {
        id: 'combination',
        label: 'I move around / combination',
        weights: { luna: 1, mystic: 1, 'fak-cosmos': 2 },
      },
    ],
  },
  {
    id: 'partner',
    question: 'Do you share your bed with a partner?',
    options: [
      {
        id: 'yes-moves',
        label: 'Yes, and they move a lot',
        weights: { luna: 0, mystic: 3, 'fak-cosmos': 1 },
      },
      {
        id: 'yes-still',
        label: 'Yes, but they sleep still',
        weights: { luna: 1, mystic: 1, 'fak-cosmos': 1 },
      },
      {
        id: 'no',
        label: 'No, I sleep alone',
        weights: { luna: 2, mystic: 1, 'fak-cosmos': 1 },
      },
    ],
  },
  {
    id: 'priority',
    question: 'What matters MOST to you in a mattress?',
    options: [
      {
        id: 'cool',
        label: 'Staying cool throughout the night',
        weights: { luna: 0, mystic: 0, 'fak-cosmos': 4 },
      },
      {
        id: 'pain-relief',
        label: 'Relief from aches and pains',
        weights: { luna: 0, mystic: 4, 'fak-cosmos': 0 },
      },
      {
        id: 'value',
        label: 'Great value for the price',
        weights: { luna: 4, mystic: 1, 'fak-cosmos': 0 },
      },
      {
        id: 'comfort',
        label: 'Overall comfort and quality',
        weights: { luna: 1, mystic: 1, 'fak-cosmos': 2 },
      },
    ],
  },
];

export function calculateResult(answers: QuizAnswers): QuizResult {
  const scores: ProductScores = {
    luna: 0,
    mystic: 0,
    'fak-cosmos': 0,
  };

  // Calculate weighted scores for each product
  for (const question of quizQuestions) {
    const answerId = answers[question.id];
    if (!answerId) continue;

    const selectedOption = question.options.find((opt) => opt.id === answerId);
    if (!selectedOption) continue;

    scores.luna += selectedOption.weights.luna;
    scores.mystic += selectedOption.weights.mystic;
    scores['fak-cosmos'] += selectedOption.weights['fak-cosmos'];
  }

  // Find the product with the highest score
  // Tie-breaker favors budget options: Luna > Mystic > FAK Cosmos
  let recommendedProduct: RecommendedProduct = 'luna';
  let highestScore = scores.luna;

  if (scores.mystic > highestScore) {
    recommendedProduct = 'mystic';
    highestScore = scores.mystic;
  }

  if (scores['fak-cosmos'] > highestScore) {
    recommendedProduct = 'fak-cosmos';
  }

  // Return result with personalized messaging
  return {
    product: recommendedProduct,
    scores,
    ...getResultMessaging(recommendedProduct, scores),
  };
}

function getResultMessaging(
  product: RecommendedProduct,
  scores: ProductScores
): { headline: string; reason: string } {
  const messages: Record<RecommendedProduct, { headline: string; reason: string }> = {
    luna: {
      headline: 'Simple Comfort, Exceptional Value',
      reason:
        scores.luna > 10
          ? "You know what you want—quality sleep without overpaying. The Luna delivers exactly that: essential comfort, solid support, and American craftsmanship at an unbeatable price."
          : "Based on your sleep profile, you don't need the bells and whistles. The Luna gives you everything essential for great sleep—comfort, support, and durability—at our best value.",
    },
    mystic: {
      headline: 'Relief and Recovery While You Sleep',
      reason:
        scores.mystic > 12
          ? "Your body deserves extra care. The Mystic's advanced motion-isolating memory foam was designed for sleepers like you—contouring to pressure points and helping you wake up refreshed and pain-free."
          : "The Mystic is your match. Its pressure-relieving memory foam and motion isolation technology will help you get the restorative sleep your body needs.",
    },
    'fak-cosmos': {
      headline: 'Cool, Comfortable Sleep Awaits',
      reason:
        scores['fak-cosmos'] > 12
          ? "Temperature regulation is clearly key to your best sleep. The FAK Cosmos combines gel-infused foam with natural latex to actively dissipate heat—you'll notice the difference from night one."
          : "The FAK Cosmos is perfect for you. With gel cooling technology and premium materials, it delivers the temperature-regulated, luxurious sleep experience you're looking for.",
    },
  };

  return messages[product];
}

export const productDetails: Record<
  RecommendedProduct,
  { name: string; price: number; tagline: string; features: string[] }
> = {
  luna: {
    name: 'Luna',
    price: 648,
    tagline: 'The essentials of comfort and support',
    features: ['3-layer construction', 'CertiPUR-US certified', 'Made in the USA'],
  },
  mystic: {
    name: 'Mystic',
    price: 848,
    tagline: 'Balances affordability and comfort',
    features: ['Motion-isolating core', 'Pressure relief', 'Made in the USA'],
  },
  'fak-cosmos': {
    name: 'FAK Cosmos',
    price: 1348,
    tagline: 'Maximum comfort with premium materials',
    features: ['Gel-infused cooling', 'Natural latex layer', 'Temperature regulation'],
  },
};
