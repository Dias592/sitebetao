import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categorias } from "@/lib/categorias";
import { getMaisBuscados, getProdutosPorCategoria } from "@/lib/produtos";
import { getImagemProduto } from "@/lib/imagens";
import { linkWhatsApp } from "@/lib/negocio";

export default function HomePage() {
  const maisBuscados = getMaisBuscados(8);
  const hero = maisBuscados.slice(0, 5).map((p) => ({
    slug: p.slug,
    nome: p.nome,
    categoria: p.categoria,
    imagem: getImagemProduto(p.slug),
  }));

  return (
    <>
      <Header />

      <section className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-8 pb-[88px] pt-10 md:grid-cols-[1.1fr_0.9fr] md:pt-[72px]">
        <div className="in d1">
          <span className="mono eyebrow font-mono text-xs uppercase tracking-[0.06em]">
            Brindes personalizados sob encomenda
          </span>
          <h1 className="mt-[18px] font-serif text-[36px] font-medium leading-[1.08] tracking-[-0.01em] md:text-[52px]">
            Cada peça leva <em className="italic text-brass-dark">a marca de quem pediu</em>.
          </h1>
          <p className="mt-[22px] max-w-[460px] text-[17px] text-ink-soft">
            Bolsas, canecas, squeezes, porta-documentos e mais de 70 itens —
            personalizados em lote para empresas e pousadas, ou em pequenas
            quantidades para você.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-[14px]">
            <Link href="/orcamento/" className="btn">
              Peça um orçamento
            </Link>
            <Link href="/categorias/" className="btn btn-outline">
              Ver categorias
            </Link>
          </div>
          <div className="mt-11 flex gap-7 border-t border-line pt-6">
            <div>
              <div className="font-serif text-2xl font-medium md:text-[26px]">70+</div>
              <div className="mt-[2px] text-xs text-ink-soft">itens no catálogo</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-medium md:text-[26px]">1 a 300</div>
              <div className="mt-[2px] text-xs text-ink-soft">unidades por pedido</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-medium md:text-[26px]">10–20</div>
              <div className="mt-[2px] text-xs text-ink-soft">dias úteis de produção</div>
            </div>
          </div>
        </div>
        <div className="in d2 hidden md:block">
          <HeroCarousel slides={hero} />
        </div>
      </section>

      <div className="bg-ink px-8 py-[22px] text-paper-2">
        <div className="mx-auto flex max-w-wrap flex-wrap justify-between gap-[18px]">
          <div className="flex items-center gap-[10px] text-[13px]">
            <span className="h-[6px] w-[6px] rounded-full bg-brass" /> Orçamento em até 1h por WhatsApp
          </div>
          <div className="flex items-center gap-[10px] text-[13px]">
            <span className="h-[6px] w-[6px] rounded-full bg-brass" /> Entrega para todo o Brasil
          </div>
          <div className="flex items-center gap-[10px] text-[13px]">
            <span className="h-[6px] w-[6px] rounded-full bg-brass" /> Pedido mínimo flexível por produto
          </div>
          <div className="flex items-center gap-[10px] text-[13px]">
            <span className="h-[6px] w-[6px] rounded-full bg-brass" /> Arte e prova antes da produção
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-wrap px-8 py-[88px]">
        <div className="mb-11 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-[28px] font-medium md:text-[34px]">Categorias</h2>
            <p className="mt-2 max-w-[420px] text-[15px] text-ink-soft">
              Do brinde de boas-vindas da pousada ao presente corporativo de fim
              de ano — organizado por tipo de peça.
            </p>
          </div>
          <Link href="/categorias/" className="mono font-mono text-xs uppercase tracking-[0.06em] text-ink">
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {categorias.map((c) => (
            <CategoryCard key={c.slug} categoria={c} count={getProdutosPorCategoria(c.slug).length} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-wrap px-8 pb-[88px]">
        <div className="mb-11 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-[28px] font-medium md:text-[34px]">Mais buscados</h2>
            <p className="mt-2 max-w-[420px] text-[15px] text-ink-soft">
              Peças com maior saída entre pousadas, empresas e pedidos individuais.
            </p>
          </div>
          <Link href="/categorias/" className="mono font-mono text-xs uppercase tracking-[0.06em] text-ink">
            Ver catálogo →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {maisBuscados.map((p) => (
            <ProductCard key={p.slug} produto={p} />
          ))}
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-wrap px-8 pb-[88px]">
        <h2 className="mb-0 font-serif text-[28px] font-medium md:text-[34px]">Como funciona</h2>
        <div className="mt-11 grid grid-cols-1 border-t border-line md:grid-cols-4">
          {[
            { n: "01", t: "Escolha o brinde", d: "Navegue pelas categorias ou fale direto no WhatsApp com o que você precisa." },
            { n: "02", t: "Envie sua marca", d: "Mande a logo ou arte — te ajudamos a adaptar para a técnica do produto." },
            { n: "03", t: "Aprove a arte", d: "Você recebe a prova digital antes de qualquer peça entrar em produção." },
            { n: "04", t: "Receba no endereço", d: "Produção em 10–20 dias úteis, com rastreio até a entrega." },
          ].map((s, i) => (
            <div key={s.n} className={`border-line p-7 md:border-r ${i === 3 ? "md:border-r-0" : ""}`}>
              <div className="mb-[10px] font-mono text-xs text-brass-dark">{s.n}</div>
              <h4 className="mb-[6px] text-[15px] font-semibold">{s.t}</h4>
              <p className="text-[13px] text-ink-soft">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-ink px-8 py-16 text-paper-2 md:px-12">
          <span className="mono mb-4 block font-mono text-xs uppercase tracking-[0.06em] text-brass">
            Para empresas e pousadas
          </span>
          <h3 className="mb-[14px] max-w-[340px] font-serif text-[28px] font-medium">
            Brindes em volume para fidelizar hóspedes e clientes.
          </h3>
          <p className="mb-6 max-w-[360px] text-sm text-paper-2/75">
            Kits de boas-vindas, uniformes e canecas de marca para pousadas,
            hotéis e empresas — preço decrescente por quantidade e
            atendimento consultivo.
          </p>
          <a href="/orcamento/" className="btn btn-brass">
            Orçamento para empresas
          </a>
        </div>
        <div className="bg-paper-2 px-8 py-16 md:px-12">
          <span className="mono mb-4 block font-mono text-xs uppercase tracking-[0.06em] text-brass-dark">
            Para você
          </span>
          <h3 className="mb-[14px] max-w-[340px] font-serif text-[28px] font-medium">
            Presente com a sua marca, em poucas unidades.
          </h3>
          <p className="mb-6 max-w-[360px] text-sm text-ink-soft">
            Aniversário, casamento, chá de bebê — peça a partir de poucas
            peças, sem burocracia, direto pelo WhatsApp.
          </p>
          <a href={linkWhatsApp("Olá! Quero fazer um pedido pequeno de brindes personalizados.")} className="btn">
            Fazer meu pedido
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
