// types/listing.ts

export interface Listing {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  rating: number;
  location: string;
  category: string;
  imageUrl: string;
  hostName: string;
  hostYears: number;
  amenities: string[];
}