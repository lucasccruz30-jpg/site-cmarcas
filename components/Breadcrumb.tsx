import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-white/78">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link className="transition hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
