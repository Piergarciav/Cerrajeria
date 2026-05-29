import React from 'react';
import { SERVICES, getWhatsAppLink } from '../constants';

const getServiceIcon = (iconName: string, className: string = "size-6") => {
  switch (iconName) {
    case 'door_front':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'no_crash':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case 'vpn_key':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      );
    default: // settings_remote / default key
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <circle cx="12" cy="14" r="2" />
          <line x1="12" x2="12.01" y1="6" y2="6" />
          <line x1="12" x2="12.01" y1="10" y2="10" />
        </svg>
      );
  }
};

const Services: React.FC = () => {
  return (
    <section
      className="py-24 px-4 md:px-8 bg-white dark:bg-navy-light relative overflow-hidden"
      id="servicios"
      itemScope
      itemType="https://schema.org/ServiceCatalog"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-accent font-bold tracking-widest text-sm uppercase">Soluciones Profesionales</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white" itemProp="name">Servicios de Cerrajería 24 Horas en Piura</h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg" itemProp="description">Cerrajero profesional en Piura con tecnología avanzada. Apertura de emergencia, duplicado de llaves y sistemas de seguridad para hogar y negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <article
              key={idx}
              className="group relative bg-background-light dark:bg-background-dark border border-black/5 dark:border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-emil duration-300 hover:-translate-y-2 active:scale-[0.98] overflow-hidden"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 ease-out-emil" aria-hidden="true">
                {getServiceIcon(service.icon, "size-24 text-accent")}
              </div>
              <div className="relative z-10 flex flex-col h-full gap-4">
                <div className="size-12 rounded-lg bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent mb-2 group-hover:bg-accent group-hover:text-background-dark transition-colors duration-250 ease-out-emil" aria-hidden="true">
                  {getServiceIcon(service.icon, "size-6")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white" itemProp="name">{service.title} en Piura</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed" itemProp="description">{service.description}</p>
                <a
                  className="mt-auto flex items-center text-accent text-sm font-bold group-hover:gap-2 transition-[gap,transform] duration-200 ease-out-emil hover:scale-102 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
                  href={getWhatsAppLink(`Hola, necesito información sobre ${service.title} en Piura.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Solicitar servicio de ${service.title} por WhatsApp`}
                  title={`Contactar para ${service.title}`}
                >
                  {service.linkText} 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}

          {/* Featured Large Service Card */}
          <article
            className="group relative bg-background-light dark:bg-background-dark border border-black/5 dark:border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-emil duration-300 hover:-translate-y-2 active:scale-[0.99] overflow-hidden md:col-span-2 lg:col-span-2"
            itemScope
            itemType="https://schema.org/Service"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out-emil" aria-hidden="true"></div>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 ease-out-emil" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-24 text-accent" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M12 2L3 7v4c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center h-full gap-6">
              <div className="size-16 min-w-[64px] rounded-lg bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background-dark transition-colors duration-250 ease-out-emil" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <circle cx="12" cy="16" r="1.5" />
                  <path d="M12 17.5V20" />
                </svg>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white" itemProp="name">Instalación de Cerraduras Inteligentes en Piura</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed" itemProp="description">Moderniza tu hogar o negocio en Piura con cerraduras biométricas, con código PIN o controladas por WiFi. Instalación profesional y configuración completa por expertos certificados.</p>
                <a
                  className="mt-2 flex items-center text-accent text-sm font-bold group-hover:gap-2 transition-[gap,transform] duration-200 ease-out-emil w-fit focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
                  href={getWhatsAppLink("Hola, estoy interesado en instalar cerraduras inteligentes en Piura.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Consultar modelos de cerraduras inteligentes"
                  title="Solicitar información sobre cerraduras inteligentes"
                >
                  Consultar modelos 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;