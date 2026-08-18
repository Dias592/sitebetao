export const NEGOCIO = {
  nome: "Essenza Brindes",
  dominio: "essenzabrindes.com.br",
  whatsapp: "5511970139447",
  telefoneDisplay: "(11) 97013-9447",
  email: "contato@essenzabrindes.com.br",
  instagram: "https://instagram.com/essenzabrindes",
  pedidoMinimoPadrao: 20,
  prazoProducaoPadrao: "10–20 dias úteis",
} as const;

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
