// components/ListingCard.tsx
import { Listing } from "@/types/listing";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square w-full relative overflow-hidden rounded-xl bg-zinc-800 mb-2">
        {/* Placeholder de imagen */}
        <div className="w-full h-full flex items-center justify-center text-zinc-500">
          Imagen
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-white">{listing.title}</h2>
          <p className="text-zinc-400 text-sm">{listing.location}</p>
        </div>
        <div className="flex items-center gap-1 text-white">
          <span>★</span>
          <span className="text-sm">{listing.rating}</span>
        </div>
      </div>
      <p className="text-white font-medium mt-1">${listing.pricePerNight} <span className="font-normal text-zinc-400">noche</span></p>
    </div>
  );
}