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
          
          <div className="flex items-center gap-4">
            <a className="size-11 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-emil hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none" href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Ir a nuestra página de Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a className="size-11 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-emil hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none" href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ir a nuestra página de Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a className="size-11 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-emil hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none" href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Ir a nuestra cuenta de TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.65a6.34 6.34 0 0 0-5.11 6.18A6.34 6.34 0 0 0 10.7 20.2a6.34 6.34 0 0 0 6.34-6.34V9.37a8.16 8.16 0 0 0 4.77 1.52V7.44a4.85 4.85 0 0 1-2.22-.75z" />
              </svg>
            </a>
            <a className="size-11 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent hover:text-background-dark transition-emil hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none" href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.82 14.07c-.24.68-1.21 1.29-1.97 1.45-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.18-4.95-4.38-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.27-.29.58-.36.78-.36.2 0 .39.01.56.01.18 0 .42-.07.66.5.24.58.83 2.03.9 2.18.07.15.12.33.02.53-.1.19-.15.31-.3.48-.15.17-.31.38-.45.51-.15.14-.3.29-.13.58.17.29.76 1.25 1.63 2.03 1.12.99 2.06 1.3 2.35 1.44.29.14.46.12.63-.07.17-.19.74-.86.94-1.16.19-.29.39-.24.65-.15.27.09 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.72-.17 1.4z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 dark:text-gray-400 text-sm">© {new Date().getFullYear()} Cerrajería Piura. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 dark:bg-accent/5 border border-accent/20 dark:border-accent/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent text-xs font-bold uppercase">Línea de emergencia 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;