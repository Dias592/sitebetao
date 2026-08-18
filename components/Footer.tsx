import Link from "next/link";
import Logo from "./Logo";
import { NEGOCIO } from "@/lib/negocio";
import { categorias } from "@/lib/categorias";

export default function Footer() {
  return (
    <footer className="bg-ink px-8 pb-8 pt-16 text-paper-2">
      <div className="mx-auto grid max-w-wrap grid-cols-2 gap-10 md:grid-cols-4 md:[grid-template-columns:1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-[14px]">
            <Logo dark />
          </div>
          <a
            href={`https://wa.me/${NEGOCIO.whatsapp}`}
            className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2"
          >
            WhatsApp: {NEGOCIO.telefoneDisplay}
          </a>
          <a
            href={`mailto:${NEGOCIO.email}`}
            className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2"
          >
            {NEGOCIO.email}
          </a>
        </div>
        <div>
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.06em] text-brass">
            Categorias
          </h5>
          {categorias.slice(0, 5).map((c) => (
            <Link
              key={c.slug}
              href={`/categorias/${c.slug}/`}
              className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2"
            >
              {c.nome.replace(" Personalizadas", "").replace(" Personalizados", "")}
            </Link>
          ))}
        </div>
        <div>
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.06em] text-brass">
            Para quem compra
          </h5>
          <Link href="/orcamento/" className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2">
            Empresas e pousadas
          </Link>
          <Link href="/orcamento/" className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2">
            Pessoa física
          </Link>
          <Link href="/sobre/" className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2">
            Como funciona
          </Link>
          <Link href="/contato/" className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2">
            Perguntas frequentes
          </Link>
        </div>
        <div>
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.06em] text-brass">
            Conteúdo
          </h5>
          <Link href="/blog/" className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2">
            Guias de compra
          </Link>
          <Link href="/blog/" className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2">
            Preços por categoria
          </Link>
          <Link href="/blog/" className="mb-[9px] block text-[13px] text-paper-2/72 hover:text-paper-2">
            Ideias por ocasião
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-11 flex max-w-wrap flex-col gap-2 border-t border-paper-2/14 pt-6 text-xs text-paper-2/55 md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} {NEGOCIO.nome} — todos os direitos reservados</span>
        <span>CNPJ sob consulta · Brindes personalizados sob encomenda</span>
      </div>
    </footer>
  );
}
