import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background-light dark:bg-background-dark" id="equipo">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative group">
          <div className="relative rounded-[1.5rem] p-1 bg-slate-200/60 dark:bg-white/10 border border-slate-200/80 dark:border-white/10 shadow-xl transition-transform duration-300 ease-out-emil hover:-translate-y-1">
            <div className="relative rounded-[1.25rem] overflow-hidden bg-slate-900">
              <img
                src="/team-work.webp"
                alt="Técnico cerrajero certificado trabajando en Piura"
                loading="lazy"
                width="600"
                height="450"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out-emil group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-5 left-5 right-5 z-20">
                <div className="bg-white/95 dark:bg-navy-dark/95 border border-slate-200/80 dark:border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-lg backdrop-blur-md">
                  <div className="bg-blue-50 dark:bg-accent/20 p-2.5 rounded-xl text-accent border border-blue-200/80 dark:border-accent/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-accent" aria-hidden="true">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-bold text-sm">Técnicos Certificados</p>
                    <p className="text-xs text-slate-600 dark:text-gray-300">Más de 10 años de experiencia</p>
                  </div>
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

          <div className="flex flex-col border-t border-black/5 dark:border-white/5">
            <div className="flex items-baseline gap-5 py-5 border-b border-black/5 dark:border-white/5 group cursor-default">
              <span className="font-mono text-sm font-bold text-accent/50 group-hover:text-accent transition-colors duration-200 ease-out-emil tabular-nums">01</span>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-accent transition-colors duration-200 ease-out-emil">Identificación Garantizada</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Nuestros técnicos portan fotocheck y uniforme para tu seguridad.</p>
              </div>
            </div>

            <div className="flex items-baseline gap-5 py-5 border-b border-black/5 dark:border-white/5 group cursor-default">
              <span className="font-mono text-sm font-bold text-accent/50 group-hover:text-accent transition-colors duration-200 ease-out-emil tabular-nums">02</span>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-accent transition-colors duration-200 ease-out-emil">Respuesta Inmediata</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Servicio a domicilio en toda la ciudad de Piura, mismo día.</p>
              </div>
            </div>

            <div className="flex items-baseline gap-5 py-5 border-b border-black/5 dark:border-white/5 group cursor-default">
              <span className="font-mono text-sm font-bold text-accent/50 group-hover:text-accent transition-colors duration-200 ease-out-emil tabular-nums">03</span>
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