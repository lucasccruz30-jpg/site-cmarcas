import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Marcas, Patentes e ANVISA`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: ["/images/logo-cmarcas.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.fullName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Humberto I, 236 - 8º andar - cj 83/84",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "04018-030",
      addressCountry: "BR"
    },
    areaServed: "Brasil",
    sameAs: []
  };

  return (
    <html className={`${inter.variable} ${playfair.variable}`} lang="pt-BR">
      <body id="top">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
