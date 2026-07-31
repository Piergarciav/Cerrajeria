import React, { useState } from 'react';
import { SERVICES, getWhatsAppLink } from '../constants';
import { Service } from '../types';

const getServiceIcon = (iconName: string, className: string = "size-6") => {
  switch (iconName) {
    case 'door_front':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'no_crash':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case 'vpn_key':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      );
    case 'smart_lock':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1.5" />
          <path d="M12 17.5V19.5" />
        </svg>
      );
    case 'safe':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 10v4" />
          <path d="M15 12h-6" />
          <path d="M7 3v2" />
          <path d="M17 3v2" />
          <path d="M7 19v2" />
          <path d="M17 19v2" />
        </svg>
      );
    case 'key_broken':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="7.5" cy="15.5" r="4.5" />
          <path d="m10.7 12.3 3.3-3.3" />
          <path d="M16 7 14.5 8.5" />
          <path d="M18 5 21 2" />
          <path d="M21 6 18 9" />
        </svg>
      );
    case 'shield_lock':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect width="6" height="5" x="9" y="11" rx="1" />
          <path d="M10 11V9a2 2 0 0 1 4 0v2" />
        </svg>
      );
    case 'store':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20v5H2z" />
        </svg>
      );
    default: // settings_remote
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <circle cx="12" cy="14" r="2" />
          <line x1="12" x2="12.01" y1="6" y2="6" />
          <line x1="12" x2="12.01" y1="10" y2="10" />
        </svg>
      );
  }
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const isEmergency = service.id === 'domestica' || service.id === 'vehicular';
  const isFeatured = service.isFeatured;

  return (
    <article
      className="group relative flex flex-col justify-between bg-white dark:bg-navy-light/80 border border-slate-200/80 dark:border-white/10 hover:border-accent/50 dark:hover:border-accent/50 rounded-2xl p-6 sm:p-7 transition-emil hover:-translate-y-1 active:scale-[0.985] shadow-sm hover:shadow-md dark:shadow-none focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background-light dark:focus-within:ring-offset-navy-dark focus-within:outline-none min-h-[210px] h-full"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="flex flex-col gap-4">
        {/* Header row: Icon + Title next to each other, Badge on the right */}
        <div className="flex items-start justify-between gap-3 w-full">
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Icon Box */}
            <div className="size-12 shrink-0 rounded-xl bg-blue-50 dark:bg-accent/10 border border-blue-200/80 dark:border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200 ease-out-emil" aria-hidden="true">
              {getServiceIcon(service.icon, "size-6")}
            </div>

            {/* Title side-by-side with icon */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors duration-200 leading-snug" itemProp="name">
              {service.title} en Piura
            </h3>
          </div>

          {/* Badge */}
          {service.badge && (
            <span className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border ${
              isFeatured
                ? 'bg-accent/15 text-accent border-accent/30 font-bold'
                : 'bg-blue-50 dark:bg-accent/10 text-blue-700 dark:text-accent border-blue-200/80 dark:border-accent/20'
            }`}>
              {isEmergency && (
                <span className="size-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              )}
              {service.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed" itemProp="description">
          {service.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
        <a
          className="inline-flex items-center text-sm font-bold text-accent group-hover:text-accent-hover focus:outline-none after:absolute after:inset-0 after:rounded-2xl"
          href={getWhatsAppLink(`Hola, necesito información sobre ${service.title} en Piura.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Solicitar servicio de ${service.title} por WhatsApp`}
          title={`Contactar para ${service.title}`}
        >
          <span>{service.linkText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 ml-1.5 transition-transform duration-200 ease-out-emil group-hover:translate-x-1.5"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  );
};

const Services: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // 2x2 grid per page
  const totalPages = Math.ceil(SERVICES.length / itemsPerPage);

  const currentServices = SERVICES.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      className="py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark relative overflow-hidden"
      id="servicios"
      itemScope
      itemType="https://schema.org/ServiceCatalog"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        {/* Header section with reordered copy and minimalist navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-accent font-bold tracking-widest text-xs uppercase">
              Soluciones Profesionales 24/7
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white" itemProp="name">
              Servicios de Cerrajería 24 Horas en Piura
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed" itemProp="description">
              Apertura de emergencia, duplicado de llaves y sistemas de seguridad para hogar y negocio.
            </p>
          </div>

          {/* Minimalist Navigation Controls: <  01 / 03  > */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-white dark:bg-navy-light/90 p-1.5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className={`size-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                currentPage > 0
                  ? 'bg-slate-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark active:scale-90 shadow-sm cursor-pointer'
                  : 'opacity-25 cursor-not-allowed text-gray-400 dark:text-gray-600'
              }`}
              aria-label="Página anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="px-3 text-xs font-mono font-bold tracking-wider text-gray-700 dark:text-gray-300 select-none">
              <span className="text-accent font-black">0{currentPage + 1}</span>
              <span className="opacity-40 mx-1">/</span>
              <span className="opacity-70">0{totalPages}</span>
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className={`size-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                currentPage < totalPages - 1
                  ? 'bg-slate-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark active:scale-90 shadow-sm cursor-pointer'
                  : 'opacity-25 cursor-not-allowed text-gray-400 dark:text-gray-600'
              }`}
              aria-label="Página siguiente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* 2x2 Responsive Grid with Comfortable Height */}
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-300 ease-out-emil">
            {currentServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Minimalist Progress Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === index
                    ? 'w-6 bg-accent'
                    : 'w-1.5 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
                }`}
                aria-label={`Ir a la página ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;