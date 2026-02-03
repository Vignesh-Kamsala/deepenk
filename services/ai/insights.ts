import type { AIInsights } from "./types.js";

type DomainResult = {
  primary: unknown;
  alternatives: unknown[];
  category: string;
};

const PAYMENT_TEMPLATES = [
  { name: "Paytm UPI", offer: "Get 20% cashback (₹40)" },
  { name: "PhonePe UPI", offer: "Scratch card rewards" },
  { name: "Google Pay", offer: "Instant ₹25 off" },
];

const OFFER_TEMPLATES = [
  "New-user coupon DE****6 applied",
  "SBI Credit Card applied",
  "Delivery fee waived",
];

export function generateInsights(
  category: string,
  _query: string,
  result: DomainResult
): AIInsights {
  const primary = result.primary as Record<string, unknown>;
  const name = (primary?.name ?? primary?.title ?? "This option") as string;
  const price = (primary?.price ?? primary?.priceDisplay ?? "best value") as string;

  let aiSummary = `Best match for your search: ${name} at ${price}. We compared options across platforms and applied available offers.`;
  let whyBestChoice = "Best balance of price, quality, and availability for your criteria.";

  if (category === "shopping") {
    aiSummary = `${name} offers the best value in this range. Strong ratings and current discounts make it our top pick.`;
    whyBestChoice = "Best balance of specs, price, and platform deals.";
  } else if (category === "food") {
    aiSummary = `Top pick: ${name}. Highly rated and fits your budget with applied coupons.`;
    whyBestChoice = "Best combination of taste ratings, price, and delivery options.";
  } else if (category === "rides") {
    aiSummary = `Recommended ride: ${name}. Best ETA and fare for your route.`;
    whyBestChoice = "Best ETA and fare with offers applied.";
  } else if (category === "travel") {
    aiSummary = `Best option: ${name} at ${price}. Good schedule and comfort for the price.`;
    whyBestChoice = "Best schedule, comfort, and price with deals applied.";
  } else if (category === "hotels") {
    aiSummary = `${name} at ${price}/night offers the best value for your stay.`;
    whyBestChoice = "Best location, reviews, and price with free cancellation.";
  }

  const bundleSuggestions =
    category === "food"
      ? [
          "1) Combo + Cool Drink + Dessert → Save ₹50",
          "2) Combo + 1 Starter → Best for 2 people",
        ]
      : category === "shopping"
        ? ["Screen + Keyboard Protector Set – 20% off when bought together"]
        : [];

  return {
    aiSummary,
    whyBestChoice,
    bundleSuggestions,
    offers: OFFER_TEMPLATES,
    paymentSuggestions: PAYMENT_TEMPLATES,
    confidenceScore: 0.85,
  };
}
