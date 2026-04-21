import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Registros de Patentes",
  description:
    "Proteção de invenções, modelos de utilidade, desenhos industriais e acompanhamento de pedidos de patente."
};

export default function PatentesPage() {
  return <ServicePage service={servicePages.patentes} />;
}
