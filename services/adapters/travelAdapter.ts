import type { TravelOption, DomainSearchResult } from "./types.js";

function buildTravel(
  id: string,
  name: string,
  classLabel: string,
  departure: string,
  arrival: string,
  price: string,
  rating: number,
  bestValue: boolean,
  seats?: string
): TravelOption {
  return {
    id,
    name,
    class: classLabel,
    departure,
    arrival,
    price,
    originalPrice: "MRP",
    rating,
    seats,
    bestValue,
  };
}

export function searchTravel(
  query: string,
  _constraints: { location?: string }
): DomainSearchResult<TravelOption> {
  const primary = buildTravel(
    "t1",
    "Zingbus plus",
    "2A | 2hrs",
    "4:30 PM",
    "5:55 AM",
    "₹2,890",
    4.6,
    true,
    "Get 15% off with Snapdeal + 10% off with Pay app"
  );
  const alternatives: TravelOption[] = [
    buildTravel("t2", "Zingbus Elite", "2A | 2hrs", "7:30 PM", "5:05 AM", "₹2,250", 3.9, false, "Get 10% off with Snapdeal + 10% off with Pay app"),
    buildTravel("t3", "Zingbus Comfort+", "3hrs 10min", "1:10 PM", "9:05 AM", "₹2,500", 3.3, false),
  ];
  return { primary, alternatives };
}
