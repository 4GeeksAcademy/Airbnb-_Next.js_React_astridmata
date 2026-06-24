"use client";
import { useState } from "react";

export default function BookingCard({ pricePerNight }: { pricePerNight: number }) {
  const [guests, setGuests] = useState(1);

  // Lógica para aumentar/disminuir huéspedes
  const increment = () => setGuests((prev) => Math.min(10, prev + 1));
  const decrement = () => setGuests((prev) => Math.max(1, prev - 1));

  return (
    <div className="border border-zinc-700 rounded-xl p-6 shadow-xl bg-black text-white w-full max-w-sm">
      {/* Precio */}
      <div className="text-2xl font-bold mb-6">
        ${pricePerNight} 
        <span className="text-sm font-normal text-zinc-400 ml-1">noche</span>
      </div>

      {/* Selector de Huéspedes */}
      <div className="mb-6 p-3 border border-zinc-600 rounded-lg">
        <label className="block text-xs font-bold uppercase mb-1 text-zinc-400">Huéspedes</label>
        <div className="flex items-center justify-between">
          <span className="text-base">{guests} {guests === 1 ? "huésped" : "huéspedes"}</span>
          <div className="flex gap-3">
            <button 
              onClick={decrement}
              className="w-8 h-8 rounded-full border border-zinc-500 hover:bg-zinc-800 transition"
            >-</button>
            <button 
              onClick={increment}
              className="w-8 h-8 rounded-full border border-zinc-500 hover:bg-zinc-800 transition"
            >+</button>
          </div>
        </div>
      </div>

      {/* Botón CTA */}
      <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-bold transition">
        Reservar
      </button>

      {/* Footer del componente */}
      <p className="text-center text-zinc-500 text-sm mt-4">No se hará ningún cargo todavía</p>
    </div>
  );
}