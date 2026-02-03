import type { RideOption, DomainSearchResult } from "./types.js";

function buildRide(id: string, name: string, type: string, eta: string, fare: string, platform: string): RideOption {
  return { id, name, type, eta, fare, platform };
}

export function searchRides(
  query: string,
  _constraints: { location?: string }
): DomainSearchResult<RideOption> {
  const primary = buildRide("r1", "Ola Sedan", "Car", "5 min", "₹185", "Ola");
  const alternatives: RideOption[] = [
    buildRide("r2", "Uber Go", "Car", "7 min", "₹192", "Uber"),
    buildRide("r3", "Rapido Bike", "Bike", "3 min", "₹95", "Rapido"),
    buildRide("r4", "Ola Auto", "Auto", "4 min", "₹120", "Ola"),
  ];
  return { primary, alternatives };
}
