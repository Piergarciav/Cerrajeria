import React from 'react';
import { CONTACT_INFO } from '../constants';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-background-dark/90 backdrop-blur-md">
      <div className="px-4 md:px-8 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent to-yellow-600 shadow-lg shadow-accent/20 text-background-dark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-background-dark" aria-hidden="true">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 9.9-1" />
            </svg>
          </div>
          <div>
            <div className="text-gray-900 dark:text-white text-xl font-black tracking-tighter uppercase leading-none">24/7 PIURA</div>
            <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Cerrajería Experta</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-emil hover:scale-102 active:scale-[0.97] relative group inline-block focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm" href="#servicios">
            Servicios
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250 ease-out-emil"></span>
          </a>
          <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-emil hover:scale-102 active:scale-[0.97] relative group inline-block focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm" href="#equipo">
            Equipo
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250 ease-out-emil"></span>
          </a>
          <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-emil hover:scale-102 active:scale-[0.97] relative group inline-block focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm" href="#recomendaciones">
            Recomendaciones
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250 ease-out-emil"></span>
          </a>
          <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-emil hover:scale-102 active:scale-[0.97] relative group inline-block focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm" href="#ubicacion">
            Ubicación
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250 ease-out-emil"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema claro u oscuro"
            className="relative w-16 h-8 rounded-full bg-gray-100 dark:bg-white/10 border border-black/10 dark:border-white/10 flex items-center transition-emil hover:border-accent/50 active:scale-[0.95] group overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <div className="absolute inset-0 flex justify-between items-center px-2 z-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-gray-400 dark:text-accent" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-accent dark:text-gray-400" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" /><path d="M12 20v2" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </div>
            <span
              className={`absolute left-1 w-6 h-6 bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 rounded-full shadow-md transform transition-transform duration-300 ease-out-emil z-10 flex items-center justify-center overflow-hidden ${isDark ? 'translate-x-0' : 'translate-x-8'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-3.5 text-accent absolute transition-all duration-300 ease-out-emil ${isDark ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-75'}`} aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`size-3.5 text-accent absolute transition-all duration-300 ease-out-emil ${!isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`} aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" /><path d="M12 20v2" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </span>
          </button>

          <a className="hidden sm:flex items-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 px-4 py-2 rounded-lg transition-emil hover:scale-105 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none" href={`tel:${CONTACT_INFO.phoneNumber}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-accent" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-sm font-bold">{CONTACT_INFO.displayPhone}</span>
          </a>

          <button 
            className="md:hidden text-gray-900 dark:text-white size-11 flex items-center justify-center rounded-lg active:scale-90 transition-transform focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-gray-900 dark:text-white" aria-hidden="true">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;