export default function Timeline() {
  const items = [
    {
      year: "2023",
      title: "Assistente Administrativo",
      description:
        "Primeiros contatos com rotinas administrativas, organização de documentos e processos.",
    },
    {
      year: "2022",
      title: "Auxiliar de Laboratório de Informática",
      description:
        "Suporte técnico, instalação de softwares e controle de equipamentos na UFMA.",
    },
    {
      year: "2024",
      title: "Análise e Desenvolvimento de Sistemas",
      description: "Início da graduação na UEMA e aprofundamento em tecnologia.",
    },
    {
      year: "2025",
      title: "Técnico em Informática para Internet",
      description:
        "Desenvolvimento web, lógica de programação e criação de aplicações no Senac.",
    },
    {
      year: "2026",
      title: "Bolsista — Programa Trilhas Inova",
      description: "Bolsa do SECTI/FAPEMA (Governo do Maranhão) para aprofundar projetos reais.",
    },
  ];

  return (
    <section className="bg-ink-2 text-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl italic mb-14">Minha evolução</h2>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-line" />

          <div className="space-y-10">
            {items.map((item) => (
              <div key={item.year + item.title} className="relative">
                <span className="absolute -left-8 top-1.5 w-3 h-3 bg-brass" />
                <p className="text-brass-soft text-sm font-medium">{item.year}</p>
                <h3 className="font-display text-xl mt-1">{item.title}</h3>
                <p className="text-muted text-sm mt-1 max-w-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
