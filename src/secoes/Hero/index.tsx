import Container from "../../componentes/Container";
import Button from "../../componentes/Button";
import Icon from "../../componentes/Icon";
import heroImage from "../../assets/images/hero/dra-ane-elise.jpeg";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-(--brand-neutral) overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-(--brand-wine)/5" />
        <div className="absolute -left-20 bottom-20 h-[400px] w-[400px] rounded-full bg-(--brand-champagne)/30" />
      </div>

      <Container className="relative z-10 pt-42 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
               <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-(--brand-ink) lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Estética e saúde bucal com{" "}
              <span className="text-(--brand-wine)">atendimento acolhedor</span>
            </h1>

            <p className="mt-4 text-base text-(--brand-ink)/70 max-w-xl leading-relaxed lg:mt-6 lg:text-lg mx-auto lg:mx-0">
              Facetas, clareamento, atendimento infantil e ortodontia com planejamento personalizado e segurança em cada procedimento.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-10 lg:justify-start">
              <a href="https://wa.me/5577998597104" target="_blank" rel="noreferrer" id="btn-wpp-hero">
                <Button className="group">
                  <Icon name="bxl-whatsapp" className="mr-2 text-xl" />
                  <span>Agendar avaliação</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="order-2 lg:order-2 relative">
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-white shadow-xl lg:aspect-4/5 lg:rounded-[2.5rem] lg:shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Dra. Ane Elise - Cirurgiã Dentista" 
                  className="h-full w-full object-cover object-top lg:object-center"
                />
                <div className="absolute inset-0 bg-linear-to-b from-(--brand-wine)/10 to-transparent" />
              </div>

              {/* Floating card - Doctor info - Hidden on mobile */}
              <div className="absolute -left-4 bottom-20 rounded-2xl bg-white p-4 shadow-xl md:-left-8 lg:-left-12 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-(--brand-wine)/10 flex items-center justify-center">
                    <Icon name="bx-user" className="text-4xl text-(--brand-wine)" />
                  </div>
                  <div>
                    <p className="font-semibold text-(--brand-ink)">Dra. Ane Elise</p>
                    <p className="text-sm text-(--brand-ink)/60">Cirurgiã Dentista</p>
                  </div>
                </div>
              </div>

              {/* Floating card - Opening hours - Hidden on mobile */}
              <div className="absolute -right-4 top-20 rounded-2xl bg-(--brand-wine) p-4 text-white shadow-xl md:-right-8 hidden lg:block">
                <p className="text-xs font-medium uppercase tracking-wider opacity-80">Horário</p>
                <p className="mt-1 font-semibold">Seg a Sex</p>
                <p className="text-sm opacity-80">08h às 18h</p>
                <p className="text-sm opacity-80">WhatsApp: 77 99808-5944</p>
              </div>

              {/* Decorative circle - Hidden on mobile */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border-4 border-(--brand-champagne) bg-white shadow-lg hidden lg:flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-(--brand-wine)">3+</p>
                  <p className="text-[10px] text-(--brand-ink)/60 leading-tight">anos de<br/>experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info cards - Hidden on mobile */}
        <div className="mt-20 gap-4 sm:grid-cols-3 hidden lg:grid">
          <div className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-(--brand-wine)/10 transition-colors group-hover:bg-(--brand-wine)">
              <Icon name="bx-phone" className="text-4xl text-(--brand-wine) group-hover:text-white" />
            </div>
            <div>
              <p className="text-sm text-(--brand-ink)/60">Precisa de atendimento?</p>
              <p className="font-semibold text-(--brand-ink)">WhatsApp disponível</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-(--brand-wine)/10 transition-colors group-hover:bg-(--brand-wine)">
              <Icon name="bx-map" className="text-4xl text-(--brand-wine) group-hover:text-white" />
            </div>
            <div>
              <p className="text-sm text-(--brand-ink)/60">Localização</p>
              <p className="font-semibold text-(--brand-ink)">Bom Jesus da Lapa - BA</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-(--brand-wine)/10 transition-colors group-hover:bg-(--brand-wine)">
              <Icon name="bx-time" className="text-4xl text-(--brand-wine) group-hover:text-white" />
            </div>
            <div>
              <p className="text-sm text-(--brand-ink)/60">Horário de atendimento</p>
              <p className="font-semibold text-(--brand-ink)">Seg a Sex • 08h às 18h</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
