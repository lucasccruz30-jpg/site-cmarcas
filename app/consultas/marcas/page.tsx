import type { Metadata } from "next";
import { BookOpen, Layers, SearchCheck } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ClassSearch } from "@/components/ClassSearch";
import { PageHero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Classificação de Marcas",
  description:
    "Consulta interativa das 45 classes da Nomenclatura de Nice para registro de marcas."
};

export default function ClassificacaoMarcasPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Consultas", href: "/consultas/marcas" },
          { label: "Classificação de Marcas" }
        ]}
        subtitle="Busque classes da NCL - Nomenclatura de Nice e entenda onde sua marca pode ser protegida."
        title="Classificação de Marcas"
      />

      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="NCL"
            title="A classe certa evita pedidos frágeis"
            description="A classificação define o conjunto de produtos ou serviços em que a marca buscará proteção. Uma escolha incompleta pode deixar atividades importantes descobertas."
          />
          <div className="grid gap-4">
            {[
              ["Produtos e serviços", "Classes 1 a 34 cobrem produtos. Classes 35 a 45 cobrem serviços."],
              ["Especificação", "A descrição deve refletir a atividade real e o plano de uso da marca."],
              ["Estratégia", "Algumas marcas precisam de múltiplas classes para proteger operação e expansão."]
            ].map(([title, description]) => (
              <div className="flex gap-3 rounded-lg border border-black/8 bg-white p-4 shadow-soft" key={title}>
                <SearchCheck className="mt-1 shrink-0 text-brand-orange" size={22} />
                <div>
                  <h2 className="font-bold text-brand-ink">{title}</h2>
                  <p className="text-sm text-brand-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-brand-paper p-6">
          <div className="mb-5 flex items-center gap-3">
            <Layers className="text-brand-orange" size={30} />
            <h2 className="font-display text-2xl font-bold text-brand-ink">45 classes listadas</h2>
          </div>
          <ClassSearch />
        </div>
      </section>

      <section className="bg-brand-orange py-14 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <BookOpen className="mb-3 text-white" size={38} />
            <h2 className="font-display text-3xl font-bold">Consulte um especialista</h2>
            <p className="mt-2 text-white/88">
              A classe é só o começo. Receba uma análise estratégica para o seu caso.
            </p>
          </div>
          <ButtonLink className="bg-white text-brand-ink hover:bg-brand-ink hover:text-white" href={siteConfig.whatsappUrl}>
            Falar no WhatsApp
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
