import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { categorias, getCategoria } from "@/lib/categorias";
import { getProdutosPorCategoria } from "@/lib/produtos";
import { NEGOCIO, linkWhatsApp } from "@/lib/negocio";
import { breadcrumbSchema, collectionPageSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { faqCategoria } from "@/lib/faq";
import { getPilarCategoria, getPostsPorCategoria } from "@/lib/posts";

export function generateStaticParams() {
  return categorias.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const categoria = getCategoria(params.slug);
  if (!categoria) return {};
  const url = `https://${NEGOCIO.dominio}/categorias/${categoria.slug}/`;
  return {
    title: categoria.nome,
    description: categoria.descricao,
    openGraph: {
      url,
      title: categoria.nome,
      description: categoria.descricao,
      images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
    },
  };
}

export default function CategoriaPage({ params }: { params: { slug: string } }) {
  const categoria = getCategoria(params.slug);
  if (!categoria) notFound();

  const produtosCategoria = getProdutosPorCategoria(categoria.slug);
  const pilarCategoria = getPilarCategoria(categoria.slug);
  const faq = pilarCategoria ? pilarCategoria.faq : faqCategoria(categoria);
  const pilaresProduto = getPostsPorCategoria(categoria.slug).filter(
    (p) => p.tipo === "pilar-produto"
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      collectionPageSchema(categoria),
      itemListSchema(produtosCategoria),
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Categorias", url: "/categorias/" },
        { name: categoria.nome, url: `/categorias/${categoria.slug}/` },
      ]),
      faqSchema(faq),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Categorias", href: "/categorias/" },
          { name: categoria.nome },
        ]}
      />
      <section className="mx-auto max-w-wrap px-8 py-16">
        <h1 className="font-serif text-[34px] font-medium md:text-[40px]">{categoria.nome}</h1>
        <p className="mt-3 max-w-2xl text-[15px] text-ink-soft">{categoria.descricao}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={linkWhatsApp(`Olá! Quero um orçamento de ${categoria.nome.toLowerCase()}.`)}
            className="btn"
          >
            Pedir orçamento desta categoria
          </a>
          <span className="mono flex items-center font-mono text-xs uppercase tracking-[0.06em] text-ink-soft">
            {produtosCategoria.length} produtos · a partir de {NEGOCIO.pedidoMinimoPadrao} un.
          </span>
        </div>

        <div className="mt-11 grid grid-cols-2 gap-5 md:grid-cols-4">
          {produtosCategoria.map((p) => (
            <ProductCard key={p.slug} produto={p} />
          ))}
        </div>

        {pilarCategoria && (
          <Link
            href={`/blog/${pilarCategoria.slug}/`}
            className="mt-14 flex flex-col gap-2 rounded-[3px] border border-line bg-paper-2 p-8 hover:border-brass md:flex-row md:items-center md:justify-between"
          >
            <div>
              <span className="mono font-mono text-xs uppercase tracking-[0.06em] text-brass-dark">
                Guia completo
              </span>
              <h2 className="mt-2 font-serif text-2xl font-medium">{pilarCategoria.titulo}</h2>
              <p className="mt-2 max-w-xl text-sm text-ink-soft">{pilarCategoria.descricao}</p>
            </div>
            <span className="mono shrink-0 font-mono text-xs uppercase tracking-[0.06em] text-ink">
              Ler o guia →
            </span>
          </Link>
        )}

        {pilaresProduto.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-4 font-serif text-2xl font-medium">Guias por produto desta categoria</h2>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
              {pilaresProduto.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}/`} className="text-sm text-brass-dark hover:underline">
                    {p.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16 max-w-2xl">
          <h2 className="font-serif text-2xl font-medium">
            Perguntas frequentes sobre {categoria.nome.toLowerCase()}
          </h2>
          <div className="mt-6 space-y-6">
            {faq.map((f) => (
              <div key={f.pergunta} className="border-t border-line pt-5">
                <h3 className="text-[15px] font-semibold">{f.pergunta}</h3>
                <p className="mt-2 text-sm text-ink-soft">{f.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
