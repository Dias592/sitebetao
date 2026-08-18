import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { posts, getPost, getPostsPorCategoria } from "@/lib/posts";
import { getCategoria } from "@/lib/categorias";
import { getProdutosPorCategoria, getProduto } from "@/lib/produtos";
import { NEGOCIO, linkWhatsApp } from "@/lib/negocio";
import { articleSchema, breadcrumbSchema, faqSchema, howToSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.descricao,
    openGraph: {
      url: `https://${NEGOCIO.dominio}/blog/${post.slug}/`,
      images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const categoria = getCategoria(post.categoriaRelacionada);
  const produtoRelacionado = post.produtoRelacionado ? getProduto(post.produtoRelacionado) : undefined;

  const schemaGraph: Record<string, unknown>[] = [
    articleSchema(post),
    faqSchema(post.faq),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog/" },
      { name: post.titulo, url: `/blog/${post.slug}/` },
    ]),
  ];
  if (post.howTo) schemaGraph.push(howToSchema(post.howTo));

  const schema = { "@context": "https://schema.org", "@graph": schemaGraph };

  // Produtos relacionados: se é pilar de categoria, mostra todos os produtos da categoria;
  // se é pilar de produto, mostra o próprio produto + os demais da categoria.
  const produtosRelacionados = categoria ? getProdutosPorCategoria(categoria.slug) : [];

  // Artigos relacionados: outros posts da mesma categoria (pilares de produto), exceto este.
  const artigosRelacionados = getPostsPorCategoria(post.categoriaRelacionada).filter(
    (p) => p.slug !== post.slug
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }, { name: post.titulo }]} />
      <article className="mx-auto max-w-3xl px-8 py-16">
        <h1 className="font-serif text-[32px] font-medium md:text-[40px]">{post.titulo}</h1>

        {produtoRelacionado && (
          <p className="mt-4 text-sm text-ink-soft">
            Conteúdo sobre o produto{" "}
            <Link href={`/produtos/${produtoRelacionado.slug}/`} className="text-brass-dark hover:underline">
              {produtoRelacionado.nome}
            </Link>
            .
          </p>
        )}

        <div
          className="prose prose-headings:font-serif prose-headings:font-medium prose-a:text-brass-dark prose-table:text-sm mt-8 max-w-none text-[15px] leading-relaxed text-ink-soft"
          dangerouslySetInnerHTML={{ __html: post.conteudoHtml }}
        />

        {post.howTo && (
          <div className="mt-14 border-t border-line pt-8">
            <h2 className="font-serif text-2xl font-medium text-ink">{post.howTo.titulo}</h2>
            <ol className="mt-5 space-y-3">
              {post.howTo.passos.map((passo, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink-soft">
                  <span className="mono shrink-0 font-mono text-xs font-semibold text-brass-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{passo}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-14 border-t border-line pt-8">
          <h2 className="font-serif text-2xl font-medium text-ink">Perguntas frequentes</h2>
          <div className="mt-6 space-y-6">
            {post.faq.map((f) => (
              <div key={f.pergunta} className="border-t border-line pt-5">
                <h3 className="text-[15px] font-semibold text-ink">{f.pergunta}</h3>
                <p className="mt-2 text-sm text-ink-soft">{f.resposta}</p>
              </div>
            ))}
          </div>
        </div>

        {produtosRelacionados.length > 0 && (
          <div className="mt-14 border-t border-line pt-8">
            <h2 className="mb-6 font-serif text-2xl font-medium text-ink">Produtos desta categoria</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              {produtosRelacionados.slice(0, 6).map((p) => (
                <ProductCard key={p.slug} produto={p} />
              ))}
            </div>
          </div>
        )}

        {artigosRelacionados.length > 0 && (
          <div className="mt-14 border-t border-line pt-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-ink">Artigos relacionados</h2>
            <ul className="space-y-3">
              {artigosRelacionados.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}/`} className="text-sm text-brass-dark hover:underline">
                    {p.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16 flex flex-col items-start gap-4 rounded-[3px] border border-line bg-paper-2 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-xl font-medium">
              {produtoRelacionado ? `Pronto para pedir ${produtoRelacionado.nome.toLowerCase()}?` : "Pronto para pedir?"}
            </h2>
            <p className="mt-1 text-sm text-ink-soft">Fale agora pelo WhatsApp ou peça um orçamento em lote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={linkWhatsApp(
                produtoRelacionado ? `Olá! Quero orçamento de ${produtoRelacionado.nome}.` : "Olá! Vi o blog e quero um orçamento."
              )}
              className="btn"
            >
              Pedir pelo WhatsApp
            </a>
            <Link href="/orcamento/" className="btn btn-outline">
              Orçamento em lote
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
