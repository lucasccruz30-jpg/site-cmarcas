import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      aria-label="Fale conosco no WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-lift transition hover:scale-105 hover:bg-[#E67E00]"
      href={siteConfig.whatsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" size={28} />
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 hidden w-max rounded-md bg-brand-ink px-3 py-2 text-xs font-semibold text-white shadow-soft group-hover:block">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}
