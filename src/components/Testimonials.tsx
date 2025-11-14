import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "El servicio de transporte de carga es bueno y la tarifa competitiva.",
      company: "CROSLAND S.A"
    },
    {
      quote: "Proveedor confiable.",
      company: "FOSFORERA PERUANA S.A"
    },
    {
      quote: "La atención por parte del personal y la capacidad de respuesta ante un servicio o requerimiento también es buena.",
      company: "CROSLAND S.A"
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
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4">
                  <Card className="border-border bg-card hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground text-base mb-6 flex-grow italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-primary">
                          {testimonial.company}
                        </p>
                      </div>
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
    </section>
  );
};

export default Testimonials;
