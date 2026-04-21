import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do site CMarcas."
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Política de Privacidade" }
        ]}
        title="Política de Privacidade"
      />
      <section className="section-shell py-16">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-soft">
          <h2 className="font-display text-3xl font-bold text-brand-ink">Como tratamos seus dados</h2>
          <div className="mt-6 grid gap-4 text-brand-graphite">
            <p>
              Coletamos dados enviados voluntariamente em formulários, como nome, empresa, email,
              telefone, assunto e mensagem, para responder solicitações e prestar atendimento.
            </p>
            <p>
              As informações não são vendidas a terceiros. Podem ser usadas para comunicação direta
              relacionada aos serviços solicitados e para cumprimento de obrigações legais.
            </p>
            <p>
              Para solicitar acesso, correção ou exclusão de dados, entre em contato pelo email{" "}
              <a className="font-semibold text-brand-orange" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
