"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { navLinks, serviceLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-[0_3px_24px_rgba(0,0,0,0.05)] backdrop-blur">
      <div className="h-2 bg-brand-orange" />
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto flex w-full max-w-[1520px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-3 sm:px-10 md:justify-start">
          <a
            className="inline-flex items-center gap-3 text-sm font-bold text-brand-ink transition hover:text-brand-orange md:text-base"
            href={siteConfig.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange text-brand-ink">
              <MessageCircle aria-hidden="true" size={17} />
            </span>
            {siteConfig.whatsapp}
          </a>
          <a
            className="inline-flex items-center gap-3 text-sm font-bold text-brand-ink transition hover:text-brand-orange md:text-base"
            href="tel:+551133135367"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange text-brand-ink">
              <Phone aria-hidden="true" size={17} />
            </span>
            {siteConfig.phone}
          </a>
          <a
            className="inline-flex items-center gap-3 text-sm font-bold text-brand-ink transition hover:text-brand-orange md:text-base"
            href={`mailto:${siteConfig.email}`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange text-brand-ink">
              <Mail aria-hidden="true" size={17} />
            </span>
            {siteConfig.email}
          </a>
        </div>
      </div>
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        <Link aria-label="CMarcas - página inicial" className="shrink-0" href="/">
          <Image
            alt="CMarcas - Patentes e Registro MS"
            className="h-auto w-[174px]"
            height={77}
            priority
            src="/images/logo-cmarcas.jpg"
            width={395}
          />
        </Link>

        <nav aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            if (link.label === "Serviços") {
              return (
                <div className="group relative" key={link.label}>
                  <Link
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-brand-graphite transition hover:text-brand-orange",
                      pathname.startsWith("/servicos") && "text-brand-orange"
                    )}
                    href={link.href}
                  >
                    Serviços <ChevronDown aria-hidden="true" size={16} />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-lg border border-black/8 bg-white p-2 opacity-0 shadow-lift transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {serviceLinks.map((service) => (
                      <Link
                        className="block rounded-md px-4 py-3 text-sm font-medium text-brand-graphite transition hover:bg-brand-paper hover:text-brand-orange"
                        href={service.href}
                        key={service.href}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold text-brand-graphite transition hover:text-brand-orange",
                  pathname === link.href && "text-brand-orange"
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10 text-brand-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="section-shell grid gap-1 py-4" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <Link
                className="rounded-md px-3 py-3 text-sm font-semibold text-brand-graphite hover:bg-brand-paper hover:text-brand-orange"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-1 border-t border-black/5 pt-2">
              {serviceLinks.map((service) => (
                <Link
                  className="rounded-md px-3 py-2 text-sm text-brand-muted hover:bg-brand-paper hover:text-brand-orange"
                  href={service.href}
                  key={service.href}
                  onClick={() => setOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
