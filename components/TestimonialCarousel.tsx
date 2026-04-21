"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/content";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  const move = (direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-soft md:p-8">
      <div className="mb-4 flex text-brand-orange" aria-label="5 estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star aria-hidden="true" fill="currentColor" key={index} size={20} />
        ))}
      </div>
      <p className="text-lg text-brand-graphite md:text-xl">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            alt={testimonial.name}
            className="h-16 w-16 rounded-full object-cover"
            height={80}
            src={testimonial.image}
            width={80}
          />
          <div>
            <p className="font-bold text-brand-ink">{testimonial.name}</p>
            <p className="text-sm text-brand-muted">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Depoimento anterior"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-brand-ink hover:border-brand-orange hover:text-brand-orange"
            onClick={() => move(-1)}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button
            aria-label="Próximo depoimento"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-brand-ink hover:border-brand-orange hover:text-brand-orange"
            onClick={() => move(1)}
            type="button"
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
