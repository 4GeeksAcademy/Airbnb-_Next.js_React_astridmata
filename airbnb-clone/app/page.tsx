"use client"; // Necesario para usar hooks (useState, useEffect) en el App Router

import { useState, useEffect } from "react";
import { Listing } from "@/types/listing";
import { listings as mockListings } from "@/data/listings";

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos la carga de datos (1 segundo)
    const timer = setTimeout(() => {
      setListings(mockListings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Aquí luego añadirás <Navbar /> y <CategoryBar /> */}

      <main className="p-4">
        {isLoading ? (
          <div className="text-center mt-10">Cargando alojamientos...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {listings.map((item) => (
              <div key={item.id} className="border border-zinc-200 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <h2 className="font-semibold text-zinc-900">{item.title}</h2>
                <p className="text-zinc-500 text-sm mt-1">${item.pricePerNight} / noche</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}