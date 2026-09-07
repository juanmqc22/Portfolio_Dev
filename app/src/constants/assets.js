// Os arquivos de imagem ficam em assets/ na raiz do repositório e são
// servidos estaticamente, sem passar pelo bundler. O caminho é relativo
// ao documento para o site funcionar também em um subcaminho.
const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

export const logo = asset("logo.svg");
export const menu = asset("menu.svg");
export const close = asset("close.svg");
export const github = asset("github.png");
export const juan = asset("juan.jpg");

// ícones da seção "sobre mim"
export const teste = asset("teste.png");
export const agile = asset("agile.png");
export const contentCreator = asset("content_creator.png");
export const backEnd = asset("back_end.png");
export const impressao3d = asset("impressao3d.png");

// ícones de tecnologias
export const azure = asset("azure.png");
export const csharp = asset("csharp.png");
export const css = asset("css.png");
export const docker = asset("docker.png");
export const fastapi = asset("fastapi.png");
export const figma = asset("figma.png");
export const git = asset("git.png");
export const html = asset("html.png");
export const java = asset("java.png");
export const javascript = asset("javascript.png");
export const mysql = asset("mysql.png");
export const nextjs = asset("nextjs.png");
export const nodejs = asset("nodejs.png");
export const pandas = asset("pandas.png");
export const python = asset("python.png");
export const pytorch = asset("pytorch.png");
export const reactjs = asset("reactjs.png");
export const redux = asset("redux.png");
export const scikitlearn = asset("scikitlearn.png");
export const streamlit = asset("streamlit.png");
export const tailwind = asset("tailwind.png");
export const typescript = asset("typescript.png");

// logos usados na linha do tempo
export const ijsud = asset("logo-ijsud.png");
export const posgrad = asset("logo-posgrad.png");
export const freelance = asset("logo-freelance.png");

// imagens de projeto
export const projWomanGuardian = asset("proj-womanguardian.png");
export const projStrideIa = asset("proj-stride-ia.png");
export const projMlDiabetes = asset("proj-ml-diabetes.png");
