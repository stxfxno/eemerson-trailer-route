import cargaSuelta from "@/assets/carga-suelta.png";
import contenedores from "@/assets/contenedores.png";
import refrigerados from "@/assets/refrigerados.png";
import isotanques from "@/assets/isotanques.png";
import peligrosa from "@/assets/peligrosa.png";
import montacarga from "@/assets/montacarga.png";

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  particularities: string[];
  example: string;
  advantages: string[];
  gallery?: string[];
  clients?: string[];
  faqs?: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    id: "carga-suelta",
    title: "Transporte de Carga Suelta",
    description: "Movilización de carga no contenedorizada, pallets, maquinarias o mercancía industrial de gran volumen.",
    image: cargaSuelta,
    fullDescription: "Movilización de carga no contenedorizada, pallets, maquinarias o mercancía industrial de gran volumen.",
    particularities: [
      "Equipos adaptados (plataformas y camas bajas).",
      "Estiba y sujeción según tipo de carga.",
      "Cobertura local y nacional bajo programación.",
      "Ideal para proyectos o traslados industriales específicos."
    ],
    example: "Traslado de maquinaria industrial desde Callao a Ate o Huachipa.",
    advantages: [
      "Flexibilidad en tipo de carga.",
      "Experiencia en transporte de maquinaria pesada.",
      "Seguimiento digital y documentación en línea."
    ],
    gallery: [cargaSuelta],
    clients: [],
    faqs: [
      {
        question: "¿Qué tipo de carga pueden transportar?",
        answer: "Transportamos todo tipo de carga suelta: maquinaria industrial, equipos pesados, pallets, materiales de construcción y mercancía de gran volumen que no requiere contenedor."
      },
      {
        question: "¿Tienen cobertura a nivel nacional?",
        answer: "Sí, ofrecemos servicio de transporte de carga suelta tanto a nivel local (Lima y Callao) como nacional a todas las principales ciudades del Perú."
      },
      {
        question: "¿Cómo aseguran la carga durante el transporte?",
        answer: "Utilizamos equipos especializados de estiba y sujeción adaptados a cada tipo de carga. Además, contamos con seguro de transporte y personal capacitado en manipulación de carga pesada."
      }
    ]
  },
  {
    id: "contenedores",
    title: "Transporte de Contenedores",
    description: "Transporte de contenedores de 20 y 40 pies con seguimiento en tiempo real y cobertura nacional.",
    image: contenedores,
    fullDescription: "Transporte de contenedores de 20 y 40 pies con seguimiento en tiempo real y cobertura nacional.",
    particularities: [
      "Contenedores de 20 y 40 pies",
      "Seguimiento GPS en tiempo real",
      "Servicio intermodal (puerto-almacén)",
      "Documentación y gestión aduanera"
    ],
    example: "Transporte de contenedor desde el puerto del Callao hasta almacén en Lima.",
    advantages: [
      "Servicio rápido y confiable",
      "Cobertura nacional completa",
      "Seguimiento en tiempo real"
    ],
    gallery: [contenedores],
    clients: [],
    faqs: []
  },
  {
    id: "refrigerados",
    title: "Transporte de Refrigerados",
    description: "Soluciones de cadena de frío para productos perecederos con control de temperatura constante.",
    image: refrigerados,
    fullDescription: "Soluciones de cadena de frío para productos perecederos con control de temperatura constante.",
    particularities: [
      "Control de temperatura de -25°C a +25°C",
      "Monitoreo constante durante el trayecto",
      "Certificación en cadena de frío",
      "Ideal para alimentos y productos farmacéuticos"
    ],
    example: "Transporte de productos perecederos con temperatura controlada.",
    advantages: [
      "Equipos modernos de refrigeración",
      "Monitoreo constante de temperatura",
      "Certificaciones de calidad"
    ],
    gallery: [refrigerados],
    clients: [],
    faqs: []
  },
  {
    id: "isotanques",
    title: "Transporte de Isotanques",
    description: "Servicio especializado para el traslado de isotanques con productos químicos o líquidos industriales.",
    image: isotanques,
    fullDescription: "Servicio especializado para el traslado de isotanques con productos químicos o líquidos industriales, bajo cumplimiento de normas de seguridad y trazabilidad.",
    particularities: [
      "Conductores certificados para transporte de sustancias peligrosas.",
      "Control de temperatura, presión y seguridad de válvulas.",
      "Cumplimiento estricto de normas IQBF e IMO.",
      "Supervisión técnica durante todo el proceso."
    ],
    example: "Transporte de isotanque IMO desde Neptunia a planta del cliente Quimtia.",
    advantages: [
      "Alta especialización técnica.",
      "Protocolos de seguridad validados.",
      "Seguro de carga y monitoreo constante."
    ],
    gallery: [isotanques],
    clients: ["Quimtia", "Neptunia"],
    faqs: [
      {
        question: "¿Qué certificaciones tienen para transporte de isotanques?",
        answer: "Contamos con certificaciones IMO e IQBF vigentes, y nuestros conductores están certificados para el transporte de sustancias peligrosas."
      },
      {
        question: "¿Cómo garantizan la seguridad durante el transporte?",
        answer: "Realizamos control continuo de temperatura, presión y seguridad de válvulas. Además, contamos con supervisión técnica durante todo el proceso y protocolos de seguridad validados."
      }
    ]
  },
  {
    id: "mercancia-peligrosa",
    title: "Transporte de Mercancía Peligrosa: IMO e IQBF",
    description: "Manejo certificado de materiales peligrosos cumpliendo con normas IMO e IQBF para transporte seguro.",
    image: peligrosa,
    fullDescription: "Manejo certificado de materiales peligrosos cumpliendo con normas IMO e IQBF para transporte seguro.",
    particularities: [
      "Certificación IMO e IQBF vigente",
      "Personal capacitado y certificado",
      "Vehículos con equipamiento especial",
      "Seguro de carga especializado"
    ],
    example: "Transporte de mercancía peligrosa con certificación IMO.",
    advantages: [
      "Personal altamente capacitado",
      "Cumplimiento normativo estricto",
      "Equipos especializados"
    ],
    gallery: [peligrosa],
    clients: [],
    faqs: []
  },
  {
    id: "montacarga",
    title: "Servicio de Montacarga",
    description: "Equipos de montacarga profesionales para carga y descarga eficiente en almacenes y puertos.",
    image: montacarga,
    fullDescription: "Equipos de montacarga profesionales para carga y descarga eficiente en almacenes y puertos.",
    particularities: [
      "Montacargas de 3 a 10 toneladas",
      "Operadores certificados",
      "Servicio en almacenes y puertos",
      "Disponibilidad 24/7"
    ],
    example: "Servicio de carga y descarga en almacén industrial.",
    advantages: [
      "Equipos modernos",
      "Operadores certificados",
      "Servicio 24/7"
    ],
    gallery: [montacarga],
    clients: [],
    faqs: []
  }
];

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};
