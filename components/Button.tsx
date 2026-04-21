import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-white shadow-soft hover:bg-[#E67E00] hover:shadow-lift",
  secondary:
    "border-2 border-brand-orange bg-white text-brand-orange hover:bg-brand-orange hover:text-white",
  ghost:
    "bg-transparent text-brand-orange hover:bg-brand-orange/12 hover:text-brand-ink",
  dark: "bg-brand-ink text-white hover:bg-brand-blue"
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition duration-300";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  const external = href.startsWith("http");

  if (external || href.startsWith("#")) {
    return (
      <a
        className={classes}
        href={href}
        rel={external ? rel ?? "noreferrer" : rel}
        target={external ? target ?? "_blank" : target}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
