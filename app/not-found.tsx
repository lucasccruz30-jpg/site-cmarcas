import Link from "next/link";
import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="section-shell grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-brand-ink md:text-6xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-brand-muted">
          O endereço acessado não existe ou foi movido. Você pode voltar ao início e continuar navegando.
        </p>
        <ButtonLink className="mt-8" href="/">
          Voltar para Home
        </ButtonLink>
        <p className="mt-4 text-sm text-brand-muted">
          Ou fale conosco em <Link className="text-brand-orange" href="/contato">Contato</Link>.
        </p>
      </div>
    </section>
  );
}
