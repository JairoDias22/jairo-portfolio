export default function Navbar() {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-ink/90 backdrop-blur-sm rule-b z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display text-lg text-paper">
          Jairo Dias
        </a>

        <div className="flex gap-7 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brass-soft transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
