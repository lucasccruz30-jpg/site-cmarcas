import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a CMarcas para registros de marcas, patentes, direitos autorais, ANVISA e assessoria jurídica."
};

const contactItems = [
  { label: "Telefone", value: siteConfig.phone, icon: Phone, href: "tel:+551133135367" },
  { label: "WhatsApp", value: siteConfig.whatsapp, icon: MessageCircle, href: siteConfig.whatsappUrl },
  { label: "Email", value: siteConfig.email, icon: Mail, href: `mailto:${siteConfig.email}` },
  { label: "Horário", value: siteConfig.hours, icon: Clock }
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contato" }
        ]}
        subtitle="Estamos aqui para ajudar. Envie sua mensagem e responderemos em breve."
        title="Entre em Contato"
      />

      <section className="bg-brand-paper py-16">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Atendimento especializado"
            title="Conte o que você precisa proteger ou regularizar"
            description="O formulário passa por validação em tempo real e envia sua solicitação para triagem da equipe."
          />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactForm />
            <aside className="grid gap-6">
              <div className="rounded-lg bg-white p-6 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-brand-ink">Informações</h2>
                <div className="mt-5 grid gap-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex gap-3 rounded-lg border border-black/8 p-4 transition hover:border-brand-orange">
                        <Icon className="mt-1 shrink-0 text-brand-orange" size={22} />
                        <div>
                          <p className="text-sm font-bold text-brand-ink">{item.label}</p>
                          <p className="text-sm text-brand-muted">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a href={item.href} key={item.label} rel="noreferrer" target={item.href.startsWith("http") ? "_blank" : undefined}>
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-soft">
                <div className="mb-4 flex gap-3">
                  <MapPin className="mt-1 shrink-0 text-brand-orange" size={24} />
                  <div>
                    <h2 className="font-display text-2xl font-bold text-brand-ink">Endereço</h2>
                    <p className="mt-2 text-sm text-brand-muted">{siteConfig.address}</p>
                  </div>
                </div>
                <iframe
                  aria-label="Mapa da CMarcas"
                  className="h-72 w-full rounded-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={siteConfig.mapEmbed}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
