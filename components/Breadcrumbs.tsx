import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="breadcrumb" className="mx-auto max-w-wrap px-8 pt-6 text-[13px] text-ink-soft">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-line">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-ink">
                {item.name}
              </Link>
            ) : (
              <span className="text-ink">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
