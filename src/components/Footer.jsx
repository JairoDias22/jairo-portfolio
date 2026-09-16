import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contato" className="bg-ink-2 text-paper py-20 rule">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl italic">Vamos conversar</h2>
            <p className="text-muted mt-5 leading-relaxed max-w-md">
              Estudante de Análise e Desenvolvimento de Sistemas em busca de
              uma oportunidade de estágio. Se meu perfil combina com o que
              você procura, ficarei feliz em conversar.
            </p>
            <p className="text-muted text-sm mt-6">Maranhão, Brasil</p>
          </div>

          <div>
            <h3 className="text-brass-soft text-sm mb-4">Contato</h3>
            <div className="space-y-3 text-muted text-sm">
              <a
                href="mailto:jairodias321@gmail.com"
                className="flex items-center gap-3 hover:text-brass-soft transition-colors w-fit"
              >
                <FaEnvelope /> jairodias321@gmail.com
              </a>
              <a
                href="https://wa.me/5598984873311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brass-soft transition-colors w-fit"
              >
                <FaWhatsapp /> (98) 98487-3311
              </a>
            </div>

            <div className="flex gap-5 text-xl mt-8 text-muted">
              <a
                href="https://www.linkedin.com/in/jairodias/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-brass-soft transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/JairoDias22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-brass-soft transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="rule mt-14 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted">
          <p>© 2026 Jairo Dias</p>
          <p>Desenvolvido com Next.js e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
