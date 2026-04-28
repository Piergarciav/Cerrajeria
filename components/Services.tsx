import React from 'react';
import { SERVICES, getWhatsAppLink } from '../constants';

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
          <p className="text-gray-600 dark:text-gray-400 text-lg" itemProp="description">Cerrajero profesional en Piura con tecnología avanzada. Apertura de emergencia, duplicado de llaves y sistemas de seguridad para hogar y negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <article
              key={idx}
              className="group relative bg-background-light dark:bg-background-dark border border-black/5 dark:border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                <span className="material-symbols-outlined text-8xl text-accent">{
                  service.icon === 'door_front' ? 'home' :
                    service.icon === 'no_crash' ? 'directions_car' :
                      service.icon === 'vpn_key' ? 'key' : 'terminal'
                }</span>
              </div>
              <div className="relative z-10 flex flex-col h-full gap-4">
                <div className="size-12 rounded-lg bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent mb-2 group-hover:bg-accent group-hover:text-background-dark transition-colors" aria-hidden="true">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white" itemProp="name">{service.title} en Piura</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed" itemProp="description">{service.description}</p>
                <a
                  className="mt-auto flex items-center text-accent text-sm font-bold group-hover:gap-2 transition-all"
                  href={getWhatsAppLink(`Hola, necesito información sobre ${service.title} en Piura.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Solicitar servicio de ${service.title} por WhatsApp`}
                  title={`Contactar para ${service.title}`}
                >
                  {service.linkText} <span className="material-symbols-outlined text-sm ml-1" aria-hidden="true">arrow_forward</span>
                </a>
              </div>
            </article>
          ))}

          {/* Featured Large Service Card */}
          <article
            className="group relative bg-background-light dark:bg-background-dark border border-black/5 dark:border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden md:col-span-2 lg:col-span-2"
            itemScope
            itemType="https://schema.org/Service"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
              <span className="material-symbols-outlined text-8xl text-accent">admin_panel_settings</span>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center h-full gap-6">
              <div className="size-16 min-w-[64px] rounded-lg bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background-dark transition-colors" aria-hidden="true">
                <span className="material-symbols-outlined text-3xl">lock_person</span>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white" itemProp="name">Instalación de Cerraduras Inteligentes en Piura</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed" itemProp="description">Moderniza tu hogar o negocio en Piura con cerraduras biométricas, con código PIN o controladas por WiFi. Instalación profesional y configuración completa por expertos certificados.</p>
                <a
                  className="mt-2 flex items-center text-accent text-sm font-bold group-hover:gap-2 transition-all w-fit"
                  href={getWhatsAppLink("Hola, estoy interesado en instalar cerraduras inteligentes en Piura.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Consultar modelos de cerraduras inteligentes"
                  title="Solicitar información sobre cerraduras inteligentes"
                >
                  Consultar modelos <span className="material-symbols-outlined text-sm ml-1" aria-hidden="true">arrow_forward</span>
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