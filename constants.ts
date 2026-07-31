import { Service } from './types';

export const CONTACT_INFO = {
  phone: '+51 942 854 039',
  phoneNumber: '51942854039', // Clean number for tel: links
  whatsapp: '51942854039',
  displayPhone: '942 854 039',
  address: 'Prolongación Loreto s/N, Piura',
  hours: 'Las 24 horas, los 7 días de la semana',
  mapQuery: 'Avenida Loreto, Piura',
  coverage: {
    city: 'Piura, Castilla y Veintiséis de Octubre: Cobertura urbana total 24/7 en apertura doméstica, vehicular, duplicados y cerraduras inteligentes.',
    region: 'Sullana, Talara, Paita, Chulucanas, Sechura, Catacaos y región Piura: Servicio de emergencia vehicular, aperturas en ruta y reprogramación de llaves con chip.'
  },
  // TODO: replace with the real Google Business Place ID once available; this falls back to a working Maps search instead of a broken placeholder link.
  googleReviewUrl: 'https://www.google.com/maps/search/?api=1&query=Cerrajer%C3%ADa+24%2F7+Piura'
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const SERVICES: Service[] = [
  {
    id: 'domestica',
    title: 'Apertura Doméstica',
    description: 'Apertura de puertas de casas, departamentos y oficinas sin dañar la estructura ni el cilindro. Atención inmediata 24 horas.',
    icon: 'door_front',
    linkText: 'Solicitar Servicio',
    badge: 'Atención 24/7'
  },
  {
    id: 'vehicular',
    title: 'Apertura Vehicular',
    description: 'Expertos en apertura de autos y camionetas de todas las marcas y modelos. Acceso rápido sin rayones ni destrozos.',
    icon: 'no_crash',
    linkText: 'Solicitar Servicio',
    badge: 'Atención 24/7'
  },
  {
    id: 'duplicado',
    title: 'Duplicado de Llaves',
    description: 'Copia de llaves de alta seguridad, llaves de punto, multipunto, llaves con chip y transponder en el acto.',
    icon: 'vpn_key',
    linkText: 'Solicitar Servicio',
    badge: 'Servicio al Instante'
  },
  {
    id: 'programacion',
    title: 'Programación de Llaves',
    description: 'Configuración de mandos a distancia, codificación y sincronización de llaves ECU y Smart Keys para vehículos modernos.',
    icon: 'settings_remote',
    linkText: 'Solicitar Servicio',
    badge: 'Escáner Avanzado'
  },
  {
    id: 'inteligentes',
    title: 'Cerraduras Inteligentes',
    description: 'Moderniza tu hogar o negocio con cerraduras biométricas, huella digital, código PIN o control app WiFi con instalación profesional.',
    icon: 'smart_lock',
    linkText: 'Consultar Modelos',
    badge: 'Smart Security',
    isFeatured: true
  },
  {
    id: 'cajas_fuertes',
    title: 'Apertura de Cajas Fuertes',
    description: 'Apertura técnica, mantenimiento y cambio de clave para cajas fuertes residenciales, comerciales y bancarias en Piura.',
    icon: 'safe',
    linkText: 'Solicitar Asistencia',
    badge: 'Alta Seguridad'
  },
  {
    id: 'extraccion',
    title: 'Extracción de Llaves Rotas',
    description: 'Retiro especializado de llaves quebradas o atascadas en cerraduras de casas, autos o candados sin arruinar la chapa.',
    icon: 'key_broken',
    linkText: 'Solicitar Urgencia',
    badge: 'Sin Dañar Cilindro'
  },
  {
    id: 'alta_seguridad',
    title: 'Cerrojos y Combinaciones',
    description: 'Instalación de cerrojos reforzados (Forte, Cantol, Yale) y cambio de clave/combinación de cilindros para máxima protección.',
    icon: 'shield_lock',
    linkText: 'Reforzar Seguridad',
    badge: 'Protección Reforzada'
  },
  {
    id: 'comercial',
    title: 'Cerrajería Comercial',
    description: 'Mantenimiento e instalación de barras antipánico, cerraduras de alto tráfico y candados pesados para empresas y locales.',
    icon: 'store',
    linkText: 'Cotizar para Negocio',
    badge: 'Empresas y Locales'
  }
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61591509627507',
  instagram: 'https://instagram.com/cerrajerapiura247',
  tiktok: 'https://tiktok.com/@cerrajerapiura247',
  whatsapp: getWhatsAppLink('Hola, vi su web y necesito un cerrajero en Piura.')
};

