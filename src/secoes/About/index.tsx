import Container from "../../componentes/Container";
import Button from "../../componentes/Button";
import Icon from "../../componentes/Icon";
import aboutImage from "../../assets/images/about/dra-ane-elise-about.jpeg";
import patientImage from "../../assets/images/about/paciente.png";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24 md:py-32 overflow-hidden">
      <Container>
        {/* Mobile header - Hidden on desktop */}
        <div className="text-center mb-16 lg:hidden">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-wine)/10 px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-(--brand-wine)" />
            <span className="text-sm font-medium text-(--brand-wine)">Sobre a Dra. Ane Elise</span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-(--brand-ink) md:text-4xl lg:text-5xl max-w-3xl mx-auto">
            Sua jornada para um sorriso mais saudável começa aqui
          </h2>

          <p className="mt-6 text-lg text-(--brand-ink)/70 leading-relaxed max-w-2xl mx-auto">
            O objetivo do nosso consultório é oferecer um atendimento acolhedor e cuidadoso, 
            com os mais altos padrões em tratamentos estéticos e de saúde bucal. 
            Cada sorriso é único e merece atenção personalizada.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-(--brand-neutral)">
                <img 
                  src={patientImage} 
                  alt="Paciente Dra. Ane Elise - Atendimento" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--brand-wine)/10 to-transparent" />
              </div>

              {/* Secondary image */}
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square overflow-hidden rounded-3xl border-8 border-white bg-(--brand-neutral) shadow-xl md:-right-12">
                <img 
                  src={aboutImage} 
                  alt="Dra. Ane Elise - Consultório" 
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -left-4 top-1/4 rounded-2xl bg-(--brand-wine) p-6 text-white shadow-xl md:-left-8">
                <p className="text-4xl font-bold">3+</p>
                <p className="text-sm opacity-80">Anos de<br/>experiência</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            {/* Desktop header - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-wine)/10 px-4 py-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-(--brand-wine)" />
                <span className="text-sm font-medium text-(--brand-wine)">Sobre a Dra. Ane Elise</span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-(--brand-ink) md:text-4xl lg:text-5xl">
                Sua jornada para um sorriso mais saudável começa aqui
              </h2>

              <p className="mt-6 text-lg text-(--brand-ink)/70 leading-relaxed">
                O objetivo do nosso consultório é oferecer um atendimento acolhedor e cuidadoso, 
                com os mais altos padrões em tratamentos estéticos e de saúde bucal. 
                Cada sorriso é único e merece atenção personalizada.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: "bx-award", text: "Profissional experiente" },
                { icon: "bx-star", text: "Serviços completos" },
                { icon: "bx-cog", text: "Tecnologia moderna" },
                { icon: "bx-phone-call", text: "Atendimento com excelência" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--brand-wine)/10">
                    <Icon name={item.icon} className="text-xl text-(--brand-wine)" />
                  </span>
                  <span className="font-medium text-(--brand-ink)">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <a href="https://wa.me/5577998597104" target="_blank" rel="noreferrer">
                <Button variant="secondary" className="group">
                  <Icon name="bxl-whatsapp" className="mr-2 text-2xl" />
                  <span>Agendar consulta no WhatsApp</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </a>
              

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
