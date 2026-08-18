import Image from "next/image";
import Link from "next/link";
import type { Produto } from "@/lib/produtos";
import { getImagemProduto } from "@/lib/imagens";
import { getCategoria } from "@/lib/categorias";
import CategoryIcon from "./icons/CategoryIcon";

export default function ProductCard({ produto }: { produto: Produto }) {
  const imagem = getImagemProduto(produto.slug);
  const categoria = getCategoria(produto.categoria);

  return (
    <div className="overflow-hidden rounded-[3px] border border-line bg-paper-2">
      <Link
        href={`/produtos/${produto.slug}/`}
        className="relative flex h-[170px] items-center justify-center bg-gradient-to-br from-paper to-[#E3E6DB]"
      >
        {imagem ? (
          <Image
            src={imagem}
            alt={produto.nome}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <CategoryIcon icon={categoria?.icon || "variados"} className="h-[52px] w-[52px] text-ink-soft" />
        )}
        {produto.maisBuscado && (
          <span className="absolute right-[10px] top-[10px] rounded-[2px] bg-brass px-[9px] py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.04em] text-ink">
            Mais buscado
          </span>
        )}
        <span className="absolute bottom-[10px] left-[10px] rounded-[2px] bg-ink px-2 py-[3px] font-mono text-[9px] tracking-[0.04em] text-paper-2">
          personalizado
        </span>
      </Link>
      <div className="p-4">
        <h4 className="mb-1 text-sm font-semibold">{produto.nome}</h4>
        <div className="mb-[10px] text-xs text-ink-soft">{categoria?.nome}</div>
        <div className="flex items-baseline justify-between">
          <span className="font-serif text-[15px] font-medium">Consulte</span>
          <small className="text-[11px] text-ink-soft">
            a partir de {produto.pedidoMinimo || 20}un.
          </small>
        </div>
        <Link
          href={`/produtos/${produto.slug}/`}
          className="mt-[14px] block rounded-[2px] border border-ink py-[9px] text-center text-[13px] font-medium text-ink hover:bg-ink hover:text-paper-2"
        >
          Ver produto
        </Link>
      </div>
    </div>
  );
}
