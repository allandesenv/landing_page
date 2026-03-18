import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zenith IT | Premium Automation Engineer",
  description:
    "Landing page bilíngue para engenharia de software premium focada em automação de processos, integrações e IA.",
  keywords: [
    "automação de processos",
    "software engineer freelancer",
    "n8n",
    "integrações",
    "automação com IA",
    "process automation"
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "Zenith IT | Intelligent Automation for Companies Ready to Scale",
    description:
      "Transforme processos manuais em fluxos automáticos com engenharia de software premium, integrações e IA.",
    url: siteUrl,
    siteName: "Zenith IT",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Zenith IT premium automation landing page"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith IT | Intelligent Automation for Companies Ready to Scale",
    description:
      "Premium software engineering for process automation, integrations and AI workflows.",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${sora.variable} ${spaceGrotesk.variable} bg-[#030712] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
