import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zenith-it.vercel.app";

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
          <div className="flex h-14 w-[72px] shrink-0 flex-col items-center justify-center rounded-xl bg-white p-1 shadow-[0_0_24px_rgba(96,165,250,0.18)]">
            <img
              src="/logo.png"
              alt="Símbolo da Zenith IT"
              className="h-9 w-9 rounded-full object-cover object-top"
            />
            <span className="mt-0.5 text-[0.46rem] font-black leading-none tracking-[0.08em] text-black">
              ZENITH IT
            </span>
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
