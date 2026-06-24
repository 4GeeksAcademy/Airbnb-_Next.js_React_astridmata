"use client"; // Necesario para usar hooks (useState, useEffect) en el App Router

import { useState, useEffect } from "react";
import { Listing } from "@/types/listing";
import { listings as mockListings } from "@/data/listings";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import ListingCard from "@/components/ListingCard";

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("Alojamiento");

  useEffect(() => {
    // Simulamos la carga de datos (1 segundo)
    const timer = setTimeout(() => {
      setListings(mockListings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filtramos la lista basándonos en  texto como categoría:
  const filteredListings = listings.filter((item: any) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Lógica inteligente: ¿La categoría seleccionada está en sus servicios o es su categoría base?
    const matchesCategory =
      item.category === category ||
      item.amenities.includes(category);

    return matchesSearch && matchesCategory;
  });
  return (
    <div>
      <Navbar onSearch={setSearchQuery} />
      <CategoryBar onSelect={setCategory} />


    <main className="p-4">
  {isLoading ? (
    <div className="text-white">Cargando...</div>
  ) : (
    // Aquí definimos la cuadrícula una sola vez
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filteredListings.map((item: any) => (
        // Renderizamos el componente una vez por cada item
        <ListingCard key={item.id} listing={item} />
      ))}
    </div>
  )}
</main>
    </div>
  );
}