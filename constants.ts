import { Service } from './types';

export const CONTACT_INFO = {
  phone: '+51 977614832',
  phoneNumber: '51977614832', // Clean number for tel: links
  whatsapp: '51977614832',
  displayPhone: '977 614 832',
  address: 'Av. Loreto, Piura',
  addressRef: 'Referencia: Cerca a civa',
  hours: 'Lun - Dom: 8:30am - 7:00pm',
  mapQuery: 'Av. Country 564, Piura',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=TU_PLACE_ID_AQUI'
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const SERVICES: Service[] = [
  {
    id: 'domestica',
    title: 'Apertura Doméstica',
    description: 'Apertura de puertas de casas y oficinas sin dañar la cerradura. Servicio rápido y seguro.',
    icon: 'door_front',
    linkText: 'Solicitar'
  },
  {
    id: 'vehicular',
    title: 'Apertura Vehicular',
    description: 'Expertos en todas las marcas. Recuperamos el acceso a tu vehículo sin rayones ni daños.',
    icon: 'no_crash',
    linkText: 'Solicitar'
  },
  {
    id: 'duplicado',
    title: 'Duplicado de Llaves',
    description: 'Copia de llaves de alta seguridad, llaves con chip y transponder en el acto.',
    icon: 'vpn_key',
    linkText: 'Solicitar'
  },
  {
    id: 'programacion',
    title: 'Programación de Llaves',
    description: 'Configuración de mandos a distancia y ECU para modelos modernos.',
    icon: 'settings_remote',
    linkText: 'Solicitar'
  }
];

export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  whatsapp: getWhatsAppLink('Hola, vi su web y necesito un cerrajero en Piura.')
};
