import Image from "next/image";
import { clientLogos } from "@/lib/content";

export function LogoTicker() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <div className="logo-ticker overflow-hidden">
      <div className="logo-track flex w-max gap-4 py-2">
        {doubled.map((client, index) => (
          <div
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-lg border border-black/8 bg-white px-5 py-4 shadow-soft transition hover:scale-105 hover:border-brand-orange"
            key={`${client.src}-${index}`}
            title={client.name}
          >
            <Image
              alt=""
              aria-label={client.name}
              className="h-12 w-full object-contain"
              height={64}
              src={client.src}
              unoptimized
              width={160}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
