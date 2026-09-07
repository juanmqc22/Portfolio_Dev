import {
  teste,
  agile,
  contentCreator,
  backEnd,
  impressao3d,
  azure,
  csharp,
  docker,
  git,
  java,
  javascript,
  mysql,
  python,
  reactjs,
  scikitlearn,
  typescript,
  ijsud,
  freelance,
  posgrad,
  projWomanGuardian,
  projStrideIa,
  projMlDiabetes,
  projListaPresenca,
  projControleClientes,
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
  { title: "Desenvolvimento Web", icon: teste },
];

export const technologies = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
  { name: "MySQL", icon: mysql },
  { name: "scikit-learn", icon: scikitlearn },
  { name: "Azure", icon: azure },
  { name: "Docker", icon: docker },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    // TODO Juan: trocar por entregas concretas (que clientes, que sistemas, que resultado).
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
    // TODO Juan: trocar por entregas concretas (quais apps, quantos usuarios, que processo foi automatizado).
    title: "Desenvolvedor de sistemas",
    company_name: "A Igreja de Jesus Cristo dos Santos dos Últimos Dias",
    icon: ijsud,
    iconBg: "#143157",
    date: "Ago 2025 - o momento",
    points: [
      "Aplicações internas na Power Platform com PowerApps, tirando processos manuais do caminho das equipes.",
      "Painéis em Power BI que transformam dados operacionais em indicadores de decisão.",
      "Automação de rotinas e integrações entre sistemas, do levantamento da necessidade à entrega.",
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
  text: "Comecei agora a mexer com impressão 3D — modelar, calibrar, errar a primeira camada e tentar de novo. É a mesma curiosidade que me trouxe para a programação: gosto de entender como a tecnologia funciona por dentro e aprender fazendo.",
};

export const projects = [
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
    name: "Arquitetura + IA (STRIDE)",
    description:
      "Ferramenta que analisa a arquitetura de um sistema com apoio de IA e aplica o modelo STRIDE para levantar ameaças de segurança, traduzindo risco técnico em algo acionável por quem escreve o código.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "LLM", color: "green-text-gradient" },
      { name: "STRIDE", color: "pink-text-gradient" },
    ],
    image: projStrideIa,
    source_code_link:
      "https://github.com/juanmqc22/posfiap_7iadt_techchallenge_fase5",
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
  {
    name: "Lista de Presença",
    description:
      "Sistema que simplifica o acompanhamento diário de presença e atividades da equipe. Em poucos cliques o responsável registra o progresso de cada pessoa e dispara automaticamente um e-mail ao gerente.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: projListaPresenca,
    source_code_link: "https://juanmqc22.github.io/Ctm_page/suplente/suplente.html",
  },
  {
    name: "Controle de clientes",
    description:
      "Sistema de controle de clientes em Java com Spring e Maven. Cadastro, organização e consulta de informações em banco de dados, com API REST para integrar com outros sistemas.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "restApi", color: "green-text-gradient" },
      { name: "Spring", color: "pink-text-gradient" },
    ],
    image: projControleClientes,
    source_code_link: "https://github.com/juanmqc22/Springboot",
  },
];
