import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Linkedin, ShieldCheck, Target, Eye, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/Hero";
import { MotionReveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { corporateImages, team } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a CMarcas, especialista em propriedade intelectual, marcas, patentes, direitos autorais e regularização ANVISA."
};

const values = [
  {
    title: "Missão",
    description:
      "Proteger ativos intangíveis com rigor técnico, transparência e orientação prática para pessoas físicas e jurídicas.",
    icon: Target
  },
  {
    title: "Visão",
    description:
      "Ser referência em propriedade intelectual e regularização para empresas que desejam crescer com segurança.",
    icon: Eye
  },
  {
    title: "Valores",
    description:
      "Ética, clareza, responsabilidade, confidencialidade e compromisso com o resultado sustentável dos clientes.",
    icon: Heart
  }
];

const trust = [
  "Experiência Comprovada",
  "Equipe Qualificada",
  "Atendimento Personalizado",
  "Resultados Garantidos",
  "Suporte Contínuo"
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Quem Somos" }
        ]}
        image={corporateImages.meeting}
        subtitle="Especialistas em proteção de marcas, patentes, softwares, desenhos industriais e regularização sanitária."
        title="Quem Somos"
      />

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <MotionReveal>
          <Image
            alt="Equipe em reunião estratégica"
            className="aspect-[4/3] rounded-lg object-cover shadow-lift"
            height={760}
            src={corporateImages.meeting}
            width={920}
          />
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Nossa história
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-ink md:text-5xl">
            Proteção intelectual com 10 anos de experiência
          </h2>
          <div className="mt-5 grid gap-4 text-brand-graphite">
            <p>
              Com 10 anos de vasta experiência nas áreas de propriedade intelectual, a CMarcas é
              especialista em proteção de marcas, patentes, softwares, desenhos industriais junto
              ao INPI, realizando registro de produtos e legalização de empresas perante à Anvisa.
            </p>
            <p>
              Com profissionais devidamente qualificados, nosso objetivo é atender às necessidades
              de nossos clientes, pessoas físicas ou jurídicas, e garantir o resguardo de seus
              direitos e interesses.
            </p>
            <p className="font-semibold text-brand-ink">Proteja o seu patrimônio. Fale conosco!</p>
          </div>
          <ButtonLink className="mt-7" href={siteConfig.whatsappUrl}>
            Falar com Especialista
          </ButtonLink>
        </MotionReveal>
      </section>

      <section className="bg-brand-paper py-16">
        <div className="section-shell">
          <SectionHeading title="Nossa Missão, Visão e Valores" />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionReveal delay={index * 0.05} key={item.title}>
                  <article className="h-full rounded-lg bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                    <Icon className="mb-5 text-brand-orange" size={42} />
                    <h3 className="text-xl font-bold text-brand-ink">{item.title}</h3>
                    <p className="mt-3 text-sm text-brand-muted">{item.description}</p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Equipe especializada" title="Profissionais preparados para orientar decisões importantes" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <MotionReveal delay={index * 0.05} key={member.name}>
              <article className="overflow-hidden rounded-lg bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <Image
                  alt={member.name}
                  className="aspect-square w-full object-cover"
                  height={420}
                  src={member.image}
                  width={420}
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-ink">{member.name}</h3>
                  <p className="text-sm font-semibold text-brand-orange">{member.role}</p>
                  <p className="mt-3 text-sm text-brand-muted">{member.bio}</p>
                  <a className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-graphite hover:text-brand-orange" href="#">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-blue py-16 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Award className="mb-5 text-brand-orangeSoft" size={52} />
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Por que confiar em nós?
            </h2>
            <p className="mt-4 text-white/76">
              Unimos método, acompanhamento e linguagem clara para que cada cliente saiba o que
              está protegido, quais são os riscos e quais são os próximos passos.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {trust.map((item) => (
              <div className="flex items-center gap-3 rounded-lg bg-white/8 p-4" key={item}>
                <CheckCircle2 className="shrink-0 text-brand-orangeSoft" size={22} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <ShieldCheck className="mb-3 text-brand-orange" size={42} />
          <h2 className="font-display text-3xl font-bold text-brand-ink">
            Vamos proteger sua marca com seriedade?
          </h2>
        </div>
        <ButtonLink href="/contato" variant="secondary">
          Entrar em contato
        </ButtonLink>
      </section>
    </>
  );
}
