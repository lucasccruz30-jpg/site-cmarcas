import Image from "next/image";
import { clientLogos } from "@/lib/content";

export function LogoTicker() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <div className="logo-ticker overflow-hidden">
      <div className="logo-track flex w-max gap-4 py-2">
        {doubled.map((client, index) => (
          <div
            className="relative flex h-20 w-44 shrink-0 items-center justify-center rounded-lg border border-black/8 bg-white p-4 shadow-soft transition hover:scale-105 hover:border-brand-orange"
            key={`${client.src}-${index}`}
            title={client.name}
          >
            <Image
              alt={client.name}
              className="object-contain"
              fill
              sizes="176px"
              src={client.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
