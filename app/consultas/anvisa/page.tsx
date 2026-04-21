import type { Metadata } from "next";
import { ClipboardList, ExternalLink, FileCheck2, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { anvisaCategories, corporateImages } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Classificação ANVISA e Legislação",
  description:
    "Categorias ANVISA, requisitos regulatórios, documentação necessária e orientação para regularização de produtos."
};

const infoCards = [
  {
    title: "Documentação necessária",
    description:
      "Contrato social, licenças, responsável técnico, rótulos, laudos e formulações, conforme categoria.",
    icon: ClipboardList
  },
  {
    title: "Links oficiais",
    description:
      "A legislação deve ser confirmada nos canais oficiais da ANVISA e das vigilâncias locais.",
    icon: ExternalLink
  },
  {
    title: "Acompanhamento técnico",
    description:
      "Exigências e complementações são tratadas com organização de prazos e documentação.",
    icon: FileCheck2
  }
];

export default function ClassificacaoAnvisaPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Consultas", href: "/consultas/marcas" },
          { label: "ANVISA" }
        ]}
        image={corporateImages.health}
        subtitle="Mapeamento inicial de categorias, requisitos e documentação para produtos regulados."
        title="Classificação ANVISA / Legislação"
      />

      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Regularização sanitária"
          title="Cada produto pede enquadramento técnico próprio"
          description="A categoria, a finalidade, a composição e o risco sanitário definem se o caminho envolve registro, cadastro, notificação ou regularização local."
        />
        <div className="overflow-hidden rounded-lg bg-white shadow-soft">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-brand-ink text-white">
              <tr>
                <th className="p-4">Categoria</th>
                <th className="p-4">Requisitos iniciais</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/8">
              {anvisaCategories.map((item) => (
                <tr key={item.category}>
                  <td className="p-4 font-bold text-brand-ink">{item.category}</td>
                  <td className="p-4 text-brand-muted">{item.requirement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-brand-paper py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-3">
          {infoCards.map(({ title, description, icon: Icon }) => (
            <article className="rounded-lg bg-white p-6 shadow-soft" key={title}>
              <Icon className="mb-5 text-brand-orange" size={38} />
              <h2 className="text-xl font-bold text-brand-ink">{title}</h2>
              <p className="mt-3 text-sm text-brand-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <ShieldCheck className="mb-3 text-brand-orange" size={40} />
          <h2 className="font-display text-3xl font-bold text-brand-ink">Saiba mais sobre seu enquadramento</h2>
          <p className="mt-2 text-brand-muted">Envie as informações do produto para uma triagem inicial.</p>
        </div>
        <ButtonLink href={siteConfig.whatsappUrl}>Falar com Especialista</ButtonLink>
      </section>
    </>
  );
}
