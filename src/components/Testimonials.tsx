import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import fopesaLogo from "@/assets/fopesa-logo.png";
import croslandLogo from "@/assets/crosland-logo.png";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "El servicio de transporte de carga es bueno y la tarifa competitiva en comparación con otras empresas del sector.",
      company: "CROSLAND S.A",
      logo: croslandLogo
    },
    {
      quote: "Proveedor confiable, me entregaron a tiempo y sin daños. Recomendado al 100%. ",
      company: "FOSFORERA PERUANA S.A",
      logo: fopesaLogo
    },
    {
      quote: "La atención por parte del personal y la capacidad de respuesta ante un servicio o requerimiento también es buena.",
      company: "CROSLAND S.A",
      logo: croslandLogo
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Opiniones de Nuestros Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lo que dicen las empresas que confían en nuestros servicios
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-border bg-card hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col h-full min-h-[280px]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <p className="text-foreground text-base mb-6 flex-grow italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-border pt-4 mt-auto">
                      <p className="font-semibold text-primary">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
