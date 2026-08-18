import type { Metadata } from "next";
import { Newsreader, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { NEGOCIO } from "@/lib/negocio";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${NEGOCIO.dominio}`),
  title: {
    default: `${NEGOCIO.nome} — Brindes Personalizados para Empresas e Pousadas`,
    template: `%s | ${NEGOCIO.nome}`,
  },
  description:
    "Catálogo com mais de 70 brindes personalizados — bolsas, canecas, squeezes, porta-documentos e mais. Peça em lote para empresas e pousadas ou em pequenas quantidades pelo WhatsApp.",
  openGraph: {
    siteName: NEGOCIO.nome,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-cover.svg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema()],
  };

  return (
    <html lang="pt-BR">
      <body
        className={`${newsreader.variable} ${workSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
