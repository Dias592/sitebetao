import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { NEGOCIO, linkWhatsApp } from "@/lib/negocio";

export const metadata: Metadata = {
  title: "Sobre a Essenza Brindes",
  description:
    "Conheça a Essenza Brindes: catálogo de mais de 70 brindes personalizados para empresas, pousadas e pessoa física, com produção nacional sob encomenda.",
  openGraph: {
    url: `https://${NEGOCIO.dominio}/sobre/`,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Sobre" }]} />
      <section className="mx-auto max-w-wrap px-8 py-16">
        <h1 className="font-serif text-[34px] font-medium md:text-[40px]">
          Sobre a <em className="italic text-brass-dark">{NEGOCIO.nome}</em>
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-[15px] text-ink-soft">
          <p>
            A {NEGOCIO.nome} é uma loja online de brindes personalizados, com
            catálogo de mais de 70 itens entre bolsas, canecas, squeezes,
            térmicos, porta-documentos e outros brindes sob encomenda.
          </p>
          <p>
            Atendemos dois perfis de cliente: empresas e pousadas que compram
            em volume para kits de boas-vindas, uniformes e ações de
            marketing; e pessoas físicas que querem um presente personalizado
            em poucas unidades.
          </p>
          <p>
            Todo pedido passa por prova digital da arte antes de entrar em
            produção — assim você aprova exatamente como sua marca vai
            aparecer na peça antes de qualquer unidade ser fabricada. A
            produção é feita em {NEGOCIO.prazoProducaoPadrao} e a entrega
            cobre todo o Brasil, com rastreio.
          </p>
          <p>
            Não temos loja física — todo o atendimento, do orçamento à
            aprovação da arte, acontece pelo WhatsApp e e-mail.
          </p>
        </div>
        <a href={linkWhatsApp("Olá! Quero saber mais sobre a Essenza Brindes.")} className="btn mt-8">
          Falar no WhatsApp
        </a>
      </section>
      <Footer />
    </>
  );
}
