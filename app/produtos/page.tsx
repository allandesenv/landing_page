import type { Metadata } from "next";
import { ArrowUpRight, Sparkles } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zenith-it.vercel.app";

export const metadata: Metadata = {
  title: "Produtos Zenith IT | Evolua e Doggo Cascade",
  description:
    "Conheça os produtos da Zenith IT: Evolua para autoconhecimento e bem-estar, e Doggo Cascade para diversão em partidas rápidas. Baixe no Google Play.",
  alternates: {
    canonical: "/produtos"
  },
  openGraph: {
    title: "Produtos Zenith IT | Apps & Games",
    description:
      "Tecnologia que vira experiência. Conheça Evolua e Doggo Cascade e baixe no Google Play.",
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
    name: "Evolua",
    category: "Autoconhecimento & bem-estar",
    image:
      "https://play-lh.googleusercontent.com/iWZ7RMjFugvQF_gStM0IlvzYC3fXMdYYYowdXx61tMRmFYdPnfauXxIrz8AXsLK71AIAeGu6sx_NiwGX9GLsdw=w240-h480",
    imageAlt: "Ícone oficial do Evolua no Google Play",
    accent: "from-emerald-400/18 via-cyan-400/8 to-transparent",
    iconGlow: "shadow-[0_18px_46px_rgba(16,185,129,0.22)]",
    description:
      "Um espaço acolhedor para entender melhor o que você sente e transformar pequenas pausas em evolução real. Registre seu estado emocional, receba leituras inteligentes, crie rituais para o dia e acompanhe padrões da sua jornada com mais presença, clareza e consciência.",
    storeUrl: "https://play.google.com/store/apps/details?id=br.com.zenithit.evolua"
  },
  {
    name: "Doggo Cascade",
    category: "Puzzle & diversão casual",
    image: "/products/doggo-app-icon.svg",
    imageAlt: "Ícone do Doggo Cascade",
    accent: "from-violet-400/18 via-fuchsia-400/8 to-transparent",
    iconGlow: "shadow-[0_18px_46px_rgba(139,92,246,0.22)]",
    description:
      "Um puzzle de blocos com personalidade, ritmo e muita energia. Combine peças, limpe linhas, evolua sua pontuação e encare partidas rápidas que ficam cada vez mais desafiadoras — sempre com o Doggo acompanhando e celebrando cada boa jogada.",
    storeUrl: "https://play.google.com/store/apps/details?id=br.com.zenithit.zenithcascade"
  }
];

export default function ProductsPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-12rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-500/16 blur-3xl" />
        <div className="absolute -left-24 top-[34rem] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-24 top-[62rem] h-80 w-80 rounded-full bg-violet-500/12 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-12 pt-6 sm:px-6 sm:pb-18 sm:pt-9">
        <header className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <img
            src="/logo.png"
            alt="Zenith IT"
            className="h-16 w-16 rounded-full bg-white object-cover shadow-[0_0_32px_rgba(96,165,250,0.22)] sm:h-20 sm:w-20"
          />
          <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-sky-300/90 sm:text-xs">
            Zenith IT • Apps & Games
          </p>
          <h1 className="display-font mt-3 text-[2.15rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl">
            Produtos feitos para fazer parte do seu dia.
          </h1>
          <p className="mt-4 max-w-xl text-[0.96rem] leading-6 text-slate-300 sm:text-lg sm:leading-8">
            Do autoconhecimento ao desafio de uma boa partida, criamos experiências digitais simples de usar,
            bonitas de viver e pensadas para gerar valor de verdade.
          </p>
        </header>

        <section className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-7" aria-label="Produtos Zenith IT">
          {products.map((product) => (
            <article
              key={product.name}
              className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] px-5 pb-6 pt-5 shadow-[0_22px_60px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:px-7 sm:pb-7 sm:pt-7"
            >
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b ${product.accent}`} />

              <div className="relative flex items-start gap-4 sm:gap-5">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className={`h-[88px] w-[88px] shrink-0 rounded-[22px] border border-white/10 bg-slate-950 object-cover ${product.iconGlow} sm:h-28 sm:w-28 sm:rounded-[27px]`}
                />
                <div className="min-w-0 pt-1">
                  <p className="text-[0.67rem] font-semibold uppercase leading-4 tracking-[0.18em] text-sky-300/80 sm:text-xs">
                    {product.category}
                  </p>
                  <h2 className="display-font mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {product.name}
                  </h2>
                </div>
              </div>

              <p className="relative mt-5 text-[0.94rem] leading-6 text-slate-300 sm:text-base sm:leading-7">
                {product.description}
              </p>

              <a
                href={product.storeUrl}
                target="_blank"
                rel="noreferrer"
                className="button-shine relative mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-3.5 text-center text-[0.98rem] font-semibold text-slate-950 shadow-[0_12px_32px_rgba(59,130,246,0.22)] transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label={`Baixar ${product.name} no Google Play`}
              >
                Baixar no Google Play
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-7 max-w-2xl rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] px-6 py-7 text-center shadow-[0_20px_60px_rgba(2,6,23,0.32)] sm:mt-10 sm:px-10 sm:py-9">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="display-font mt-4 text-2xl font-semibold text-white sm:text-3xl">
            Mais novidades estão a caminho.
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            A Zenith IT continua criando novas experiências digitais. Em breve, novos produtos por aqui.
          </p>
        </section>

        <footer className="mt-8 text-center text-[0.67rem] uppercase tracking-[0.22em] text-slate-500 sm:mt-12 sm:text-xs">
          Zenith IT • Tecnologia que vira experiência
        </footer>
      </div>
    </main>
  );
}
