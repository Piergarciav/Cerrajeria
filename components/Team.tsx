import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background-light dark:bg-background-dark" id="equipo">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative group perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-primary rounded-[2rem] opacity-20 blur-xl group-hover:opacity-30 transition duration-700"></div>
          <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 transform transition-transform duration-500 group-hover:rotate-y-3">
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10"></div>
            <div
              className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              role="img"
              aria-label="Técnico cerrajero trabajando"
              style={{ backgroundImage: 'url("/team-work.png")' }}
            ></div>
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <span className="material-symbols-outlined text-green-400">verified</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-sm">Técnicos Certificados</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Más de 10 años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col gap-8">
          <div>
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Nosotros</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Equipo Técnico Experto</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              No solo abrimos puertas, brindamos tranquilidad. Nuestro equipo en Piura está constantemente capacitado en las últimas tecnologías de seguridad global.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 group cursor-default">
              <div className="mt-1 size-10 rounded-full bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">badge</span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-accent transition-colors">Identificación Garantizada</h4>
                <p className="text-gray-500 text-sm mt-1">Nuestros técnicos portan fotocheck y uniforme para tu seguridad.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-default">
              <div className="mt-1 size-10 rounded-full bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-accent transition-colors">Respuesta Inmediata</h4>
                <p className="text-gray-500 text-sm mt-1">Unidades móviles distribuidas estratégicamente en Piura.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-default">
              <div className="mt-1 size-10 rounded-full bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-accent transition-colors">Transparencia Total</h4>
                <p className="text-gray-500 text-sm mt-1">Presupuesto claro antes de realizar el trabajo. Sin sorpresas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;