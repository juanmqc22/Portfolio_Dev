# Portfolio — Juan Quezada

Portfólio pessoal em React + Vite + Tailwind, com cenas 3D em three.js
(`@react-three/fiber` / `drei`).

## Estrutura

O site é servido a partir da **raiz** do repositório, então o build de
produção fica versionado junto com o código-fonte:

```
index.html            build de produção (gerado — não editar à mão)
build/                JS e CSS gerados pelo Vite (gerados — não editar)
assets/               imagens e ícones estáticos, servidos como /assets/...
desktop_pc/           modelo 3D da seção Hero
planet/               modelo 3D da seção Contato
app/                  ← o código-fonte fica aqui
  index.html          entrada do Vite (template, não é o build)
  src/
    components/       Navbar, Hero, About, Tech, Experience, Works, Feedbacks, Contact
      canvas/         cenas three.js (Computers, Earth, Ball, Stars)
    constants/
      index.js        ← todo o conteúdo do site (bio, experiências, projetos)
      assets.js       mapeamento dos arquivos em /assets
    hoc/              SectionWrapper (animação de entrada das seções)
    utils/motion.js   variantes do framer-motion
    styles.js         classes de tipografia compartilhadas
```

## Rodando localmente

```bash
cd app
npm install
npm run dev      # http://localhost:5173
```

## Gerando o build

```bash
cd app
npm run build
```

O Vite escreve `index.html` e `build/` na raiz do repositório. Commite esses
arquivos junto com a mudança no `src/` — é o build que vai para o ar.

## Editando o conteúdo

Quase tudo que você vai querer mudar está em `app/src/constants/index.js`:
`services`, `technologies`, `experiences`, `testimonials` e `projects`.

Para adicionar uma imagem ou ícone novo: coloque o arquivo em `assets/`,
exporte em `app/src/constants/assets.js` e importe no `index.js`.

Os ícones das tecnologias viram textura de uma esfera 3D, então precisam ser
**PNG com fundo transparente** (SVG não funciona como textura).

## Formulário de contato

Usa o [EmailJS](https://www.emailjs.com/). As chaves ficam em
`app/src/components/Contact.jsx` — a *public key* do EmailJS é feita para
rodar no navegador e não é segredo. Dá para sobrescrever sem tocar no código
criando um `app/.env`:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Créditos

Base visual a partir do template de portfólio 3D do JavaScript Mastery.
Modelos 3D em `desktop_pc/` e `planet/` mantêm suas licenças originais
(veja os `license.txt` de cada pasta).
