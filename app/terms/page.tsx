import type { Metadata } from "next";
import Link from "next/link";

const updatedAt = "6 de novembro de 2026";

export const metadata: Metadata = {
  title: "Termos de Serviço dos Aplicativos | Zenith IT",
  description:
    "Termos de Serviço gerais dos aplicativos e serviços digitais da Zenith IT, incluindo Doggo Cascade, Evolua e Grovewake.",
  alternates: { canonical: "https://zenith-it.vercel.app/terms" },
  robots: { index: true, follow: true }
};

const apps = [
  {
    name: "Doggo Cascade",
    id: "br.com.zenithit.zenithcascade",
    summary: "Jogo de quebra-cabeça de blocos, com modos, desafios e funcionalidades conforme a versão instalada.",
    terms: "Pontuações, progresso, conquistas, modos, anúncios e eventuais recursos online dependem da versão, das escolhas do jogador e dos serviços habilitados."
  },
  {
    name: "Evolua",
    id: "br.com.zenithit.evolua",
    summary: "Aplicativo de autocuidado e bem-estar, que pode disponibilizar recursos de inteligência artificial e assinaturas.",
    terms: "Textos, exercícios, reflexões e conteúdos produzidos com IA têm finalidade informativa e de autocuidado. Não são diagnóstico, tratamento, aconselhamento médico ou psicológico profissional, nem serviço de emergência."
  },
  {
    name: "Grovewake",
    id: "br.com.zenithit.grovewake",
    summary: "Jogo de estratégia/tower defense em desenvolvimento; estas condições aplicam-se quando for disponibilizado.",
    terms: "Partidas, progresso, desafios, recursos offline e eventuais serviços conectados ficam sujeitos às características da versão efetivamente distribuída."
  }
] as const;

const sections = [
  {
    title: "1. Aplicação e responsável",
    paragraphs: [
      "Estes Termos de Serviço regulam o uso dos aplicativos e serviços digitais identificados nesta página, disponibilizados sob a marca Zenith IT. Cada aplicativo deve ser identificado pelo nome e pela desenvolvedora apresentados na respectiva loja.",
      "O uso de um aplicativo identificado nesta página significa que estes Termos gerais se aplicam a esse produto, juntamente com informações e condições específicas apresentadas dentro do aplicativo e na sua página oficial. Caso um produto tenha condições adicionais próprias, elas serão indicadas expressamente e prevalecerão apenas para o recurso ou produto correspondente, na medida permitida pela lei."
    ]
  },
  {
    title: "2. Aceitação e menores de idade",
    paragraphs: [
      "Ao acessar ou utilizar um aplicativo abrangido por estes Termos, você declara ter tido a oportunidade de conhecer as condições aplicáveis. Se não concordar, poderá deixar de utilizar o produto.",
      "Crianças e adolescentes devem utilizar os aplicativos de acordo com a classificação indicativa, as regras de idade da plataforma e a legislação aplicável, com a orientação ou supervisão de seus responsáveis quando necessária. Responsáveis devem acompanhar eventuais recursos de publicidade, compras e serviços conectados."
    ]
  },
  {
    title: "3. Licença e uso permitido",
    paragraphs: [
      "Concedemos uma licença pessoal, limitada, não exclusiva, não transferível e revogável nos limites da lei para instalar e utilizar os aplicativos de maneira lícita, conforme sua finalidade e as regras da loja aplicável.",
      "Essa licença não transfere a propriedade de códigos, personagens, imagens, marcas, textos, animações, obras de arte, recursos de IA ou outros materiais protegidos. Não é permitido distribuir cópias não autorizadas, explorar vulnerabilidades, fraudar resultados, violar direitos de terceiros ou interferir indevidamente na segurança dos serviços."
    ]
  },
  {
    title: "4. Recursos, contas e serviços de terceiros",
    paragraphs: [
      "As funcionalidades variam conforme o aplicativo, a versão, o dispositivo e a região. Alguns recursos podem funcionar offline; outros podem depender de conexão, conta, permissões, disponibilidade de plataforma ou serviços de terceiros.",
      "Integrações com Google Play, Play Games, sistemas de publicidade, pagamentos e outros fornecedores, quando presentes, também estão sujeitas às respectivas regras. Nenhuma integração é considerada ativa apenas por estar descrita como possibilidade nestes Termos."
    ]
  },
  {
    title: "5. Compras, assinaturas e publicidade",
    paragraphs: [
      "Alguns produtos podem ser gratuitos, exibir publicidade ou oferecer funcionalidades pagas e assinaturas. A existência de um recurso em um aplicativo não significa que ele esteja disponível nos demais.",
      "Antes de uma transação, os preços, a periodicidade, a renovação, o conteúdo adquirido e as condições relevantes deverão ser informados no fluxo de compra aplicável. A gestão e o cancelamento de assinaturas feitas pelo Google Play seguem os controles da plataforma, sem prejuízo dos direitos obrigatórios do consumidor.",
      "Anúncios recompensados, quando oferecidos, são opcionais e dependem das regras comunicadas no próprio aplicativo, da disponibilidade de publicidade e das exigências de privacidade e consentimento."
    ]
  },
  {
    title: "6. Conteúdo, progresso e inteligência artificial",
    paragraphs: [
      "Dados de progresso, preferências e histórico podem ficar armazenados no aparelho ou em serviços conectados, dependendo do produto. Apagar dados, desinstalar um aplicativo ou trocar de dispositivo pode afetar informações que não estejam sincronizadas. Não garantimos recuperação quando o produto não oferece esse recurso.",
      "Recursos de inteligência artificial, quando disponibilizados, podem produzir conteúdo incompleto ou impreciso. O usuário deve avaliar criticamente as informações e não utilizá-las como único fundamento para decisões de saúde, segurança, finanças ou outras decisões relevantes.",
      "Recursos de bem-estar e autocuidado não substituem assistência de profissionais habilitados ou serviços de emergência. Em caso de urgência, procure atendimento local apropriado."
    ]
  },
  {
    title: "7. Disponibilidade, alterações e suporte",
    paragraphs: [
      "Podemos atualizar os aplicativos para corrigir falhas, melhorar segurança e desempenho, atender a obrigações legais ou modificar funcionalidades. Recursos podem ser alterados ou descontinuados, observados os direitos aplicáveis ao usuário.",
      "Buscamos oferecer serviços estáveis, mas não garantimos funcionamento ininterrupto ou compatibilidade com todos os equipamentos, redes ou sistemas operacionais. Dúvidas e solicitações podem ser encaminhadas pelos canais oficiais disponíveis no site da Zenith IT e na página de suporte do respectivo aplicativo."
    ]
  },
  {
    title: "8. Privacidade e direitos do consumidor",
    paragraphs: [
      "O tratamento de dados pessoais, o uso de permissões, o compartilhamento com prestadores e os direitos dos titulares são explicados na Política de Privacidade específica de cada aplicativo, disponível na sua loja ou em link oficial. Estes Termos não substituem a Política de Privacidade nem dispensam avisos ou consentimentos exigidos por lei.",
      "Nenhuma disposição destes Termos afasta direitos irrenunciáveis de consumidores nem limita responsabilidades que não possam ser legalmente excluídas. Regras obrigatórias do país ou região do usuário prevalecem quando aplicáveis."
    ]
  },
  {
    title: "9. Atualizações destes Termos",
    paragraphs: [
      "Este documento poderá ser atualizado para refletir novos aplicativos, alterações de funcionalidades, requisitos legais ou mudanças de plataforma. A data da atualização ficará visível nesta página. Novos aplicativos somente estarão abrangidos de modo inequívoco quando identificados na relação de produtos cobertos.",
      "As condições aqui descritas aplicam-se de forma proporcional aos recursos realmente oferecidos por cada aplicativo. Uma hipótese ou possibilidade listada neste documento não representa promessa de recurso ou alteração automática da licença do produto."
    ]
  }
] as const;

export default function ZenithAppsTermsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-200">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="border-b border-white/10 pb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="Zenith IT" className="h-10 w-auto" />
            <div>
              <p className="display-font text-base font-semibold tracking-[0.22em] text-white">ZENITH IT</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Aplicativos e Serviços Digitais</p>
            </div>
          </Link>
          <p className="mt-10 text-sm uppercase tracking-[0.22em] text-blue-200">Informações legais</p>
          <h1 className="display-font mt-3 text-3xl font-semibold text-white sm:text-5xl">
            Termos de Serviço dos Aplicativos
          </h1>
          <p className="mt-4 text-sm text-slate-400">Última atualização: {updatedAt}</p>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Estes Termos são compartilhados pelos aplicativos da Zenith IT listados abaixo.
            As condições específicas de cada produto são indicadas nesta mesma página.
          </p>
        </header>

        <section className="mt-10" aria-labelledby="covered-apps">
          <h2 id="covered-apps" className="display-font text-2xl font-semibold text-white">
            Aplicativos abrangidos
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-300">
            Para identificar a aplicação exata destes Termos, confirme o nome do aplicativo
            e o identificador técnico correspondente:
          </p>
          <div className="mt-5 space-y-4">
            {apps.map((app) => (
              <article
                key={app.id}
                id={app.id.split(".").pop()}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6"
              >
                <h3 className="display-font text-xl font-semibold text-white">{app.name}</h3>
                <p className="mt-1 break-all text-xs text-slate-400">{app.id}</p>
                <p className="mt-4 leading-8 text-slate-300">{app.summary}</p>
                <p className="mt-3 leading-8 text-slate-300">{app.terms}</p>
                {app.name === "Doggo Cascade" && (
                  <Link
                    href="/privacy/zenith-cascade"
                    className="mt-4 inline-flex text-blue-300 underline decoration-blue-300/40 underline-offset-4 hover:text-blue-200"
                  >
                    Política de Privacidade do Doggo Cascade
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-10 text-base leading-8 text-slate-300">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="display-font text-xl font-semibold text-white sm:text-2xl">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400">
          <p>© 2026 Zenith IT. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/#contact" className="hover:text-white">Contato</Link>
            <Link href="/privacy/zenith-cascade" className="hover:text-white">Privacidade — Doggo Cascade</Link>
            <Link href="/" className="hover:text-white">Voltar ao site</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
