"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Cloud,
  Gauge,
  Languages,
  Link2,
  Menu,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { siteContent, type Locale } from "@/lib/content";

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20um%20diagn%C3%B3stico%20gratuito%20de%20automa%C3%A7%C3%A3o.";
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";
const serviceIcons = [Gauge, Sparkles, Link2, Bot, Cloud];

function ContactForm({ locale }: { locale: Locale }) {
  const content = siteContent[locale].leadMagnet;
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);

    const payload = {
      locale,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      window.location.href = content.successRedirect;
    } catch (error) {
      console.error(error);
      window.alert(
        locale === "pt"
          ? "Não foi possível enviar agora. Tente novamente em instantes."
          : "Unable to submit right now. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form action={handleSubmit} className="glass-card rounded-[28px] p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { key: "name", type: "text" },
          { key: "email", type: "email" },
          { key: "whatsapp", type: "text" },
          { key: "company", type: "text" }
        ].map((field) => (
          <label key={field.key} className="space-y-2">
            <span className="text-sm text-slate-300">
              {content.formLabels[field.key as "name" | "email" | "whatsapp" | "company"]}
            </span>
            <input
              required
              name={field.key}
              type={field.type}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-blue-400"
            />
          </label>
        ))}
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm text-slate-300">{content.formLabels.message}</span>
        <textarea
          name="message"
          rows={5}
          placeholder={content.formLabels.messagePlaceholder}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-blue-400"
        />
      </label>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-shine inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? content.formLabels.sending : content.formLabels.submit}
        </button>
      </div>
    </form>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.28em] text-blue-200">{eyebrow}</p>
      <h2 className="display-font mt-4 text-3xl font-semibold text-white sm:text-5xl">{title}</h2>
    </div>
  );
}

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const content = useMemo(() => siteContent[locale], [locale]);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const lang = search.get("lang");
    if (lang === "en" || lang === "pt") {
      setLocale(lang);
    }
  }, []);

  function switchLocale() {
    const nextLocale = locale === "pt" ? "en" : "pt";
    setLocale(nextLocale);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLocale);
    window.history.replaceState({}, "", url);
  }

  return (
    <div className="relative">
      <div className="soft-grid absolute inset-0 opacity-40" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Zenith IT"
              className="h-11 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.24)]"
            />
            <div>
              <p className="display-font text-lg font-semibold tracking-[0.24em] text-white">ZENITH IT</p>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{content.footer.role}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {content.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              aria-label={content.switchLabel}
              onClick={switchLocale}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400/50 hover:bg-white/10"
            >
              <Languages className="h-4 w-4" />
              {content.localeLabel}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              {content.hero.primaryCta}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/8 bg-slate-950/95 px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {content.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-slate-300"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={switchLocale}
                className="inline-flex items-center gap-2 text-left text-sm text-slate-300"
              >
                <Languages className="h-4 w-4" />
                {content.switchLabel}
              </button>
            </div>
          </div>
        ) : null}
      </header>

      <main className="relative z-10">
        <section className="section-shell relative px-5 pb-18 pt-32 sm:px-8 sm:pt-36">
          <div className="hero-glow" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <h1 className="display-font fade-slide fade-slide-delay-1 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                {content.hero.headline}
              </h1>
              <p className="fade-slide fade-slide-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                {content.hero.subheadline}
              </p>
              <p className="fade-slide fade-slide-delay-3 mt-5 text-base uppercase tracking-[0.24em] text-blue-200">
                {content.hero.authority}
              </p>
              <div className="fade-slide fade-slide-delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3.5 font-medium text-slate-950 transition hover:scale-[1.02]"
                >
                  {content.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:border-blue-400/40 hover:bg-white/10"
                >
                  {content.hero.secondaryCta}
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                {content.hero.trust.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    <Check className="h-4 w-4 text-blue-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card relative overflow-hidden rounded-[32px] p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.16),transparent_30%)]" />
              <div className="relative grid gap-6">
                <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-blue-200">Automation Stack</p>
                      <h2 className="display-font mt-3 text-2xl font-semibold text-white">n8n + APIs + AI + Cloud</h2>
                    </div>
                    <ShieldCheck className="h-10 w-10 text-blue-300" />
                  </div>
                  <p className="mt-4 text-slate-300">
                    {locale === "pt"
                      ? "Projetos desenhados para remover atrito, conectar sistemas críticos e criar vantagem operacional."
                      : "Projects designed to remove friction, connect critical systems and create operational leverage."}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {content.hero.stats.map((item) => (
                    <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="display-font text-3xl font-semibold text-white">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell px-5 py-18 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader eyebrow={content.pain.eyebrow} title={content.pain.title} />
            <div className="glass-card rounded-[28px] p-6 text-lg leading-8 text-slate-300 sm:p-8">
              {content.pain.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-5 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-5 py-18 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-gradient-to-r from-blue-500/10 via-slate-950/80 to-slate-950/90 p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-blue-200">{content.solution.eyebrow}</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <h2 className="display-font text-3xl font-semibold text-white sm:text-5xl">{content.solution.title}</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{content.solution.text}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.solution.benefits.map((benefit) => (
                  <div key={benefit} className="glass-card rounded-[24px] p-5">
                    <div className="inline-flex rounded-full bg-blue-400/10 p-2 text-blue-300">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="mt-4 text-lg font-medium text-white">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell px-5 py-18 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow={content.services.eyebrow} title={content.services.title} />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.services.items.map((item, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article
                    key={item.title}
                    className="glass-card group rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                  >
                    <div className="inline-flex rounded-2xl border border-blue-400/20 bg-blue-400/10 p-3 text-blue-200 transition group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="display-font mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="differentials" className="section-shell px-5 py-18 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader eyebrow={content.differentials.eyebrow} title={content.differentials.title} />
            <div className="grid gap-4 sm:grid-cols-2">
              {content.differentials.items.map((item) => (
                <div key={item} className="glass-card flex items-center gap-4 rounded-[24px] p-5">
                  <BriefcaseBusiness className="h-5 w-5 text-blue-300" />
                  <p className="text-base text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-5 py-18 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow={content.useCases.eyebrow} title={content.useCases.title} />
            <div className="mt-10 grid gap-5 xl:grid-cols-3">
              {content.useCases.items.map((item) => (
                <article key={item.title} className="glass-card rounded-[28px] p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-200">{item.title}</p>
                  {[
                    [content.useCaseLabels.problem, item.problem],
                    [content.useCaseLabels.solution, item.solution],
                    [content.useCaseLabels.result, item.result]
                  ].map(([label, text]) => (
                    <div key={label} className="mt-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
                      <p className={`mt-2 ${label === content.useCaseLabels.result ? "text-white" : "text-slate-300"}`}>
                        {text}
                      </p>
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-5 py-18 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-blue-400/14 bg-gradient-to-r from-blue-600/14 via-slate-950/90 to-slate-950/90 p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-blue-200">{content.socialProof.eyebrow}</p>
            <h2 className="display-font mt-4 text-3xl font-semibold text-white sm:text-5xl">{content.socialProof.title}</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{content.socialProof.text}</p>
          </div>
        </section>

        <section id="lead-magnet" className="section-shell px-5 py-18 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionHeader eyebrow={content.leadMagnet.eyebrow} title={content.leadMagnet.title} />
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{content.leadMagnet.text}</p>
              <div className="mt-8 grid gap-4">
                {[
                  [content.contact.whatsappLabel, whatsappUrl],
                  [content.contact.calendarLabel, calendlyUrl]
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-slate-200 transition hover:border-blue-400/30 hover:bg-white/8"
                  >
                    <span>{label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <ContactForm locale={locale} />
          </div>
        </section>

        <section id="plans" className="section-shell px-5 py-18 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow={content.plans.eyebrow} title={content.plans.title} />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {content.plans.items.map((item) => (
                <article
                  key={item.name}
                  className={`rounded-[30px] p-6 ${
                    item.featured
                      ? "border border-blue-400/30 bg-gradient-to-b from-blue-500/16 to-slate-950/90 shadow-[0_20px_90px_rgba(37,99,235,0.24)]"
                      : "glass-card"
                  }`}
                >
                  <p className="display-font text-2xl font-semibold text-white">{item.name}</p>
                  <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                  <div className="mt-6 h-px bg-white/10" />
                  <div className="mt-6 grid gap-3">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-slate-200">
                        <Check className="h-4 w-4 text-blue-300" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-5 pb-22 pt-18 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-blue-400/20 bg-gradient-to-r from-blue-500/18 via-slate-950 to-slate-950 p-8 text-center sm:p-12">
            <h2 className="display-font text-3xl font-semibold text-white sm:text-5xl">{content.finalCta.title}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">{content.finalCta.text}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-shine inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3.5 font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                {content.finalCta.primary}
              </a>
              <a
                href="#lead-magnet"
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:border-blue-400/40 hover:bg-white/10"
              >
                {content.finalCta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Zenith IT"
              className="h-12 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.24)]"
            />
            <div>
              <p className="display-font text-lg font-semibold tracking-[0.24em] text-white">ZENITH IT</p>
              <p className="text-sm text-slate-400">{content.footer.role}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
            {content.footer.socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <span>© 2026 Zenith IT. {content.footer.rights}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
