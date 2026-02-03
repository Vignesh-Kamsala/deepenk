export type ShoppingProduct = {
  id: string;
  name: string;
  seller?: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: string;
  platform: string;
  image: string;
  badge?: string;
  specs?: string;
  features?: string[];
};

export type FoodItem = {
  id: string;
  name: string;
  restaurant?: string;
  description?: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: string;
  reviews?: string;
  platform: string;
  image: string;
  badge?: string;
};

export type RideOption = {
  id: string;
  name: string;
  type: string;
  eta: string;
  fare: string;
  platform: string;
};

export type TravelOption = {
  id: string;
  name: string;
  class: string;
  departure: string;
  arrival: string;
  price: string;
  originalPrice?: string;
  rating: number;
  seats?: string;
  bestValue: boolean;
};

export type HotelOption = {
  id: string;
  name: string;
  price: string;
  rating: string;
  image: string;
  badge?: string;
  amenities?: string[];
  features?: string[];
  category?: string;
};

export type DomainSearchResult<T> = {
  primary: T;
  alternatives: T[];
};
