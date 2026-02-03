import { searchShopping } from "./shoppingAdapter.js";
import { searchFood } from "./foodAdapter.js";
import { searchRides } from "./ridesAdapter.js";
import { searchTravel } from "./travelAdapter.js";
import { searchHotels } from "./hotelsAdapter.js";
import type { ParsedIntent } from "../ai/types.js";
import type { DomainSearchResult } from "./types.js";
import type { ShoppingProduct, FoodItem, RideOption, TravelOption, HotelOption } from "./types.js";

export type AdapterResult =
  | DomainSearchResult<ShoppingProduct>
  | DomainSearchResult<FoodItem>
  | DomainSearchResult<RideOption>
  | DomainSearchResult<TravelOption>
  | DomainSearchResult<HotelOption>;

export function runAdapter(intent: ParsedIntent): AdapterResult {
  const { category, query, constraints } = intent;
  switch (category) {
    case "shopping":
      return searchShopping(query, { priceMax: constraints.priceMax });
    case "food":
      return searchFood(query, { priceMax: constraints.priceMax });
    case "rides":
      return searchRides(query, { location: constraints.location });
    case "travel":
      return searchTravel(query, { location: constraints.location });
    case "hotels":
      return searchHotels(query, { priceMax: constraints.priceMax, location: constraints.location });
    default:
      return searchShopping(query, { priceMax: constraints.priceMax });
  }
}

export { searchShopping, searchFood, searchRides, searchTravel, searchHotels };
export * from "./types.js";
