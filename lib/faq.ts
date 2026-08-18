import type { Categoria } from "./categorias";
import type { Produto } from "./produtos";
import { NEGOCIO } from "./negocio";

export function faqCategoria(categoria: Categoria) {
  const nome = categoria.nomeSingular.toLowerCase();
  return [
    {
      pergunta: `Qual a quantidade mínima para pedir ${nome}?`,
      resposta: `O pedido mínimo padrão é de ${NEGOCIO.pedidoMinimoPadrao} unidades para a maioria dos itens de ${categoria.nome.toLowerCase()}. Alguns produtos específicos podem ter mínimo diferente — confirme pelo WhatsApp antes de fechar o pedido.`,
    },
    {
      pergunta: `Quais técnicas de personalização são usadas em ${categoria.nome.toLowerCase()}?`,
      resposta: `Depende do material de cada peça — sublimação, DTF (impressão digital direto no tecido/superfície) ou gravação, conforme o produto. A técnica exata de cada item aparece na página do produto, na seção "Personalização disponível".`,
    },
    {
      pergunta: `Qual o prazo de produção de ${nome} personalizado?`,
      resposta: `O prazo padrão é de ${NEGOCIO.prazoProducaoPadrao}, contados a partir da aprovação da arte. Pedidos maiores ou com múltiplos itens podem levar um pouco mais — o prazo exato é confirmado no orçamento.`,
    },
    {
      pergunta: `Posso pedir ${nome} para pessoa física, em poucas unidades?`,
      resposta: `Sim. Embora o foco principal seja pedidos corporativos em lote, aceitamos pedidos menores para pessoa física a partir do pedido mínimo do produto — ideal para presentes personalizados.`,
    },
    {
      pergunta: `Como funciona o processo de aprovação da arte?`,
      resposta: `Depois de enviar sua logo ou arte pelo WhatsApp, preparamos uma prova digital para aprovação antes de qualquer peça entrar em produção. Nenhum pedido é produzido sem essa confirmação prévia.`,
    },
    {
      pergunta: `Vocês entregam ${nome} personalizado em todo o Brasil?`,
      resposta: `Sim, a entrega é feita para todo o território nacional, com rastreio disponível do envio até a chegada no endereço informado.`,
    },
  ];
}

export function faqProduto(produto: Produto, categoria: Categoria) {
  const min = produto.pedidoMinimo || NEGOCIO.pedidoMinimoPadrao;
  return [
    {
      pergunta: `Qual a quantidade mínima para pedir ${produto.nome.toLowerCase()}?`,
      resposta: `O pedido mínimo para este produto é de ${min} unidades. Para volumes maiores, o preço por unidade tende a cair — confirme a faixa de preço pelo WhatsApp.`,
    },
    {
      pergunta: `Como é feita a personalização deste produto?`,
      resposta: produto.notaProducaoInterna
        ? `A personalização é feita por ${produto.notaProducaoInterna}, técnica adequada ao material desta peça. A arte é aprovada digitalmente antes da produção.`
        : `A personalização é feita com a técnica mais adequada ao material da peça (gravação, sublimação ou DTF, conforme o caso). A arte é aprovada digitalmente antes da produção.`,
    },
    {
      pergunta: `Qual o prazo de produção de ${produto.nome.toLowerCase()}?`,
      resposta: `O prazo padrão é de ${NEGOCIO.prazoProducaoPadrao}, contado a partir da aprovação da arte enviada.`,
    },
    {
      pergunta: `Posso pedir ${produto.nome.toLowerCase()} em pequena quantidade, para presente?`,
      resposta: `Sim, aceitamos pedidos a partir do mínimo de ${min} unidades também para pessoa física — ideal para presentear em datas comemorativas.`,
    },
    {
      pergunta: `Vocês enviam prova da arte antes de produzir?`,
      resposta: `Sim. Você recebe a prova digital com sua logo ou arte aplicada na peça antes de qualquer unidade entrar em produção.`,
    },
    {
      pergunta: `Existem outras opções na categoria ${categoria.nome.toLowerCase()}?`,
      resposta: `Sim, temos outras opções em ${categoria.nome.toLowerCase()} no catálogo — confira os produtos relacionados abaixo ou fale com a gente pelo WhatsApp para comparar.`,
    },
  ];
}
