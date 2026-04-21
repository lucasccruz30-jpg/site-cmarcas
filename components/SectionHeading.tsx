import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-brand-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-brand-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
