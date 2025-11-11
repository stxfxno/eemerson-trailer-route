import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">
          Preguntas Frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-8 text-center">
          <Button variant="cta" size="lg">
            Más Información
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
