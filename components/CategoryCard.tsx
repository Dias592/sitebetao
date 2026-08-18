import Link from "next/link";
import type { Categoria } from "@/lib/categorias";
import CategoryIcon from "./icons/CategoryIcon";

export default function CategoryCard({
  categoria,
  count,
}: {
  categoria: Categoria;
  count: number;
}) {
  return (
    <Link
      href={`/categorias/${categoria.slug}/`}
      className="group relative overflow-hidden rounded-[3px] border border-line bg-paper-2 p-[22px_18px] transition-colors hover:border-brass"
    >
      <div className="absolute right-3 top-3 h-5 w-5 rounded-full border border-dashed border-line opacity-0 transition-opacity group-hover:border-brass group-hover:opacity-100" />
      <CategoryIcon icon={categoria.icon} className="mb-4 h-10 w-10 text-ink" />
      <h3 className="text-[15px] font-semibold">{categoria.nome}</h3>
      <div className="mt-1 font-mono text-[11px] text-ink-soft">
        {count} produto{count === 1 ? "" : "s"}
      </div>
    </Link>
  );
}
