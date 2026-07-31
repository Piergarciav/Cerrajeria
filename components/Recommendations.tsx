import React from 'react';
import { CONTACT_INFO } from '../constants';

const RECOMMENDATIONS = [
    {
        name: "Carlos Mendoza",
        date: "Hace 2 días",
        rating: 5,
        text: "Excelente servicio. Llamé por una emergencia a las 3 AM y llegaron en 15 minutos. Muy profesionales y rápidos.",
        verified: true
    },
    {
        name: "Ana Lucía Ortiz",
        date: "Hace 1 semana",
        rating: 5,
        text: "Me ayudaron con el duplicado de mi llave con chip. En otros lados me cobraban el doble. Totalmente recomendados.",
        verified: true
    },
    {
        name: "Roberto V.",
        date: "Hace 2 semanas",
        rating: 4,
        text: "Instalaron una cerradura inteligente en mi oficina. El trabajo quedó impecable y me explicaron todo el funcionamiento.",
        verified: true
    }
];

const Recommendations: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-white dark:bg-navy-light relative" id="recomendaciones">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl space-y-4">
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">Experiencia Real</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Lo que dicen nuestros clientes en Piura</h2>
                    </div>
                    <a
                        href={CONTACT_INFO.googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 px-6 py-3 rounded-lg transition-emil hover:scale-105 active:scale-[0.97] text-sm font-bold h-fit focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-accent" aria-hidden="true">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        Dejar una Recomendación
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {RECOMMENDATIONS.map((rec, idx) => (
                        <div key={idx} className="bg-white dark:bg-navy-light/50 border border-black/5 dark:border-white/5 p-8 rounded-2xl flex flex-col gap-6 relative group hover:border-accent/20 transition-emil duration-300">
                            <div className="flex justify-between items-start">
                                <div className="flex text-accent gap-0.5" aria-label={`Calificación de ${rec.rating} de 5 estrellas`}>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < rec.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className={`size-3.5 ${i < rec.rating ? 'text-accent' : 'text-gray-300 dark:text-gray-600'}`} aria-hidden="true">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{rec.date}</span>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">"{rec.text}"</p>

                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                                <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold border border-accent/20">
                                    {rec.name.charAt(0)}
                                </div>
                                <div>
                                    <span className="text-gray-900 dark:text-white font-bold text-sm flex items-center gap-1">
                                        {rec.name}
                                        {rec.verified && (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-accent" aria-hidden="true">
                                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                              <path d="m9 12 2 2 4-4" />
                                            </svg>
                                        )}
                                    </span>
                                    <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cliente Verificado en Piura</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-4 py-8 border-y border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-2 text-2xl font-bold">
                        <span className="text-gray-900 dark:text-white">Puntuación:</span>
                        <span className="text-accent">4.9 / 5</span>
                    </div>
                    <div className="flex text-accent gap-1" aria-label="Calificación promedio de 5 estrellas">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-accent" aria-hidden="true">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Basado en más de 120 recomendaciones de clientes reales.</p>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
