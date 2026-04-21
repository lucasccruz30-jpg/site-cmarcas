import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site CMarcas."
};

export default function TermosDeUsoPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Termos de Uso" }
        ]}
        title="Termos de Uso"
      />
      <section className="section-shell py-16">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-soft">
          <h2 className="font-display text-3xl font-bold text-brand-ink">Uso do conteúdo</h2>
          <div className="mt-6 grid gap-4 text-brand-graphite">
            <p>
              O conteúdo deste site tem finalidade informativa e institucional. Ele não substitui
              consulta técnica ou jurídica personalizada para casos concretos.
            </p>
            <p>
              A reprodução de textos, marcas, imagens e elementos visuais depende de autorização
              prévia, exceto quando permitido pela legislação aplicável.
            </p>
            <p>
              Ao utilizar o site, você concorda em fornecer informações verdadeiras nos formulários
              e em usar os canais de contato de forma compatível com sua finalidade.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
