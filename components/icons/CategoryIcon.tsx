const paths: Record<string, string> = {
  bolsa: "M7 14h26v20H7z M14 14v-3a6 6 0 0 1 12 0v3",
  necessaire: "M9 16h14v15a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3V16Z M27 20h2a3 3 0 0 1 0 6h-2",
  neoprene: "M9 9h22v22H9z",
  porcelana: "M11 15h18v13a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5V15Z M29 19h2a3 3 0 0 1 0 6h-2",
  "porta-cartao": "M10 12h20v16H10z M10 17h20",
  "porta-documentos": "M9 8h22v26H9z M14 15h12M14 20h12M14 25h8",
  relogio: "M20 20m-12 0a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M20 14v6l4 3",
  squeeze: "M12 6h16v28H12z M20 12m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0",
  termico: "M13 9v6a7 7 0 0 0 14 0V9 M15 33h10M20 23v10",
  toalha: "M10 9h20v24H10z",
  variados:
    "M20 20m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M20 8v4M20 28v4M8 20h4M28 20h4M12 12l3 3M25 25l3 3M28 12l-3 3M15 25l-3 3",
  vidro: "M15 8h10l2 9a8 8 0 0 1-14 0Z M20 25v6",
};

export default function CategoryIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const d = paths[icon] || paths.variados;
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    >
      {d.split(" M").map((seg, i) => (
        <path key={i} d={i === 0 ? seg : "M" + seg} />
      ))}
    </svg>
  );
}
