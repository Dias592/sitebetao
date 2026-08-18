export type PostFaq = { pergunta: string; resposta: string };
export type PostHowTo = { titulo: string; passos: string[] };

export type Post = {
  slug: string;
  titulo: string;
  descricao: string;
  tipo: "pilar-categoria" | "complementar-categoria" | "pilar-produto";
  categoriaRelacionada: string; // slug da categoria
  produtoRelacionado?: string; // slug do produto (obrigatório para pilar-produto)
  dataPublicacao: string; // ISO
  dataAtualizacao: string; // ISO
  conteudoHtml: string; // corpo do artigo, sem FAQ (FAQ é renderizado à parte)
  faq: PostFaq[];
  howTo?: PostHowTo;
};

import { termicosPilarCategoria } from "./posts/termicos/pilar-categoria";
import { termicosPilaresProdutoParte1 } from "./posts/termicos/pilares-produto";
import { termicosPilaresProdutoParte2 } from "./posts/termicos/pilares-produto-2";

export const posts: Post[] = [
  termicosPilarCategoria,
  ...termicosPilaresProdutoParte1,
  ...termicosPilaresProdutoParte2,
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPilarCategoria(categoriaSlug: string) {
  return posts.find((p) => p.tipo === "pilar-categoria" && p.categoriaRelacionada === categoriaSlug);
}

export function getPilarProduto(produtoSlug: string) {
  return posts.find((p) => p.tipo === "pilar-produto" && p.produtoRelacionado === produtoSlug);
}

export function getPostsPorCategoria(categoriaSlug: string) {
  return posts.filter((p) => p.categoriaRelacionada === categoriaSlug);
}
