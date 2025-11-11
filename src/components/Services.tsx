import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fullTruckLoad from "@/assets/full-truck-load.jpg";
import ltlService from "@/assets/ltl-service.jpg";
import drayageService from "@/assets/drayage-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Carga Completa",
      description: "Perfecto para envíos dedicados, garantizando transporte exclusivo y tránsito más rápido.",
      image: fullTruckLoad,
    },
    {
      title: "Carga Parcial",
      description: "Método de envío rentable para cargas más pequeñas que no requieren un camión completo.",
      image: ltlService,
    },
    {
      title: "Transporte Local",
      description: "Transporte de corta distancia entre puertos, almacenes o terminales.",
      image: drayageService,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-destructive text-center mb-4">
          Proveedores de Servicios Logísticos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Eemerson SAC ofrece soluciones logísticas y de transporte confiables, 
          minimizando los riesgos y costos de su empresa. Nos encargamos de sus 
          necesidades logísticas en Perú, optimizando su proceso de distribución.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="mb-4 text-primary-foreground/90">{service.description}</p>
                <Button variant="cta" size="sm">
                  Cotizar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
