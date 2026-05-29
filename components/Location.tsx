import React from 'react';
import { CONTACT_INFO } from '../constants';

const Location: React.FC = () => {
  const [showMap, setShowMap] = React.useState(false);

  return (
    <section className="relative bg-gray-50 dark:bg-background-dark" id="ubicacion">
      <div className="w-full h-[550px] relative overflow-hidden bg-gray-100 dark:bg-background-dark">
        {!showMap ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-navy-light/20 relative group">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-32 rounded-full bg-accent/5 animate-ping absolute"></div>
              <div className="size-24 rounded-full bg-accent/10 animate-pulse absolute"></div>
            </div>
            
            <button
              onClick={() => setShowMap(true)}
              className="relative z-10 flex flex-col items-center gap-4 p-6 rounded-2xl glass-panel border border-black/10 dark:border-white/10 hover:border-accent/30 hover:scale-105 active:scale-[0.98] transition-all duration-300 shadow-xl cursor-pointer group"
              aria-label="Cargar mapa interactivo de Google Maps"
            >
              <div className="size-14 rounded-full bg-accent/20 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background-dark transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-7">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                  <line x1="9" x2="9" y1="3" y2="18" />
                  <line x1="15" x2="15" y1="6" y2="21" />
                </svg>
              </div>
              <div className="text-center">
                <span className="block text-gray-900 dark:text-white font-bold text-base">Cargar Mapa Interactivo</span>
                <span className="block text-xs text-gray-500 mt-1">Haga clic para activar Google Maps</span>
              </div>
            </button>
          </div>
        ) : (
          <iframe
            title="Mapa de ubicación"
            width="600"
            height="550"
            loading="lazy"
            className="w-full h-full grayscale opacity-80 dark:opacity-60 dark:invert dark:contrast-125 dark:brightness-75"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
          ></iframe>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent pointer-events-none"></div>

        <div className="absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 w-[calc(100%-2rem)] md:w-[400px] glass-panel rounded-2xl p-8 shadow-2xl border border-black/10 dark:border-white/10">
          <div className="flex items-center justify-between mb-6 border-b border-black/10 dark:border-white/10 pb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Visita el Taller</h3>
            <div className="size-8 rounded flex items-center justify-center bg-accent/20 text-accent animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-accent" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-gray-700 dark:text-gray-400 mt-1" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">{CONTACT_INFO.address}</p>
                <p className="text-sm text-gray-700 dark:text-gray-400">{CONTACT_INFO.addressRef}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-gray-700 dark:text-gray-400 mt-1" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">Horario de Atención</p>
                <p className="text-sm text-gray-700 dark:text-gray-400">{CONTACT_INFO.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-accent/5 p-3 rounded-lg border border-accent/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-accent mt-1 animate-bounce" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <p className="text-accent font-bold">Urgencias 24 Horas</p>
                <p className="text-xs text-accent/80">Atendemos llamadas de emergencia todos los días.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg py-2.5 bg-primary hover:bg-blue-600 text-white font-bold text-sm transition-emil hover:scale-102 active:scale-[0.97] shadow-lg shadow-primary/25 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Cómo llegar
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneNumber}`}
              className="flex items-center justify-center rounded-lg py-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-bold text-sm transition-emil hover:scale-102 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Llamar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;