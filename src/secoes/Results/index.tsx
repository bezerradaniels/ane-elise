import { useState } from "react";
import Container from "../../componentes/Container";
import Icon from "../../componentes/Icon";
import clareamentoImage from "../../assets/images/results/clareamento.jpeg";
import facetasImage from "../../assets/images/results/facetas.jpeg";
import infantilImage from "../../assets/images/results/infantil.jpeg";
import ortodontiaImage from "../../assets/images/results/ortodontia.jpeg";

const results = [
  { image: facetasImage, alt: "Facetas - Antes e Depois", title: "Facetas" },
  { image: clareamentoImage, alt: "Clareamento - Antes e Depois", title: "Clareamento" },
  { image: infantilImage, alt: "Atendimento Infantil - Antes e Depois", title: "Infantil" },
  { image: ortodontiaImage, alt: "Ortodontia - Antes e Depois", title: "Ortodontia" },
];

export default function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section id="resultados" className="bg-white py-24 md:py-32">
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-wine)/10 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-(--brand-wine)" />
              <span className="text-sm font-medium text-(--brand-wine)">Resultados</span>
            </div>
            
            <h2 className="text-3xl font-bold text-(--brand-ink) md:text-4xl lg:text-5xl">
              Antes e depois
            </h2>
            
            <p className="mt-4 text-lg text-(--brand-ink)/60">
              Espaço para fotos reais dos procedimentos (com autorização dos pacientes).
            </p>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {results.map((result) => (
                  <div key={result.title} className="w-full shrink-0">
                    <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-(--brand-neutral)">
                      {/* Image */}
                      <img 
                        src={result.image} 
                        alt={result.alt} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg cursor-pointer"
            >
              <Icon name="bx-chevron-left" className="text-xl text-(--brand-ink)" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg cursor-pointer"
            >
              <Icon name="bx-chevron-right" className="text-xl text-(--brand-ink)" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {results.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors cursor-pointer ${
                    index === currentIndex ? "bg-(--brand-wine)" : "bg-(--brand-wine)/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result) => (
            <div
              key={result.title}
              className="group relative aspect-4/5 overflow-hidden rounded-3xl bg-(--brand-neutral) cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-(--brand-wine)/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <div className="text-center text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="h-12 w-12 mx-auto rounded-full border-2 border-white flex items-center justify-center mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  <p className="font-semibold">{result.title}</p>
                </div>
              </div>
              
              {/* Image */}
              <img 
                src={result.image} 
                alt={result.alt} 
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
