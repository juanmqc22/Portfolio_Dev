import {
  agile,
  contentCreator,
  backEnd,
  impressao3d,
  azure,
  csharp,
  docker,
  git,
  java,
  mysql,
  python,
  scikitlearn,
  ijsud,
  freelance,
  posgrad,
  projContratos,
  projRunner,
  projConectaIcs,
  projWomanGuardian,
  projMlDiabetes,
} from "./assets";

export const navLinks = [
  { id: "about", title: "Sobre mim" },
  { id: "work", title: "Experiência" },
  { id: "projects", title: "Projetos" },
  { id: "contact", title: "Contato" },
];

export const services = [
  { title: "Backend & APIs", icon: backEnd },
  { title: "IA & Machine Learning", icon: contentCreator },
  { title: "Automação & Power Platform", icon: agile },
];

export const technologies = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
  { name: "MySQL", icon: mysql },
  { name: "scikit-learn", icon: scikitlearn },
  { name: "Azure", icon: azure },
  { name: "Docker", icon: docker },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#0a1b22",
    date: "Mai 2023 - Ago 2025",
    points: [
      "Sites e aplicações web sob demanda, do levantamento de requisitos à entrega, atuando remoto.",
      "HTML5, CSS e JavaScript com foco em layout responsivo e prazo combinado com o cliente.",
    ],
  },
  {
    // TODO Juan: trocar por entregas concretas do periodo de suporte.
    title: "Técnico de suporte em TI",
    company_name: "A Igreja de Jesus Cristo dos Santos dos Últimos Dias",
    icon: ijsud,
    iconBg: "#143157",
    date: "Set 2024 - Ago 2025",
    points: [
      "Suporte a usuários e equipes: diagnóstico e resolução de incidentes de hardware, software e rede.",
      "Identifiquei os problemas que mais se repetiam — e foram eles que viraram as primeiras automações.",
    ],
  },
  {
    // TODO Juan: o CV chama este cargo de "AI & Automation Specialist". Definir qual usar.
    title: "Desenvolvedor de sistemas",
    company_name: "A Igreja de Jesus Cristo dos Santos dos Últimos Dias",
    icon: ijsud,
    iconBg: "#143157",
    date: "Ago 2025 - o momento",
    points: [
      "Construí o Runner, CRM interno que hoje gerencia mais de 6.000 solicitações de serviço, com automação de fluxo, rastreamento e visibilidade operacional.",
      "Entreguei a gestão dos contratos fixos de manutenção, limpeza e jardinagem de mais de 2.000 imóveis da organização.",
      "Levei IA para dentro dos processos: extração de dados de faturas de pagamento, cortando trabalho manual e ganhando precisão.",
      "Painéis em Power BI que transformam dados operacionais em indicadores de decisão.",
    ],
  },
  {
    title: "Pós-Tech em IA para Devs",
    company_name: "FIAP",
    icon: posgrad,
    iconBg: "#0a1b22",
    date: "2025 - 2026 · concluída",
    points: [
      "WomanGuardian: análise multimodal de áudio, vídeo e texto com YOLOv8, redes neurais e Azure.",
      "Modelos de classificação para predição clínica com scikit-learn e Pandas.",
      "Hackathon final: análise de arquitetura com apoio de LLMs, aplicando o modelo STRIDE.",
    ],
  },
];

export const exploring = {
  title: "Impressão 3D",
  icon: impressao3d,
  text: "Modelar, calibrar, errar a primeira camada e tentar de novo. A mesma curiosidade que me trouxe para a programação: gosto de entender a tecnologia por dentro e aprender fazendo.",
};

export const socials = [
  {
    label: "LinkedIn",
    handle: "in/juan-quezada",
    href: "https://www.linkedin.com/in/juan-quezada/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    handle: "@juanmqc22",
    href: "https://github.com/juanmqc22",
    icon: "github",
  },
  {
    label: "E-mail",
    handle: "juanmqc22@gmail.com",
    href: "mailto:juanmqc22@gmail.com",
    icon: "mail",
  },
  // TODO Juan: me passa o @ do Instagram e eu ligo aqui.
  // { label: "Instagram", handle: "@seu_usuario",
  //   href: "https://instagram.com/seu_usuario", icon: "instagram" },
];

export const projects = [
  {
    name: "Gestão de Contratos Fixos",
    context: "Projeto interno · 2026",
    description:
      "Solução para gestão dos contratos fixos de manutenção, limpeza e jardinagem em mais de 2.000 imóveis da organização. Melhorou o controle contratual, o acompanhamento de fornecedores, o agendamento de serviços e a conformidade.",
    tags: [
      { name: "PowerApps", color: "blue-text-gradient" },
      { name: "PowerBI", color: "green-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    image: projContratos,
  },
  {
    name: "Runner",
    context: "Projeto interno · 2025",
    description:
      "CRM interno que gerencia mais de 6.000 solicitações de serviço, com automação de fluxo, rastreamento e visibilidade operacional. Implementei também extração de dados de faturas por IA, cortando trabalho manual e ganhando precisão.",
    tags: [
      { name: "PowerPlatform", color: "blue-text-gradient" },
      { name: "IA", color: "green-text-gradient" },
      { name: "CRM", color: "pink-text-gradient" },
    ],
    image: projRunner,
  },
  {
    name: "Conecta ICS",
    context: "Projeto interno · 2024",
    description:
      "Aplicação interna que automatiza a abertura de chamados de TI, em Power Apps e Power Automate. Integrei IA para sugerir soluções aos problemas relatados, melhorando o tempo de resposta e a eficiência do suporte.",
    tags: [
      { name: "PowerApps", color: "blue-text-gradient" },
      { name: "PowerAutomate", color: "green-text-gradient" },
      { name: "IA", color: "pink-text-gradient" },
    ],
    image: projConectaIcs,
  },
  {
    name: "WomanGuardian",
    description:
      "Plataforma de monitoramento preventivo em saúde da mulher que analisa áudio, vídeo e texto de consultas para detectar sinais precoces de risco. Junta YOLOv8, uma rede neural de emoção na voz e Azure Speech em um motor de risco explicável.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "YOLOv8", color: "green-text-gradient" },
      { name: "Azure", color: "pink-text-gradient" },
    ],
    image: projWomanGuardian,
    source_code_link: "https://github.com/juanmqc22/WomanGuardian_TechChallenge4",
  },
  {
    name: "ML Diabetes Detection",
    description:
      "Projeto de machine learning para predição de diabetes cobrindo o ciclo completo: limpeza dos dados, engenharia de atributos, treino, comparação de modelos e avaliação por métricas.",
    tags: [
      { name: "scikit-learn", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Jupyter", color: "pink-text-gradient" },
    ],
    image: projMlDiabetes,
    source_code_link: "https://github.com/juanmqc22/ml-diabetes-detection",
  },
];
