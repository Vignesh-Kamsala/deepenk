import type { ShoppingProduct, DomainSearchResult } from "./types.js";

const BASE_IMAGE = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop";

function buildProduct(
  id: string,
  name: string,
  price: string,
  platform: string,
  overrides: Partial<ShoppingProduct> = {}
): ShoppingProduct {
  return {
    id,
    name,
    price,
    rating: "4.5",
    platform,
    image: BASE_IMAGE,
    ...overrides,
  };
}

export function searchShopping(
  query: string,
  constraints: { priceMax?: number }
): DomainSearchResult<ShoppingProduct> {
  const priceMax = constraints.priceMax ?? 50000;
  const primary = buildProduct(
    "p1",
    "Apple Mac M3 Pro",
    `₹${Math.min(129999, priceMax + 10000).toLocaleString("en-IN")}`,
    "Amazon",
    { badge: "BEST VALUE", seller: "Lotus Palace" }
  );

  const alternatives: ShoppingProduct[] = [
    buildProduct("a1", "ASUS Vivobook 15", "₹40,190", "Flipkart", {
      originalPrice: "₹54,990",
      discount: "28% off",
      specs: "(16 GB/512 G SSD/Windows 11 Home)",
      features: ["Intel Core i7 Processor (13th Gen)", "16 GB DDR4 RAM", "Windows 11 Operating System"],
    }),
    buildProduct("a2", "Samsung Galaxy Book4", "₹40,190", "Flipkart", {
      originalPrice: "₹54,990",
      discount: "28% off",
      specs: "(8 GB/512 GB SSD/Windows 11 Home)",
      features: ["Intel Core i5 Processor (13th Gen)", "8 GB DDR4 RAM", "Windows 11 Operating System"],
    }),
    buildProduct("a3", "ASUS Vivobook S16 OLED", "₹40,190", "Flipkart", {
      originalPrice: "₹54,990",
      discount: "28% off",
      specs: "(16 GB/512 GB SSD/Windows 11 Home)",
      features: ["Qualcomm Snapdragon 8", "16 GB DDR4 RAM", "Windows 11 Operating System"],
    }),
  ].filter((p) => {
    const num = parseInt(p.price.replace(/[^0-9]/g, ""), 10);
    return !constraints.priceMax || num <= constraints.priceMax * 1.2;
  });

  return { primary, alternatives: alternatives.slice(0, 3) };
}
