"use client";
import { useState } from "react";
import { listings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedListings = [...listings].sort((a, b) => {
    return sortOrder === 'asc' 
      ? a.pricePerNight - b.pricePerNight 
      : b.pricePerNight - a.pricePerNight;
  });

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Alojamientos encontrados: {sortedListings.length}</h1>
          <select onChange={(e) => setSortOrder(e.target.value as any)} className="border p-2 rounded">
            <option value="asc">Precio más bajo</option>
            <option value="desc">Precio más alto</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedListings.map((item) => (
            <ListingCard key={item.id} listing={item} />
          ))}
        </div>
      </main>

      <aside className="hidden md:block w-1/3 sticky top-20 h-[80vh] bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
        Mapa
      </aside>
    </div>
  );
}