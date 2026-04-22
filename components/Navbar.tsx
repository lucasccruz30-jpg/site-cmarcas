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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white shadow-[0_3px_24px_rgba(0,0,0,0.05)]">
      <div className="bg-brand-orange">
        <div className="mx-auto flex w-full max-w-[1520px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-2 sm:px-10 md:justify-start">
          <a
            className="inline-flex items-center gap-2 text-xs font-semibold leading-none text-white/90 transition hover:text-white"
            href={siteConfig.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" size={14} />
            {siteConfig.whatsapp}
          </a>
          <a
            className="inline-flex items-center gap-2 text-xs font-semibold leading-none text-white/90 transition hover:text-white"
            href="tel:+551133135367"
          >
            <Phone aria-hidden="true" size={14} />
            {siteConfig.phone}
          </a>
          <a
            className="inline-flex items-center gap-2 text-xs font-semibold leading-none text-white/90 transition hover:text-white"
            href={`mailto:${siteConfig.email}`}
          >
            <Mail aria-hidden="true" size={14} />
            {siteConfig.email}
          </a>
        </div>
      </div>
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        <Link aria-label="CMarcas - página inicial" className="shrink-0" href="/">
          <Image
            alt="CMarcas - Patentes e Registro MS"
            className="h-auto w-[210px]"
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
                        scroll={true}
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
