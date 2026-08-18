"use client";

import { useState } from "react";
import { NEGOCIO } from "@/lib/negocio";
import { categorias } from "@/lib/categorias";

export default function OrcamentoForm() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [detalhes, setDetalhes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const linhas = [
      `Olá! Quero um orçamento em lote.`,
      nome && `Nome: ${nome}`,
      empresa && `Empresa/Pousada: ${empresa}`,
      categoria && `Categoria de interesse: ${categoria}`,
      quantidade && `Quantidade estimada: ${quantidade}`,
      detalhes && `Detalhes: ${detalhes}`,
    ].filter(Boolean);
    const url = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[3px] border border-line bg-paper-2 p-6">
      <div>
        <label className="mb-1 block text-sm font-medium">Seu nome</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full rounded-[2px] border border-line bg-paper px-3 py-2 text-sm outline-none focus:border-brass"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Empresa ou pousada (opcional)</label>
        <input
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          className="w-full rounded-[2px] border border-line bg-paper px-3 py-2 text-sm outline-none focus:border-brass"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Categoria de interesse</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full rounded-[2px] border border-line bg-paper px-3 py-2 text-sm outline-none focus:border-brass"
        >
          <option value="">Selecione (opcional)</option>
          {categorias.map((c) => (
            <option key={c.slug} value={c.nome}>
              {c.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Quantidade estimada</label>
        <input
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          placeholder="ex: 100 unidades"
          className="w-full rounded-[2px] border border-line bg-paper px-3 py-2 text-sm outline-none focus:border-brass"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Detalhes do pedido</label>
        <textarea
          value={detalhes}
          onChange={(e) => setDetalhes(e.target.value)}
          rows={4}
          placeholder="Produto(s) desejado(s), prazo, cores, etc."
          className="w-full rounded-[2px] border border-line bg-paper px-3 py-2 text-sm outline-none focus:border-brass"
        />
      </div>
      <button type="submit" className="btn w-full justify-center">
        Enviar pelo WhatsApp
      </button>
      <p className="text-center text-xs text-ink-soft">
        Ao enviar, o formulário abre o WhatsApp com sua mensagem pronta — nenhum dado é armazenado neste site.
      </p>
    </form>
  );
}
