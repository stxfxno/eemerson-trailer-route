import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import fopesaLogo from "@/assets/fopesa-logo.webp";
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
    <section className="py-20 bg-gradient-to-br from-[#1a2332] via-[#1a2332] to-[#2a3342] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            LO QUE DICEN
            <br />
            <span className="text-[#f5a623]">NUESTROS CLIENTES</span>
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Empresas que confían en nuestra experiencia y profesionalismo
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
                <Card className="border-2 border-white/10 bg-white hover:shadow-2xl hover:border-[#f5a623]/50 transition-all duration-300 h-full backdrop-blur-sm hover:-translate-y-2">
                  <CardContent className="p-8 flex flex-col h-full min-h-[300px] relative">
                    {/* Quote icon decorativo */}
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-[#f5a623]/20" />

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#f5a623] text-[#f5a623]" />
                        ))}
                      </div>
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>

                    <p className="text-[#1a2332] text-base mb-6 flex-grow italic leading-relaxed font-light relative z-10" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      "{testimonial.quote}"
                    </p>

                    <div className="border-t-2 border-[#f5a623]/30 pt-4 mt-auto relative z-10">
                      <p className="font-bold text-[#1a2332] uppercase tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white" />
          <CarouselNext className="hidden md:flex border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
