import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { heroImage } from "@/lib/content";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: { label: string; href?: string }[];
};

export function PageHero({ title, subtitle, image = heroImage, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[220px] overflow-hidden bg-brand-ink text-white">
      <Image
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fill
        priority
        src={image}
      />
      <div className="absolute inset-0 -z-10 bg-brand-ink/72" />
      <div className="section-shell flex min-h-[220px] flex-col justify-center py-12">
        {breadcrumb ? <Breadcrumb items={breadcrumb} /> : null}
        <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight md:text-4xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-3 max-w-3xl text-base text-white/82">{subtitle}</p> : null}
      </div>
    </section>
  );
}
