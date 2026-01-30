import Container from "../../componentes/Container";
import Icon from "../../componentes/Icon";

const services = [
  {
    icon: "bx-star",
    title: "Facetas",
    desc: "Correção estética com naturalidade e planejamento para harmonia do sorriso.",
  },
  {
    icon: "bx-health",
    title: "Clareamento",
    desc: "Clareamento seguro, com acompanhamento e orientação profissional.",
  },
  {
    icon: "bx-child",
    title: "Atendimento Infantil",
    desc: "Cuidado humanizado e acolhedor para crianças, com foco em prevenção.",
  },
  {
    icon: "bx-happy",
    title: "Ortodontia",
    desc: "Alinhamento dentário com planejamento e foco em saúde e estética.",
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-(--brand-neutral) py-24 md:py-32">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-wine)/10 px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-(--brand-wine)" />
            <span className="text-md font-medium text-(--brand-wine)">Nossos Serviços</span>
          </div>
          
          <h2 className="text-3xl font-bold text-(--brand-ink) md:text-4xl lg:text-5xl max-w-2xl">
            Serviços de alta qualidade para você
          </h2>
          
          <p className="mt-4 text-lg text-(--brand-ink)/60 max-w-xl">
            Comprometidos com a excelência em cada procedimento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-(--brand-wine) translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-(--brand-wine)/10 transition-colors duration-500 group-hover:bg-white/20">
                  <Icon name={service.icon} className="text-md text-(--brand-wine) transition-colors duration-500 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-(--brand-ink) transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-(--brand-ink)/70 transition-colors duration-500 group-hover:text-white/80">
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-(--brand-wine) transition-colors duration-500 group-hover:text-white">
                  <span>Saiba mais</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-(--brand-ink)/60 mb-4">
            Utilizamos as mais modernas técnicas para garantir os melhores resultados.
          </p>
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 text-(--brand-wine) font-semibold hover:underline cursor-pointer"
          >
            Ver todos os serviços
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
