import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background-light dark:bg-background-dark" id="equipo">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative group perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-primary rounded-[2rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300 ease-out-emil"></div>
          <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 transform transition-transform duration-300 ease-out-emil group-hover:rotate-y-3">
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 pointer-events-none"></div>
            <img
              src="/team-work.webp"
              alt="Técnico cerrajero certificado trabajando en Piura"
              loading="lazy"
              width="600"
              height="450"
              className="w-full aspect-[4/3] object-cover transition-transform duration-300 ease-out-emil group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-green-400" aria-hidden="true">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-sm">Técnicos Certificados</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Más de 10 años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col gap-8">
          <div>
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Nosotros</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Equipo Técnico Experto</h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
              No solo abrimos puertas, brindamos tranquilidad. Nuestro equipo en Piura está constantemente capacitado en las últimas tecnologías de seguridad global.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 group cursor-default">
              <div className="mt-1 size-10 rounded-full bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-200 ease-out-emil">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-accent" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-accent transition-colors duration-200 ease-out-emil">Identificación Garantizada</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Nuestros técnicos portan fotocheck y uniforme para tu seguridad.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-default">
              <div className="mt-1 size-10 rounded-full bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-200 ease-out-emil">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-accent" aria-hidden="true">
                  <line x1="10" x2="14" y1="2" y2="2" />
                  <line x1="12" x2="12" y1="14" y2="11" />
                  <circle cx="12" cy="14" r="8" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-accent transition-colors duration-200 ease-out-emil">Respuesta Inmediata</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Unidades móviles distribuidas estratégicamente en Piura.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-default">
              <div className="mt-1 size-10 rounded-full bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-200 ease-out-emil">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-accent" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                  <circle cx="12" cy="14.5" r="1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-accent transition-colors duration-200 ease-out-emil">Transparencia Total</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Presupuesto claro antes de realizar el trabajo. Sin sorpresas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;