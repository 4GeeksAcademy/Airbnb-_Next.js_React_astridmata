// data/listings.ts
import { Listing } from "../types/listing";

export const listings: Listing[] = [
  {
    id: "1",
    title: "Exclusivo Apto tipo estudio con Playa Privada! 4P",
    description: "Un espacio increíble frente al mar con todas las comodidades para una estancia relajante.",
    pricePerNight: 92,
    rating: 4.95,
    location: "Lechería, Venezuela",
    category: "Alojamiento",
    images: ["/placeholder1.jpg", "/beach1.jpg", "/beach2.jpg"], 
    hostName: "Salvador",
    hostYears: 1,
    amenities: ["Wifi", "Cocina", "Playa"],
  },
  {
    id: "2",
    title: "Hotel Suites Feria de Madrid",
    description: "Elegancia y comodidad en el corazón de Madrid.",
    pricePerNight: 215,
    rating: 4.83,
    location: "Madrid, España",
    category: "Alojamiento",
    images: ["/placeholder2.jpg", "/room1.jpg", "/room2.jpg"],
    hostName: "Equipo Sercotel",
    hostYears: 5,
    amenities: ["Gimnasio", "Restaurante", "Wifi"],
  }
];

export const getListingById = (id: string) => {
  return listings.find((listing) => listing.id === id);
};