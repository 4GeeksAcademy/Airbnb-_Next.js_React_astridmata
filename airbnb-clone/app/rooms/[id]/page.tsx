"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// Asumiendo que tienes una función para buscar por ID
import { getListingById } from "@/data/listings";
import PhotoGallery from "@/components/PhotoGallery";
import BookingCard from "@/components/BookingCard";
import HostInfo from "@/components/HostInfo";
import AmenitiesSection from "@/components/AmenitiesSection";

export default function RoomDetail() {
    const { id } = useParams();
    const [listing, setListing] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulamos carga de datos
        setTimeout(() => {
            const data = getListingById(id as string);
            setListing(data);
            setIsLoading(false);
        }, 1000);
    }, [id]);

    if (isLoading) return <div>Cargando detalle...</div>;
    if (!listing) return <div>Habitación no encontrada</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* 1. Título principal fuera del grid */}
            <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
            <div className="flex items-center gap-2 text-sm text-zinc-600 mb-6">
                <span className="font-bold text-white flex items-center gap-1">
                    ★ {listing.rating}
                </span>
                <span>·</span>
                <span className="underline font-medium text-zinc-300">128 reseñas</span> {/* Puedes añadir un campo 'reviewsCount' a tus datos luego */}
                <span>·</span>
                <span className="font-medium underline text-zinc-300">{listing.location}</span>
            </div>

            {/* 2. Galería única */}
            <PhotoGallery images={listing.images} />

            {/* 3. Grid de detalles */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
                <div className="lg:col-span-2">
                    {/* Aquí la info del anfitrión y descripción */}
                    <HostInfo name={listing.hostName} years={listing.hostYears} />
                    <h3 className="font-bold text-xl mt-8 mb-4">Acerca de este lugar</h3>
                    <p className="text-zinc-700">{listing.description}</p>
                    <AmenitiesSection amenities={listing.amenities} />



                </div>

                <div className="lg:col-span-1">
                    <BookingCard pricePerNight={listing.pricePerNight} />
                </div>
            </div>
        </div>
    );
}