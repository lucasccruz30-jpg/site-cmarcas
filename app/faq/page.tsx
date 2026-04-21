import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { faqGroups } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Perguntas frequentes sobre registro de marca, patentes, direito autoral, software, contratos de tecnologia e ANVISA."
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "FAQ" }
        ]}
        subtitle="Respostas objetivas para dúvidas comuns sobre propriedade intelectual, INPI e regularização sanitária."
        title="Perguntas Frequentes"
      />
      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Tire dúvidas antes de iniciar seu processo"
          description="As respostas abaixo ajudam na triagem inicial. Para decisões específicas, fale com um especialista."
        />
        <div className="grid gap-8">
          {faqGroups.map((group) => (
            <section className="grid gap-4 lg:grid-cols-[0.32fr_0.68fr]" key={group.group}>
              <div className="rounded-lg bg-brand-paper p-5">
                <HelpCircle className="mb-4 text-brand-orange" size={32} />
                <h2 className="text-xl font-bold text-brand-ink">{group.group}</h2>
              </div>
              <Accordion items={group.items} />
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-lg bg-brand-orange p-8 text-center text-white">
          <h2 className="font-display text-3xl font-bold">Ainda tem dúvidas?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/86">
            Fale com a equipe CMarcas para receber orientação inicial sobre o seu caso.
          </p>
          <ButtonLink className="mt-6 bg-white text-brand-ink hover:bg-brand-ink hover:text-white" href={siteConfig.whatsappUrl}>
            Falar com Especialista
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
