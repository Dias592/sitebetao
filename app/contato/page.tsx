import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { NEGOCIO, linkWhatsApp } from "@/lib/negocio";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Essenza Brindes pelo WhatsApp ou e-mail para orçamentos, dúvidas e acompanhamento de pedidos.",
  openGraph: {
    url: `https://${NEGOCIO.dominio}/contato/`,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contato" }]} />
      <section className="mx-auto max-w-wrap px-8 py-16">
        <h1 className="font-serif text-[34px] font-medium md:text-[40px]">Contato</h1>
        <p className="mt-4 max-w-xl text-[15px] text-ink-soft">
          Atendimento por WhatsApp e e-mail — sem loja física, o pedido inteiro
          é feito online, do orçamento à aprovação da arte.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href={linkWhatsApp("Olá! Quero falar sobre um pedido de brindes personalizados.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] border border-line bg-paper-2 p-6 hover:border-brass"
          >
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.06em] text-brass-dark">WhatsApp</div>
            <div className="text-lg font-medium">{NEGOCIO.telefoneDisplay}</div>
            <div className="mt-1 text-sm text-ink-soft">Resposta em até 1h em horário comercial</div>
          </a>
          <a
            href={`mailto:${NEGOCIO.email}`}
            className="rounded-[3px] border border-line bg-paper-2 p-6 hover:border-brass"
          >
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.06em] text-brass-dark">E-mail</div>
            <div className="text-lg font-medium">{NEGOCIO.email}</div>
            <div className="mt-1 text-sm text-ink-soft">Para orçamentos formais e follow-up</div>
          </a>
          <a
            href={NEGOCIO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] border border-line bg-paper-2 p-6 hover:border-brass"
          >
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.06em] text-brass-dark">Instagram</div>
            <div className="text-lg font-medium">@essenzabrindes</div>
            <div className="mt-1 text-sm text-ink-soft">Fotos de peças já produzidas</div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
