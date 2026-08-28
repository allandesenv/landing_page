import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Zenith Cascade",
  description:
    "Política de Privacidade do Zenith Cascade, jogo desenvolvido e publicado pela Zenith IT.",
  robots: {
    index: true,
    follow: true
  }
};

const updatedAt = "28 de agosto de 2026";

export default function ZenithCascadePrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-200">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="mb-10 border-b border-white/10 pb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="Zenith IT" className="h-10 w-auto" />
            <div>
              <p className="display-font text-base font-semibold tracking-[0.22em] text-white">ZENITH IT</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Engenharia de Software</p>
            </div>
          </Link>

          <p className="mt-10 text-sm uppercase tracking-[0.24em] text-blue-200">Zenith Cascade</p>
          <h1 className="display-font mt-3 text-3xl font-semibold text-white sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-sm text-slate-400">Última atualização: {updatedAt}</p>
        </header>

        <div className="space-y-10 text-base leading-8 text-slate-300">
          <section>
            <h2 className="display-font text-2xl font-semibold text-white">1. Sobre esta política</h2>
            <p className="mt-4">
              Esta Política de Privacidade descreve como o aplicativo <strong className="text-white">Zenith Cascade</strong>,
              desenvolvido e publicado pela <strong className="text-white">Zenith IT</strong>, trata informações relacionadas
              ao uso do jogo. O objetivo é explicar, de forma transparente, quais serviços de terceiros são utilizados e quais
              tipos de dados podem ser processados durante a experiência.
            </p>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">2. Dados e serviços utilizados</h2>
            <p className="mt-4">
              O Zenith Cascade não exige a criação de uma conta própria da Zenith IT. Entretanto, algumas funcionalidades usam
              serviços fornecidos pelo Google, que podem processar dados conforme suas próprias políticas e configurações.
            </p>

            <div className="mt-6 space-y-6">
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">Google Play Games Services</h3>
                <p className="mt-2">
                  Quando o jogador utiliza recursos do Google Play Games, como login, placares e conquistas, o Google pode
                  processar informações da conta de jogador, identificadores de perfil, pontuações, conquistas e dados necessários
                  para fornecer esses recursos.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">Google AdMob</h3>
                <p className="mt-2">
                  O jogo pode exibir anúncios por meio do Google AdMob. Para entregar, medir, limitar frequência e, quando
                  aplicável, personalizar anúncios, o Google e seus parceiros podem processar identificadores do dispositivo,
                  informações do aplicativo, endereço IP aproximado, interações com anúncios e outros dados técnicos permitidos
                  pelas configurações do dispositivo, consentimento e legislação aplicável.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">Firebase Analytics</h3>
                <p className="mt-2">
                  O aplicativo inclui o Firebase Analytics para compreender o uso geral do jogo e melhorar a experiência. Esse
                  serviço pode processar eventos de uso, informações do dispositivo, versão do aplicativo, país ou região
                  aproximada e identificadores técnicos associados à instalação.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">Firebase Crashlytics</h3>
                <p className="mt-2">
                  O Firebase Crashlytics pode processar relatórios de falhas, informações técnicas do dispositivo, versão do
                  sistema operacional, estado do aplicativo e identificadores técnicos necessários para diagnosticar erros e
                  melhorar a estabilidade do jogo.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">3. Finalidades do tratamento</h2>
            <p className="mt-4">Os dados processados por esses serviços podem ser utilizados para:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>fornecer login, placares e conquistas do Google Play Games;</li>
              <li>exibir, medir e operar anúncios;</li>
              <li>medir uso e desempenho do aplicativo;</li>
              <li>detectar falhas, erros e problemas de estabilidade;</li>
              <li>prevenir abuso, fraude e atividades maliciosas;</li>
              <li>cumprir obrigações legais e requisitos das plataformas de distribuição.</li>
            </ul>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">4. Compartilhamento de dados</h2>
            <p className="mt-4">
              A Zenith IT não vende dados pessoais dos jogadores. Informações podem ser processadas ou compartilhadas com os
              provedores necessários ao funcionamento dos serviços descritos acima, especialmente Google Play Games, Google
              AdMob e Firebase, de acordo com as respectivas políticas, controles de privacidade, consentimentos e exigências legais.
            </p>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">5. Retenção e segurança</h2>
            <p className="mt-4">
              A retenção de informações processadas por serviços do Google segue as políticas e configurações desses provedores.
              A Zenith IT adota medidas razoáveis para limitar o acesso e reduzir riscos de uso indevido das informações que estejam
              sob seu controle, mas nenhum sistema eletrônico pode oferecer segurança absoluta.
            </p>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">6. Controles do usuário</h2>
            <p className="mt-4">
              O usuário pode gerenciar permissões do aplicativo, preferências de anúncios, configurações de privacidade e recursos
              do Google Play Games por meio das configurações da Conta Google, do Google Play, do Android e do próprio dispositivo,
              quando aplicável.
            </p>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">7. Serviços de terceiros</h2>
            <p className="mt-4">Para mais informações sobre as práticas dos serviços utilizados:</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 underline decoration-blue-300/40 underline-offset-4 hover:text-blue-200"
                >
                  Política de Privacidade do Google
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/admob/answer/6128543"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 underline decoration-blue-300/40 underline-offset-4 hover:text-blue-200"
                >
                  Como o Google AdMob utiliza dados
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 underline decoration-blue-300/40 underline-offset-4 hover:text-blue-200"
                >
                  Privacidade e segurança do Firebase
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">8. Crianças e adolescentes</h2>
            <p className="mt-4">
              O Zenith Cascade não solicita diretamente nome, endereço, telefone, e-mail ou outros dados de contato dentro do jogo.
              Caso o público-alvo definido na loja inclua crianças ou adolescentes, os recursos de anúncios e serviços de terceiros
              serão configurados de acordo com as exigências aplicáveis do Google Play, das políticas de famílias e da legislação
              vigente.
            </p>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">9. Alterações desta política</h2>
            <p className="mt-4">
              Esta Política de Privacidade poderá ser atualizada quando houver mudanças no aplicativo, nos serviços utilizados ou
              em requisitos legais e de plataforma. A data da atualização mais recente será sempre exibida no início desta página.
            </p>
          </section>

          <section>
            <h2 className="display-font text-2xl font-semibold text-white">10. Contato</h2>
            <p className="mt-4">
              Para dúvidas sobre privacidade ou sobre o Zenith Cascade, entre em contato com a Zenith IT pelos canais disponíveis em
              nosso site oficial.
            </p>
            <a
              href="https://zenith-it.vercel.app/#contact"
              className="mt-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 font-medium text-blue-200 transition hover:bg-blue-400/15"
            >
              Falar com a Zenith IT
            </a>
          </section>
        </div>

        <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-slate-500">
          <p>© 2026 Zenith IT. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
