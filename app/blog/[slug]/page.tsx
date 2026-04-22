import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Share2, UserRound } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/Hero";
import { blogPosts } from "@/lib/content";
import { siteConfig } from "@/lib/constants";
import { formatDate, readingTime } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const headings = post.content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", ""));

  const related = blogPosts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category }
        ]}
        image={post.image}
        subtitle={post.excerpt}
        title={post.title}
      />

      <article className="section-shell grid gap-10 py-16 lg:grid-cols-[0.28fr_0.72fr]">
        <aside className="lg:sticky lg:top-32 lg:h-max">
          <Link className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-brand-orange" href="/blog">
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>
          <div className="rounded-lg bg-brand-paper p-5">
            <h2 className="font-bold text-brand-ink">Índice</h2>
            <nav className="mt-4 grid gap-2 text-sm text-brand-muted">
              {headings.map((heading) => (
                <a className="hover:text-brand-orange" href={`#${slugify(heading)}`} key={heading}>
                  {heading}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div>
          <Image
            alt={post.title}
            className="aspect-video w-full rounded-lg object-cover shadow-lift"
            height={720}
            priority
            src={post.image}
            width={1280}
          />
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-brand-muted">
            <span className="inline-flex items-center gap-2">
              <UserRound size={16} /> {post.author}
            </span>
            <span>{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} /> {readingTime(post.content)} min de leitura
            </span>
            <span className="rounded-full bg-brand-orange/12 px-3 py-1 font-bold text-brand-orange">
              {post.category}
            </span>
          </div>

          <div className="article-body mt-8 text-lg">
            {renderArticle(post.content)}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-lg border border-black/8 bg-white p-5 shadow-soft">
            <Share2 className="text-brand-orange" size={22} />
            <span className="font-semibold text-brand-ink">Compartilhe:</span>
            <a className="text-sm font-bold text-brand-muted hover:text-brand-orange" href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteConfig.url}/blog/${post.slug}`}>
              LinkedIn
            </a>
            <a className="text-sm font-bold text-brand-muted hover:text-brand-orange" href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} ${siteConfig.url}/blog/${post.slug}`)}`}>
              WhatsApp
            </a>
          </div>

          {related.length > 0 ? (
            <section className="mt-12">
              <h2 className="font-display text-3xl font-bold text-brand-ink">Artigos relacionados</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <Link className="rounded-lg bg-brand-paper p-5 transition hover:-translate-y-1 hover:shadow-soft" href={`/blog/${item.slug}`} key={item.slug}>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">
                      {item.category}
                    </span>
                    <h3 className="mt-3 font-bold leading-snug text-brand-ink">{item.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-12 rounded-lg bg-brand-orange p-8 text-white">
            <h2 className="font-display text-3xl font-bold">Quer saber mais?</h2>
            <p className="mt-2 text-white/86">
              A equipe CMarcas pode avaliar seu caso e indicar os próximos passos.
            </p>
            <ButtonLink className="mt-6 bg-white text-brand-ink hover:bg-brand-ink hover:text-white" href={siteConfig.whatsappUrl}>
              Falar com Especialista
            </ButtonLink>
          </section>
        </div>
      </article>
    </>
  );
}

function renderArticle(content: string) {
  return content.split("\n").map((line) => {
    if (line.startsWith("## ")) {
      const heading = line.replace("## ", "");
      return (
        <h2 id={slugify(heading)} key={line}>
          {heading}
        </h2>
      );
    }

    if (!line.trim()) return null;

    return <p key={line}>{line}</p>;
  });
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
