"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { blogPosts } from "@/lib/content";
import { formatDate, readingTime } from "@/lib/utils";

const categories = ["Todos", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === "Todos" || post.category === category;
      const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      return matchesCategory && haystack.includes(query.toLowerCase());
    });
  }, [category, query]);

  return (
    <div className="grid gap-8">
      <div className="flex flex-col gap-4 rounded-lg border border-black/8 bg-white p-4 shadow-soft md:flex-row md:items-center md:justify-between">
        <label className="relative flex-1">
          <Search
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted"
            size={18}
          />
          <input
            className="w-full rounded-md border border-black/10 py-3 pl-11 pr-4 outline-none transition focus:border-brand-orange"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por palavra-chave"
            value={query}
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? "bg-brand-orange text-white"
                  : "bg-brand-paper text-brand-graphite hover:text-brand-orange"
              }`}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            className="group overflow-hidden rounded-lg bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <Image
              alt={post.title}
              className="aspect-video w-full object-cover"
              height={380}
              src={post.image}
              width={680}
            />
            <div className="p-5">
              <span className="rounded-full bg-brand-orange/12 px-3 py-1 text-xs font-bold text-brand-orange">
                {post.category}
              </span>
              <h2 className="mt-4 text-xl font-bold leading-snug text-brand-ink group-hover:text-brand-orange transition">
                {post.title}
              </h2>
              <p className="mt-3 line-clamp-2 text-sm text-brand-muted">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between gap-3 text-xs text-brand-muted">
                <span>{formatDate(post.date)}</span>
                <span>{readingTime(post.content)} min de leitura</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
