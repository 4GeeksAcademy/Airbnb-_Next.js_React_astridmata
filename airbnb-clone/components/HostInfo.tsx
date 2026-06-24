// components/HostInfo.tsx
export default function HostInfo({ name, years }: { name: string, years: number }) {
  return (
    <div className="flex items-center gap-4 py-8 border-y border-zinc-200">
      <div className="w-12 h-12 rounded-full bg-zinc-300 flex items-center justify-center font-bold">
        {name[0]}
      </div>
      <div>
        <h3 className="font-bold text-lg">Anfitrión: {name}</h3>
        <p className="text-zinc-500">{years} años siendo anfitrión</p>
      </div>
    </div>
  );
}