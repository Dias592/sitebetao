import { NEGOCIO } from "./negocio";

export function ctaWhatsAppHtml(mensagem: string, texto: string) {
  const url = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  return `<p class="not-prose my-8"><a href="${url}" target="_blank" rel="noopener noreferrer" class="btn">${texto}</a></p>`;
}

export function produtoLink(nome: string, slug: string) {
  return `<a href="/produtos/${slug}/">${nome}</a>`;
}

export function categoriaLink(nome: string, slug: string) {
  return `<a href="/categorias/${slug}/">${nome}</a>`;
}

export function pilarProdutoLink(nome: string, slug: string) {
  return `<a href="/blog/${slug}/">${nome}</a>`;
}
