export default function About() {
  return (
    <section id="sobre" className="bg-ink text-paper py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-10">
        <h2 className="font-display text-3xl italic text-paper md:sticky md:top-28 md:self-start">
          Minha jornada
        </h2>

        <div className="space-y-5 text-muted leading-relaxed max-w-2xl">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas na UEMA e
            também curso Técnico em Informática para Internet. Minha
            trajetória profissional começou na área administrativa e
            logística — organizando documentos, controlando estoque e
            acompanhando processos — antes de migrar para tecnologia.
          </p>
          <p>
            Essa base ficou na forma como desenvolvo hoje: gosto de
            organizar bem o que construo, documentar decisões e resolver
            problemas com calma antes de sair escrevendo código. Sou
            bolsista do Programa Trilhas Inova (SECTI/FAPEMA, Governo do
            Maranhão), e uso esse espaço para aprofundar o que aprendo em
            projetos reais.
          </p>
          <p>
            Hoje concentro meus esforços em desenvolvimento web full
            stack, buscando uma oportunidade de estágio onde eu possa
            transformar esse conhecimento em soluções que outras pessoas
            realmente usem.
          </p>
        </div>
      </div>
    </section>
  );
}
