# Airbnb Clone Project Context

## Descripción del Proyecto
Esta aplicación es un clon de la plataforma de alquiler vacacional Airbnb. El objetivo es validar la arquitectura de componentes mediante la construcción de tres vistas clave:

1. **Home (/):** Página de inicio que presenta una barra de búsqueda, una barra de categorías filtrables y una cuadrícula de tarjetas de alojamiento.
2. **Catálogo (/catalog):** Página de resultados de búsqueda que permite ordenar alojamientos por precio y visualizar ubicaciones en un área de mapa.
3. **Detalle de habitación (/rooms/[id]):** Vista individual de un alojamiento que incluye una galería de fotos, información del anfitrión, detalles de servicios (amenities) y una tarjeta de reserva funcional.

## Usuario
El usuario es un viajero que busca experiencias de alojamiento únicas y cómodas. Su objetivo principal es encontrar un lugar que se ajuste a sus preferencias (ubicación, precio, servicios) de manera intuitiva y rápida, permitiéndole comparar opciones y tomar una decisión de reserva informada.

## Componentes Principales
* **Layout:**
    * `Navbar`: Barra de navegación con logo, buscador y menú de usuario.
* **Home:**
    * `CategoryBar`: Fila horizontal de filtros por categoría.
    * `ListingCard`: Tarjeta reutilizable con foto, título, precio y rating.
* **Catalog:**
    * `ResultsHeader`: Contador de resultados y selector de ordenamiento.
    * `MapPlaceholder`: Área para la visualización geográfica.
* **Rooms/[id]:**
    * `PhotoGallery`: Carrusel de imágenes con navegación.
    * `BookingCard`: Tarjeta interactiva con contador de huéspedes y botón de reserva.
    * `AmenitiesSection`: Cuadrícula con iconos y etiquetas de servicios.