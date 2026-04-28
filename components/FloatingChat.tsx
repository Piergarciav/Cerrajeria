import React from 'react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const FloatingChat: React.FC = () => {
    const handleClick = () => {
        const url = getWhatsAppLink('Hola, necesito informes sobre sus servicios de cerrajería en Piura.');
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-gray-900 dark:text-white rounded-full shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-bounce group"
            aria-label="Contactar por WhatsApp"
        >
            <span className="material-symbols-outlined text-[32px] fill-1">chat</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white text-[10px] text-green-600 font-bold items-center justify-center">1</span>
            </span>
        </button>
    );
};

export default FloatingChat;
