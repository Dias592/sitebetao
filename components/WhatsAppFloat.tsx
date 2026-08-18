import { linkWhatsApp } from "@/lib/negocio";

export default function WhatsAppFloat({ mensagem }: { mensagem?: string }) {
  return (
    <a
      href={linkWhatsApp(mensagem || "Olá! Quero um orçamento de brindes personalizados.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] hidden items-center gap-[9px] rounded-[30px] bg-ink px-5 py-[13px] text-sm font-medium text-paper-2 shadow-[0_8px_22px_rgba(22,36,31,0.28)] md:flex"
    >
      <span className="h-2 w-2 rounded-full bg-[#5FA86A]" />
      Fale no WhatsApp
    </a>
  );
}
