import { NEGOCIO } from "./negocio";
import type { Produto } from "./produtos";
import type { Categoria } from "./categorias";

const SITE_URL = `https://${NEGOCIO.dominio}`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: NEGOCIO.nome,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      "Loja online de brindes personalizados para empresas, pousadas e pessoa física. Mais de 70 itens no catálogo, personalização sob encomenda.",
    sameAs: [NEGOCIO.instagram].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${NEGOCIO.whatsapp}`,
        contactType: "sales",
        email: NEGOCIO.email,
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: NEGOCIO.nome,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/categorias/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: "pt-BR",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(perguntas: { pergunta: string; resposta: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: p.resposta,
      },
    })),
  };
}

export function collectionPageSchema(categoria: Categoria) {
  return {
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/categorias/${categoria.slug}/#collectionpage`,
    name: categoria.nome,
    description: categoria.descricao,
    url: `${SITE_URL}/categorias/${categoria.slug}/`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function itemListSchema(
  produtosLista: Produto[],
  baseUrl: string = "/produtos/"
) {
  return {
    "@type": "ItemList",
    itemListElement: produtosLista.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${baseUrl}${p.slug}/`,
      name: p.nome,
    })),
  };
}

export function articleSchema(post: {
  slug: string;
  titulo: string;
  descricao: string;
  dataPublicacao: string;
  dataAtualizacao: string;
}) {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}/#article`,
    headline: post.titulo.slice(0, 110),
    description: post.descricao,
    author: { "@type": "Organization", name: NEGOCIO.nome },
    publisher: {
      "@type": "Organization",
      name: NEGOCIO.nome,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
    },
    datePublished: post.dataPublicacao,
    dateModified: post.dataAtualizacao,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
    inLanguage: "pt-BR",
  };
}

export function howToSchema(howTo: { titulo: string; passos: string[] }) {
  return {
    "@type": "HowTo",
    name: howTo.titulo,
    step: howTo.passos.map((passo, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: passo,
    })),
  };
}

export function productSchema(produto: Produto, categoria: Categoria, imagemUrl?: string) {
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/produtos/${produto.slug}/`,
    priceCurrency: "BRL",
    itemCondition: "https://schema.org/NewCondition",
  };

  if (produto.precos && produto.precos.length > 0) {
    const menorPreco = [...produto.precos].sort(
      (a, b) => a.precoUnitario - b.precoUnitario
    )[0];
    offer.price = menorPreco.precoUnitario;
    offer.eligibleQuantity = {
      "@type": "QuantitativeValue",
      minValue: menorPreco.quantidade,
    };
  }

  return {
    "@type": "Product",
    "@id": `${SITE_URL}/produtos/${produto.slug}/#product`,
    name: produto.nome,
    description:
      produto.descricaoCurta ||
      `${produto.nome} — brinde personalizado, pedido mínimo de ${produto.pedidoMinimo || 20} unidades.`,
    category: categoria.nome,
    brand: { "@id": `${SITE_URL}/#organization` },
    image: imagemUrl ? [imagemUrl] : undefined,
    offers: offer,
  };
}
