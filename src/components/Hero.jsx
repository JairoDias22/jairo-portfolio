"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fields = [
  { label: "Base", value: "Maranhão, Brasil" },
  { label: "Formação", value: "ADS — UEMA, 2024–2027" },
  { label: "Situação", value: "Disponível para estágio" },
];

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
      className="relative min-h-screen bg-ink text-paper pt-32 pb-20 px-6"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start">
        {/* Texto */}
        <div>
          <motion.p
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="text-brass text-sm mb-4"
          >
            Perfil profissional
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-6xl lg:text-7xl leading-[1.05] italic"
          >
            Jairo Dias
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="mt-5 text-xl text-muted"
          >
            <TypeAnimation
              sequence={[
                "Estudante de Análise e Desenvolvimento de Sistemas",
                2200,
                "Ex-administrativo, hoje voltado a desenvolvimento web",
                2200,
                "Construindo o caminho para full stack",
                2200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="text-muted mt-8 max-w-lg leading-relaxed"
          >
            Desenvolvo aplicações web e ferramentas de automação, aplicando
            no código a mesma organização e atenção a processos que trouxe
            da área administrativa. Busco uma oportunidade de estágio para
            colocar isso em prática em projetos reais.
          </motion.p>

          {/* Campos estilo ficha */}
          <motion.dl
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="mt-10 rule max-w-lg"
          >
            {fields.map((f) => (
              <div
                key={f.label}
                className="flex justify-between py-3 rule-b text-sm"
              >
                <dt className="text-muted">{f.label}</dt>
                <dd className="text-paper">{f.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >
            <a
              href="#projetos"
              className="bg-brass text-ink px-6 py-3 text-sm font-medium hover:bg-brass-soft transition-colors"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="border border-line px-6 py-3 text-sm hover:border-brass hover:text-brass-soft transition-colors"
            >
              Falar comigo
            </a>

            <div className="flex gap-4 text-xl text-muted ml-2">
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
          </motion.div>
        </div>

        {/* Foto estilo ficha */}
        <motion.div
          variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
          className="relative mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="relative w-64 lg:w-72">
            <Image
              src="/profile.jpg"
              alt="Jairo Dias"
              width={480}
              height={480}
              priority
              className="w-full aspect-square object-cover grayscale-[15%]"
            />
            {/* cantos estilo carimbo/documento */}
            <span className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-brass" />
            <span className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-brass" />
            <span className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-brass" />
            <span className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-brass" />
          </div>

          <div className="stamp inline-block mt-6 px-4 py-1.5 text-xs tracking-wide">
            Disponível para estágio
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
