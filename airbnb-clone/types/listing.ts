// types/listing.ts

export interface Listing {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  rating: number;
  location: string;
  category: string;
  images: string[];
  hostName: string;
  hostYears: number;
  amenities: string[];
}