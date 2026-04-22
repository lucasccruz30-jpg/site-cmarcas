import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { clientLogos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Empresas que confiam na CMarcas para proteção de marcas, patentes e regularização."
};

export default function ClientesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Clientes" }
        ]}
        subtitle="Marcas e empresas de diferentes segmentos que reconhecem o valor da proteção estratégica."
        title="Empresas que Confiam em Nós"
      />
      <section className="section-shell py-16">
        <SectionHeading
          title="Relacionamentos construídos com confiança"
          description="A CMarcas atende empresas de varejo, indústria, serviços, cosméticos, tecnologia, saúde e outros mercados."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {clientLogos.map((client) => (
            <div
              className="group relative grid min-h-28 place-items-center rounded-lg border border-black/8 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-lift"
              key={client.src}
              title={client.name}
            >
              <div className="relative h-16 w-full">
                <Image
                  alt={client.name}
                  className="object-contain transition group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 180px, (min-width: 768px) 25vw, 50vw"
                  src={client.src}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-brand-paper py-14">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-ink">
              Junte-se a nossos clientes
            </h2>
            <p className="mt-2 text-brand-muted">
              Proteja o que diferencia sua empresa no mercado.
            </p>
          </div>
          <ButtonLink href="/contato">
            Solicitar consulta <ArrowRight aria-hidden="true" size={18} />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
