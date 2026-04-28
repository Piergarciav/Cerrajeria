import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-black/5 dark:border-white/5 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-accent text-3xl">lock</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white tracking-wider">24/7 PIURA</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a className="size-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-all" href={SOCIAL_LINKS.facebook}>
              <span className="text-lg font-bold">fb</span>
            </a>
            <a className="size-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-all" href={SOCIAL_LINKS.instagram}>
              <span className="text-lg font-bold">ig</span>
            </a>
            <a className="size-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-all" href={SOCIAL_LINKS.whatsapp}>
              <span className="text-lg font-bold">wa</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2024 Cerrajería Piura. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-500 text-xs font-bold uppercase">Sistema Operativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;