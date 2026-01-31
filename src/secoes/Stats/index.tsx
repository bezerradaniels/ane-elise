import Container from "../../componentes/Container";

const stats = [
  { number: "200+", label: "Pacientes atendidos" },
  { number: "3+", label: "Anos de experiência" },
  { number: "98%", label: "Satisfação" },
  { number: "4", label: "Especialidades" },
];

export default function Stats() {
  return (
    <section className="relative bg-(--brand-wine) py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center"
            >
              <div className="relative inline-block">
                <p className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                  {stat.number}
                </p>
                <div className="absolute -bottom-2 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-(--brand-champagne) transition-all duration-500 group-hover:w-full" />
              </div>
              <p className="mt-4 text-lg text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p className="text-white/60 max-w-2xl mx-auto">
            Nossa equipe se dedica a proporcionar o melhor atendimento odontológico, 
            combinando experiência com as mais modernas técnicas.
          </p>
        </div>
      </Container>
    </section>
  );
}
