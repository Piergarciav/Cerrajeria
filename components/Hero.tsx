import React from 'react';
import { getWhatsAppLink } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-20 lg:pt-0 lg:pb-0"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="absolute inset-0 z-0 hidden dark:block" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 w-fit backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent text-xs font-bold uppercase tracking-wider">Cerrajería de Emergencia en Piura</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight" itemProp="name">
            CERRAJERO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 dark:via-yellow-200 to-accent">24 HORAS EN PIURA</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg" itemProp="description">
            Servicio rápido de cerrajería en Piura. Apertura de puertas y autos sin daños, duplicado de llaves con chip y sistemas de seguridad avanzados para hogar y empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href={getWhatsAppLink("Hola, necesito un cerrajero urgente en Piura.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg h-14 px-8 bg-gradient-to-r from-accent to-accent-hover text-white text-base font-bold transition-emil shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Contactar cerrajero urgente por WhatsApp"
              title="Solicitar servicio de cerrajería inmediata"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 mr-2 text-white" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Solicitar Auxilio
            </a>
            <a
              href="#servicios"
              className="flex items-center justify-center rounded-lg h-14 px-8 bg-transparent border border-black/20 dark:border-white/20 hover:bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white text-base font-medium transition-emil hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
              title="Ver servicios de cerrajería disponibles"
            >
              Ver Soluciones
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-black/5 dark:border-white/5">
            <div className="flex -space-x-3">
              <div className="size-10 rounded-full bg-gray-700 border-2 border-background-dark flex items-center justify-center text-xs font-bold">JD</div>
              <div className="size-10 rounded-full bg-gray-600 border-2 border-background-dark flex items-center justify-center text-xs font-bold">MR</div>
              <div className="size-10 rounded-full bg-accent text-background-dark border-2 border-background-dark flex items-center justify-center font-bold text-xs">+50</div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-accent gap-0.5" aria-label="Calificación de 5 estrellas">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 text-accent" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 text-accent" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 text-accent" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 text-accent" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 text-accent" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-400">Cerrajero recomendado en Piura</span>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000 group">
          <div className="relative w-full max-w-md aspect-[3/4] transition-transform duration-300 ease-out-emil transform group-hover:rotate-y-6 group-hover:rotate-x-6">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-40 animate-pulse will-change-transform hidden dark:block" aria-hidden="true"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-navy-light animate-float will-change-transform" style={{ animationDelay: '0.5s' }}>
              <img
                src="/hero-bg.webp"
                alt="Servicio de cerrajería avanzada en Piura"
                className="absolute inset-0 w-full h-full object-cover mix-blend-normal dark:mix-blend-overlay opacity-80 dark:opacity-60"
                fetchPriority="high"
                width="448"
                height="597"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-10 left-6 right-6 p-6 glass-panel rounded-xl border border-black/10 dark:border-white/10 shadow-lg transform translate-z-10 transition-transform duration-300 ease-out-emil group-hover:translate-z-20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    <div className="size-3 bg-red-500 rounded-full"></div>
                    <div className="size-3 bg-yellow-500 rounded-full"></div>
                    <div className="size-3 bg-green-500 rounded-full"></div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-accent animate-spin" aria-hidden="true">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-black/10 dark:bg-white/10 rounded w-3/4"></div>
                  <div className="h-2 bg-black/10 dark:bg-white/10 rounded w-1/2"></div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-700 dark:text-gray-400 font-mono text-[10px]">SERVICIO 24/7 ACTIVO</span>
                    <span className="text-xs text-green-400 font-mono text-[10px]">OPERATIVO</span>
                  </div>
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