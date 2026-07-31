import React from 'react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const Location: React.FC = () => {
  const urbanZones = ['Piura Centro', 'Castilla', 'Veintiséis de Octubre'];
  const regionalZones = [
    'Sullana',
    'Talara',
    'Paita',
    'Chulucanas',
    'Sechura',
    'Catacaos',
    'Máncora',
    'Los Órganos',
    'Tambogrande',
    'La Unión',
    'Morropón'
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark relative overflow-hidden" id="ubicacion">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-accent font-bold tracking-widest text-xs uppercase">Asistencia Inmediata</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Zona de Cobertura y Atención 24/7
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Unidades móviles equipadas para llegar a tu ubicación en Piura y todo el departamento.
          </p>
        </div>

        {/* 2-Column Balanced Layout (5 cols card / 7 cols map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Compact Professional Coverage Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 bg-white dark:bg-navy-light/80 border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 md:p-7 shadow-sm">
            <div className="space-y-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base">Cerrajería a Domicilio</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Atención directa en tu ubicación</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  Unidades Activas
                </span>
              </div>

              {/* Zone 1: Urban */}
              <div className="space-y-3 bg-slate-50/80 dark:bg-white/[0.03] p-4 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-accent">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm">Piura Urbana (Cobertura Total 24/7)</h4>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Apertura doméstica, vehicular, duplicado de llaves y cerraduras inteligentes.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {urbanZones.map((zone) => (
                    <span key={zone} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-navy-dark text-slate-700 dark:text-gray-200 border border-slate-200/80 dark:border-white/10">
                      <span className="size-1 rounded-full bg-accent" />
                      {zone}
                    </span>
                  ))}
                </div>
              </div>

              {/* Zone 2: Regional */}
              <div className="space-y-3 bg-slate-50/80 dark:bg-white/[0.03] p-4 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-blue-500">
                      <rect x="1" y="3" width="15" height="13" rx="2" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm">Región Piura (Atención en Ruta)</h4>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cerrajería automotriz de urgencia, apertura y codificación de llaves en ruta.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {regionalZones.map((zone) => (
                    <span key={zone} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-navy-dark text-slate-700 dark:text-gray-200 border border-slate-200/80 dark:border-white/10">
                      <span className="size-1 rounded-full bg-blue-500" />
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-white/5">
              <a
                href={getWhatsAppLink('Hola, quiero consultar cobertura para mi ubicación exacta en Piura.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-h-11 rounded-xl bg-accent hover:bg-accent-hover text-background-dark font-bold text-xs transition-emil hover:scale-102 active:scale-95 shadow-md shadow-accent/20"
              >
                Consultar Cobertura
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneNumber}`}
                className="flex items-center justify-center min-h-11 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 text-gray-900 dark:text-white font-bold text-xs transition-emil hover:scale-102 active:scale-95"
              >
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Right Column: High-Performance Styled Map Container (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[440px] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-sm bg-slate-100 dark:bg-navy-light/40 flex flex-col group">
            {/* Top Floating Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-md">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold text-gray-900 dark:text-white">Base Móvil: {CONTACT_INFO.address}</span>
            </div>

            {/* Clean High-Performance Map Container */}
            <div className="relative w-full h-full min-h-[440px]">
              <iframe
                title="Mapa de cobertura en Piura"
                width="100%"
                height="100%"
                loading="lazy"
                className="w-full h-full min-h-[440px] border-0 transition-opacity duration-300 opacity-95 dark:opacity-80 dark:invert dark:contrast-125 dark:brightness-75"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
              />
            </div>

            {/* Bottom Overlay Link */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href={CONTACT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 text-xs font-bold text-gray-900 dark:text-white hover:text-accent transition-emil hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Abrir en Google Maps</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;