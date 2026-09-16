# Jairo Dias — Portfólio

Site pessoal desenvolvido com Next.js e Tailwind CSS para apresentar minha trajetória, projetos e habilidades como estudante de Análise e Desenvolvimento de Sistemas.

🔗 **Demo:** [jairo-portfolio-cfbs.vercel.app](https://jairo-portfolio-cfbs.vercel.app/)

## Sobre o projeto

O layout segue um conceito de **"ficha/dossiê"**: linhas finas no lugar de cards com sombra, tipografia serifada nos títulos e uma paleta inspirada em placas de circuito (verde-escuro + cobre), unindo minha origem na área administrativa com a identidade de quem hoje desenvolve software.

### Seções

- **Hero** — apresentação, status de disponibilidade e campos estilo ficha (base, formação, situação)
- **Stats** — números rápidos sobre projetos, experiências, formações e certificações
- **Sobre** — minha trajetória, da área administrativa para a tecnologia
- **Experiência** — histórico profissional
- **Minha Evolução** — linha do tempo com marcos de formação e qualificação
- **Projetos** — repositórios em destaque, com status (concluído / em desenvolvimento)
- **Habilidades e ferramentas** — stack técnica por categoria
- **Certificações** — cursos e capacitações concluídos
- **Contato** — formas de contato e redes sociais

## Tecnologias

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/) — animações
- [React Icons](https://react-icons.github.io/react-icons/) — ícones
- [React Type Animation](https://www.npmjs.com/package/react-type-animation) — efeito de digitação no hero
- [React CountUp](https://www.npmjs.com/package/react-countup) — contadores animados
- [Fontsource](https://fontsource.org/) (Fraunces + Inter) — fontes auto-hospedadas, sem dependência de rede no build

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build
npm run start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura

```
src/
├── app/
│   ├── globals.css      # tokens de cor, fontes e utilitários
│   ├── layout.js         # fontes e metadata
│   └── page.js           # composição das seções
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Stats.jsx
    ├── About.jsx
    ├── Experience.jsx
    ├── Timeline.jsx
    ├── Projects.jsx
    ├── Skills.jsx
    ├── Certifications.jsx
    └── Footer.jsx
```

## Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com/), criadora do Next.js — basta importar o repositório.

## Contato

- LinkedIn: [linkedin.com/in/jairo-dias](https://linkedin.com/in/jairo-dias)
- GitHub: [github.com/JairoDias22](https://github.com/JairoDias22)
- E-mail: jairodias321@gmail.com

---

Feito por Jairo Dias.
