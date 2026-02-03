import type { ParsedIntent } from "./types.js";

const CATEGORY_KEYWORDS: Record<ParsedIntent["category"], string[]> = {
  shopping: ["mobile", "laptop", "buy", "price", "under", "rs", "₹", "amazon", "flipkart", "product", "phone", "tv", "fashion", "beauty"],
  food: ["food", "eat", "order", "biryani", "burger", "pizza", "restaurant", "delivery", "swiggy", "zomato", "meal", "dish"],
  rides: ["ride", "cab", "ola", "uber", "rapido", "pickup", "drop", "from", "to", "book a ride"],
  travel: ["bus", "train", "flight", "ticket", "travel", "redbus", "irctc", "bangalore", "hyderabad", "mumbai", "journey"],
  hotels: ["hotel", "stay", "room", "oyo", "booking", "beach", "near", "night", "check-in", "check-out"],
};

function normalizeQuery(q: string): string {
  return q.toLowerCase().trim().replace(/\s+/g, " ");
}

function extractPriceMax(query: string): number | undefined {
  const match = query.match(/(?:under|below|max|upto)\s*(?:rs\.?|₹|inr)?\s*(\d+(?:,\d+)*(?:k|K)?)/i)
    ?? query.match(/(\d+(?:,\d+)*(?:k|K)?)\s*(?:rs|inr|₹)/i);
  if (!match) return undefined;
  let val = match[1].replace(/,/g, "").toLowerCase();
  const mult = val.endsWith("k") ? 1000 : 1;
  if (val.endsWith("k")) val = val.slice(0, -1);
  const num = parseInt(val, 10);
  return Number.isNaN(num) ? undefined : num * mult;
}

function detectCategory(query: string): ParsedIntent["category"] {
  const n = normalizeQuery(query);
  let best: ParsedIntent["category"] = "shopping";
  let bestScore = 0;
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0;
    for (const kw of keywords) {
      if (n.includes(kw)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = cat as ParsedIntent["category"];
    }
  }
  return best;
}

export function parseIntent(query: string): ParsedIntent {
  const category = detectCategory(query);
  const priceMax = extractPriceMax(query);
  const locationMatch = query.match(/(?:near|in|at|from|to)\s+([a-zA-Z\s]+?)(?:\s+(?:under|below|rs|₹|\d)|$)/i);
  const location = locationMatch ? locationMatch[1].trim() : undefined;
  return {
    category,
    query: normalizeQuery(query),
    constraints: {
      priceMax,
      location: location || undefined,
    },
  };
}
