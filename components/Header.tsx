import Link from "next/link";
import Logo from "./Logo";
import { linkWhatsApp } from "@/lib/negocio";

const NAV = [
  { href: "/categorias/", label: "Categorias" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/orcamento/", label: "Para empresas" },
  { href: "/blog/", label: "Blog" },
  { href: "/contato/", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-8 py-[18px]">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={linkWhatsApp("Olá! Quero um orçamento de brindes personalizados.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
