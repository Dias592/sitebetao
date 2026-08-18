import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts } from "@/lib/posts";
import { categorias } from "@/lib/categorias";
import { NEGOCIO, linkWhatsApp } from "@/lib/negocio";

export const metadata: Metadata = {
  title: "Blog — Guias de Brindes Personalizados",
  description:
    "Guias de compra, comparativos de técnicas de personalização e ideias por ocasião para brindes personalizados corporativos e presentes.",
  openGraph: {
    url: `https://${NEGOCIO.dominio}/blog/`,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
      <section className="mx-auto max-w-wrap px-8 py-16">
        <h1 className="font-serif text-[34px] font-medium md:text-[40px]">Blog</h1>
        <p className="mt-4 max-w-xl text-[15px] text-ink-soft">
          Guias de compra por categoria, comparativos de técnicas de
          personalização e ideias de brindes por ocasião.
        </p>

        {posts.length > 0 ? (
          <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}/`}
                className="rounded-[3px] border border-line bg-paper-2 p-6 hover:border-brass"
              >
                <h2 className="text-[15px] font-semibold">{p.titulo}</h2>
                <p className="mt-2 text-sm text-ink-soft">{p.descricao}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-11 rounded-[3px] border border-line bg-paper-2 p-8">
            <p className="text-sm text-ink-soft">
              Os guias de compra estão em produção — enquanto isso, veja o
              catálogo completo por categoria ou fale direto pelo WhatsApp
              para tirar dúvidas sobre técnicas, prazos e quantidades.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/categorias/" className="btn btn-outline">
                Ver categorias
              </Link>
              <a href={linkWhatsApp("Olá! Tenho uma dúvida sobre brindes personalizados.")} className="btn">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}

        <div className="mt-14">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-ink-soft">
            Navegue por categoria
          </h2>
          <div className="flex flex-wrap gap-2">
            {categorias.map((c) => (
              <Link
                key={c.slug}
                href={`/categorias/${c.slug}/`}
                className="rounded-[2px] border border-line px-3 py-[6px] text-xs text-ink-soft hover:border-brass hover:text-ink"
              >
                {c.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
