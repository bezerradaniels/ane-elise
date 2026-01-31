import Container from "../../componentes/Container";
import Button from "../../componentes/Button";

const faq = [
  {
    q: "Como funciona a avaliação?",
    a: "Na avaliação são analisadas suas necessidades e objetivos. A partir disso é feito um planejamento do tratamento ideal.",
  },
  {
    q: "Facetas ficam naturais?",
    a: "Sim. O foco é sempre naturalidade, respeitando formato, cor e harmonia facial.",
  },
  {
    q: "Clareamento dói?",
    a: "Pode haver sensibilidade em alguns casos, mas existem protocolos e produtos para reduzir bastante esse desconforto.",
  },
  {
    q: "Atende crianças?",
    a: "Sim! Atendimento infantil acolhedor, com foco em prevenção e cuidado desde cedo.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-wine)/10 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-(--brand-wine)" />
              <span className="text-sm font-medium text-(--brand-wine)">FAQ</span>
            </div>
            
            <h2 className="text-3xl font-bold text-(--brand-ink) md:text-4xl lg:text-5xl">
              Perguntas frequentes
            </h2>
            
            <p className="mt-4 text-lg text-(--brand-ink)/60">
              Se não encontrar sua dúvida aqui, fale com a equipe no WhatsApp.
            </p>

            {/* Desktop CTA - Hidden on mobile */}
            <div className="mt-10 p-8 rounded-3xl bg-(--brand-neutral) hidden lg:block">
              <h3 className="text-xl font-bold text-(--brand-ink) mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-(--brand-ink)/70 mb-6">
                Entre em contato conosco para uma consulta gratuita e tire todas as suas dúvidas.
              </p>
              <a href="https://wa.me/5577998597104" target="_blank" rel="noreferrer" id="btn-wpp-faq-desktop">
                <Button className="group">
                  <span>Falar no WhatsApp</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-4">
            {faq.map((item, index) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-(--brand-neutral) transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6">
                  <span className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--brand-wine)/10 text-sm font-bold text-(--brand-wine)">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg font-semibold text-(--brand-ink)">
                      {item.q}
                    </span>
                  </span>
                  <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--brand-wine)/10 text-(--brand-wine) transition-transform group-open:rotate-45">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pl-18">
                  <p className="leading-relaxed text-(--brand-ink)/70 ml-12">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Mobile CTA - Hidden on desktop */}
        <div className="mt-16 p-8 rounded-3xl bg-(--brand-neutral) lg:hidden">
          <h3 className="text-xl font-bold text-(--brand-ink) mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-(--brand-ink)/70 mb-6">
            Entre em contato conosco para uma consulta gratuita e tire todas as suas dúvidas.
          </p>
          <a href="https://wa.me/5577998597104" target="_blank" rel="noreferrer" id="btn-wpp-faq-mobile">
            <Button className="group w-full">
              <span>Falar no WhatsApp</span>
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
