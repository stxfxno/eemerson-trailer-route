import cargaSuelta from "@/assets/carga-suelta.webp";
import contenedores from "@/assets/contenedores.webp";
import refrigerados from "@/assets/refrigerados.webp";
import isotanques from "@/assets/isotanques.webp";
import peligrosa from "@/assets/peligrosa.webp";
import montacarga from "@/assets/montacarga.webp";

export interface GalleryItem {
  url: string;
  title: string;
  description: string;
}

export interface SmartLogistic {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
  heroTitle?: string;
  heroSubtitle?: string;
  fullDescription: string;
  smartLogistics?: SmartLogistic[];
  particularities: string[];
  example: string;
  gallery?: GalleryItem[];
  clients?: string[];
  faqs?: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    id: "carga-suelta",
    title: "Transporte de Carga Suelta",
    description: "Movilizamos bultos, pallets, equipos y estructuras fuera de contenedor entre puertos, almacenes y plantas industriales en Callao, Lima y rutas seleccionadas.",
    image: cargaSuelta,
    heroTitle: "TRANSPORTE DE CARGA SUELTA",
    heroSubtitle: "Movemos tus bultos, pallets y equipos con puntualidad y cuidado operativo. Sin complicaciones.",
    fullDescription: `El servicio de Transporte de Carga Suelta de EEmerson SAC está pensado para empresas que necesitan mover bultos, pallets, equipos o estructuras que no viajan dentro de un contenedor, pero que igual requieren puntualidad, cuidado y orden operativo.

Trabajamos con flota de carga pesada habilitada para operar en la zona portuaria del Callao, Lima Metropolitana y principales corredores hacia plantas y almacenes. Coordinamos retiros y entregas en puertos, almacenes extraportuarios y plantas industriales, ajustándonos a las ventanas horarias de cada cliente para evitar tiempos muertos y recargos innecesarios.

Además del camión, contamos con personal auxiliar para apoyar en la carga, descarga y sujeción correcta de la carga suelta, lo que permite operaciones más seguras y eficientes cuando el cliente no dispone de personal propio o cuando la maniobra lo requiere.`,
    smartLogistics: [
      {
        title: "Flota Especializada",
        description: "Operamos con flota de carga pesada habilitada para operar en la zona portuaria del Callao, Lima Metropolitana y principales corredores hacia plantas y almacenes."
      },
      {
        title: "Coordinación Total",
        description: "Coordinamos retiros y entregas en puertos, almacenes extraportuarios y plantas industriales, ajustándonos a las ventanas horarias de cada cliente para evitar tiempos muertos y recargos innecesarios."
      },
      {
        title: "Personal Auxiliar",
        description: "Contamos con personal auxiliar para apoyar en la carga, descarga y sujeción correcta de la carga suelta, lo que permite operaciones más seguras y eficientes cuando el cliente no lo dispone."
      }
    ],
    particularities: [
      "Asignar la unidad adecuada según peso, volumen y tipo de carga.",
      "Coordinar citas y accesos con puerto, almacén o planta.",
      "Supervisar la estiba y sujeción de la carga, con apoyo de personal auxiliar cuando aplica.",
      "Mantener una comunicación clara con el cliente durante el recorrido.",
      "Cerrar el servicio con la documentación correspondiente (guías, GRE, etc.)."
    ],
    example: "El objetivo es que tu carga llegue cuando tiene que llegar, como tiene que llegar, sin que tengas que estar persiguiendo a nadie por teléfono.",
    gallery: [
      {
        url: cargaSuelta,
        title: "Carga Suelta Industrial",
        description: "Transporte especializado de maquinaria y equipos de gran volumen."
      },
      {
        url: cargaSuelta,
        title: "Carga Suelta Industriala",
        description: "Transporte especializado de maquinaria y equipos de gran volumen."
      },
      {
        url: cargaSuelta,
        title: "Carga Suelta Industriael",
        description: "Transporte especializado de maquinaria y equipos de gran volumen."
      },
      {
        url: cargaSuelta,
        title: "Carga Suelta Industriafl",
        description: "Transporte especializado de maquinaria y equipos de gran volumen."
      },
      {
        url: cargaSuelta,
        title: "Carga Suelta Industrialh",
        description: "Transporte especializado de maquinaria y equipos de gran volumen."
      }
    ],
    clients: [],
    faqs: [
      {
        question: "¿Qué tipo de carga suelta pueden transportar?",
        answer: "Movilizamos principalmente: carga paletizada, big bags, tambores, cajas, sacos y bultos, equipos y estructuras dentro de los límites de peso y dimensión permitidos. En cada caso revisamos previamente tipo de carga, peso, dimensiones y punto de carga/descarga para confirmar la viabilidad del servicio."
      },
      {
        question: "¿Qué zonas de cobertura manejan para carga suelta?",
        answer: "Operamos principalmente en: Callao (puertos, almacenes extraportuarios y depósitos), Lima Metropolitana (zonas industriales, plantas y almacenes), y rutas hacia determinadas provincias, según proyecto y frecuencia. Si tu operación es recurrente o de mayor alcance, evaluamos contigo el corredor logístico completo y definimos esquema de trabajo."
      },
      {
        question: "¿Cómo se cotiza el servicio de carga suelta?",
        answer: "La tarifa se define en función de: origen y destino, tipo de carga y peso aproximado, tipo de unidad requerida, frecuencia y volumen mensual (viajes sueltos vs. operación recurrente), y necesidad de personal auxiliar de carga/descarga si aplica. Podemos trabajar con tarifas por ruta y, si corresponde, condiciones adicionales por espera, maniobras especiales o equipos de apoyo (como montacarga)."
      },
      {
        question: "¿Pueden enviar personal para apoyar en la carga y descarga?",
        answer: "Sí. Contamos con personal auxiliar que puede apoyar en: carga y descarga de bultos y pallets, acomodo de la carga dentro de la unidad, y sujeción correcta (fajas, cadenas, esquineros, etc.). Este servicio se coordina y cotiza previamente, según el tipo de operación y el esfuerzo requerido en planta o almacén."
      },
      {
        question: "¿Cómo garantizan que la carga viaje segura?",
        answer: "Antes de iniciar el viaje: verificamos la estiba y sujeción de la carga, apoyándonos en personal auxiliar cuando sea necesario; revisamos el estado de la unidad y la distribución de peso; el conductor recibe instrucciones específicas de la operación. Durante el traslado, el conductor mantiene comunicación con operaciones, y cualquier incidencia se reporta para coordinar acciones con el cliente."
      },
      {
        question: "¿Pueden coordinar directamente con el puerto, almacén o planta para las citas?",
        answer: "Sí. Nuestro equipo de operaciones puede: coordinar citas de retiro y entrega con puertos, almacenes y plantas; ajustar horarios de llegada para alinearse con las ventanas de atención del cliente; informar de colas, tiempos de espera y eventual reprogramación si fuese necesaria. Esto reduce la carga de coordinación para tu equipo y ayuda a minimizar esperas y recargos."
      },
      {
        question: "¿Con cuánta anticipación debo programar un servicio?",
        answer: "Depende del tipo de operación, pero como referencia: para servicios puntuales dentro de Lima y Callao, lo ideal es programar con al menos 24 horas de anticipación. Para operaciones recurrentes o con varios puntos de carga/descarga, recomendamos trabajar con programaciones semanales o por proyecto. En caso de urgencias, evaluamos la disponibilidad de flota y te confirmamos si podemos atender el servicio."
      },
      {
        question: "¿Pueden manejar operaciones recurrentes o de alto volumen de carga suelta?",
        answer: "Sí. Podemos diseñar contigo un esquema de servicio que considere: volumen mensual estimado, rutas principales, horarios críticos de carga y descarga, y requerimientos de documentación y reporte. De esta manera, pasamos de 'servicios sueltos' a una operación estructurada, con indicadores de cumplimiento y seguimiento más claro."
      },
      {
        question: "¿Qué pasa si se presenta un daño o incidencia con la carga?",
        answer: "En caso de incidencia: el conductor informa inmediatamente a operaciones, se documenta la situación (fotos, reporte básico), y se comunica al cliente para definir acciones (inspección, devolución parcial, etc.). Trabajamos con seguros y procedimientos internos para la gestión de incidentes, siempre alineados con la documentación y acuerdos establecidos con el cliente."
      }
    ]
  },
  {
    id: "contenedores",
    title: "Transporte de Contenedores",
    description: "Movemos contenedores de 20' y 40' en operaciones de importación, exportación, devoluciones de vacíos y traslados internos entre puertos, depósitos y plantas.",
    image: contenedores,
    heroTitle: "TRANSPORTE DE CONTENEDORES",
    heroSubtitle: "Movemos tus contenedores cumpliendo ventanas horarias, con seguimiento en tiempo real. Sin demoras.",
    fullDescription: `El Transporte de Contenedores de EEmerson SAC está diseñado para empresas que necesitan mover contenedores de 20' y 40' en operaciones de importación, exportación, devoluciones de vacíos y traslados internos entre puertos, depósitos, almacenes y plantas industriales.

Operamos principalmente en la zona portuaria del Callao y en Lima Metropolitana, coordinando con terminales, depósitos extraportuarios y clientes finales para cumplir ventanas horarias, minimizar tiempos de espera y evitar recargos por demurrage o detención.`,
    smartLogistics: [
      {
        title: "Operación Estratégica",
        description: "Operamos principalmente en la zona portuaria del Callao y Lima Metropolitana, coordinando con terminales, depósitos extraportuarios y clientes finales para operaciones de importación, exportación y traslados internos."
      },
      {
        title: "Cumplimiento de Ventanas Horarias",
        description: "Coordinamos con precisión para cumplir ventanas horarias, minimizar tiempos de espera y evitar recargos por demurrage o detención, optimizando tu cadena logística."
      },
      {
        title: "Seguimiento en Tiempo Real",
        description: "Compartimos un geoenlace para que puedas revisar en todo momento la ubicación del camión mientras esté en servicio, con comunicación constante y reportes periódicos según tu operación."
      }
    ],
    particularities: [
      "Contenedores de 20' y 40' (estándar, HC, refrigerados)",
      "Seguimiento GPS en tiempo real con geoenlace compartido",
      "Coordinación de citas con terminales y depósitos",
      "Cumplimiento de ventanas horarias para evitar recargos",
      "Documentación completa y gestión de incidencias"
    ],
    example: "Transporte de contenedor desde el puerto del Callao hasta almacén en Lima con seguimiento en tiempo real.",
    gallery: [
      {
        url: contenedores,
        title: "Flota de Portacontenedores",
        description: "Unidades modernas equipadas para el traslado seguro de contenedores."
      }
    ],
    clients: [],
    faqs: [
      {
        question: "¿Qué tipos de contenedores pueden transportar?",
        answer: "Principalmente: contenedores 20' / 40' - 40 HC / Refrigerado, contenedores llenos de importación o exportación, y contenedores vacíos para devolución o reposicionamiento. En el caso de equipos especiales (open top, flat rack, etc.), evaluamos la operación y la disponibilidad de equipos y rutas antes de confirmar el servicio."
      },
      {
        question: "¿En qué zonas operan para transporte de contenedores?",
        answer: "Nuestra operación se concentra en: Callao (terminales portuarios y depósitos extraportuarios), Lima Metropolitana (plantas industriales, parques industriales y almacenes logísticos), y rutas hacia determinadas provincias, según el proyecto y la frecuencia. Si tu operación contempla otros destinos, podemos evaluar la ruta y la viabilidad de atenderla de forma sostenida."
      },
      {
        question: "¿Cómo se cotiza un servicio de transporte de contenedores?",
        answer: "La tarifa se define según: origen y destino (terminal, depósito, planta, almacén, etc.), tipo de contenedor (20' / 40') y tipo de mercancía (IMO - IQBF), frecuencia y volumen de servicios (viajes puntuales vs. operación continua), y condiciones y servicios adicionales. Trabajamos con tablas de tarifas por ruta y, cuando el volumen lo justifica, con acuerdos específicos por cliente."
      },
      {
        question: "¿Cómo ayudan a reducir tiempos de espera y recargos por demurrage/detención?",
        answer: "Programamos los viajes teniendo en cuenta fechas límite de libre almacenaje y detención, coordinamos horarios y citas para evitar llegar fuera de la ventana de atención, y comunicamos de forma proactiva colas o incidencias que puedan afectar los tiempos. No podemos controlar todas las variables del puerto, pero sí podemos gestionar la planificación y la comunicación para que tomes decisiones a tiempo."
      },
      {
        question: "¿Cómo puedo saber en qué estado está mi contenedor durante el servicio?",
        answer: "Durante la operación, nuestro equipo: comparte un geoenlace, desde el cual puedes revisar en todo momento la ubicación del camión mientras esté en servicio; mantiene comunicación con tu área de operaciones o logística por los canales acordados (correo, WhatsApp, teléfono); y puede generar reportes periódicos, si tu operación requiere visibilidad consolidada (diaria/semanal). Lo importante es que no tengas que 'adivinar' dónde está el contenedor."
      },
      {
        question: "¿Pueden manejar operaciones recurrentes o proyectos de alto volumen?",
        answer: "Sí. Podemos estructurar juntos una operación que considere: volumen mensual estimado de contenedores, rutas y destinos principales, ventanas horarias críticas en puerto y planta, y KPIs básicos (puntualidad, tiempos de tránsito, etc.). Esto permite pasar de servicios aislados a una relación de proveedor estratégico, con más orden y previsibilidad."
      },
      {
        question: "¿Qué pasa si hay un imprevisto (huelga, cierre de terminal, congestión fuerte, etc.)?",
        answer: "En situaciones no controlables (cierres, huelgas, bloqueos, congestión extrema): informamos al cliente apenas se detecta el problema, proponemos alternativas (reprogramación, cambio de horario, priorización de ciertas cargas), y registramos la incidencia para efectos de trazabilidad y análisis posterior. Nuestro enfoque es ser transparentes y rápidos al comunicar, para que puedas ajustar tu operación y minimizar impacto."
      }
    ]
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
    gallery: [
      {
        url: refrigerados,
        title: "Unidades Refrigeradas",
        description: "Control preciso de temperatura para garantizar la cadena de frío."
      }
    ],
    clients: [],
    faqs: []
  },
  {
    id: "isotanques",
    title: "Transporte de Isotanques",
    description: "Traslado seguro de líquidos a granel en isotanques, con seguimiento en tiempo real y gestión completa de riesgos operativos.",
    image: isotanques,
    heroTitle: "TRANSPORTE DE ISOTANQUES",
    heroSubtitle: "Movemos tus líquidos a granel con seguridad, trazabilidad y control total. Sin improvisaciones.",
    fullDescription: `El servicio de Transporte de Isotanques de EEmerson SAC está pensado para empresas que manejan líquidos a granel —químicos, materias primas, productos intermedios o residuos líquidos— y necesitan un operador que entienda las particularidades del isotanque: peso, centro de gravedad, riesgos del producto y exigencias normativas.

Trabajamos habitualmente con isotanques propiedad del cliente, de operadores de tanque o de navieras, tanto en condición lleno como vacío, en operaciones de retiro y entrega en puertos y almacenes extraportuarios, traslado a plantas industriales y parques industriales, y movimientos internos entre almacenes, plantas o estaciones de lavado.

Durante la operación, realizamos seguimiento del servicio y podemos compartir un geoenlace para que tu equipo pueda ver la ubicación del camión en tiempo real mientras el isotanque está en tránsito.`,
    smartLogistics: [
      {
        title: "Gestión de Isotanques",
        description: "Trabajamos con isotanques del cliente, operadores de tanque o navieras, en condición lleno o vacío, gestionando retiros en puertos, traslados a plantas, devoluciones y movimientos internos con control total."
      },
      {
        title: "Revisión Operativa Completa",
        description: "Revisamos tipo de producto y ficha de seguridad, peso bruto y configuración de unidad, rutas permitidas y restricciones, ventanas horarias de carga/descarga para evitar tiempos muertos y recargos."
      },
      {
        title: "Seguimiento en Tiempo Real",
        description: "Compartimos un geoenlace para que puedas ver la ubicación del camión en tiempo real mientras el isotanque está en tránsito, con comunicación constante y trazabilidad completa del servicio."
      }
    ],
    particularities: [
      "Conductores certificados para transporte de sustancias peligrosas.",
      "Control de temperatura, presión y seguridad de válvulas.",
      "Cumplimiento estricto de normas IQBF e IMO.",
      "Supervisión técnica durante todo el proceso."
    ],
    example: "Transporte de isotanque IMO desde Neptunia a planta del cliente Quimtia.",
    gallery: [
      {
        url: isotanques,
        title: "Operación de Isotanques",
        description: "Manejo seguro y certificado de isotanques para industria química."
      }
    ],
    clients: ["Quimtia", "Neptunia"],
    faqs: [
      {
        question: "¿Qué tipo de productos pueden transportar en isotanques?",
        answer: "Trabajamos con isotanques que transportan materias primas líquidas para la industria química, productos para tratamiento de agua (coagulantes, floculantes, soluciones líquidas), intermedios y aditivos para procesos industriales, y en algunos casos, productos clasificados como mercancía peligrosa (IMO / MATPEL / IQBF). En cada operación revisamos la ficha de datos de seguridad (FDS) y las características del producto para confirmar si podemos transportarlo con la configuración adecuada."
      },
      {
        question: "¿Los isotanques son de EEmerson o del cliente?",
        answer: "Normalmente trabajamos con isotanques propiedad del cliente o isotanques administrados por operadores de tanque o navieras con las que el cliente ya tiene contrato. Nuestro rol es encargarnos del traslado terrestre seguro y ordenado del isotanque entre puerto, almacén, planta y otros puntos de la cadena."
      },
      {
        question: "¿Qué información necesitan para cotizar un servicio de isotanque?",
        answer: "Para darte una cotización clara y realista, necesitamos: origen y destino (puerto, almacén, planta, estación de lavado, etc.), condición del isotanque (lleno o vacío), tipo de producto (peligroso / no peligroso) y peso bruto aproximado, frecuencia estimada (servicios puntuales vs. operación recurrente), y requerimientos especiales (accesos complicados, horarios restringidos, etc.)."
      },
      {
        question: "¿Cuentan con habilitaciones para transportar productos peligrosos en isotanques?",
        answer: "Sí. Cuando el producto es mercancía peligrosa, aplican los mismos criterios que en nuestro servicio de MATPEL: unidades con habilitación para transporte de materiales peligrosos según la normativa vigente, y conductores con capacitaciones específicas en transporte de mercancías peligrosas, manejo defensivo y protocolos de emergencia."
      },
      {
        question: "¿Cómo gestionan la seguridad en el transporte de isotanques?",
        answer: "Antes de cada servicio: revisamos la unidad y el semirremolque (estado mecánico, neumáticos, luces, etc.), verificamos la correcta sujeción del isotanque en el bastidor, confirmamos la rotulación y señalización necesaria si el producto es peligroso, y entregamos al conductor instrucciones claras sobre ruta, puntos críticos y protocolos de reporte. Durante el traslado, se mantiene comunicación constante con operaciones."
      },
      {
        question: "¿Cómo puedo saber en qué estado se encuentra mi isotanque durante el servicio?",
        answer: "Durante la operación: registramos los hitos principales del servicio (retiro, llegada a planta, salida, retorno, etc.), mantenemos comunicación con tu equipo por los canales acordados (correo, WhatsApp, teléfono), y podemos compartir un geoenlace para que sigas en tiempo real la ubicación del camión mientras el isotanque está en tránsito."
      },
      {
        question: "¿Pueden coordinar con estaciones de lavado o mantenimiento de isotanques?",
        answer: "Sí. Si tu operación incluye traslados a estaciones de lavado de isotanques o movimientos entre planta, almacén y puntos de limpieza/mantenimiento, podemos incluir esos puntos en la programación y coordinar la secuencia de movimientos (planta → lavado → almacén → puerto, por ejemplo)."
      },
      {
        question: "¿Pueden manejar operaciones recurrentes o proyectos de alto volumen con isotanques?",
        answer: "Sí. En esos casos solemos: definir un esquema estable de unidades y conductores para la operación, establecer rutas, horarios y puntos de carga/descarga fijos, acordar procedimientos de trabajo y de comunicación específicos, y trabajar con indicadores (cumplimiento de tiempos, incidentes, etc.) si el cliente lo requiere."
      }
    ]
  },
  {
    id: "mercancia-peligrosa",
    title: "Transporte de Mercancía Peligrosa: IMO e IQBF",
    description: "Transporte certificado de productos químicos y materiales peligrosos con gestión total de riesgos, normativa y trazabilidad.",
    image: peligrosa,
    heroTitle: "TRANSPORTE DE MERCANCÍA PELIGROSA",
    heroSubtitle: "Movemos tus productos químicos y MATPEL con certificación completa y gestión de riesgos. Sin atajos.",
    fullDescription: `El servicio de Transporte de Mercancía Peligrosa (IMO e IQBF) de EEmerson SAC está enfocado en empresas que manejan productos químicos, materiales peligrosos e insumos químicos fiscalizados, y que necesitan un operador que entienda que aquí no solo se trata de "mover un camión", sino de gestionar riesgo, normativa y trazabilidad.

Trabajamos con unidades habilitadas para MATPEL y conductores capacitados, siguiendo los requisitos del MTC y de las autoridades competentes, considerando: tipo de sustancia (clasificación IMO / IQBF) y su ficha de seguridad, habilitaciones necesarias de la unidad y del conductor, rutas permitidas y restricciones horarias/zona, y condiciones de carga, descarga, segregación y señalización.

Operamos principalmente en la zona portuaria del Callao y en Lima Metropolitana, gestionando retiros en puertos y almacenes, traslados a plantas, devoluciones y movimientos internos.`,
    smartLogistics: [
      {
        title: "Unidades y Personal Habilitado",
        description: "Trabajamos con unidades habilitadas para MATPEL y conductores certificados con capacitaciones específicas en transporte de mercancías peligrosas, manejo defensivo y procedimientos básicos de emergencia."
      },
      {
        title: "Planificación de Operaciones",
        description: "Planificamos cada operación considerando tipo de sustancia y ficha de seguridad, habilitaciones de unidad y conductor, rutas permitidas y restricciones, y condiciones de carga, descarga, segregación y señalización."
      },
      {
        title: "Gestión de Riesgos y Cumplimiento",
        description: "Realizamos revisión previa de unidad, verificamos rotulación y paneles de seguridad, confirmamos correcta sujeción de carga, y entregamos instrucciones claras sobre ruta, puntos críticos y protocolos de reporte."
      }
    ],
    particularities: [
      "Certificación IMO e IQBF vigente",
      "Personal capacitado y certificado",
      "Vehículos con equipamiento especial",
      "Seguro de carga especializado"
    ],
    example: "Transporte de mercancía peligrosa con certificación IMO.",
    gallery: [
      {
        url: peligrosa,
        title: "Materiales Peligrosos",
        description: "Cumplimiento estricto de normativa IMO e IQBF."
      }
    ],
    clients: [],
    faqs: [
      {
        question: "¿Qué tipo de mercancía peligrosa pueden transportar?",
        answer: "Trabajamos con empresas que manejan ácidos y soluciones corrosivas, disolventes y productos inflamables, coagulantes y floculantes para tratamiento de agua, resinas y aditivos químicos, así como insumos químicos fiscalizados (IQBF) usados en procesos industriales. Si tu carga es un producto químico con clasificación IMO o un IQBF autorizado, revisamos la ficha de seguridad, la cantidad, el origen y destino, y confirmamos si es compatible con nuestras habilitaciones."
      },
      {
        question: "¿Qué requisitos debe cumplir mi carga para que puedan transportarla?",
        answer: "Necesitamos que el cliente proporcione: ficha de datos de seguridad (FDS) actualizada del producto, clasificación de la mercancía (clase/ONU, si aplica), permisos y autorizaciones vigentes para IQBF cuando corresponda, e instrucciones especiales de manejo, segregación o restricciones. Con esta información validamos la compatibilidad con nuestras habilitaciones y definimos la configuración de la operación."
      },
      {
        question: "¿Con qué habilitaciones y capacidades cuentan para este tipo de transporte?",
        answer: "Trabajamos con unidades con habilitación para transporte de materiales y residuos peligrosos (MATPEL) según aplique, y conductores que reciben capacitaciones específicas en transporte de mercancías peligrosas, manejo defensivo y procedimientos básicos de emergencia. Siempre asignamos la unidad y el personal adecuados al tipo de servicio y al producto a transportar."
      },
      {
        question: "¿Cómo gestionan la seguridad y el riesgo durante el traslado?",
        answer: "Antes y durante el servicio: realizamos una revisión previa de la unidad (neumáticos, luces, equipos de seguridad, señalización), verificamos rotulación y paneles de seguridad según el producto, confirmamos la correcta sujeción y acondicionamiento de la carga, y entregamos instrucciones claras al conductor sobre ruta, puntos críticos y protocolos de reporte. El foco es minimizar la probabilidad de incidente y estar preparados para responder si ocurre algo."
      },
      {
        question: "¿Cómo se coordina una operación con mercancía IMO o IQBF?",
        answer: "Normalmente seguimos estos pasos: recepción de la información técnica del producto y la operación (FDS, clasificaciones, volúmenes, origen/destino), validación de compatibilidad con nuestras habilitaciones y capacidades, definición de ruta, horarios y puntos de carga/descarga, programación de la unidad y conductor, y ejecución del servicio con seguimiento y reporte de hitos. Recomendamos coordinar este tipo de operaciones con más anticipación que un transporte estándar."
      },
      {
        question: "¿Pueden operar desde y hacia puertos y almacenes que manejan químicos e IQBF?",
        answer: "Sí. Operamos con retiros y entregas en terminales portuarios y almacenes extraportuarios que manejan mercancía peligrosa, y traslados hacia plantas industriales, parques industriales y almacenes especializados. Nos adaptamos a los protocolos de acceso y seguridad de cada cliente, puerto o almacén (EPP, inducciones, registros de ingreso, etc.)."
      },
      {
        question: "¿Cómo puedo saber en qué estado está mi mercancía peligrosa durante el servicio?",
        answer: "Durante la operación, nuestro equipo: registra los hitos clave del servicio (retiro, llegada a planta, salida, retorno, etc.), mantiene comunicación con tu área de logística u operaciones por los canales acordados (correo, teléfono, WhatsApp), y comparte un geoenlace desde el cual puedes revisar en todo momento la ubicación del camión mientras está en servicio."
      },
      {
        question: "¿Qué ocurre si se presenta un incidente o emergencia en ruta?",
        answer: "En caso de incidente: el conductor aplica los protocolos básicos de seguridad (detención segura, señalización, protección personal), informa de inmediato al área de operaciones, se notifica al cliente y, según la gravedad, a las autoridades competentes, siguiendo las indicaciones de la FDS y la normativa aplicable. Nuestro enfoque es actuar de forma rápida, coordinada y transparente."
      },
      {
        question: "¿Pueden manejar operaciones recurrentes o proyectos de alto volumen de mercancía peligrosa?",
        answer: "Sí. En estos casos solemos: definir un esquema estable de unidades y conductores dedicados o semi-dedicados, establecer rutas, horarios y puntos de operación claros, acordar procedimientos específicos de carga, descarga, documentación y reporte, y trabajar con indicadores de desempeño (cumplimiento de tiempos, incidentes, etc.)."
      }
    ]
  },
  {
    id: "montacarga",
    title: "Servicio de Montacarga",
    description: "Carga y descarga ágil con operador capacitado incluido, sin depender de terceros ni cuadrillas improvisadas.",
    image: montacarga,
    heroTitle: "SERVICIO DE MONTACARGA",
    heroSubtitle: "Carga y descarga ágil, segura y ordenada con operador capacitado incluido. Sin esperas.",
    fullDescription: `El Servicio de Montacarga de EEmerson SAC está pensado para empresas que necesitan algo más que "solo el camión": requieren carga y descarga ágil, segura y ordenada en planta, almacén o punto de entrega, sin depender de terceros ni de cuadrillas improvisadas.

Ofrecemos montacarga como servicio complementario al transporte y, cuando la operación lo requiere, también como servicio independiente, para apoyar en carga y descarga de pallets, big bags, tambores, cajas y bultos, acomodo y reorganización de mercadería dentro de almacenes o patios, y maniobras puntuales en proyectos especiales o campañas.

El servicio incluye operador capacitado, que conoce el entorno industrial y las normas básicas de seguridad, y se coordina de forma conjunta con el camión para reducir tiempos de espera, evitar recargos y minimizar esfuerzo físico del personal del cliente.`,
    smartLogistics: [
      {
        title: "Servicio Flexible",
        description: "Ofrecemos montacarga como complemento al transporte coordinado con el horario del camión, o como servicio independiente para apoyar tareas internas en almacén o planta, según disponibilidad y planificación."
      },
      {
        title: "Operador Incluido",
        description: "El servicio se ofrece con operador capacitado que conoce el manejo seguro del equipo, está familiarizado con entornos industriales y logísticos, y sigue las indicaciones del responsable de almacén/planta."
      },
      {
        title: "Optimización de Tiempos",
        description: "Coordinamos para que el camión y el montacarga se encuentren en el horario acordado con tu planta o almacén, ajustando ventanas de atención para reducir tiempos de espera y evitar recargos innecesarios."
      }
    ],
    particularities: [
      "Montacargas de 3 a 10 toneladas",
      "Operadores certificados",
      "Servicio en almacenes y puertos",
      "Disponibilidad 24/7"
    ],
    example: "Servicio de carga y descarga en almacén industrial.",
    gallery: [
      {
        url: montacarga,
        title: "Servicio de Montacarga",
        description: "Equipos versátiles para maniobras de carga y descarga."
      }
    ],
    clients: [],
    faqs: [
      {
        question: "¿En qué situaciones recomiendan contratar el servicio de montacarga?",
        answer: "Es especialmente útil cuando: el cliente no cuenta con montacarga propio o está ocupado, se trabaja con carga paletizada, big bags o tambores pesados, hay que mover mercadería en patios o zonas donde el acceso es complejo para personal a pie, o se busca acortar el tiempo de carga/descarga del camión y evitar recargos por espera. En resumen, cuando quieras que la operación sea más rápida, segura y menos dependiente de mano de obra manual."
      },
      {
        question: "¿El montacarga se contrata solo junto con el camión o también por separado?",
        answer: "Las dos opciones son posibles: como complemento al transporte coordinado con el horario del camión, o como servicio independiente para apoyar tareas internas en almacén o planta, según disponibilidad y planificación. En ambos casos, el alcance y la duración se acuerdan previamente para que tengas claro qué incluye el servicio."
      },
      {
        question: "¿El operador está incluido en el servicio?",
        answer: "Sí. El servicio de montacarga se ofrece con operador capacitado, que conoce el manejo seguro del equipo, está familiarizado con entornos industriales y logísticos, y sigue las indicaciones del responsable de almacén/planta y respeta las normas de seguridad del cliente. Tú no tienes que preocuparte por conseguir personal adicional para manejar el equipo."
      },
      {
        question: "¿Cómo se cotiza el servicio de montacarga?",
        answer: "Normalmente se cotiza según modalidad (por servicio puntual como carga/descarga de un camión, o por bloques de horas o jornadas si el trabajo es más prolongado), ubicación (Callao, Lima, planta específica), y complejidad de la maniobra (tipo de carga, accesos, altura de estiba, etc.). En la cotización dejamos claro qué incluye: tiempo de uso del montacarga, operador y, si aplica, coordinación conjunta con el camión."
      },
      {
        question: "¿Qué tipo de carga puede manejar el montacarga?",
        answer: "Principalmente: pallets con mercadería diversa, big bags y sacos paletizados, tambores y contenedores sobre pallets, y cajas o bultos que puedan ser manipulados con uñas de montacarga. Siempre respetando los límites de capacidad del equipo y las condiciones de seguridad del lugar."
      },
      {
        question: "¿Qué necesito tener en mi planta o almacén para usar el montacarga?",
        answer: "De forma general, se recomienda: suelo firme y en buenas condiciones (sin hundimientos importantes), altura y espacio suficientes para la maniobra del montacarga, zonas de carga/descarga libres de obstáculos en la hora programada, e indicación clara de rutas internas, restricciones y normas de seguridad propias de la planta. Si tu instalación tiene accesos particulares o limitaciones, lo ideal es comentarlo al momento de solicitar el servicio."
      },
      {
        question: "¿En qué zonas ofrecen el servicio de montacarga?",
        answer: "Principalmente en: zona portuaria del Callao y almacenes extraportuarios, y Lima Metropolitana (plantas, almacenes y parques industriales). Si necesitas el servicio en otra ubicación, podemos evaluar la viabilidad según la distancia, el tipo de trabajo y la duración."
      },
      {
        question: "¿Pueden coordinar horarios para que el montacarga y el camión lleguen al mismo tiempo?",
        answer: "Sí. La idea es justamente optimizar la operación: coordinamos para que el camión y el montacarga se encuentren en el horario acordado con tu planta o almacén, ajustamos ventanas de atención para reducir tiempos de espera y evitar recargos innecesarios. Buscamos que tú solo tengas que validar el horario y el punto de contacto; del resto nos encargamos nosotros."
      },
      {
        question: "¿Pueden apoyar en operaciones recurrentes (no solo servicios sueltos)?",
        answer: "Sí. Si tienes un flujo continuo de carga/descarga, podemos: definir días y horarios fijos de atención, establecer un esquema de tarifas por frecuencia o por volumen, y coordinar con tus responsables de almacén para mantener un estándar de trabajo. La idea es que el montacarga se convierta en una pieza estable de tu operación logística, no solo en un recurso de emergencia."
      }
    ]
  }
];

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};
