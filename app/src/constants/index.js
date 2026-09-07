import {
  teste,
  selfLearner,
  languajes,
  agile,
  contentCreator,
  backEnd,
  problemSolver,
  teamWork,
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
  ctm,
  uebmundo,
  posgrad,
  projWomanGuardian,
  projStrideIa,
  projMlDiabetes,
  projListaPresenca,
  projControleClientes,
  projWdd130,
} from "./assets";

export const navLinks = [
  { id: "about", title: "Sobre mim" },
  { id: "work", title: "Trabalhos" },
  { id: "contact", title: "Contato" },
];

export const services = [
  { title: "Backend Developer", icon: backEnd },
  { title: "IA & Machine Learning", icon: contentCreator },
  { title: "Automação de Processos", icon: agile },
  { title: "Desenvolvimento Web", icon: teste },
  { title: "Problem-Solver", icon: problemSolver },
  { title: "Self-Learner", icon: selfLearner },
  { title: "Team Lider", icon: teamWork },
  { title: "Multilíngue Esp - Por - Ing", icon: languajes },
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
    title: "Serviço Voluntario",
    company_name: "IJSUD",
    icon: ijsud,
    iconBg: "#143157",
    date: "Fev 2019 - Fev 2021",
    points: [
      "Dediquei tempo a treinar e preparar mais de 50 missionários para serem bem-sucedidos em suas comunicações com as pessoas e alcançarem suas metas.",
      "Coordenei atividades missionárias, incluindo ensinamentos e apresentações para auxiliar as pessoas em sua jornada espiritual.",
      "Motivei e inspirei um grupo com mais de 30 missionários, fornecendo orientação e incentivo para ajudá-los a alcançar seus objetivos.",
      "Elaborei planejamentos diários, semanais e mensais, garantindo que as atividades missionárias estivessem bem organizadas e eficientemente planejadas.",
    ],
  },
  {
    title: "Instrutor Trilingue",
    company_name: "Centro de Treinamento Missionário",
    icon: ctm,
    iconBg: "#ffffff",
    date: "Jun 2021 - Mai 2023",
    points: [
      "Atuei como instrutor trilíngue, capacitando grupos de pessoas a aprenderem um novo idioma por meio de metas e métodos de ensino altamente efetivos.",
      "Ensinava habilidades de comunicação interpessoal, ajudando-os a falar com as pessoas, tratá-las com empatia e persuadi-las a ouvir suas mensagens.",
      "Desenvolvi e implementei treinamentos para que os grupos trabalhassem de forma colaborativa, fortalecendo o trabalho em equipe e a obtenção de resultados coletivos.",
      "Inspirei paixão e dedicação em relação ao idioma e ao ensino, encorajando-os a encontrar satisfação e entusiasmo no que estavam aprendendo.",
    ],
  },
  {
    title: "Auxiliar de TI",
    company_name: "UEBMUNDO",
    icon: uebmundo,
    iconBg: "#040c0f",
    date: "Mai 2023 - Jun 2023",
    points: [
      "Desenvolvimento do site: Liderei a criação, atualização e aprimoramento do site da empresa, garantindo que ele atendesse aos mais altos padrões de qualidade.",
      "Implementação do walletpass digital: Enfrentei o desafio de implementar um walletpass digital, buscando e implementando soluções que atendessem aos requisitos necessários.",
      "Acompanhamento de desenvolvimento externo: Garanti que a empresa contratada para o desenvolvimento do site cumprisse com as entregas e prazos estabelecidos.",
      "Paixão pela tecnologia e inovação: Demonstrei entusiasmo e dedicação em impulsionar o crescimento da empresa por meio de soluções eficientes e inovadoras.",
    ],
  },
  {
    // TODO Juan: confirmar o período e o nome exato do curso.
    title: "Pós-Tech em IA para Devs",
    company_name: "FIAP",
    icon: posgrad,
    iconBg: "#0a1b22",
    date: "Nov 2025 - Jul 2026",
    points: [
      "Construí soluções de IA aplicada ao longo dos Tech Challenges do curso, do pré-processamento de dados até a entrega de aplicações funcionais.",
      "Desenvolvi o WomanGuardian, uma plataforma de análise multimodal (áudio, vídeo e texto) com YOLOv8, redes neurais e Azure Cognitive Services.",
      "Treinei e avaliei modelos de classificação para predição clínica com scikit-learn e Pandas, cuidando de pré-processamento, métricas e validação.",
      "No Hackathon da fase final, analisei arquiteturas de software com apoio de LLMs, aplicando o modelo STRIDE para levantar riscos de segurança.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Sua expertise em tecnologia é impressionante e foi essencial para o sucesso de nossos projetos. Ele conseguiu encontrar soluções inovadoras e eficazes.",
    name: "Crys",
    designation: "Auxiliar administrativo",
    company: "UEBMUNDO",
    image: "",
  },
  {
    testimonial:
      "Aprendi com Juan que é possível conciliar profissionalismo, humildade e gratidão. Ele sempre eleva a equipe e serve de excelente exemplo!",
    name: "Ataadson Paes",
    designation: "Supervisor de treinamento",
    company: "Centro de Treinamento Missionário",
    image: "",
  },
];

export const projects = [
  {
    name: "WomanGuardian",
    description:
      "Plataforma de monitoramento preventivo em saúde da mulher que processa áudio, vídeo e texto de consultas para detectar sinais precoces de risco clínico. Combina YOLOv8 para leitura de comportamento em vídeo, uma rede neural treinada em RAVDESS para emoção na voz e Azure Speech + Language para transcrição e análise de sentimento, fundindo tudo em um motor de risco explicável.",
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
      "Hackathon de conclusão da pós: uma ferramenta que analisa a arquitetura de um sistema com apoio de IA e aplica o modelo STRIDE para levantar ameaças de segurança. A saída traduz riscos técnicos em insights acionáveis, aproximando modelagem de ameaças de quem escreve o código.",
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
      "Projeto de machine learning voltado à predição de diabetes, cobrindo o ciclo completo: limpeza e pré-processamento dos dados, engenharia de atributos, treino e comparação de modelos, avaliação por métricas e discussão dos conceitos necessários para levar o modelo à produção.",
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
      "Sistema que simplifica o acompanhamento diário de presença e atividades dos colaboradores. Com poucos cliques a pessoa responsável registra o progresso de cada membro da equipe e dispara automaticamente um e-mail ao gerente, ganhando agilidade e comunicação nas operações.",
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
      "Sistema de Controle de Clientes em Java com Spring e Maven, feito como projeto pessoal. Permite cadastrar, organizar e consultar informações de clientes em banco de dados, facilitando a gestão e a análise dos dados de forma segura e eficiente.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "restApi", color: "green-text-gradient" },
      { name: "Spring", color: "pink-text-gradient" },
    ],
    image: projControleClientes,
    source_code_link: "https://github.com/juanmqc22/Springboot",
  },
  {
    name: "BYU Project",
    description:
      "Projetos práticos desenvolvidos ao longo do semestre na BYU Idaho, com foco em HTML, CSS e JavaScript. Explorei funções assíncronas para criar páginas mais rápidas e interativas, consolidando a base de desenvolvimento web.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: projWdd130,
    source_code_link: "https://juanmqc22.github.io/wdd130/",
  },
];
