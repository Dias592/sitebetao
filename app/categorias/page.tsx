import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryCard from "@/components/CategoryCard";
import { categorias } from "@/lib/categorias";
import { getProdutosPorCategoria } from "@/lib/produtos";
import { NEGOCIO } from "@/lib/negocio";

export const metadata: Metadata = {
  title: "Categorias de Brindes Personalizados",
  description:
    "Explore todas as categorias de brindes personalizados: bolsas, canecas, squeezes, térmicos, porta-documentos e mais de 70 itens no catálogo.",
  openGraph: {
    url: `https://${NEGOCIO.dominio}/categorias/`,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

export default function CategoriasPage() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Categorias" }]} />
      <section className="mx-auto max-w-wrap px-8 py-16">
        <h1 className="font-serif text-[34px] font-medium md:text-[40px]">Categorias de Brindes</h1>
        <p className="mt-3 max-w-xl text-[15px] text-ink-soft">
          Mais de 70 itens organizados por tipo de peça — do brinde de boas-vindas
          da pousada ao presente corporativo de fim de ano.
        </p>
        <div className="mt-11 grid grid-cols-2 gap-5 md:grid-cols-4">
          {categorias.map((c) => (
            <CategoryCard key={c.slug} categoria={c} count={getProdutosPorCategoria(c.slug).length} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
