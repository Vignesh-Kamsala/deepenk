import type { HotelOption, DomainSearchResult } from "./types.js";

const BASE_IMAGE = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop";

function buildHotel(
  id: string,
  name: string,
  price: string,
  overrides: Partial<HotelOption> = {}
): HotelOption {
  return {
    id,
    name,
    price,
    rating: "4.8",
    image: BASE_IMAGE,
    ...overrides,
  };
}

export function searchHotels(
  query: string,
  constraints: { priceMax?: number; location?: string }
): DomainSearchResult<HotelOption> {
  const primary = buildHotel("h1", "Seaview Grand Hotel", "₹499/night", {
    badge: "Best Choice",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Free Cancellation"],
    features: [
      "Excellent guest reviews",
      "Prime beachfront location",
      "Modern amenities & comfort",
      "All discounts & deals applied by Deepenk",
    ],
  });

  const alternatives: HotelOption[] = [
    buildHotel("h2", "City Comfort Inn", "₹899-₹1120", { category: "Budget-friendly" }),
    buildHotel("h3", "Grand Palace Hotel", "₹999-₹1500", { category: "Premium" }),
    buildHotel("h4", "Cozy Stay Suites", "₹750-₹1000", { category: "Family-friendly" }),
  ];

  return { primary, alternatives };
}
