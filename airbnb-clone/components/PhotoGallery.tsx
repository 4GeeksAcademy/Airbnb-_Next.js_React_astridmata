"use client";
import { useState } from "react";

export default function PhotoGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>No hay imágenes disponibles</div>;
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
      {/* Visualizador de Imagen */}
      <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-white">
        {/* En una app real, aquí usarías un <img src={images[currentIndex]} /> */}
        Imagen {currentIndex + 1} de {images.length}
      </div>

      {/* Botones de Navegación */}
      <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        ←
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        →
      </button>
      
      {/* Indicador de posición */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}