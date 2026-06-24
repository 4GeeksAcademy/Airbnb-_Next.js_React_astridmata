import { FaWifi, FaUtensils, FaUmbrellaBeach, FaDumbbell, FaConciergeBell } from "react-icons/fa";

export default function AmenitiesSection({ amenities }: { amenities: string[] }) {
  // Diccionario para asignar iconos
  const iconMap: { [key: string]: JSX.Element } = {
    "Wifi": <FaWifi />,
    "Cocina": <FaUtensils />,
    "Playa": <FaUmbrellaBeach />,
    "Gimnasio": <FaDumbbell />,
    "Restaurante": <FaConciergeBell />,
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-6">Lo que ofrece este lugar</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-3 text-zinc-300">
            {/* Si el icono existe en el mapa lo muestra, si no, usa uno por defecto */}
            <span className="text-xl text-zinc-500">
              {iconMap[amenity] || <FaConciergeBell />}
            </span>
            <span className="text-base">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}