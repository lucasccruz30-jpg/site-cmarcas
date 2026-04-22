import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCog,
  Globe2,
  Headphones,
  HeartPulse,
  Scale,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { LogoTicker } from "@/components/LogoTicker";
import { MotionReveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/constants";

const reasons = [
  {
    title: "10+ Anos de Experiência",
    description: "Atuação técnica em propriedade intelectual, registros e regularização.",
    icon: Trophy
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais qualificados para orientar cada fase do processo.",
    icon: Users
  },
  {
    title: "Proteção Nacional e Internacional",
    description: "Estratégias para marcas, patentes e expansão para outros mercados.",
    icon: Globe2
  },
  {
    title: "Suporte Completo",
    description: "Acompanhamento de prazos, exigências, recursos e renovações.",
    icon: Headphones
  }
];

const services = [
  {
    title: "Registros de Direitos Autorais",
    description: "Proteção de obras, softwares, conteúdos e provas de autoria.",
    href: "/servicos/direito-autoral",
    icon: "©"
  },
  {
    title: "Registros de Marcas",
    description: "Busca, depósito, acompanhamento e renovação junto ao INPI.",
    href: "/servicos/marcas",
    icon: "®"
  },
  {
    title: "Registros de Patentes",
    description: "Proteção de invenções, modelos de utilidade e desenhos industriais.",
    href: "/servicos/patentes",
    icon: FileCog
  },
  {
    title: "Assessoria Jurídica",
    description: "Contratos, notificações, pareceres, defesas e consultoria preventiva.",
    href: "/servicos/assessoria",
    icon: Scale
  },
  {
    title: "Registros ANVISA",
    description: "Regularização de produtos e empresas perante órgãos sanitários.",
    href: "/servicos/produtos",
    icon: HeartPulse
  }
];

const steps = [
  ["Consulta Inicial", "Entendemos seu objetivo e indicamos o melhor caminho."],
  ["Análise e Documentação", "Preparamos buscas, pareceres e documentos necessários."],
  ["Registro e Acompanhamento", "Protocolamos e monitoramos cada publicação relevante."],
  ["Proteção Garantida", "Organizamos concessão, certificados, renovações e próximos passos."]
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-hero-texture bg-cover bg-center">
        <div className="section-shell grid min-h-[calc(100vh-116px)] gap-12 py-16 md:min-h-[680px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <MotionReveal>
            <p className="mb-4 inline-flex rounded-full border border-brand-orange/25 bg-white/80 px-4 py-2 text-sm font-bold text-brand-orange shadow-soft">
              Propriedade intelectual com estratégia e precisão
            </p>
            <h1 className="text-balance font-display text-3xl font-bold leading-tight text-brand-ink md:text-4xl lg:text-5xl">
              A segurança da sua marca começa com um registro bem feito.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-brand-graphite md:text-lg">
              Marcas e Patentes - Nacional e Internacional | Registro de Produtos junto a ANVISA |
              Legalização de Empresas na Vigilância Sanitária | Assessoria Jurídica Especializada
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.whatsappUrl}>
                Fale com um Especialista <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              <ButtonLink href="#servicos" variant="secondary">
                Conheça Nossos Serviços
              </ButtonLink>
            </div>
          </MotionReveal>

          <MotionReveal className="relative mx-auto w-full max-w-md" delay={0.1}>
            <div className="absolute inset-8 rounded-full bg-brand-orange/16 blur-3xl" />
            <div className="relative rounded-lg border border-black/8 bg-white p-8 shadow-lift">
              <div className="mx-auto grid h-56 w-56 place-items-center rounded-full border-[18px] border-brand-orange/20 bg-brand-paper">
                <ShieldCheck className="animate-pulse text-brand-orange" size={124} strokeWidth={1.4} />
              </div>
              <div className="mt-8 grid gap-3">
                {["Busca técnica", "Documentação segura", "Acompanhamento de prazos"].map((item) => (
                  <div className="flex items-center gap-3 rounded-md bg-brand-paper px-4 py-3" key={item}>
                    <CheckCircle2 className="text-brand-success" size={19} />
                    <span className="text-sm font-semibold text-brand-graphite">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="border-b border-black/6 bg-white">
        <div className="section-shell grid grid-cols-2 divide-x divide-black/6 lg:grid-cols-4">
          {[
            { value: "10+", label: "Anos de experiência" },
            { value: "500+", label: "Clientes atendidos" },
            { value: "3.000+", label: "Pedidos protocolados" },
            { value: "Nacional", label: "e Internacional" },
          ].map((stat) => (
            <div className="flex flex-col items-center py-8 text-center" key={stat.label}>
              <span className="font-display text-3xl font-bold text-brand-orange md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-medium text-brand-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Por que escolher a CMarcas?"
          title="Autoridade técnica com atendimento próximo"
          description="Combinamos experiência, método e clareza para proteger ativos que fazem parte do valor real da sua empresa."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <MotionReveal delay={index * 0.05} key={reason.title}>
                <article className="h-full rounded-lg bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <Icon className="mb-5 text-brand-orange" size={42} />
                  <h3 className="text-xl font-bold text-brand-ink">{reason.title}</h3>
                  <p className="mt-3 text-sm text-brand-muted">{reason.description}</p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-paper py-16" id="servicos">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Nossos serviços"
            title="Proteção completa para marcas, criações e produtos"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionReveal delay={index * 0.05} key={service.title}>
                  <Link
                    className="group block h-full rounded-lg bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                    href={service.href}
                  >
                    <div className="mb-5 grid h-20 w-20 place-items-center rounded-lg bg-brand-orange/12 text-5xl font-black text-brand-orange transition group-hover:scale-105">
                      {typeof Icon === "string" ? Icon : <Icon aria-hidden="true" size={44} />}
                    </div>
                    <h3 className="text-xl font-bold text-brand-ink">{service.title}</h3>
                    <p className="mt-3 text-sm text-brand-muted">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-orange">
                      Saiba Mais <ArrowRight aria-hidden="true" size={16} />
                    </span>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Como funciona" title="Do diagnóstico à proteção do ativo" />
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-14 hidden h-px bg-black/10 lg:block" />
          {steps.map(([title, description], index) => (
            <MotionReveal delay={index * 0.06} key={title}>
              <article className="relative rounded-lg border border-black/8 bg-white p-6 shadow-soft">
                <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-brand-ink text-xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-ink">{title}</h3>
                <p className="mt-3 text-sm text-brand-muted">{description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-ink py-16 text-white">
        <div className="section-shell">
          <SectionHeading
            className="[&_h2]:text-white [&_p]:text-white/70"
            description="Um portfólio de empresas de diferentes segmentos que reconhecem a importância de proteger seus ativos."
            title="Empresas que Confiam em Nós"
          />
          <LogoTicker />
        </div>
      </section>

      <section className="bg-brand-orange py-16 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/80">
              <Sparkles size={17} /> Consulta gratuita
            </p>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Pronto para Proteger Seu Patrimônio?
            </h2>
            <p className="mt-3 text-white/88">
              Entre em contato conosco hoje mesmo e conheça como podemos ajudar.
            </p>
          </div>
          <ButtonLink className="bg-white text-brand-ink hover:bg-brand-ink hover:text-white" href={siteConfig.whatsappUrl}>
            Solicitar Consulta Gratuita
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
