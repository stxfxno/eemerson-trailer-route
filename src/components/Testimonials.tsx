import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Opiniones de Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lo que dicen las empresas que confían en nuestros servicios
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-gray-700 text-lg mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
