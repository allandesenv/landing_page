export type Locale = "pt" | "en";

type NavItem = { label: string; href: string };
type ServiceItem = { title: string; description: string };
type UseCaseItem = { title: string; problem: string; solution: string; result: string };
type PlanItem = { name: string; description: string; features: string[]; featured?: boolean };
type SocialItem = { label: string; href: string };

export type SiteContent = {
  localeLabel: string;
  switchLabel: string;
  nav: NavItem[];
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    authority: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string[];
    stats: { label: string; value: string }[];
  };
  pain: { eyebrow: string; title: string; paragraphs: string[] };
  solution: { eyebrow: string; title: string; text: string; benefits: string[] };
  services: { eyebrow: string; title: string; items: ServiceItem[] };
  differentials: { eyebrow: string; title: string; items: string[] };
  useCases: { eyebrow: string; title: string; items: UseCaseItem[] };
  socialProof: { eyebrow: string; title: string; text: string };
  leadMagnet: {
    eyebrow: string;
    title: string;
    text: string;
    formLabels: {
      name: string;
      email: string;
      whatsapp: string;
      company: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
    };
    successRedirect: string;
  };
  plans: { eyebrow: string; title: string; items: PlanItem[] };
  finalCta: { title: string; text: string; primary: string; secondary: string };
  footer: { role: string; rights: string; socials: SocialItem[] };
  contact: { whatsappLabel: string; calendarLabel: string };
  useCaseLabels: { problem: string; solution: string; result: string };
  thankYou: { title: string; text: string; primary: string; secondary: string };
};

export const siteContent: Record<Locale, SiteContent> = {
  pt: {
    localeLabel: "PT",
    switchLabel: "Switch to English",
    nav: [
      { label: "Serviços", href: "#services" },
      { label: "Diferenciais", href: "#differentials" },
      { label: "Planos", href: "#plans" },
      { label: "Contato", href: "#lead-magnet" }
    ],
    hero: {
      badge: "Engenheiro de Software Freelancer Premium",
      headline: "Automação Inteligente para Empresas que Querem Escalar de Verdade",
      subheadline:
        "Transforme processos manuais em fluxos automáticos, conecte todos os seus sistemas e use IA para produzir mais com menos esforço.",
      authority: "Engenharia de software aplicada à eficiência operacional.",
      primaryCta: "Falar no WhatsApp",
      secondaryCta: "Agendar Reunião Estratégica",
      trust: ["Resposta rápida", "Diagnóstico gratuito", "Sem compromisso"],
      stats: [
        { value: "24/7", label: "Fluxos rodando sem pausa" },
        { value: "ROI", label: "Projetos guiados por retorno" },
        { value: "Cloud", label: "Arquitetura estável e escalável" }
      ]
    },
    pain: {
      eyebrow: "Dor operacional",
      title: "Sua empresa está perdendo dinheiro com processos manuais",
      paragraphs: [
        "Planilhas espalhadas. Retrabalho constante. Equipes sobrecarregadas. Sistemas que não se conversam.",
        "Isso custa tempo, energia e crescimento.",
        "Automação não é luxo. É infraestrutura de eficiência."
      ]
    },
    solution: {
      eyebrow: "Solução",
      title: "Eu automatizo o que trava sua operação",
      text: "Mapeio seus processos, elimino gargalos e construo fluxos inteligentes que trabalham 24/7 para sua empresa.",
      benefits: ["Mais produtividade", "Menos erros operacionais", "Escala sem aumentar equipe", "Processos previsíveis"]
    },
    services: {
      eyebrow: "Serviços",
      title: "Soluções premium para operações que não podem travar",
      items: [
        {
          title: "Automação de Processos",
          description: "Rotinas manuais viram sistemas automáticos com regras claras, monitoramento e confiabilidade."
        },
        {
          title: "Fluxos Inteligentes com n8n",
          description: "Orquestração entre plataformas, APIs e gatilhos para criar automações robustas e flexíveis."
        },
        {
          title: "Integrações de Sistemas",
          description: "CRM, ERP, pagamentos, marketing e atendimento conectados em uma operação sem silos."
        },
        {
          title: "Automação com IA",
          description: "Chatbots, decisões automatizadas, classificação e geração de conteúdo orientadas por contexto."
        },
        {
          title: "Infraestrutura Cloud",
          description: "Ambiente seguro, observável e escalável para sustentar o crescimento sem improviso."
        }
      ]
    },
    differentials: {
      eyebrow: "Diferenciais",
      title: "Execução técnica com visão de negócio",
      items: ["Engenharia, não gambiarras", "Foco total em ROI", "Arquitetura escalável", "Segurança e confiabilidade", "Entrega rápida", "Suporte contínuo"]
    },
    useCases: {
      eyebrow: "Casos de uso",
      title: "Onde a automação gera impacto imediato",
      items: [
        {
          title: "Operação Comercial",
          problem: "Leads perdidos, follow-up inconsistente e propostas demoradas.",
          solution: "Integração entre CRM, canais de captura e automações de nutrição e proposta.",
          result: "Pipeline mais previsível, resposta mais rápida e menos esforço manual."
        },
        {
          title: "Atendimento ao Cliente",
          problem: "Solicitações repetitivas, filas longas e baixa visibilidade do histórico.",
          solution: "Fluxos com IA, triagem automática e centralização de tickets e interações.",
          result: "Atendimento mais ágil, experiência melhor e time mais produtivo."
        },
        {
          title: "Backoffice e Relatórios",
          problem: "Conciliação manual, fechamento lento e dados espalhados.",
          solution: "Pipelines de dados, integrações financeiras e relatórios automatizados.",
          result: "Decisões com mais clareza, menos erro operacional e ganho de tempo real."
        }
      ]
    },
    socialProof: {
      eyebrow: "Mercado",
      title: "Empresas que automatizam crescem mais rápido",
      text: "Seus concorrentes já estão otimizando processos. A pergunta é: você vai acompanhar ou ficar para trás?"
    },
    leadMagnet: {
      eyebrow: "Diagnóstico gratuito",
      title: "Receba um Diagnóstico Gratuito de Automação",
      text: "Preencha o formulário e eu retorno com os principais pontos de alavancagem para reduzir atrito operacional e acelerar resultados.",
      formLabels: {
        name: "Nome",
        email: "Email",
        whatsapp: "WhatsApp",
        company: "Empresa",
        message: "Descreva seu problema",
        messagePlaceholder: "Opcional: informe seu problema ou deixe em branco e aguarde o contato de um de nossos atendentes.",
        submit: "Solicitar Diagnóstico",
        sending: "Enviando..."
      },
      successRedirect: "/thank-you?lang=pt"
    },
    plans: {
      eyebrow: "Planos",
      title: "Modelos de entrega alinhados ao estágio da sua operação",
      items: [
        {
          name: "Starter",
          description: "Automações essenciais para eliminar gargalos mais urgentes.",
          features: ["Mapeamento rápido", "Fluxos prioritários", "Entrega enxuta"]
        },
        {
          name: "Professional",
          description: "Integrações completas para operações que precisam de previsibilidade.",
          features: ["Integrações ponta a ponta", "Monitoramento", "Processos mais maduros"],
          featured: true
        },
        {
          name: "Enterprise",
          description: "Automação total com IA, infraestrutura e governança técnica.",
          features: ["Arquitetura avançada", "IA aplicada", "Escala e segurança"]
        }
      ]
    },
    finalCta: {
      title: "Pronto para transformar sua operação?",
      text: "Receba um diagnóstico gratuito e veja onde sua empresa está perdendo eficiência.",
      primary: "Falar no WhatsApp",
      secondary: "Solicitar Proposta"
    },
    footer: {
      role: "Engenharia de Software",
      rights: "Todos os direitos reservados.",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com" },
        { label: "GitHub", href: "https://www.github.com" },
        { label: "Email", href: "mailto:contato@seudominio.com" }
      ]
    },
    contact: {
      whatsappLabel: "WhatsApp",
      calendarLabel: "Agendar reunião"
    },
    useCaseLabels: {
      problem: "Problema",
      solution: "Solução",
      result: "Resultado"
    },
    thankYou: {
      title: "Diagnóstico solicitado com sucesso",
      text: "Recebi suas informações. O próximo passo é analisar a sua operação e retornar com oportunidades claras de automação.",
      primary: "Voltar para a página inicial",
      secondary: "Abrir WhatsApp"
    }
  },
  en: {
    localeLabel: "EN",
    switchLabel: "Mudar para Português",
    nav: [
      { label: "Services", href: "#services" },
      { label: "Differentials", href: "#differentials" },
      { label: "Plans", href: "#plans" },
      { label: "Contact", href: "#lead-magnet" }
    ],
    hero: {
      badge: "Premium Freelance Software Engineer",
      headline: "Intelligent Automation for Companies Ready to Scale",
      subheadline:
        "Turn manual work into automated workflows, connect all your systems, and use AI to produce more with less effort.",
      authority: "Software engineering applied to operational efficiency.",
      primaryCta: "Chat on WhatsApp",
      secondaryCta: "Schedule Strategy Call",
      trust: ["Fast response", "Free diagnosis", "No commitment"],
      stats: [
        { value: "24/7", label: "Workflows always running" },
        { value: "ROI", label: "Projects guided by outcomes" },
        { value: "Cloud", label: "Stable and scalable architecture" }
      ]
    },
    pain: {
      eyebrow: "Operational pain",
      title: "Your company is losing money with manual processes",
      paragraphs: [
        "Scattered spreadsheets. Constant rework. Overloaded teams. Disconnected systems.",
        "This drains time, energy, and growth.",
        "Automation isn’t a luxury. It’s efficiency infrastructure."
      ]
    },
    solution: {
      eyebrow: "Solution",
      title: "I automate what slows your operation",
      text: "I map your processes, remove bottlenecks, and build intelligent workflows that run 24/7.",
      benefits: ["Higher productivity", "Fewer operational errors", "Scale without hiring", "Predictable processes"]
    },
    services: {
      eyebrow: "Services",
      title: "Premium delivery for operations that cannot afford friction",
      items: [
        {
          title: "Process Automation",
          description: "Manual routines become automated systems with clear rules, monitoring and reliability."
        },
        {
          title: "Intelligent n8n Workflows",
          description: "Orchestration across platforms, APIs and triggers to create robust, flexible automations."
        },
        {
          title: "System Integrations",
          description: "CRM, ERP, payments, marketing and support connected in a single operational layer."
        },
        {
          title: "AI Automation",
          description: "Chatbots, automated decisions, classification and content generation driven by context."
        },
        {
          title: "Cloud Infrastructure",
          description: "Secure, observable and scalable environments designed to sustain growth without patchwork."
        }
      ]
    },
    differentials: {
      eyebrow: "Differentials",
      title: "Technical execution with business context",
      items: ["Engineering, not hacks", "Total focus on ROI", "Scalable architecture", "Security and reliability", "Fast delivery", "Ongoing support"]
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Where automation creates immediate impact",
      items: [
        {
          title: "Sales Operations",
          problem: "Lost leads, inconsistent follow-up and slow proposal workflows.",
          solution: "Integrated CRM, capture channels and automated nurturing and proposal flows.",
          result: "A more predictable pipeline, faster response times and less manual work."
        },
        {
          title: "Customer Support",
          problem: "Repetitive requests, long queues and low visibility into customer history.",
          solution: "AI-powered flows, automatic triage and centralized tickets and interactions.",
          result: "Faster service, better customer experience and a more productive team."
        },
        {
          title: "Back Office",
          problem: "Manual reconciliation, slow closing cycles and fragmented data.",
          solution: "Data pipelines, financial integrations and automated reporting.",
          result: "Clearer decisions, fewer operational errors and real time savings."
        }
      ]
    },
    socialProof: {
      eyebrow: "Market reality",
      title: "Companies that automate grow faster",
      text: "Your competitors are already optimizing processes. The question is: will you keep up or fall behind?"
    },
    leadMagnet: {
      eyebrow: "Free diagnosis",
      title: "Get a Free Automation Diagnosis",
      text: "Fill out the form and I will reply with the main leverage points to reduce operational friction and accelerate results.",
      formLabels: {
        name: "Name",
        email: "Email",
        whatsapp: "WhatsApp",
        company: "Company",
        message: "Describe your problem",
        messagePlaceholder: "Optional: describe your problem or leave it blank and wait for one of our team members to contact you.",
        submit: "Request Diagnosis",
        sending: "Sending..."
      },
      successRedirect: "/thank-you?lang=en"
    },
    plans: {
      eyebrow: "Plans",
      title: "Delivery models aligned with your operational stage",
      items: [
        {
          name: "Starter",
          description: "Essential automations to remove the most urgent bottlenecks.",
          features: ["Fast mapping", "Priority flows", "Lean delivery"]
        },
        {
          name: "Professional",
          description: "Complete integrations for operations that need predictability.",
          features: ["End-to-end integrations", "Monitoring", "Mature processes"],
          featured: true
        },
        {
          name: "Enterprise",
          description: "Full automation with AI, infrastructure and technical governance.",
          features: ["Advanced architecture", "Applied AI", "Scale and security"]
        }
      ]
    },
    finalCta: {
      title: "Ready to transform your operations?",
      text: "Get a free diagnosis and discover where efficiency is leaking.",
      primary: "Chat on WhatsApp",
      secondary: "Request Proposal"
    },
    footer: {
      role: "Software Engineering",
      rights: "All rights reserved.",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com" },
        { label: "GitHub", href: "https://www.github.com" },
        { label: "Email", href: "mailto:contact@yourdomain.com" }
      ]
    },
    contact: {
      whatsappLabel: "WhatsApp",
      calendarLabel: "Schedule call"
    },
    useCaseLabels: {
      problem: "Problem",
      solution: "Solution",
      result: "Result"
    },
    thankYou: {
      title: "Diagnosis requested successfully",
      text: "I received your details. The next step is to review your operation and come back with clear automation opportunities.",
      primary: "Back to homepage",
      secondary: "Open WhatsApp"
    }
  }
};
