import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zenith-it.vercel.app";

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
    image: "/products/doggo-app-icon-v2.webp",
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
            src="/logo.png"
            alt="Zenith IT"
            className="h-12 w-12 shrink-0 rounded-full bg-white object-cover shadow-[0_0_24px_rgba(96,165,250,0.18)]"
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
