import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade / Privacy Policy | Grovewake",
  description: "Política de privacidade do Grovewake, da Zenith IT, em português e inglês.",
  alternates: { canonical: "https://zenith-it.vercel.app/privacy/grovewake" },
  robots: { index: false, follow: true }
};

const sections = [
  [
    "Responsável e escopo",
    "Controller and scope",
    "Grovewake (br.com.zenithit.grovewake) é um jogo de estratégia da Zenith IT. Esta política descreve a versão planejada para distribuição e os recursos opcionais quando efetivamente habilitados. O jogo não exige conta própria Zenith IT. Os serviços comerciais ainda estão em validação.",
    "Grovewake (br.com.zenithit.grovewake) is a strategy game by Zenith IT. This policy describes the planned release and optional features when actually enabled. No Zenith IT account is required. Commercial services are still being validated."
  ],
  [
    "Dados locais e progresso",
    "Local data and progress",
    "Preferências, progresso, partidas e o benefício cosmético Grove Bloom podem ser armazenados no dispositivo. A recompensa durável é planejada para permanecer até sua utilização em uma partida, sem transferência entre instalações. Apagar dados ou desinstalar pode eliminar essas informações. Não há promessa de recuperação em nuvem.",
    "Preferences, progress, runs and the Grove Bloom cosmetic reward may be stored on the device. The planned durable reward remains until used in a run, without transfer between installations. Clearing app data or uninstalling may remove this information. Cloud recovery is not promised."
  ],
  [
    "Serviços opcionais e finalidades",
    "Optional services and purposes",
    "Google Play Games, quando escolhido, pode processar identidade de jogador, autenticação, pontuações e conquistas. AdMob e UMP, quando habilitados, podem processar endereço IP, região aproximada, identificadores técnicos, interações publicitárias e escolhas de privacidade para consentimento, entrega, medição e prevenção de fraude. Firebase Analytics pode processar eventos de uso, versão, dispositivo e identificadores de instalação para melhorar o jogo; Crashlytics pode processar informações de falhas, sessão e dispositivo para diagnóstico. A disponibilidade depende da versão, idade, região e escolhas do usuário; a descrição não significa que esses serviços estejam ativos hoje.",
    "Google Play Games, when selected, may process player identity, authentication, scores and achievements. AdMob and UMP, when enabled, may process IP address, approximate region, technical identifiers, ad interactions and privacy choices for consent, delivery, measurement and fraud prevention. Firebase Analytics may process usage events, app version, device and installation identifiers to improve the game; Crashlytics may process crash, session and device information for diagnosis. Availability depends on version, age, region and user choices; listing a service does not mean it is active today."
  ],
  [
    "Escolhas e bases do tratamento",
    "Choices and legal bases",
    "O jogo básico foi projetado para funcionar offline. Recursos conectados são opcionais. Quando exigido, o consentimento deve preceder o tratamento opcional, e sua retirada não deve apagar uma recompensa legitimamente recebida. A execução de recursos solicitados, segurança e obrigações legais poderão exigir outras bases legais, conforme a finalidade e a região. A configuração de consentimento e revogação está em validação antes do lançamento.",
    "The core game is designed for offline play. Connected features are optional. Where required, consent must precede optional processing, and withdrawing it should not remove a legitimately earned reward. Requested features, security and legal obligations may require other legal bases depending on purpose and region. Consent and withdrawal controls are being validated before release."
  ],
  [
    "Idade e menores",
    "Age and minors",
    "O público pretendido é de 13 anos ou mais, sujeito às regras locais e à classificação da loja. A política de produto planejada mantém publicidade desativada para menores de idade e serviços opcionais desativados quando a idade não é conhecida. O tratamento de dados de menores deve observar o melhor interesse e as proteções aplicáveis, inclusive orientação ou autorização de responsáveis quando exigida. A adequação etária ainda está em implementação; não se presume maioridade por falta de informação.",
    "The intended audience is ages 13 and older, subject to local rules and store ratings. The planned product policy disables advertising for minors and optional services when age is unknown. Processing minors' data must respect their best interests and applicable safeguards, including parental guidance or authorization where required. Age safeguards are still being implemented; missing age information does not imply adulthood."
  ],
  [
    "Compartilhamento e transferências",
    "Sharing and transfers",
    "Quando habilitados, os serviços Google descritos podem receber dados necessários às suas finalidades e processá-los em outros países, conforme as condições aplicáveis e mecanismos legais pertinentes. A Zenith IT não pretende comercializar dados pessoais dos jogadores. A revisão de destinatários, transferências e configurações efetivas deverá ser finalizada antes de disponibilizar os serviços em cada mercado.",
    "When enabled, the Google services described may receive data necessary for their purposes and process it in other countries under applicable terms and legal mechanisms. Zenith IT does not intend to sell players' personal data. Recipients, transfers and actual configurations must be reviewed before services are made available in each market."
  ],
  [
    "Retenção, exclusão e segurança",
    "Retention, deletion and security",
    "Dados locais permanecem enquanto necessários ao funcionamento e até serem apagados pelo usuário ou pelo aplicativo. Dados enviados a provedores, quando houver, seguem as configurações e políticas efetivamente aplicáveis a esses serviços; os prazos específicos ainda precisam ser confirmados antes do lançamento. Solicitações de exclusão podem ser enviadas ao contato abaixo; dados mantidos diretamente pelo Google também podem ser gerenciados pelos controles da conta Google. Medidas de segurança e minimização serão verificadas na versão distribuída.",
    "Local data remains as needed for operation and until removed by the user or app. Data sent to providers, if any, follows the applicable service settings and policies; specific retention periods must still be confirmed before release. Deletion requests can be sent through the contact below; data held directly by Google may also be managed via Google Account controls. Security and minimization measures will be verified in the distributed version."
  ],
  [
    "Direitos e contato",
    "Rights and contact",
    "Conforme a legislação aplicável, você pode solicitar acesso, correção, exclusão, informação sobre compartilhamento, oposição, portabilidade, retirada do consentimento e outros direitos. Entre em contato com a Zenith IT pelo canal oficial do site. Você também pode recorrer à autoridade de proteção de dados competente quando aplicável.",
    "Depending on applicable law, you may request access, correction, deletion, sharing information, objection, portability, withdrawal of consent and other rights. Contact Zenith IT through the official website. You may also contact the competent data protection authority where applicable."
  ]
] as const;
const providers = [
  ["Google", "https://policies.google.com/privacy"],
  ["Google AdMob", "https://support.google.com/admob/answer/6128543"],
  ["Firebase", "https://firebase.google.com/support/privacy"]
] as const;

export default function GrovewakePrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-200">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="mb-10 border-b border-white/10 pb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="Zenith IT" className="h-10 w-auto" />
            <span className="display-font font-semibold tracking-[0.22em] text-white">ZENITH IT</span>
          </Link>
          <p className="mt-10 text-sm uppercase tracking-[0.24em] text-blue-200">Grovewake</p>
          <h1 className="display-font mt-3 text-3xl font-semibold text-white sm:text-5xl">Política de Privacidade / Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-400">24/11/2026 · Minuta pré-lançamento / Pre-release draft</p>
          <p className="mt-4 text-slate-300">Em revisão: configuração etária, retenção, mercados e serviços nativos. Não utilizar como declaração final da loja. / Under review: age safeguards, retention, markets and native services. Not a final store disclosure.</p>
          <nav aria-label="Idioma / Language" className="mt-6 flex gap-5">
            <a href="#pt" className="text-blue-300 underline">Português</a>
            <a href="#en" className="text-blue-300 underline">English</a>
          </nav>
        </header>
        {(["pt","en"] as const).map((lang) => (
          <div key={lang} id={lang} lang={lang === "pt" ? "pt-BR" : "en"} className="mb-14 scroll-mt-8 space-y-8 text-base leading-8 text-slate-300">
            <h2 className="display-font text-3xl text-white">{lang === "pt" ? "Português" : "English"}</h2>
            {sections.map(([pt,en,p,e], i) => (
              <section key={pt}>
                <h3 className="display-font text-xl font-semibold text-white">{i+1}. {lang === "pt" ? pt : en}</h3>
                <p className="mt-3">{lang === "pt" ? p : e}</p>
              </section>
            ))}
            <section>
              <h3 className="display-font text-xl font-semibold text-white">{lang === "pt" ? "9. Políticas dos provedores" : "9. Provider policies"}</h3>
              <ul className="mt-3 space-y-2">{providers.map(([name,url]) => <li key={name}><a href={url} target="_blank" rel="noreferrer" className="text-blue-300 underline">{name}</a></li>)}</ul>
              <Link href="/#contact" className="mt-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 text-blue-200">{lang === "pt" ? "Contato Zenith IT" : "Contact Zenith IT"}</Link>
            </section>
          </div>
        ))}
        <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-slate-400">
          <p>© 2026 Zenith IT</p><Link href="/terms" className="text-blue-300 underline">Termos / Terms</Link>
        </footer>
      </div>
    </main>
  );
}
