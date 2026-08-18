"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type SlideProduto = {
  slug: string;
  nome: string;
  categoria: string;
  imagem?: string;
};

function shuffledOrder(n: number, avoid?: number) {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  if (avoid !== undefined && arr[0] === avoid && arr.length > 1) {
    const swapAt = 1 + Math.floor(Math.random() * (arr.length - 1));
    [arr[0], arr[swapAt]] = [arr[swapAt], arr[0]];
  }
  return arr;
}

export default function HeroCarousel({ slides }: { slides: SlideProduto[] }) {
  const n = slides.length;
  // Ordem inicial determinística (0,1,2,...) para SSR/hidratação baterem;
  // o embaralhamento real só acontece no cliente, depois de montado.
  const orderRef = useRef<number[]>(Array.from({ length: n }, (_, i) => i));
  const posRef = useRef(0);
  const [active, setActive] = useState(orderRef.current[0] ?? 0);
  const [failedImg, setFailedImg] = useState<Record<number, boolean>>({});
  const firstPriorityIdx = orderRef.current[0] ?? 0;

  useEffect(() => {
    orderRef.current = shuffledOrder(n);
    posRef.current = 0;
    setActive(orderRef.current[0]);

    const id = setInterval(() => {
      posRef.current++;
      if (posRef.current >= orderRef.current.length) {
        orderRef.current = shuffledOrder(n, orderRef.current[orderRef.current.length - 1]);
        posRef.current = 0;
      }
      setActive(orderRef.current[posRef.current]);
    }, 3000);
    return () => clearInterval(id);
  }, [n]);

  if (n === 0) return null;

  return (
    <div className="relative ml-auto h-[460px] w-full max-w-[380px]">
      <div className="absolute -right-[14px] -top-[18px] z-[5] flex h-[88px] w-[88px] -rotate-[12deg] items-center justify-center rounded-full border-[1.5px] border-dashed border-brass bg-paper">
        <span className="text-center font-mono text-[9px] font-semibold leading-[1.4] tracking-[0.05em] text-brass-dark">
          peça
          <br />
          personalizada
        </span>
      </div>

      {slides.map((slide, i) => (
        <Link
          href={`/produtos/${slide.slug}/`}
          key={slide.slug}
          className={`absolute inset-0 overflow-hidden rounded [box-shadow:0_14px_32px_rgba(22,36,31,0.14)] transition-opacity duration-[900ms] ease-in-out ${
            i === active ? "z-[2] opacity-100" : "z-[1] opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            {slide.imagem && !failedImg[i] ? (
              // Carrossel decorativo client-side — imagem nativa em vez de next/image
              // (images.unoptimized já está ativo; evita mismatch de hidratação do
              // atributo fetchPriority entre SSR e client neste componente dinâmico).
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slide.imagem}
                alt={slide.nome}
                loading={i === firstPriorityIdx ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover"
                onError={() => setFailedImg((s) => ({ ...s, [i]: true }))}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-paper to-[#E3E6DB]">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-[104px] w-[104px] text-ink-soft"
                >
                  <path d="M11 15h18v13a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5V15Z" />
                  <path d="M29 19h2a3 3 0 0 1 0 6h-2" />
                </svg>
              </div>
            )}
          </div>
          {i === active && (
            <div className="absolute left-[18px] top-4 z-[4] flex gap-[6px]">
              {slides.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-[6px] w-[6px] rounded-full ${
                    dotIdx === active ? "bg-brass" : "bg-paper-2/45"
                  }`}
                />
              ))}
            </div>
          )}
          <div className="absolute right-14 top-4 z-[4] font-mono text-[9px] uppercase tracking-[0.08em] text-paper-2 opacity-80">
            mais buscado
          </div>
          <div className="absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-ink/86 to-transparent p-[22px] text-paper-2">
            <div className="text-[15px] font-medium">{slide.nome}</div>
            <div className="mt-[5px] font-mono text-[11px] tracking-[0.04em] text-paper-2/85">
              Consulte o preço
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
