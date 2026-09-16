export default function Experience() {
  const experiences = [
    {
      company: "Siapal Indústria e Comércio",
      role: "Auxiliar Administrativo / Balanceiro",
      period: "Dez 2023 — Abr 2024",
      activities: [
        "Controle de pesagem de veículos, matérias-primas e produtos acabados",
        "Controle de estoque e almoxarifado, com conferência de materiais",
        "Emissão e controle de documentos administrativos de entrada e saída de cargas",
        "Apoio às rotinas administrativas, colaborando com diferentes setores",
      ],
    },
    {
      company: "UFMA",
      role: "Auxiliar de Laboratório de Informática",
      period: "Jun 2022 — Ago 2023",
      activities: [
        "Suporte técnico básico e resolução de problemas do dia a dia",
        "Instalação de softwares e configuração de máquinas",
        "Controle de equipamentos e acesso ao laboratório",
      ],
    },
  ];

  return (
    <section id="experiencia" className="bg-ink text-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl italic mb-14">
          Experiência profissional
        </h2>

        <div className="rule">
          {experiences.map((exp) => (
            <div key={exp.company} className="rule-b py-8 grid md:grid-cols-[1fr_2fr] gap-6">
              <div>
                <p className="text-brass-soft text-sm">{exp.period}</p>
                <h3 className="font-display text-xl mt-2">{exp.role}</h3>
                <p className="text-muted text-sm mt-1">{exp.company}</p>
              </div>

              <ul className="space-y-2 text-muted text-sm">
                {exp.activities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brass shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
