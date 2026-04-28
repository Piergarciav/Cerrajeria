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
            <span className="material-symbols-outlined text-2xl">lock_open</span>
          </div>
          <div>
            <h2 className="text-gray-900 dark:text-white text-xl font-black tracking-tighter uppercase leading-none">24/7 PIURA</h2>
            <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Cerrajería Experta</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors relative group" href="#servicios">
            Servicios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors relative group" href="#equipo">
            Equipo
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors relative group" href="#recomendaciones">
            Recomendaciones
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors relative group" href="#ubicacion">
            Ubicación
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="relative w-16 h-8 rounded-full bg-gray-100 dark:bg-white/10 border border-black/10 dark:border-white/10 flex items-center transition-colors hover:border-accent/50 group overflow-hidden"
          >
            <span className="sr-only">Cambiar Tema</span>
            <div className="absolute inset-0 flex justify-between items-center px-2 z-0">
              <span className="material-symbols-outlined text-[14px] text-gray-400 dark:text-accent">dark_mode</span>
              <span className="material-symbols-outlined text-[14px] text-accent dark:text-gray-400">light_mode</span>
            </div>
            <span
              className={`absolute left-1 w-6 h-6 bg-white dark:bg-navy-light border border-black/10 dark:border-white/10 rounded-full shadow-md transform transition-transform z-10 flex items-center justify-center ${isDark ? 'translate-x-0' : 'translate-x-8'}`}
            >
              <span className="material-symbols-outlined text-[14px] text-accent">
                {isDark ? 'dark_mode' : 'light_mode'}
              </span>
            </span>
          </button>

          <a className="hidden sm:flex items-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 px-4 py-2 rounded-lg transition-all hover:scale-105" href={`tel:${CONTACT_INFO.phoneNumber}`}>
            <span className="material-symbols-outlined text-accent text-sm">call</span>
            <span className="text-sm font-bold">{CONTACT_INFO.displayPhone}</span>
          </a>

          <button className="md:hidden text-gray-900 dark:text-white p-1">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;