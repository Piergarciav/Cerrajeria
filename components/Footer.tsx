import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-black/5 dark:border-white/5 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-accent" aria-hidden="true">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-2xl font-black text-gray-900 dark:text-white tracking-wider">24/7 PIURA</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a className="size-11 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-emil focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none" href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Ir a nuestra página de Facebook">
              <span className="text-lg font-bold" aria-hidden="true">fb</span>
            </a>
            <a className="size-11 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-emil focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none" href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ir a nuestra página de Instagram">
              <span className="text-lg font-bold" aria-hidden="true">ig</span>
            </a>
            <a className="size-11 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-emil focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none" href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
              <span className="text-lg font-bold" aria-hidden="true">wa</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 dark:text-gray-400 text-sm">© 2024 Cerrajería Piura. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 dark:bg-green-500/5 border border-green-500/20 dark:border-green-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-700 dark:text-green-400 text-xs font-bold uppercase">Sistema Operativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;