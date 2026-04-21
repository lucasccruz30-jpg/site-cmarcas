import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, serviceLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.25fr]">
        <div>
          <Image
            alt="CMarcas"
            className="mb-5 h-auto w-44 rounded bg-white p-2"
            height={77}
            src="/images/logo-cmarcas.jpg"
            width={395}
          />
          <p className="text-sm text-white/72">
            Proteção de marcas, patentes, direitos autorais, produtos regulados e consultoria
            jurídica com acompanhamento especializado.
          </p>
          <div className="mt-5 flex gap-3 text-sm">
            <a className="rounded-md border border-white/15 px-3 py-2 hover:border-brand-orange hover:text-brand-orangeSoft" href="#">
              LinkedIn
            </a>
            <a className="rounded-md border border-white/15 px-3 py-2 hover:border-brand-orange hover:text-brand-orangeSoft" href="#">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-orangeSoft">
            Serviços
          </h2>
          <ul className="grid gap-3 text-sm text-white/72">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-orangeSoft">
            Links rápidos
          </h2>
          <ul className="grid gap-3 text-sm text-white/72">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-orangeSoft">
            Contato
          </h2>
          <ul className="grid gap-4 text-sm text-white/72">
            <li className="flex gap-3">
              <Phone className="mt-1 shrink-0 text-brand-orangeSoft" size={18} />
              <span>{siteConfig.phone} | {siteConfig.whatsapp}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 shrink-0 text-brand-orangeSoft" size={18} />
              <span>{siteConfig.email}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-brand-orangeSoft" size={18} />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CMarcas. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link className="hover:text-white" href="/politica-de-privacidade">
              Política de Privacidade
            </Link>
            <Link className="hover:text-white" href="/termos-de-uso">
              Termos de Uso
            </Link>
            <a className="inline-flex items-center gap-1 hover:text-white" href="#top">
              Voltar ao topo <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
