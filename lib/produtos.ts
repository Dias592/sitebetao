// lib/produtos.ts
//
// Catálogo gerado a partir das pastas de produtos enviadas.
// Nomes limpos: sem numeração original e sem jargão de produção
// (DTF, sublimação, sem resina, METAL) — esses termos vão para
// `notaProducaoInterna`, não para o título/H1, porque não é isso
// que o cliente pesquisa no Google.
//
// PENDENTE (preencher conforme for enviado pelo cliente):
// - precos: faixas por quantidade
// - descricaoCurta
// - tecnicasPersonalizacao
//
// As imagens são resolvidas separadamente em lib/imagens.ts a partir
// das fotos reais em CATEGORIAS/, copiadas para public/images/produtos/.
//
// ATENÇÃO — DUPLICATAS (marcadas com precisaDiferenciar: true):
// Estes pares têm nome idêntico na pasta original. O cliente precisa
// dizer a diferença real (cor/tamanho/material) antes de publicar,
// senão as duas páginas competem entre si no Google:
//   - bolsa-atheta-personalizada (1) e (2)
//   - porta-estetoscopio-personalizado (1) e (2)
//   - porta-tablet-personalizado (1) e (2)
//   - porta-documentos-personalizado (1) e (2)
//   - porta-oculos-personalizado (1) e (2)
//   - porta-cartao-couro-personalizado (itens 41 e 64, praticamente idênticos)

export type Produto = {
  id: string;
  categoria: string;
  nome: string; // título SEO — usar no H1 e <title>
  slug: string;
  origemArquivo: string; // referência interna à pasta/número original, não usar no site
  notaProducaoInterna?: string; // técnica/material de produção, uso interno ou para a seção "personalização disponível"
  precisaDiferenciar?: boolean;
  descricaoCurta?: string;
  precos?: { quantidade: number; precoUnitario: number }[];
  pedidoMinimo?: number;
  tecnicasPersonalizacao?: string[];
  maisBuscado?: boolean;
};

export const produtos: Produto[] = [
  // ===== BOLSAS (15) =====
  { id: 'shoulder-bag-tecido-personalizada', categoria: 'bolsas', nome: 'Shoulder Bag de Tecido Personalizada', slug: 'shoulder-bag-tecido-personalizada', origemArquivo: '37 shouder bad de tecido', pedidoMinimo: 20 },
  { id: 'pochete-lona-personalizada', categoria: 'bolsas', nome: 'Pochete de Lona Personalizada', slug: 'pochete-lona-personalizada', origemArquivo: '47 pochette lona', pedidoMinimo: 20 },
  { id: 'bolsa-lona-crua-personalizada', categoria: 'bolsas', nome: 'Bolsa de Lona Crua Personalizada', slug: 'bolsa-lona-crua-personalizada', origemArquivo: '53 bolsa lona crua', pedidoMinimo: 20 },
  { id: 'bolsa-lona-preta-personalizada', categoria: 'bolsas', nome: 'Bolsa de Lona Preta Personalizada', slug: 'bolsa-lona-preta-personalizada', origemArquivo: '54 bolsa lona preta', pedidoMinimo: 20 },
  { id: 'bolsa-atheta-personalizada-1', categoria: 'bolsas', nome: 'Bolsa Atheta Personalizada', slug: 'bolsa-atheta-personalizada-1', origemArquivo: '60 bolsa atheta - personalizada', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'bolsa-atheta-personalizada-2', categoria: 'bolsas', nome: 'Bolsa Atheta Personalizada', slug: 'bolsa-atheta-personalizada-2', origemArquivo: '61 bolsa atheta - personalizada', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'shoulder-bag-neoprene-personalizada', categoria: 'bolsas', nome: 'Shoulder Bag de Neoprene Personalizada', slug: 'shoulder-bag-neoprene-personalizada', origemArquivo: '62 shouder bad de neoprene - personalizada', pedidoMinimo: 20 },
  { id: 'bolsa-lona-alca-pu-personalizada', categoria: 'bolsas', nome: 'Bolsa de Lona com Alça em PU Personalizada', slug: 'bolsa-lona-alca-pu-personalizada', origemArquivo: '65 bolsa lona, alça em PU - Personalisada', pedidoMinimo: 20 },
  { id: 'bolsa-transporte-roupas-personalizada', categoria: 'bolsas', nome: 'Bolsa de Transporte para Roupas Personalizada', slug: 'bolsa-transporte-roupas-personalizada', origemArquivo: '66 Bolsa transporte para roupas - personalize sua marca', pedidoMinimo: 20 },
  { id: 'mochilao-personalizado', categoria: 'bolsas', nome: 'Mochilão Personalizado', slug: 'mochilao-personalizado', origemArquivo: '67 mochilão personalizado', pedidoMinimo: 20 },
  { id: 'ecobag-personalizada', categoria: 'bolsas', nome: 'Ecobag Personalizada', slug: 'ecobag-personalizada', origemArquivo: '68 ecobag - personalizado', maisBuscado: true, pedidoMinimo: 20 },
  { id: 'bolsa-puffer-personalizada', categoria: 'bolsas', nome: 'Bolsa Puffer Personalizada', slug: 'bolsa-puffer-personalizada', origemArquivo: '69 bolsa Puffer', pedidoMinimo: 20 },
  { id: 'tote-bag-personalizada', categoria: 'bolsas', nome: 'Tote Bag Personalizada', slug: 'tote-bag-personalizada', origemArquivo: '75 Tote Bag', pedidoMinimo: 20 },
  { id: 'tote-bag-black-personalizada', categoria: 'bolsas', nome: 'Tote Bag Black Personalizada', slug: 'tote-bag-black-personalizada', origemArquivo: '76 tote black', pedidoMinimo: 20 },
  { id: 'tote-minimalista-personalizada', categoria: 'bolsas', nome: 'Tote Minimalista Personalizada', slug: 'tote-minimalista-personalizada', origemArquivo: '77 Minimalist Tote', pedidoMinimo: 20 },

  // ===== NECESSAIRE (6) =====
  { id: 'necessaire-puffer-personalizada', categoria: 'necessaire', nome: 'Necessaire Puffer Personalizada', slug: 'necessaire-puffer-personalizada', origemArquivo: '39 Necessarie puffer', pedidoMinimo: 20 },
  { id: 'necessaire-cristal-personalizada', categoria: 'necessaire', nome: 'Necessaire Cristal Personalizada', slug: 'necessaire-cristal-personalizada', origemArquivo: '48 necesserie cristal', maisBuscado: true, pedidoMinimo: 20 },
  { id: 'necessaire-couro-personalizada', categoria: 'necessaire', nome: 'Necessaire de Couro Personalizada', slug: 'necessaire-couro-personalizada', origemArquivo: '49 necesserie couro', pedidoMinimo: 20 },
  { id: 'porta-estetoscopio-personalizado-1', categoria: 'necessaire', nome: 'Porta-Estetoscópio Personalizado', slug: 'porta-estetoscopio-personalizado-1', origemArquivo: '55 Porta estetoscópio Personalizado (1)', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'porta-estetoscopio-personalizado-2', categoria: 'necessaire', nome: 'Porta-Estetoscópio Personalizado', slug: 'porta-estetoscopio-personalizado-2', origemArquivo: '55 Porta estetoscópio Personalizado (2)', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'porta-fone-personalizado', categoria: 'necessaire', nome: 'Porta-Fone Personalizado', slug: 'porta-fone-personalizado', origemArquivo: '57 Porta fone', pedidoMinimo: 20 },

  // ===== NEOPRENE (2) =====
  { id: 'bolsa-neoprene-personalizada', categoria: 'neoprene', nome: 'Bolsa de Neoprene Personalizada', slug: 'bolsa-neoprene-personalizada', origemArquivo: '25 Bolsa Neoprene para Sublimação', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },
  { id: 'lixeira-carro-personalizada', categoria: 'neoprene', nome: 'Lixeira de Carro Personalizada', slug: 'lixeira-carro-personalizada', origemArquivo: '26 Lixeira de Carro para Sublimação', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },

  // ===== PORCELANAS (7) =====
  { id: 'caneca-porcelana-biona-300ml-personalizada', categoria: 'porcelanas', nome: 'Caneca de Porcelana Biona 300ml Personalizada', slug: 'caneca-porcelana-biona-300ml-personalizada', origemArquivo: '17 Caneca de Porcelana Nacional Biona 300 ml - Subli...', pedidoMinimo: 20 },
  { id: 'caneca-porcelana-100ml-personalizada', categoria: 'porcelanas', nome: 'Caneca de Porcelana 100ml Personalizada', slug: 'caneca-porcelana-100ml-personalizada', origemArquivo: '18 Caneca de Porcelana 100ml p Sublimação', maisBuscado: true, pedidoMinimo: 20 },
  { id: 'caneca-porcelana-interior-alca-colorida-personalizada', categoria: 'porcelanas', nome: 'Caneca de Porcelana com Interior e Alça Colorida Personalizada', slug: 'caneca-porcelana-interior-alca-colorida-personalizada', origemArquivo: '19 Caneca Porcelana com Interior e Alça Colorido - Im...', pedidoMinimo: 20 },
  { id: 'xicara-petit-pires-90ml-personalizada', categoria: 'porcelanas', nome: 'Xícara Petit com Pires 90ml Personalizada', slug: 'xicara-petit-pires-90ml-personalizada', origemArquivo: '20 Xícara Petit com Pires Interior e Alça Colorida 90ml...', pedidoMinimo: 20 },
  { id: 'xicara-pires-porcelana-180ml-personalizada', categoria: 'porcelanas', nome: 'Xícara com Pires de Porcelana 180ml Personalizada', slug: 'xicara-pires-porcelana-180ml-personalizada', origemArquivo: '21 Xícara com Pires de Porcelana 180 ml para Sublimação', pedidoMinimo: 20 },
  { id: 'caneca-porcelana-alca-coracao-personalizada', categoria: 'porcelanas', nome: 'Caneca de Porcelana com Alça Coração Personalizada', slug: 'caneca-porcelana-alca-coracao-personalizada', origemArquivo: '22 Caneca de Porcelana Alça Coração Branca Mecolour - Su...', pedidoMinimo: 20 },
  { id: 'caneca-porcelana-fall-350ml-personalizada', categoria: 'porcelanas', nome: 'Caneca de Porcelana Fall 350ml Personalizada', slug: 'caneca-porcelana-fall-350ml-personalizada', origemArquivo: '23 Caneca de Porcelana Fall 350ml Sublime - Sublimação', pedidoMinimo: 20 },

  // ===== PORTA-CARTÃO (5) =====
  { id: 'porta-cartao-couro-personalizado-1', categoria: 'porta-cartao', nome: 'Porta-Cartão em Couro Personalizado', slug: 'porta-cartao-couro-personalizado-1', origemArquivo: '41 Porta cartao em couro', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'porta-cartao-sintetico-personalizado', categoria: 'porta-cartao', nome: 'Porta-Cartão Sintético Personalizado', slug: 'porta-cartao-sintetico-personalizado', origemArquivo: '42 porta cartao sintetico', pedidoMinimo: 20 },
  { id: 'porta-cartao-costurado-personalizado', categoria: 'porta-cartao', nome: 'Porta-Cartão Costurado Personalizado', slug: 'porta-cartao-costurado-personalizado', origemArquivo: '43 porta cartao costurado', pedidoMinimo: 20 },
  { id: 'porta-notas-personalizado', categoria: 'porta-cartao', nome: 'Porta-Notas Personalizado', slug: 'porta-notas-personalizado', origemArquivo: '63 porta notas - personalizado', pedidoMinimo: 20 },
  { id: 'porta-cartao-couro-personalizado-2', categoria: 'porta-cartao', nome: 'Porta-Cartão em Couro Personalizado', slug: 'porta-cartao-couro-personalizado-2', origemArquivo: '64 Porta cartão - personalizado em couro', precisaDiferenciar: true, pedidoMinimo: 20 },

  // ===== PORTA-DOCUMENTOS EXECUTIVOS (5) =====
  { id: 'porta-tablet-personalizado-1', categoria: 'porta-documentos', nome: 'Porta-Tablet Personalizado', slug: 'porta-tablet-personalizado-1', origemArquivo: '70 porta tablet', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'porta-tablet-personalizado-2', categoria: 'porta-documentos', nome: 'Porta-Tablet Personalizado', slug: 'porta-tablet-personalizado-2', origemArquivo: '71 porta tablet', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'pasta-executiva-personalizada', categoria: 'porta-documentos', nome: 'Pasta Executiva Personalizada', slug: 'pasta-executiva-personalizada', origemArquivo: '72 Pasta Executiva', pedidoMinimo: 20 },
  { id: 'porta-documentos-personalizado-1', categoria: 'porta-documentos', nome: 'Porta-Documentos Personalizado', slug: 'porta-documentos-personalizado-1', origemArquivo: '73 Porta-Documentos', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'porta-documentos-personalizado-2', categoria: 'porta-documentos', nome: 'Porta-Documentos Personalizado', slug: 'porta-documentos-personalizado-2', origemArquivo: '74 Porta-Documentos', precisaDiferenciar: true, pedidoMinimo: 20 },

  // ===== RELÓGIO (1) =====
  { id: 'relogio-azulejo-personalizado', categoria: 'relogio', nome: 'Relógio de Azulejo Personalizado', slug: 'relogio-azulejo-personalizado', origemArquivo: '36 Relógio Azulejo para Sublimação', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },

  // ===== SQUEEZE (4) =====
  { id: 'squeeze-aluminio-efeito-magico-500ml-personalizado', categoria: 'squeeze', nome: 'Squeeze de Alumínio Fosco Efeito Mágico 500ml Personalizado', slug: 'squeeze-aluminio-efeito-magico-500ml-personalizado', origemArquivo: '2 Squeeze de Alumínio Fosco Efeito Mágico 500ml', pedidoMinimo: 20 },
  { id: 'squeeze-termico-tampa-emborrachada-900ml-personalizado', categoria: 'squeeze', nome: 'Squeeze Térmico com Tampa Emborrachada 900ml Personalizado', slug: 'squeeze-termico-tampa-emborrachada-900ml-personalizado', origemArquivo: '4 Squeeze Térmico c Tampa Emborrachada 900ml - METAL...', pedidoMinimo: 20 },
  { id: 'squeeze-500ml-tipo-nike-personalizado', categoria: 'squeeze', nome: 'Squeeze 500ml Tipo Nike Personalizado', slug: 'squeeze-500ml-tipo-nike-personalizado', origemArquivo: '5 Squeeze 500 ml para Sublimação Tipo Nike', notaProducaoInterna: 'sublimação', maisBuscado: true, pedidoMinimo: 20 },
  { id: 'squeeze-vidro-fresh-400ml-personalizado', categoria: 'squeeze', nome: 'Squeeze de Vidro Fresh 400ml Personalizado', slug: 'squeeze-vidro-fresh-400ml-personalizado', origemArquivo: '6 Squeeze de Vidro Fresh 400ml - DTF Sem Resina', notaProducaoInterna: 'DTF sem resina', pedidoMinimo: 20 },

  // ===== TÉRMICOS (10) =====
  { id: 'copo-termico-500ml-personalizado', categoria: 'termicos', nome: 'Copo Térmico 500ml Personalizado', slug: 'copo-termico-500ml-personalizado', origemArquivo: '7 Copo Térmico 500 ml - DTF Sem Resina', notaProducaoInterna: 'DTF sem resina', pedidoMinimo: 20 },
  { id: 'garrafa-termica-420ml-display-temperatura-personalizada', categoria: 'termicos', nome: 'Garrafa Térmica 420ml com Display de Temperatura Personalizada', slug: 'garrafa-termica-420ml-display-temperatura-personalizada', origemArquivo: '8 Garrafa Térmica 420ml Display de Temperatura', pedidoMinimo: 20 },
  { id: 'caneca-chopp-termica-709ml-personalizada', categoria: 'termicos', nome: 'Caneca de Chopp Térmica 709ml Personalizada', slug: 'caneca-chopp-termica-709ml-personalizada', origemArquivo: '9 Caneca Chopp Térmica DTF-709ml Sem Resina', notaProducaoInterna: 'DTF sem resina', pedidoMinimo: 20 },
  { id: 'copo-termico-350ml-personalizado', categoria: 'termicos', nome: 'Copo Térmico 350ml Personalizado', slug: 'copo-termico-350ml-personalizado', origemArquivo: '10 Copo Térmico - DTF 350 ml Sem Resina', notaProducaoInterna: 'DTF sem resina', pedidoMinimo: 20 },
  { id: 'caneca-termica-canudo-600ml-personalizada', categoria: 'termicos', nome: 'Caneca Térmica com Canudo 600ml Personalizada', slug: 'caneca-termica-canudo-600ml-personalizada', origemArquivo: '11 Caneca Térmica Com Canudo 600ml - DTF Sem Resina', notaProducaoInterna: 'DTF sem resina', pedidoMinimo: 20 },
  { id: 'caneca-termica-canudo-glitter-1-2l-personalizada', categoria: 'termicos', nome: 'Caneca Térmica com Canudo Glitter 1,2L Personalizada', slug: 'caneca-termica-canudo-glitter-1-2l-personalizada', origemArquivo: '12 Caneca Térmica Com Canudo 1,2L Glitter - DTF Se...', notaProducaoInterna: 'DTF', pedidoMinimo: 20 },
  { id: 'taca-gin-termica-degrade-personalizada', categoria: 'termicos', nome: 'Taça de Gin Térmica Degradê 2x1 Personalizada', slug: 'taca-gin-termica-degrade-personalizada', origemArquivo: '13 Taça Gin Térmica Degradê 2x1 - DTF', notaProducaoInterna: 'DTF', pedidoMinimo: 20 },
  { id: 'copo-termico-coffee-510ml-personalizado', categoria: 'termicos', nome: 'Copo Térmico Coffee 510ml Personalizado', slug: 'copo-termico-coffee-510ml-personalizado', origemArquivo: '14 COPO TÉRMICO COFFEE DTF - 510 ML - CO...', notaProducaoInterna: 'DTF', pedidoMinimo: 20 },
  { id: 'caneca-termica-cerveja-350ml-personalizada', categoria: 'termicos', nome: 'Caneca Térmica para Cerveja 350ml Personalizada', slug: 'caneca-termica-cerveja-350ml-personalizada', origemArquivo: '15 Caneca Térmica Cerveja DTF - 350ml', notaProducaoInterna: 'DTF', pedidoMinimo: 20 },
  { id: 'garrafa-termica-500ml-personalizada', categoria: 'termicos', nome: 'Garrafa Térmica 500ml Personalizada', slug: 'garrafa-termica-500ml-personalizada', origemArquivo: '16 Garrafa Térmica 500ml - DTF - VARIAS CORES', notaProducaoInterna: 'DTF, várias cores', maisBuscado: true, pedidoMinimo: 20 },

  // ===== TOALHA (2) =====
  { id: 'toalha-lavabo-29x45-personalizada', categoria: 'toalha', nome: 'Toalha de Lavabo Personalizada 29x45cm', slug: 'toalha-lavabo-29x45-personalizada', origemArquivo: '3 Toalha Lavabo para Sublimação - 29x45cm', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },
  { id: 'toalha-lavabinho-21x38-personalizada', categoria: 'toalha', nome: 'Toalha Lavabinho Personalizada 21x38cm', slug: 'toalha-lavabinho-21x38-personalizada', origemArquivo: '24 Toalha Lavabinho para Sublimação - 21x38cm', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },

  // ===== VARIADOS (11) =====
  { id: 'jogo-americano-personalizado', categoria: 'variados', nome: 'Jogo Americano Personalizado', slug: 'jogo-americano-personalizado', origemArquivo: '38 apresentação jogo americano 2', pedidoMinimo: 20 },
  { id: 'porta-celular-plastico-personalizado', categoria: 'variados', nome: 'Porta-Celular em Plástico Personalizado', slug: 'porta-celular-plastico-personalizado', origemArquivo: '40 porta celular em plastico', pedidoMinimo: 20 },
  { id: 'chaveiro-couro-personalizado', categoria: 'variados', nome: 'Chaveiro de Couro Personalizado', slug: 'chaveiro-couro-personalizado', origemArquivo: '44 chaveiro em couro', maisBuscado: true, pedidoMinimo: 20 },
  { id: 'porta-tag-mala-botao-personalizado', categoria: 'variados', nome: 'Porta-Tag de Mala com Botão Personalizado', slug: 'porta-tag-mala-botao-personalizado', origemArquivo: '45 porta tag de mala com botão', pedidoMinimo: 20 },
  { id: 'porta-tag-mala-personalizado', categoria: 'variados', nome: 'Porta-Tag de Mala Personalizado', slug: 'porta-tag-mala-personalizado', origemArquivo: '46 porta tag de mala', pedidoMinimo: 20 },
  { id: 'mouse-pad-personalizado', categoria: 'variados', nome: 'Mouse Pad Personalizado', slug: 'mouse-pad-personalizado', origemArquivo: '50 mouse pad', pedidoMinimo: 20 },
  { id: 'porta-oculos-personalizado-1', categoria: 'variados', nome: 'Porta-Óculos Personalizado', slug: 'porta-oculos-personalizado-1', origemArquivo: '51 porta oculos', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'chaveiro-airtag-personalizado', categoria: 'variados', nome: 'Chaveiro para AirTag Personalizado', slug: 'chaveiro-airtag-personalizado', origemArquivo: '52 chaveiro airtag', pedidoMinimo: 20 },
  { id: 'porta-oculos-personalizado-2', categoria: 'variados', nome: 'Porta-Óculos Personalizado', slug: 'porta-oculos-personalizado-2', origemArquivo: '56 Porta Oculos', precisaDiferenciar: true, pedidoMinimo: 20 },
  { id: 'porta-vinho-personalizado', categoria: 'variados', nome: 'Porta-Vinho Personalizado', slug: 'porta-vinho-personalizado', origemArquivo: '58 Porta vinho', pedidoMinimo: 20 },
  { id: 'mascara-dormir-personalizada', categoria: 'variados', nome: 'Máscara de Dormir Personalizada', slug: 'mascara-dormir-personalizada', origemArquivo: '59 Tapa olhos Personalizado - core variadas', pedidoMinimo: 20 },

  // ===== VIDRO (9) =====
  { id: 'caneca-chopp-vidro-475ml-fosca-personalizada', categoria: 'vidro', nome: 'Caneca de Chopp de Vidro 475ml Fosca Personalizada', slug: 'caneca-chopp-vidro-475ml-fosca-personalizada', origemArquivo: '27 Caneca de Chopp Vidro 475ml Fosca - Sublimação', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },
  { id: 'caneca-chopp-vidro-340ml-transparente-personalizada', categoria: 'vidro', nome: 'Caneca de Chopp de Vidro 340ml Transparente Personalizada', slug: 'caneca-chopp-vidro-340ml-transparente-personalizada', origemArquivo: '28 Caneca de Chopp Vidro 340ml Transparente...', pedidoMinimo: 20 },
  { id: 'caneca-chopp-vidro-475ml-transparente-personalizada', categoria: 'vidro', nome: 'Caneca de Chopp de Vidro 475ml Transparente Personalizada', slug: 'caneca-chopp-vidro-475ml-transparente-personalizada', origemArquivo: '29 Caneca de Chopp de Vidro Transparente 475 ml - Sublimação', notaProducaoInterna: 'sublimação', maisBuscado: true, pedidoMinimo: 20 },
  { id: 'caneca-chopp-vidro-340ml-fosca-personalizada', categoria: 'vidro', nome: 'Caneca de Chopp de Vidro 340ml Fosca Personalizada', slug: 'caneca-chopp-vidro-340ml-fosca-personalizada', origemArquivo: '30 Caneca de Chopp Vidro 340ml Fosca - Sublimação', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },
  { id: 'caneca-vidro-320ml-transparente-personalizada', categoria: 'vidro', nome: 'Caneca de Vidro 320ml Transparente Personalizada', slug: 'caneca-vidro-320ml-transparente-personalizada', origemArquivo: '31 Caneca de Vidro 320ml Transparente KLEIN - Sub...', pedidoMinimo: 20 },
  { id: 'copo-whisky-vidro-266ml-personalizado', categoria: 'vidro', nome: 'Copo de Whisky de Vidro 266ml Personalizado', slug: 'copo-whisky-vidro-266ml-personalizado', origemArquivo: '32 Copo de Whisky de Vidro 266ml Transparente - ...', pedidoMinimo: 20 },
  { id: 'taca-vidro-300ml-fosca-personalizada', categoria: 'vidro', nome: 'Taça de Vidro 300ml Fosca Personalizada', slug: 'taca-vidro-300ml-fosca-personalizada', origemArquivo: '33 Taça de Vidro 300ml Fosco - Sublimação', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },
  { id: 'taca-vidro-300ml-transparente-personalizada', categoria: 'vidro', nome: 'Taça de Vidro 300ml Transparente Personalizada', slug: 'taca-vidro-300ml-transparente-personalizada', origemArquivo: '34 Taça de Vidro 300ml - Sublimação', notaProducaoInterna: 'sublimação', maisBuscado: true, pedidoMinimo: 20 },
  { id: 'copo-dose-vidro-48ml-personalizado', categoria: 'vidro', nome: 'Copo Dose de Vidro 48ml Personalizado', slug: 'copo-dose-vidro-48ml-personalizado', origemArquivo: '35 Copo Dose 48ml - Vidro p Sublimação', notaProducaoInterna: 'sublimação', pedidoMinimo: 20 },
];

export function getProduto(slug: string) {
  return produtos.find((p) => p.slug === slug);
}

export function getProdutosPorCategoria(categoriaSlug: string) {
  return produtos.filter((p) => p.categoria === categoriaSlug);
}

export function getMaisBuscados(limit = 8) {
  const marcados = produtos.filter((p) => p.maisBuscado);
  if (marcados.length >= limit) return marcados.slice(0, limit);
  const resto = produtos.filter((p) => !p.maisBuscado);
  return [...marcados, ...resto].slice(0, limit);
}
