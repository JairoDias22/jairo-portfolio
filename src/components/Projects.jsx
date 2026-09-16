export default function Projects() {
  const projects = [
    {
      title: "Stella Celeste",
      subtitle: "Sistema de agendamento (freelance)",
      status: "Em desenvolvimento",
      statusTone: "text-brass-soft",
      techs: ["Next.js", "TypeScript", "Prisma", "Mercado Pago"],
      github: "https://github.com/JairoDias22/stella-celeste",
      description:
        "Agendamento e atendimento para serviços de cartomancia, com painel admin, CRUD de serviços/clientes e exportação de relatórios. Pagamento online em construção — entrega prevista para o próximo mês.",
    },
    {
      title: "Feira Local",
      subtitle: "Aplicação web acadêmica",
      status: "Concluído",
      statusTone: "text-sage",
      techs: ["React", "Vite", "Context API"],
      github: "https://github.com/JairoDias22/Feira-local",
      description:
        "Projeto ligado ao ODS 2 (Fome Zero), com roteamento SPA, sistema de favoritos com persistência e consumo de API pública.",
    },
    {
      title: "Moviestar",
      subtitle: "Avaliação de filmes",
      status: "Concluído",
      statusTone: "text-sage",
      techs: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/JairoDias22/Moviestar-Avaliacao-de-filmes",
      description:
        "Sistema para cadastro, avaliação e consulta de filmes, com contas de usuário e críticas — projeto que hoje uso como base de estudo aprofundado em segurança e boas práticas.",
    },
    {
      title: "File Organizer",
      subtitle: "Automação de arquivos",
      status: "Concluído",
      statusTone: "text-sage",
      techs: ["Python"],
      github: "https://github.com/JairoDias22/file-organizer",
      description:
        "Organizador com interface gráfica que classifica e move arquivos automaticamente por tipo.",
    },
    {
      title: "Projeto Agenda",
      subtitle: "Gestão de compromissos",
      status: "Concluído",
      statusTone: "text-sage",
      techs: ["Python"],
      github: "https://github.com/JairoDias22/Projeto-agenda",
      description: "Aplicação para gerenciamento de tarefas e compromissos.",
    },
    {
      title: "Projeto Blog",
      subtitle: "Blog responsivo",
      status: "Concluído",
      statusTone: "text-sage",
      techs: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JairoDias22/Projeto_Blog",
      description:
        "Blog responsivo desenvolvido para prática de front-end e organização de conteúdo.",
    },
  ];

  return (
    <section id="projetos" className="bg-ink text-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl italic mb-14">Projetos</h2>

        <div className="grid md:grid-cols-2 border border-line divide-y divide-line md:divide-x md:divide-y-0 md:[&>*:nth-child(n+3)]:border-t md:[&>*:nth-child(n+3)]:border-line">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 hover:bg-ink-2 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl">{project.title}</h3>
                  <p className="text-muted text-xs mt-1">{project.subtitle}</p>
                </div>
                <span className={`text-xs shrink-0 ${project.statusTone}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-muted text-sm mt-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-line px-2.5 py-1 text-muted group-hover:border-brass/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="inline-block mt-5 text-sm text-brass-soft group-hover:text-brass">
                Ver código no GitHub
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
