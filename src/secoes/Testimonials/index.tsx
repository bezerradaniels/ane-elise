import Container from "../../componentes/Container";
import Icon from "../../componentes/Icon";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Atendimento excelente, muito cuidado e resultado lindo. Me senti muito segura durante todo o processo.",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Fiz clareamento e amei! Tudo muito bem explicado e acompanhamento impecável.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    text: "Minha filha adorou o atendimento infantil. Muito acolhedora e paciente.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-(--brand-neutral) py-24 md:py-32 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-wine)/10 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-(--brand-wine)" />
              <span className="text-sm font-medium text-(--brand-wine)">Depoimentos</span>
            </div>
            
            <h2 className="text-3xl font-bold text-(--brand-ink) md:text-4xl lg:text-5xl">
              O que nossos pacientes dizem
            </h2>
          </div>

          {/* Rating summary */}
          <div className="flex items-center gap-4 shrink-0 justify-center lg:justify-start">
            <div className="text-right lg:text-left">
              <div className="flex items-center gap-1 justify-end lg:justify-start">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="bxs-star" className="text-xl text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-(--brand-ink)/60 mt-1">Baseado em +200 avaliações</p>
            </div>
            <div className="h-16 w-16 rounded-2xl bg-(--brand-wine) flex items-center justify-center">
              <span className="text-2xl font-bold text-white">5.0</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 right-8 h-10 w-10 rounded-full bg-(--brand-wine) flex items-center justify-center shadow-lg">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Icon key={j} name="bxs-star" className="text-xl text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg text-(--brand-ink)/80 leading-relaxed mb-8">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-(--brand-champagne)" />
                <div>
                  <p className="font-semibold text-(--brand-ink)">{t.name}</p>
                  <p className="text-sm text-(--brand-ink)/60">Paciente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
