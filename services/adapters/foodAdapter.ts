import type { FoodItem, DomainSearchResult } from "./types.js";

const BASE_IMAGE = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop";

function buildDish(
  id: string,
  name: string,
  price: string,
  platform: string,
  overrides: Partial<FoodItem> = {}
): FoodItem {
  return {
    id,
    name,
    price,
    rating: "4.8",
    platform,
    image: BASE_IMAGE,
    ...overrides,
  };
}

export function searchFood(
  query: string,
  constraints: { priceMax?: number }
): DomainSearchResult<FoodItem> {
  const priceMax = constraints.priceMax ?? 500;
  const primary = buildDish("f1", "Dum Biryani", "₹269", "Swiggy", {
    badge: "BEST VALUE",
    description: "Dum style, rich spices, royal taste",
    originalPrice: "₹299",
  });

  const alternatives: FoodItem[] = [
    buildDish("f2", "Lucknowi Biryani", "₹200", "Swiggy", {
      restaurant: "Paradise Resto",
      originalPrice: "₹300",
      discount: "30% off",
      reviews: "5",
    }),
    buildDish("f3", "Hyderabadi Biryani", "₹280", "Swiggy", {
      restaurant: "Paradise Resto",
      originalPrice: "₹400",
      discount: "30% off",
      reviews: "5",
    }),
    buildDish("f4", "Chicken Biryani", "₹250", "Zomato", {
      restaurant: "Biryani House",
      originalPrice: "₹350",
      discount: "28% off",
      reviews: "12",
    }),
  ].filter((p) => {
    const num = parseInt(p.price.replace(/[^0-9]/g, ""), 10);
    return !constraints.priceMax || num <= constraints.priceMax * 1.2;
  });

  return { primary, alternatives: alternatives.slice(0, 3) };
}
