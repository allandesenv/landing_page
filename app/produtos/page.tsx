import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zenith-it.vercel.app";

const zenithLogo =
  "data:image/png;base64,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";

const doggoIcon =
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
          <div className="flex h-14 w-[72px] shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-[0_0_24px_rgba(96,165,250,0.18)]">
            <img
              src={zenithLogo}
              alt="Zenith IT"
              className="h-full w-full object-contain"
            />
          </div>
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
