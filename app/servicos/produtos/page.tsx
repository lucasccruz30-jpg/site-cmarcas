import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Registros de Produtos e Legalizações",
  description:
    "Regularização de produtos junto à ANVISA, Vigilância Sanitária, dossiês técnicos e enquadramento regulatório."
};

export default function ProdutosPage() {
  return <ServicePage service={servicePages.produtos} />;
}
