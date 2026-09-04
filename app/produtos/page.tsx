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
    image: "/products/evolua-showcase.svg",
    imageAlt: "Evolua, aplicativo de autoconhecimento da Zenith IT",
    description:
      "Um espaço acolhedor para entender melhor o que você sente e transformar pequenas pausas em evolução real. Registre seu estado emocional, receba leituras inteligentes, crie rituais para o dia e acompanhe padrões da sua jornada com mais presença, clareza e consciência.",
    storeUrl: "https://play.google.com/store/apps/details?id=br.com.zenithit.evolua"
  },
  {
    name: "Doggo Cascade",
    category: "Puzzle & diversão casual",
    image: "/products/doggo-cascade-showcase.svg",
    imageAlt: "Doggo Cascade, jogo de puzzle da Zenith IT",
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
        <div className="absolute -left-24 top-[38rem] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-24 top-[68rem] h-80 w-80 rounded-full bg-violet-500/12 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-7 sm:px-6 sm:pb-20 sm:pt-10">
        <header className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <img
            src="/logo.png"
            alt="Zenith IT"
            className="h-20 w-20 rounded-full bg-white object-cover shadow-[0_0_38px_rgba(96,165,250,0.22)] sm:h-24 sm:w-24"
          />
          <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-300/90 sm:text-xs">
            Zenith IT • Apps & Games
          </p>
          <h1 className="display-font mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl">
            Produtos feitos para fazer parte do seu dia.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Do autoconhecimento ao desafio de uma boa partida, criamos experiências digitais simples de usar,
            bonitas de viver e pensadas para gerar valor de verdade.
          </p>
        </header>

        <section className="mt-10 grid gap-7 md:mt-14 md:grid-cols-2 md:gap-8" aria-label="Produtos Zenith IT">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_24px_70px_rgba(2,6,23,0.42)] backdrop-blur-xl"
            >
              <div className="p-3 sm:p-4">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="aspect-[4/5] w-full rounded-[1.45rem] object-cover"
                />
              </div>

              <div className="px-5 pb-6 pt-3 sm:px-7 sm:pb-8 sm:pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/80">
                  {product.category}
                </p>
                <h2 className="display-font mt-2 text-3xl font-semibold text-white sm:text-4xl">{product.name}</h2>
                <p className="mt-4 text-[0.96rem] leading-7 text-slate-300 sm:text-base">{product.description}</p>

                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-shine mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-4 text-center text-base font-semibold text-slate-950 shadow-[0_12px_32px_rgba(59,130,246,0.22)] transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                  aria-label={`Baixar ${product.name} no Google Play`}
                >
                  Baixar no Google Play
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] px-6 py-8 text-center shadow-[0_22px_70px_rgba(2,6,23,0.35)] sm:mt-14 sm:px-10 sm:py-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="display-font mt-5 text-2xl font-semibold text-white sm:text-3xl">
            Em breve teremos mais produtos.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            A Zenith IT continua criando novas experiências digitais. Volte em breve para descobrir o que vem a seguir.
          </p>
        </section>

        <footer className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-slate-500 sm:mt-14">
          Zenith IT • Tecnologia que vira experiência
        </footer>
      </div>
    </main>
  );
}
