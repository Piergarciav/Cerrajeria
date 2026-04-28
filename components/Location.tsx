import React from 'react';
import { CONTACT_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-background-dark" id="ubicacion">
      <div className="w-full h-[550px] relative overflow-hidden bg-gray-100 dark:bg-background-dark">
        <iframe
          title="Mapa de ubicación"
          className="w-full h-full grayscale opacity-80 dark:opacity-60 dark:invert dark:contrast-125 dark:brightness-75"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent pointer-events-none"></div>

        <div className="absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 w-[calc(100%-2rem)] md:w-[400px] glass-panel rounded-2xl p-8 shadow-2xl border border-black/10 dark:border-white/10">
          <div className="flex items-center justify-between mb-6 border-b border-black/10 dark:border-white/10 pb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Visita el Taller</h3>
            <div className="size-8 rounded flex items-center justify-center bg-accent/20 text-accent animate-pulse">
              <span className="material-symbols-outlined">pin_drop</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 mt-1">location_on</span>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">{CONTACT_INFO.address}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{CONTACT_INFO.addressRef}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 mt-1">schedule</span>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">Horario de Atención</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{CONTACT_INFO.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-accent/5 p-3 rounded-lg border border-accent/10">
              <span className="material-symbols-outlined text-accent mt-1 animate-bounce">emergency</span>
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
              className="flex items-center justify-center rounded-lg py-2.5 bg-primary hover:bg-blue-600 text-white font-bold text-sm transition-colors shadow-lg shadow-primary/25"
            >
              Cómo llegar
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneNumber}`}
              className="flex items-center justify-center rounded-lg py-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-bold text-sm transition-colors"
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