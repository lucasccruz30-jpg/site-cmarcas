import type { Metadata } from "next";
import { BlogExplorer } from "@/components/BlogExplorer";
import { PageHero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre marcas, patentes, direito autoral, ANVISA, contratos e propriedade intelectual."
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog" }
        ]}
        subtitle="Conteúdos práticos para quem precisa proteger marcas, invenções, obras e produtos regulados."
        title="Blog CMarcas"
      />
      <section className="bg-brand-paper py-16">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Artigos"
            title="Informação para decisões mais seguras"
            description="Use a busca e os filtros para encontrar temas ligados ao seu momento de negócio."
          />
          <BlogExplorer />
        </div>
      </section>
    </>
  );
}
