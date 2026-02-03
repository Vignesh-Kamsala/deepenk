export const AI_INSIGHTS_SCHEMA = {
  aiSummary: "",
  whyBestChoice: "",
  bundleSuggestions: [] as string[],
  offers: [] as string[],
  paymentSuggestions: [] as { name: string; offer: string }[],
  confidenceScore: 0,
} as const;

export type AIInsights = {
  aiSummary: string;
  whyBestChoice: string;
  bundleSuggestions: string[];
  offers: string[];
  paymentSuggestions: Array<{ name: string; offer: string }>;
  confidenceScore: number;
};

export type ParsedIntent = {
  category: "shopping" | "food" | "rides" | "travel" | "hotels";
  query: string;
  constraints: {
    priceMax?: number;
    priceMin?: number;
    location?: string;
    preferences?: string[];
  };
};
