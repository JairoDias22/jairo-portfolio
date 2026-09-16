import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMysql, SiPrisma } from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Desenvolvimento",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "PHP", "Python"],
    },
    {
      title: "Banco de dados",
      skills: ["MySQL", "Prisma"],
    },
    {
      title: "Administração",
      skills: ["Excel", "Controle de estoque", "Organização de dados", "Documentação"],
    },
    {
      title: "Metodologias",
      skills: ["Scrum", "Kanban", "Produtividade com IA", "Trabalho em equipe"],
    },
  ];

  const tools = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <section className="bg-ink-2 text-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl italic mb-14">
          Habilidades e ferramentas
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-brass-soft text-sm mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm border border-line px-3 py-1.5 text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rule pt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-line">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-ink-2 flex flex-col items-center justify-center gap-2 py-6"
            >
              <div className="text-2xl text-brass-soft">{tool.icon}</div>
              <p className="text-xs text-muted">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
