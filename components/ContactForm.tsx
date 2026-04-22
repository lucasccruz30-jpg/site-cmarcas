"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/Button";

const contactSchema = z.object({
  name: z.string().min(3, "Informe seu nome completo."),
  company: z.string().optional(),
  email: z.string().email("Informe um email válido."),
  phone: z.string().min(10, "Informe um telefone com DDD."),
  subject: z.string().min(1, "Selecione um assunto."),
  message: z.string().min(15, "Escreva uma mensagem com pelo menos 15 caracteres."),
  privacy: z.boolean().refine((value) => value, {
    message: "Você precisa aceitar a Política de Privacidade."
  })
});

type ContactFormData = z.infer<typeof contactSchema>;

const fieldClass =
  "w-full rounded-md border border-black/12 bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-muted focus:border-brand-orange";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "", privacy: false }
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset();
  }

  return (
    <form className="grid gap-4 rounded-lg bg-white p-6 shadow-soft" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}>
          <input className={fieldClass} placeholder="Seu nome" {...register("name")} />
        </Field>
        <Field label="Empresa" error={errors.company?.message}>
          <input className={fieldClass} placeholder="Nome da empresa" {...register("company")} />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input className={fieldClass} placeholder="seu@email.com" type="email" {...register("email")} />
        </Field>
        <Field label="Telefone" error={errors.phone?.message}>
          <input className={fieldClass} placeholder="(11) 99999-9999" {...register("phone")} />
        </Field>
      </div>
      <Field label="Assunto" error={errors.subject?.message}>
        <select className={fieldClass} {...register("subject")}>
          <option value="">Selecione</option>
          <option value="Marcas">Marcas</option>
          <option value="Patentes">Patentes</option>
          <option value="Direito Autoral">Direito Autoral</option>
          <option value="Produtos">Produtos</option>
          <option value="Assessoria">Assessoria</option>
          <option value="Outro">Outro</option>
        </select>
      </Field>
      <Field label="Mensagem" error={errors.message?.message}>
        <textarea
          className={`${fieldClass} min-h-36 resize-y`}
          placeholder="Conte brevemente como podemos ajudar"
          {...register("message")}
        />
      </Field>
      <label className="flex items-start gap-3 text-sm text-brand-muted">
        <input className="mt-1 h-4 w-4 accent-brand-orange" type="checkbox" {...register("privacy")} />
        <span>Aceito a Política de Privacidade e autorizo o contato da equipe CMarcas.</span>
      </label>
      {errors.privacy ? <p className="text-sm text-brand-danger">{errors.privacy.message}</p> : null}
      <Button className="w-full md:w-max" disabled={isSubmitting} type="submit">
        <Send aria-hidden="true" size={18} />
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
      {status === "success" ? (
        <p className="rounded-md bg-brand-success/10 px-4 py-3 text-sm font-medium text-emerald-700">
          Mensagem enviada com sucesso. Retornaremos em breve.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md bg-brand-danger/10 px-4 py-3 text-sm font-medium text-brand-danger">
          Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand-graphite">
      {label}
      {children}
      {error ? <span className="text-sm font-medium text-brand-danger">{error}</span> : null}
    </label>
  );
}
