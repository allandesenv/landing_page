import type { Metadata } from "next";
import Link from "next/link";

const updatedAt = "6 de novembro de 2026";
const contactEmail = "contato.zenith.it@gmail.com";

export const metadata: Metadata = {
  title: "Termos de Serviço | Doggo Cascade | Zenith IT",
  description: "Termos de Serviço do jogo Doggo Cascade, disponibilizado pela Zenith IT.",
  alternates: { canonical: "https://zenith-it.vercel.app/terms/doggo-cascade" },
  robots: { index: true, follow: true }
};

const sections = [
  {
    title: "1. Quem oferece o jogo",
    paragraphs: [
      "Estes Termos de Serviço regem a utilização de Doggo Cascade, jogo publicado pela Zenith IT na Google Play. O aplicativo Android utiliza o identificador técnico br.com.zenithit.zenithcascade.",
      "Esta página trata especificamente de Doggo Cascade. A Política de Privacidade do aplicativo é um documento separado, acessível pelo link ao final dos Termos."
    ]
  },
  {
    title: "2. Aceitação e uso por menores",
    paragraphs: [
      "Ao instalar ou utilizar o jogo, você declara ter lido estes Termos. Se não concordar, poderá deixar de utilizar o aplicativo.",
      "Crianças e adolescentes devem utilizar o jogo sob supervisão de um responsável, considerando a classificação indicativa do aplicativo e a legislação aplicável. Responsáveis devem acompanhar eventuais recursos conectados, publicidade e compras quando disponibilizados."
    ]
  },
  {
    title: "3. Licença de uso",
    paragraphs: [
      "A Zenith IT concede ao usuário uma licença pessoal, limitada, não exclusiva e intransferível para instalar e jogar Doggo Cascade em dispositivos compatíveis, para finalidades lícitas e conforme as regras da plataforma de distribuição.",
      "A licença não transfere propriedade sobre software, elementos visuais, personagens, músicas, marcas, código-fonte ou demais componentes do aplicativo."
    ]
  },
  {
    title: "4. Regras de utilização",
    paragraphs: [
      "Não utilize ferramentas, modificações ou métodos para fraudar pontuações, interferir na integridade de partidas, explorar vulnerabilidades ou prejudicar outros jogadores.",
      "Não distribua versões modificadas ou cópias não autorizadas do aplicativo, nem explore comercialmente seus elementos protegidos sem a licença necessária, ressalvados os direitos garantidos por lei."
    ]
  },
  {
    title: "5. Funcionalidades, progresso e dados locais",
    paragraphs: [
      "Doggo Cascade é um jogo de quebra-cabeça de blocos. Modos, dificuldades, conquistas, progressão, opções de acessibilidade e outras funcionalidades dependem da versão instalada e da disponibilidade de cada recurso.",
      "Dados de progresso e preferências podem ser armazenados localmente ou associados a serviços conectados quando esses recursos estiverem habilitados. Excluir dados, desinstalar o aplicativo ou trocar de dispositivo pode afetar informações armazenadas localmente. Não é garantida a restauração de dados quando não houver recurso de recuperação disponibilizado."
    ]
  },
  {
    title: "6. Integrações e placares",
    paragraphs: [
      "O jogo pode oferecer integração com Google Play Games para autenticação opcional, classificações ou conquistas. A disponibilidade depende da região, versão do aplicativo, conexão e configurações do jogador.",
      "Serviços de terceiros têm regras e políticas próprias. Pontuações e conquistas são elementos do jogo e não constituem valores monetários ou prêmios resgatáveis, salvo declaração expressa em sentido diferente."
    ]
  },
  {
    title: "7. Anúncios e recompensas",
    paragraphs: [
      "O aplicativo pode apresentar anúncios e, quando disponíveis, anúncios recompensados opcionais. A eventual recompensa e suas condições são informadas no próprio jogo antes da interação.",
      "A disponibilidade de publicidade depende da configuração do aplicativo, consentimento quando exigido, região e serviços de terceiros. Nenhum anúncio ou recompensa específica é garantido continuamente."
    ]
  },
  {
    title: "8. Eventuais compras digitais",
    paragraphs: [
      "O jogo pode ser disponibilizado gratuitamente. Caso itens ou funcionalidades pagos sejam oferecidos, os respectivos preços e condições deverão ser informados antes da confirmação de compra.",
      "Pagamentos processados pela Google Play ficam sujeitos às regras pertinentes da plataforma, inclusive reembolsos e cancelamentos, sem prejuízo dos direitos obrigatórios previstos na legislação de defesa do consumidor."
    ]
  },
  {
    title: "9. Propriedade intelectual",
    paragraphs: [
      "Os elementos originais de Doggo Cascade e a identidade Zenith IT pertencem aos respectivos titulares. Marcas, tecnologias e serviços de terceiros permanecem sob titularidade de seus proprietários.",
      "O compartilhamento comum de capturas e vídeos de partidas é permitido desde que não viole direitos de terceiros, não apresente o conteúdo como comunicação oficial da Zenith IT e não envolva distribuição de cópias indevidas do aplicativo."
    ]
  },
  {
    title: "10. Atualizações e funcionamento",
    paragraphs: [
      "Podemos disponibilizar atualizações para corrigir falhas, melhorar segurança e desempenho, adequar compatibilidade ou ajustar funcionalidades. Recursos podem mudar ou ser descontinuados por motivos técnicos, legais ou de plataforma.",
      "Buscamos uma experiência estável, mas não prometemos disponibilidade ininterrupta nem compatibilidade com todos os aparelhos ou sistemas. Permanecem preservados os direitos e garantias assegurados pela legislação aplicável."
    ]
  },
  {
    title: "11. Privacidade",
    paragraphs: [
      "Informações relacionadas ao aplicativo e ao eventual uso de Google Play Games, Google AdMob e Firebase são tratadas na Política de Privacidade específica. Leia-a para conhecer as categorias de dados, os serviços envolvidos e os controles disponíveis.",
      "O uso de recursos oferecidos por terceiros também pode estar sujeito às respectivas políticas, quando aplicável."
    ]
  },
  {
    title: "12. Responsabilidade e direitos legais",
    paragraphs: [
      "A Zenith IT se compromete a observar as normas aplicáveis ao fornecimento do aplicativo. Não podemos controlar integralmente o funcionamento de redes, aparelhos ou serviços de terceiros.",
      "Nenhuma cláusula destes Termos afasta responsabilidade legalmente obrigatória ou exclui, reduz ou substitui direitos irrenunciáveis dos consumidores, inclusive os assegurados pela legislação aplicável nos países em que o jogo é disponibilizado."
    ]
  },
  {
    title: "13. Alterações e contato",
    paragraphs: [
      "Estes Termos podem ser atualizados em razão de mudanças no jogo, na legislação ou nas regras das plataformas. A data da versão vigente ficará indicada nesta página. Mudanças relevantes serão comunicadas pelos meios adequados, quando necessário.",
      "Dúvidas sobre estes Termos podem ser encaminhadas à Zenith IT pelo e-mail indicado abaixo."
    ]
  }
] as const;

export default function DoggoCascadeTermsPage() {
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
          <p className="mt-10 text-sm uppercase tracking-[0.24em] text-blue-200">Doggo Cascade · Aplicativo Android</p>
          <h1 className="display-font mt-3 text-3xl font-semibold text-white sm:text-5xl">Termos de Serviço</h1>
          <p className="mt-4 text-sm text-slate-400">Última atualização: {updatedAt}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Condições de uso do jogo Doggo Cascade, publicado pela Zenith IT.
          </p>
        </header>
        <div className="space-y-10 text-base leading-8 text-slate-300">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="display-font text-xl font-semibold text-white sm:text-2xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4">{paragraph}</p>
              ))}
              {section.title.startsWith("11.") && (
                <Link
                  href="/privacy/zenith-cascade"
                  className="mt-4 inline-flex text-blue-300 underline decoration-blue-300/40 underline-offset-4 hover:text-blue-200"
                >
                  Consultar a Política de Privacidade do aplicativo
                </Link>
              )}
              {section.title.startsWith("13.") && (
                <a
                  href={"mailto:" + contactEmail}
                  className="mt-4 inline-flex text-blue-300 underline decoration-blue-300/40 underline-offset-4 hover:text-blue-200"
                >
                  {contactEmail}
                </a>
              )}
            </section>
          ))}
        </div>
        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400">
          <p>© 2026 Zenith IT. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy/zenith-cascade" className="hover:text-white">Política de Privacidade</Link>
            <Link href="/" className="hover:text-white">Voltar ao site</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
