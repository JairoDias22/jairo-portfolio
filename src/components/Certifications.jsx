export default function Certifications() {
  const certs = [
    { name: "JavaScript do Zero", org: "Trybe", year: "2025" },
    { name: "Gestão Ágil de Projetos com Scrum e Kanban", org: "ORANGO", year: "2025" },
    { name: "Produtividade com IA", org: "ORANGO", year: "2025" },
    { name: "Excel do Básico ao Intermediário", org: "Santander", year: "2026" },
    { name: "Inglês Instrumental — Hospedagem", org: "UEMA", year: "2023" },
    { name: "Assistente Administrativo", org: "Brasil Qualificações", year: "2018" },
    { name: "Informática Básica", org: "Informática França", year: "2016" },
  ];

  return (
    <section className="bg-ink text-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl italic mb-14">Certificações</h2>

        <div className="rule">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="rule-b py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <p className="text-paper">{cert.name}</p>
              <p className="text-muted text-sm shrink-0">
                {cert.org}, {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
