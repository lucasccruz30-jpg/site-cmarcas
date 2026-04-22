import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Scale,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/Hero";
import { MotionReveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/constants";

type ServiceContent = {
  title: string;
  kicker: string;
  subtitle: string;
  heroImage: string;
  introTitle: string;
  intro: string;
  typesTitle: string;
  types: { title: string; description: string }[];
  steps: string[];
  benefits: string[];
  accordion: { title: string; content: string }[];
  comparison?: string[][];
  offered: string[];
  cta: string;
};

const icons = [FileSearch, ClipboardCheck, CheckCircle2, ShieldCheck];

export function ServicePage({ service }: { service: ServiceContent }) {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos/marcas" },
          { label: service.title }
        ]}
        image={service.heroImage}
        subtitle={service.subtitle}
        title={service.title}
      />

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[1fr_0.88fr] lg:items-center">
        <MotionReveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            {service.kicker}
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-ink md:text-5xl">
            {service.introTitle}
          </h2>
          <p className="mt-5 text-brand-graphite">{service.intro}</p>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <Image
            alt=""
            className="aspect-[4/3] rounded-lg object-cover shadow-lift"
            height={720}
            src={service.heroImage}
            width={900}
          />
        </MotionReveal>
      </section>

      <section className="bg-brand-paper py-16">
        <div className="section-shell">
          <SectionHeading title={service.typesTitle} description="Entenda as modalidades mais comuns e escolha com apoio técnico." />
          <div className="grid gap-6 md:grid-cols-3">
            {service.types.map((type) => (
              <MotionReveal className="rounded-lg bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift" key={type.title}>
                <Scale className="mb-5 text-brand-orange" size={42} />
                <h3 className="text-xl font-bold text-brand-ink">{type.title}</h3>
                <p className="mt-3 text-sm text-brand-muted">{type.description}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Como funciona"
          title="Um processo conduzido com prazos, documentação e acompanhamento"
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {service.steps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <MotionReveal delay={index * 0.05} key={step}>
                <div className="relative h-full rounded-lg border border-black/8 bg-white p-6 shadow-soft">
                  <span className="absolute right-5 top-4 font-display text-6xl font-bold text-brand-orange/10">
                    {index + 1}
                  </span>
                  <Icon className="mb-5 text-brand-orange" size={38} />
                  <h3 className="text-lg font-bold text-brand-ink">{step}</h3>
                  <p className="mt-3 text-sm text-brand-muted">
                    Cada etapa é registrada e comunicada para que você acompanhe o andamento com clareza.
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-blue py-16 text-white">
        <div className="section-shell">
          <SectionHeading
            className="[&_h2]:text-white [&_p]:text-white/78"
            description="Benefícios que conectam proteção legal, valor de mercado e segurança para crescer."
            title="Benefícios"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {service.benefits.map((benefit) => (
              <div className="rounded-lg border border-white/10 bg-white/8 p-5" key={benefit}>
                <BadgeCheck className="mb-4 text-brand-orangeSoft" size={28} />
                <p className="font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading align="left" title="Processo detalhado" description="Veja como cada fase é organizada pela equipe CMarcas." />
          <Accordion items={service.accordion} />
        </div>
        <div>
          <SectionHeading align="left" title="Serviços oferecidos" />
          <div className="grid gap-3">
            {service.offered.map((item) => (
              <div className="flex gap-3 rounded-lg border border-black/8 bg-white p-4 shadow-soft" key={item}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-orange" size={20} />
                <span className="text-sm font-medium text-brand-graphite">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.comparison ? (
        <section className="bg-brand-paper py-16">
          <div className="section-shell">
            <SectionHeading title="Registro Nacional vs Internacional" />
            <div className="overflow-x-auto rounded-lg bg-white shadow-soft">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-brand-ink text-white">
                  <tr>
                    <th className="p-4">Critério</th>
                    <th className="p-4">Nacional</th>
                    <th className="p-4">Internacional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/8">
                  {service.comparison.map(([criterion, national, international]) => (
                    <tr key={criterion}>
                      <td className="p-4 font-semibold text-brand-ink">{criterion}</td>
                      <td className="p-4 text-brand-muted">{national}</td>
                      <td className="p-4 text-brand-muted">{international}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-brand-orange py-14 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">{service.cta}</h2>
            <p className="mt-2 text-white/88">Converse com um especialista e receba orientação inicial.</p>
          </div>
          <ButtonLink className="bg-white text-brand-ink hover:bg-brand-ink hover:text-white" href={siteConfig.whatsappUrl}>
            Fale com a CMarcas
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
