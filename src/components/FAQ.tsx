import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import faqVideo from "@/assets/track_preguntas_frecuentes.mp4";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué servicios de transporte ofrece Eemerson SAC?",
      answer: "Ofrecemos servicios completos de transporte de carga por carretera, incluyendo carga completa (FTL), carga parcial (LTL), transporte local, y servicios especializados de carga sobredimensionada."
    },
    {
      question: "¿Qué puede esperar cuando contrata los servicios de Eemerson SAC?",
      answer: "Puede esperar servicio profesional, puntualidad, seguimiento en tiempo real de sus envíos, manejo cuidadoso de su carga, y cumplimiento total de todas las regulaciones de transporte."
    },
    {
      question: "¿Qué necesito para coordinar un envío con Eemerson SAC?",
      answer: "Necesitará proporcionar detalles sobre la carga (peso, dimensiones, origen y destino), fechas de recogida y entrega preferidas, y cualquier requisito especial de manejo."
    },
    {
      question: "¿Qué necesito para carga sobredimensionada?",
      answer: "Para mover carga sobredimensionada con Eemerson SAC, solo necesita proporcionarnos: Plan de equipo o mercancía, lista de embalaje, y dimensiones exactas de la carga (altura, ancho, largo y peso). Nos encargamos del resto, incluyendo la selección del equipo especializado, permisos estatales y federales, coordinación de escoltas, y planificación logística completa."
    }
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        {/* Layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto min-h-[800px]">
          {/* Columna izquierda - Video (50%) - Ocupa toda la altura */}
          <div className="relative w-full h-[400px] lg:h-full overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={faqVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Columna derecha - Título + Contenido (50%) */}
          <div className="flex flex-col justify-center px-8 lg:px-12 xl:px-16 py-12 lg:py-20">
            {/* Título dentro de la columna derecha */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a2332] mb-4 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                PREGUNTAS
                <br />
                <span className="text-[#f5a623]">FRECUENTES</span>
              </h2>
              <div className="w-24 h-1 bg-[#f5a623] mb-6"></div>
              <p className="text-[#1a2332]/70 text-lg font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 rounded-xl px-6 shadow-md hover:shadow-xl transition-all"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f5a623]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f5a623]/20 transition-colors">
                    <HelpCircle className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <span className="font-bold text-[#1a2332] group-hover:text-[#f5a623] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#1a2332]/70 pb-5 pl-11 leading-relaxed font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>

          {/* Botón de más información */}
          <div className="mt-8">
            <a
              href={`https://wa.me/51994172181?text=${encodeURIComponent("Hola, necesito más información sobre los servicios")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1a2332] font-bold text-lg px-8 py-6 rounded-lg shadow-2xl hover:shadow-[#f5a623]/50 transition-all uppercase tracking-wide w-full lg:w-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Más Información →
              </Button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
