import { clients } from "@/lib/content";

export function LogoTicker() {
  const doubled = [...clients, ...clients];

  return (
    <div className="logo-ticker overflow-hidden">
      <div className="logo-track flex w-max gap-4 py-2">
        {doubled.map((client, index) => (
          <div
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-lg border border-black/8 bg-white px-4 text-center text-sm font-bold text-brand-graphite shadow-soft transition hover:scale-105 hover:border-brand-orange hover:text-brand-orange"
            key={`${client}-${index}`}
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  );
}
