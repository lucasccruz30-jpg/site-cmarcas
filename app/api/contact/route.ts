import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { siteConfig } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(3),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(1),
  message: z.string().min(15),
  privacy: z.boolean().refine((value) => value)
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const data = parsed.data;

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const to = process.env.CONTACT_TO ?? siteConfig.email;
    const subject = `[CMarcas] Novo contato: ${data.subject}`;

    await transporter.sendMail({
      from: `"Site CMarcas" <${process.env.SMTP_USER}>`,
      replyTo: data.email,
      to,
      subject,
      text: [
        `Nome: ${data.name}`,
        `Empresa: ${data.company || "-"}`,
        `Email: ${data.email}`,
        `Telefone: ${data.phone}`,
        `Assunto: ${data.subject}`,
        "",
        data.message
      ].join("\n")
    });

    await transporter.sendMail({
      from: `"CMarcas" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Recebemos sua mensagem",
      text:
        "Olá! Recebemos sua solicitação e a equipe CMarcas retornará em breve. Obrigado pelo contato."
    });
  }

  return NextResponse.json({ ok: true });
}
