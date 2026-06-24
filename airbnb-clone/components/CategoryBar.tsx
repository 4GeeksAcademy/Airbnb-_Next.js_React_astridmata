// components/CategoryBar.tsx
import { useState } from "react";

const categories = ["Alojamiento", "Experiencias", "Servicios", "Mansiones", "Playa", "Cabañas"];

export default function CategoryBar({ onSelect }: { onSelect: (category: string) => void }) {
    const [active, setActive] = useState("Alojamiento");

    const handleClick = (category: string) => {
        setActive(category);
        onSelect(category);
    };

    return (
        <div className="flex gap-6 overflow-x-auto p-4 border-b scrollbar-hide">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleClick(cat)}
                    className={`flex flex-col items-center min-w-max pb-2 border-b-2 transition
      ${active === cat
                            ? "border-white text-white font-bold" // Contraste alto: blanco sobre negro
                            : "border-transparent text-zinc-500 hover:text-zinc-300"}
    `}
                >
                    <span className="text-sm">{cat}</span>
                </button>
            ))}
        </div>
    );
}