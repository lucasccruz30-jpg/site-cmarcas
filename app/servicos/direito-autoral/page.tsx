import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Registros de Direito Autoral",
  description:
    "Registro de obras autorais, softwares, conteúdos criativos e organização documental de titularidade."
};

export default function DireitoAutoralPage() {
  return <ServicePage service={servicePages["direito-autoral"]} />;
}
