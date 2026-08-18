import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import OrcamentoForm from "@/components/OrcamentoForm";
import { NEGOCIO } from "@/lib/negocio";

export const metadata: Metadata = {
  title: "Orçamento em Lote para Empresas e Pousadas",
  description:
    "Peça um orçamento de brindes personalizados em lote para sua empresa, hotel ou pousada. Preço decrescente por quantidade e atendimento consultivo.",
  openGraph: {
    url: `https://${NEGOCIO.dominio}/orcamento/`,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

export default function OrcamentoPage() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Orçamento" }]} />
      <section className="mx-auto grid max-w-wrap grid-cols-1 gap-14 px-8 py-16 md:grid-cols-2">
        <div>
          <h1 className="font-serif text-[34px] font-medium md:text-[40px]">
            Orçamento em lote para empresas e pousadas
          </h1>
          <p className="mt-4 max-w-md text-[15px] text-ink-soft">
            Preencha os dados do seu pedido e receba uma proposta com preço
            decrescente por quantidade. Ideal para kits de boas-vindas,
            brindes de fim de ano e uniformes personalizados.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-soft">
            <li>· Resposta em até 1h em horário comercial, pelo WhatsApp</li>
            <li>· Prova digital da arte antes da produção</li>
            <li>· Pedido mínimo de {NEGOCIO.pedidoMinimoPadrao} unidades por item</li>
            <li>· Produção em {NEGOCIO.prazoProducaoPadrao}, com rastreio até a entrega</li>
          </ul>
        </div>
        <OrcamentoForm />
      </section>
      <Footer />
    </>
  );
}
