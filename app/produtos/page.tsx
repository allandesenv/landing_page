import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zenith-it.vercel.app";

const doggoIcon =
  "data:image/jpeg;base64,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";

const zenithProfileLogo =
  "data:image/jpeg;base64,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";

export const metadata: Metadata = {
  title: "Produtos Zenith IT | Apps & Games",
  description:
    "Conheça os produtos da Zenith IT e acesse rapidamente cada aplicativo na Google Play.",
  alternates: {
    canonical: "/produtos"
  },
  openGraph: {
    title: "Produtos Zenith IT | Apps & Games",
    description:
      "Doggo Cascade, Evolua e os próximos produtos da Zenith IT em um só lugar.",
    url: `${siteUrl}/produtos`,
    siteName: "Zenith IT",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Zenith IT"
      }
    ],
    locale: "pt_BR",
    type: "website"
  }
};

const products = [
  {
    name: "Doggo Cascade",
    category: "Puzzle & diversão casual",
    image: doggoIcon,
    imageAlt: "Ícone oficial do Doggo Cascade",
    description:
      "Puzzle de blocos rápido, divertido e cheio de personalidade. Combine peças, limpe linhas e supere sua melhor pontuação.",
    storeUrl: "https://play.google.com/store/apps/details?id=br.com.zenithit.zenithcascade",
    accent: "from-violet-500/20 via-fuchsia-400/8 to-transparent",
    glow: "shadow-[0_10px_28px_rgba(139,92,246,0.22)]"
  },
  {
    name: "Evolua",
    category: "Autoconhecimento & bem-estar",
    image:
      "https://play-lh.googleusercontent.com/iWZ7RMjFugvQF_gStM0IlvzYC3fXMdYYYowdXx61tMRmFYdPnfauXxIrz8AXsLK71AIAeGu6sx_NiwGX9GLsdw=w240-h480",
    imageAlt: "Ícone oficial do Evolua no Google Play",
    description:
      "Registre emoções, crie rituais e acompanhe sua jornada com mais presença, clareza e consciência.",
    storeUrl: "https://play.google.com/store/apps/details?id=br.com.zenithit.evolua",
    accent: "from-emerald-500/20 via-cyan-400/8 to-transparent",
    glow: "shadow-[0_10px_28px_rgba(16,185,129,0.2)]"
  }
];

export default function ProductsPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-11rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute -left-20 top-[22rem] h-48 w-48 rounded-full bg-violet-500/8 blur-3xl" />
        <div className="absolute -right-20 top-[36rem] h-48 w-48 rounded-full bg-emerald-400/8 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-xl px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-7">
        <header className="flex items-center gap-3 border-b border-white/8 pb-4">
          <img
            src={zenithProfileLogo}
            alt="Zenith IT"
            className="h-14 w-14 shrink-0 rounded-full object-cover shadow-[0_0_24px_rgba(96,165,250,0.18)]"
          />
          <div className="min-w-0">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-sky-300/85">
              Zenith IT • Apps & Games
            </p>
            <h1 className="display-font mt-0.5 text-[1.75rem] font-semibold leading-tight text-white">
              Nossos produtos
            </h1>
            <p className="mt-0.5 text-sm text-slate-400">
              Escolha um produto e vá direto para a loja.
            </p>
          </div>
        </header>

        <section className="mt-4 space-y-3" aria-label="Lista de produtos da Zenith IT">
          {products.map((product) => (
            <article
              key={product.name}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_16px_42px_rgba(2,6,23,0.34)] backdrop-blur-xl"
            >
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${product.accent}`} />

              <div className="relative flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className={`h-14 w-14 shrink-0 rounded-[16px] border border-white/10 bg-slate-950 object-cover ${product.glow}`}
                />

                <div className="min-w-0 flex-1">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-sky-300/80">
                    {product.category}
                  </p>
                  <h2 className="display-font mt-0.5 text-[1.45rem] font-semibold leading-tight text-white">
                    {product.name}
                  </h2>
                </div>
              </div>

              <p className="relative mt-3 text-[0.9rem] leading-[1.45rem] text-slate-300">
                {product.description}
              </p>

              <a
                href={product.storeUrl}
                target="_blank"
                rel="noreferrer"
                className="button-shine relative mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-sky-400 px-4 py-2.5 text-center text-[0.92rem] font-semibold text-slate-950 shadow-[0_10px_24px_rgba(59,130,246,0.2)] transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label={`Baixar ${product.name} no Google Play`}
              >
                Baixar no Google Play
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </section>

        <section className="mt-5 border-t border-white/8 pt-5 text-center">
          <h2 className="display-font text-lg font-semibold text-white">
            Mais produtos em breve.
          </h2>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Novos apps e jogos da Zenith IT estão a caminho.
          </p>
        </section>

        <footer className="mt-5 text-center text-[0.58rem] uppercase tracking-[0.2em] text-slate-600">
          Zenith IT • Tecnologia que vira experiência
        </footer>
      </div>
    </main>
  );
}
