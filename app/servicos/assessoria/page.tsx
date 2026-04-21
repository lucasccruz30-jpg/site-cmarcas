import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Assessoria Jurídica",
  description:
    "Consultoria jurídica especializada em propriedade intelectual, contratos, notificações, recursos e prevenção de riscos."
};

export default function AssessoriaPage() {
  return <ServicePage service={servicePages.assessoria} />;
}
