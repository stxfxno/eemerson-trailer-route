import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-4">
          Nuestros Servicios Especializados
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Eemerson SAC ofrece soluciones logísticas y de transporte confiables, 
          minimizando los riesgos y costos de su empresa. Nos encargamos de sus 
          necesidades logísticas en Perú, optimizando su proceso de distribución.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-border flex flex-col">
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 bg-card flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                <div className="mt-auto flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/servicios/${service.id}`)}
                    className="flex-1 border-accent text-accent hover:bg-accent/10"
                  >
                    Leer más
                  </Button>
                  <a
                    href={`https://wa.me/51994172181?text=${encodeURIComponent(`Hola, me gustaría cotizar el servicio de ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                      Cotizar
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
