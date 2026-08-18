export type Categoria = {
  slug: string;
  nome: string;
  nomeSingular: string;
  descricao: string;
  icon: string;
};

export const categorias: Categoria[] = [
  {
    slug: "bolsas",
    nome: "Bolsas Personalizadas",
    nomeSingular: "Bolsa Personalizada",
    descricao:
      "Ecobags, totes, mochilões e bolsas de lona personalizadas com a marca da sua empresa ou pousada.",
    icon: "bolsa",
  },
  {
    slug: "necessaire",
    nome: "Necessaires Personalizadas",
    nomeSingular: "Necessaire Personalizada",
    descricao:
      "Necessaires e porta-acessórios personalizados para kits de boas-vindas e brindes corporativos.",
    icon: "necessaire",
  },
  {
    slug: "neoprene",
    nome: "Produtos em Neoprene",
    nomeSingular: "Produto em Neoprene",
    descricao: "Bolsas térmicas e acessórios em neoprene personalizados por sublimação.",
    icon: "neoprene",
  },
  {
    slug: "porcelanas",
    nome: "Porcelanas Personalizadas",
    nomeSingular: "Peça em Porcelana Personalizada",
    descricao: "Canecas e xícaras de porcelana personalizadas por sublimação, para uso diário ou presente.",
    icon: "porcelana",
  },
  {
    slug: "porta-cartao",
    nome: "Porta-cartões Personalizados",
    nomeSingular: "Porta-cartão Personalizado",
    descricao: "Porta-cartões em couro e sintético personalizados com a marca da empresa.",
    icon: "porta-cartao",
  },
  {
    slug: "porta-documentos",
    nome: "Porta-documentos Executivos",
    nomeSingular: "Porta-documentos Executivo",
    descricao: "Pastas executivas, porta-tablets e porta-documentos personalizados para brindes corporativos.",
    icon: "porta-documentos",
  },
  {
    slug: "relogio",
    nome: "Relógios Personalizados",
    nomeSingular: "Relógio Personalizado",
    descricao: "Relógios de parede personalizados por sublimação — item de decoração de longa duração.",
    icon: "relogio",
  },
  {
    slug: "squeeze",
    nome: "Squeezes Personalizados",
    nomeSingular: "Squeeze Personalizado",
    descricao: "Squeezes de alumínio, vidro e plástico personalizados — clássico brinde fitness corporativo.",
    icon: "squeeze",
  },
  {
    slug: "termicos",
    nome: "Térmicos e Garrafas Personalizadas",
    nomeSingular: "Item Térmico Personalizado",
    descricao: "Copos, canecas e garrafas térmicas personalizadas — o brinde mais pedido por empresas e pousadas.",
    icon: "termico",
  },
  {
    slug: "toalha",
    nome: "Toalhas Personalizadas",
    nomeSingular: "Toalha Personalizada",
    descricao: "Toalhas de lavabo personalizadas por sublimação para hotéis, pousadas e uso doméstico.",
    icon: "toalha",
  },
  {
    slug: "variados",
    nome: "Brindes Variados",
    nomeSingular: "Brinde Personalizado",
    descricao: "Chaveiros, porta-óculos, mouse pads e outros brindes personalizados variados.",
    icon: "variados",
  },
  {
    slug: "vidro",
    nome: "Produtos em Vidro Personalizados",
    nomeSingular: "Peça em Vidro Personalizada",
    descricao: "Canecas de chopp, taças e copos de vidro personalizados por sublimação.",
    icon: "vidro",
  },
];

export function getCategoria(slug: string) {
  return categorias.find((c) => c.slug === slug);
}
