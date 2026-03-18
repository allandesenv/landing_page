import Link from "next/link";
import { siteContent, type Locale } from "@/lib/content";

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20um%20diagn%C3%B3stico%20gratuito%20de%20automa%C3%A7%C3%A3o.";

export default async function ThankYouPage({
  searchParams
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const locale: Locale = params.lang === "en" ? "en" : "pt";
  const content = siteContent[locale].thankYou;

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-8">
      <div className="glass-card w-full max-w-3xl rounded-[36px] p-8 text-center sm:p-12">
        <img
          src="/logo.png"
          alt="Zenith IT"
          className="mx-auto h-16 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.24)]"
        />
        <h1 className="display-font mt-8 text-4xl font-semibold text-white sm:text-5xl">{content.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{content.text}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={`/?lang=${locale}`}
            className="button-shine inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3.5 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            {content.primary}
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:border-blue-400/40 hover:bg-white/10"
          >
            {content.secondary}
          </a>
        </div>
      </div>
    </main>
  );
}
