"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-black/8 overflow-hidden rounded-lg border border-black/8 bg-white shadow-soft">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.title}>
            <button
              aria-expanded={active}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand-ink transition hover:bg-brand-paper"
              onClick={() => setOpen(active ? -1 : index)}
              type="button"
            >
              {item.title}
              <ChevronDown
                aria-hidden="true"
                className={cn("shrink-0 transition", active && "rotate-180 text-brand-orange")}
                size={20}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm text-brand-muted md:text-base">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
