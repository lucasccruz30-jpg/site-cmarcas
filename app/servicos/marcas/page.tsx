import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Registros de Marcas",
  description:
    "Registro de marcas no INPI, busca de anterioridade, acompanhamento, recursos, monitoramento e renovação."
};

export default function MarcasPage() {
  return <ServicePage service={servicePages.marcas} />;
}
