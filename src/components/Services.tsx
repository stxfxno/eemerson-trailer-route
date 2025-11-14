import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import cargaSuelta from "@/assets/carga-suelta.png";
import contenedores from "@/assets/contenedores.png";
import refrigerados from "@/assets/refrigerados.png";
import isotanques from "@/assets/isotanques.png";
import peligrosa from "@/assets/peligrosa.png";
import montacarga from "@/assets/montacarga.png";
import fopesaLogo from "@/assets/fopesa-logo.png";
import croslandLogo from "@/assets/crosland-logo.png";

const Services = () => {
  const services = [
    {
      title: "Transporte de Carga Suelta",
      description: "Servicio especializado para el transporte de mercancías sueltas, asegurando manipulación eficiente y entrega segura.",
      image: cargaSuelta,
    },
    {
      title: "Transporte de Contenedores",
      description: "Transporte de contenedores de 20 y 40 pies con seguimiento en tiempo real y cobertura nacional.",
      image: contenedores,
    },
    {
      title: "Transporte de Refrigerados",
      description: "Soluciones de cadena de frío para productos perecederos con control de temperatura constante.",
      image: refrigerados,
    },
    {
      title: "Transporte de Isotanques",
      description: "Transporte especializado de líquidos y químicos en isotanques certificados para máxima seguridad.",
      image: isotanques,
    },
    {
      title: "Transporte de Mercancía Peligrosa: IMO e IQBF",
      description: "Manejo certificado de materiales peligrosos cumpliendo con normas IMO e IQBF para transporte seguro.",
      image: peligrosa,
    },
    {
      title: "Servicio de Montacarga",
      description: "Equipos de montacarga profesionales para carga y descarga eficiente en almacenes y puertos.",
      image: montacarga,
    },
  ];

  const clientLogos = [
    { name: "Fopesa", logo: fopesaLogo },
    { name: "Crosland", logo: croslandLogo },
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-border">
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 bg-card">
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">{service.description}</p>
                <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Cotizar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Nuestros Clientes
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {clientLogos.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6">
                    <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                      <CardContent className="flex aspect-square items-center justify-center p-8">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
