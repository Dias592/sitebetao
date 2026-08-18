import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import CategoryIcon from "@/components/icons/CategoryIcon";
import { produtos, getProduto, getProdutosPorCategoria } from "@/lib/produtos";
import { getCategoria } from "@/lib/categorias";
import { getImagemProduto } from "@/lib/imagens";
import { NEGOCIO, linkWhatsApp } from "@/lib/negocio";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import { faqProduto } from "@/lib/faq";
import { getPilarProduto, getPilarCategoria } from "@/lib/posts";

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const produto = getProduto(params.slug);
  if (!produto) return {};
  const url = `https://${NEGOCIO.dominio}/produtos/${produto.slug}/`;
  const imagem = getImagemProduto(produto.slug);
  const descricao =
    produto.descricaoCurta ||
    `${produto.nome} — brinde personalizado para empresas, pousadas e pessoa física. Pedido mínimo de ${produto.pedidoMinimo || 20} unidades.`;
  return {
    title: `${produto.nome} — Brinde Corporativo`,
    description: descricao,
    openGraph: {
      url,
      title: produto.nome,
      description: descricao,
      images: imagem
        ? [`https://${NEGOCIO.dominio}${imagem}`]
        : [{ url: "/og-cover.svg", width: 1200, height: 630 }],
    },
  };
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const produto = getProduto(params.slug);
  if (!produto) notFound();

  const categoria = getCategoria(produto.categoria);
  if (!categoria) notFound();

  const imagem = getImagemProduto(produto.slug);
  const relacionados = getProdutosPorCategoria(categoria.slug)
    .filter((p) => p.slug !== produto.slug)
    .slice(0, 4);

  const faq = faqProduto(produto, categoria);
  const min = produto.pedidoMinimo || NEGOCIO.pedidoMinimoPadrao;
  const pilarProduto = getPilarProduto(produto.slug);
  const pilarCategoria = getPilarCategoria(categoria.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      productSchema(
        produto,
        categoria,
        imagem ? `https://${NEGOCIO.dominio}${imagem}` : undefined
      ),
      faqSchema(faq),
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Categorias", url: "/categorias/" },
        { name: categoria.nome, url: `/categorias/${categoria.slug}/` },
        { name: produto.nome, url: `/produtos/${produto.slug}/` },
      ]),
    ],
  };

  const mensagemWhats = `Olá! Quero orçamento de ${produto.nome}.`;

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
          { name: categoria.nome, href: `/categorias/${categoria.slug}/` },
          { name: produto.nome },
        ]}
      />

      <section className="mx-auto max-w-wrap px-8 pb-24 pt-6">
        <h1 className="font-serif text-[28px] font-medium md:text-[36px]">{produto.nome}</h1>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Galeria */}
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[3px] border border-line bg-gradient-to-br from-paper to-[#E3E6DB]">
            {imagem ? (
              <Image
                src={imagem}
                alt={produto.nome}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <CategoryIcon icon={categoria.icon} className="h-24 w-24 text-ink-soft" />
            )}
            <span className="absolute bottom-3 left-3 rounded-[2px] bg-ink px-[10px] py-1 font-mono text-[10px] tracking-[0.04em] text-paper-2">
              peça personalizada
            </span>
          </div>

          {/* Bloco de decisão */}
          <div>
            <div className="rounded-[3px] border border-line bg-paper-2 p-6">
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.06em] text-brass-dark">
                {categoria.nome}
              </div>

              {produto.precos && produto.precos.length > 0 ? (
                <table className="mb-4 w-full text-sm">
                  <tbody>
                    {produto.precos.map((p) => (
                      <tr key={p.quantidade} className="border-t border-line">
                        <td className="py-2 text-ink-soft">a partir de {p.quantidade} un.</td>
                        <td className="py-2 text-right font-serif text-lg font-medium">
                          R$ {p.precoUnitario.toFixed(2).replace(".", ",")}/un.
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="mb-4 font-serif text-xl font-medium">
                  Consulte o preço <span className="text-sm font-sans font-normal text-ink-soft">por quantidade</span>
                </p>
              )}

              <ul className="mb-6 space-y-1 text-sm text-ink-soft">
                <li>Pedido mínimo: <strong className="text-ink">{min} unidades</strong></li>
                <li>Prazo de produção: <strong className="text-ink">{NEGOCIO.prazoProducaoPadrao}</strong></li>
                {produto.notaProducaoInterna && (
                  <li>Técnica: <strong className="text-ink">{produto.notaProducaoInterna}</strong></li>
                )}
              </ul>

              <a href={linkWhatsApp(mensagemWhats)} className="btn w-full justify-center">
                Pedir orçamento pelo WhatsApp
              </a>
            </div>

            <div className="mt-6">
              <h2 className="mb-2 text-base font-semibold">Resposta direta</h2>
              <p className="text-[15px] text-ink-soft">
                {produto.nome} é um brinde personalizado da categoria{" "}
                {categoria.nome.toLowerCase()}, com pedido mínimo de {min}{" "}
                unidades e produção em {NEGOCIO.prazoProducaoPadrao}. Ideal para
                ações de marketing, kits corporativos ou presentes com a marca
                de quem pediu.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-3 font-serif text-2xl font-medium">Por que este brinde</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Personalizado com a marca de quem pediu — não é item genérico de prateleira</li>
              <li>· Prova digital da arte antes da produção, sem surpresas</li>
              <li>· Preço decrescente por volume, ideal para pedidos corporativos</li>
              <li>· Produção nacional, com prazo e rastreio combinados no orçamento</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-2xl font-medium">Personalização disponível</h2>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-t border-line">
                  <td className="py-2 text-ink-soft">Técnica</td>
                  <td className="py-2 text-right">{produto.notaProducaoInterna || "sob avaliação da arte"}</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="py-2 text-ink-soft">Área de gravação</td>
                  <td className="py-2 text-right">consulte no orçamento</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="py-2 text-ink-soft">Cores</td>
                  <td className="py-2 text-right">conforme arte enviada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-14 max-w-2xl">
          <h2 className="font-serif text-2xl font-medium">
            Perguntas frequentes sobre {produto.nome.toLowerCase()}
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

        {relacionados.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-serif text-2xl font-medium">Produtos relacionados</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {relacionados.map((p) => (
                <ProductCard key={p.slug} produto={p} />
              ))}
            </div>
          </div>
        )}

        {(pilarProduto || pilarCategoria) && (
          <div className="mt-16 max-w-2xl">
            <h2 className="mb-4 font-serif text-2xl font-medium">Artigos relacionados</h2>
            <ul className="space-y-3">
              {pilarProduto && (
                <li>
                  <Link href={`/blog/${pilarProduto.slug}/`} className="text-sm text-brass-dark hover:underline">
                    {pilarProduto.titulo}
                  </Link>
                </li>
              )}
              {pilarCategoria && (
                <li>
                  <Link href={`/blog/${pilarCategoria.slug}/`} className="text-sm text-brass-dark hover:underline">
                    {pilarCategoria.titulo}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="mt-16 flex flex-col items-start gap-4 rounded-[3px] border border-line bg-paper-2 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-xl font-medium">Pronto para pedir {produto.nome.toLowerCase()}?</h2>
            <p className="mt-1 text-sm text-ink-soft">Fale agora pelo WhatsApp ou peça um orçamento em lote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={linkWhatsApp(mensagemWhats)} className="btn">
              Pedir pelo WhatsApp
            </a>
            <Link href="/orcamento/" className="btn btn-outline">
              Orçamento em lote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA sticky mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-line bg-paper-2 p-3 md:hidden">
        <div className="text-sm">
          <div className="font-medium">{produto.nome}</div>
          <div className="text-xs text-ink-soft">a partir de {min}un.</div>
        </div>
        <a href={linkWhatsApp(mensagemWhats)} className="btn shrink-0">
          Orçamento
        </a>
      </div>

      <Footer />
    </>
  );
}
