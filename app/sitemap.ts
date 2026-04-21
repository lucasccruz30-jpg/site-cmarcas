import type { MetadataRoute } from "next";
import { blogPosts, servicePages } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/quem-somos",
    "/consultas/marcas",
    "/consultas/anvisa",
    "/faq",
    "/blog",
    "/contato",
    "/clientes",
    "/politica-de-privacidade",
    "/termos-de-uso"
  ];

  const serviceRoutes = Object.keys(servicePages).map((slug) => `/servicos/${slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPages, ...serviceRoutes, ...blogRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));
}
