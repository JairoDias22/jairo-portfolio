"use client";

import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { number: 6, suffix: "+", label: "Projetos" },
    { number: 2, suffix: "", label: "Experiências profissionais" },
    { number: 2, suffix: "", label: "Formações em andamento" },
    { number: 7, suffix: "", label: "Certificações" },
  ];

  return (
    <section className="bg-ink-2 rule-b rule">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, i) => (
          <div
            key={item.label}
            className={`py-10 px-4 text-center ${
              i > 0 ? "border-l border-line" : ""
            }`}
          >
            <div className="font-display text-4xl text-brass-soft">
              <CountUp end={item.number} duration={2} />
              {item.suffix}
            </div>
            <p className="text-muted text-sm mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
