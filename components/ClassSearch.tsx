"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { nclClasses } from "@/lib/content";

export function ClassSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return nclClasses;
    return nclClasses.filter(([number, description]) =>
      `${number} ${description}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <div className="grid gap-6">
      <label className="relative block">
        <Search
          aria-hidden="true"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted"
          size={20}
        />
        <input
          className="w-full rounded-lg border border-black/10 bg-white py-4 pl-12 pr-4 text-brand-ink shadow-soft outline-none transition focus:border-brand-orange"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busque por classe, produto ou serviço"
          value={query}
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map(([number, description]) => (
          <article
            className="rounded-lg border border-black/8 bg-white p-5 shadow-soft transition hover:border-brand-orange hover:shadow-lift"
            key={number}
          >
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-orange text-lg font-bold text-white">
              {number}
            </div>
            <p className="text-sm text-brand-muted">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
