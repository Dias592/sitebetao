export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-[13px]">
      <div className="flex h-[38px] w-[38px] shrink-0 -rotate-[8deg] items-center justify-center rounded-full border-[1.5px] border-dashed border-brass">
        <span className="rotate-[8deg] font-mono text-xs font-semibold tracking-[0.02em] text-brass-dark">
          EB
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <div
          className={`font-serif text-[23px] italic leading-none tracking-[-0.01em] ${
            dark ? "text-paper-2" : "text-ink"
          }`}
        >
          Essenza
        </div>
        <div className="mt-[3px] font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brass-dark">
          Brindes
        </div>
      </div>
    </div>
  );
}
