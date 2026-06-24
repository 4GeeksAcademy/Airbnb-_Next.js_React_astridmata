// components/Navbar.tsx
export default function Navbar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <nav className="border-b p-4 flex items-center justify-between sticky top-0 bg-white z-10">
      <div className="font-bold text-rose-500 text-xl">airbnb</div>
      <input 
        type="text" 
        placeholder="Empieza tu búsqueda" 
        className="border rounded-full py-2 px-4 shadow-sm w-1/2"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="text-sm font-semibold">Menú</div>
    </nav>
  );
}