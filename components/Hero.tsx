import React from 'react';
import { getWhatsAppLink } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0 bg-background-light dark:bg-background-dark transition-colors duration-200"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Heading & CTAs */}
        <div className="flex flex-col gap-6 animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-accent/30 bg-blue-50 dark:bg-accent/10 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-blue-700 dark:text-accent text-xs font-bold uppercase tracking-wider">Cerrajería de Emergencia en Piura</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white" itemProp="name">
            CERRAJERO <br />
            <span className="text-accent">24 HORAS EN PIURA</span>
          </h1>

          {/* Description */}
          <p className="text-slate-700 dark:text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-lg" itemProp="description">
            Llegamos rápido a donde estés. Apertura de puertas y vehículos sin daños, duplicado de llaves con chip y cerraduras de seguridad para hogar y empresa.
          </p>

          {/* Focused Single Primary Action CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={getWhatsAppLink("Hola, necesito un cerrajero urgente en Piura.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl h-14 px-8 bg-accent hover:bg-accent-hover text-white text-base font-bold transition-emil shadow-md shadow-blue-500/10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Pedir auxilio por WhatsApp"
              title="Solicitar atención inmediata por WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-5 mr-2 text-white" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Solicitar Auxilio
            </a>
          </div>

          {/* Consolidated Single Social Proof Widget */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
            <div className="flex -space-x-2.5">
              <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-background-dark flex items-center justify-center text-[11px] font-bold text-slate-700 dark:text-white">JD</div>
              <div className="size-9 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-background-dark flex items-center justify-center text-[11px] font-bold text-slate-700 dark:text-white">MR</div>
              <div className="size-9 rounded-full bg-accent text-white dark:text-navy-dark border-2 border-white dark:border-background-dark flex items-center justify-center font-bold text-xs">+120</div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black text-slate-900 dark:text-white">4.9 / 5.0</span>
                <div className="flex text-accent gap-0.5" role="img" aria-label="Calificación de 5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 text-accent" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-xs text-slate-700 dark:text-gray-300 font-medium">+120 reseñas verificadas en Piura</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Image Card */}
        <div className="relative lg:h-[540px] flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl p-1 bg-gradient-to-b from-slate-200/90 via-slate-100/40 to-transparent dark:from-white/10 dark:to-transparent transition-emil hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-navy-light">
              <img
                src="/hero-bg.webp"
                alt="Servicio de cerrajería profesional en Piura"
                width="448"
                height="560"
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover mix-blend-normal dark:mix-blend-overlay opacity-95 dark:opacity-75 transition-scale duration-500 ease-out-emil hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent dark:from-navy-dark dark:via-navy-dark/30 pointer-events-none"></div>

              {/* Functional Operational Status Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 dark:bg-navy-dark/95 border border-slate-200/80 dark:border-white/10 shadow-xl backdrop-blur-md rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Cobertura Disponible</span>
                  </div>
                  <span className="text-xs font-bold text-accent">Ciudad de Piura</span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-gray-400">Tiempo de respuesta:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">15 a 20 minutos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;