import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2332] mb-4 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            SERVICIOS
            <br />
            <span className="text-[#f5a623]">ESPECIALIZADOS</span>
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
          <p className="text-center text-[#1a2332]/70 mb-6 max-w-3xl mx-auto text-lg font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Soluciones logísticas confiables que minimizan riesgos y costos.
            <span className="text-[#f5a623] font-semibold"> Optimizamos tu distribución en todo el Perú.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 flex flex-col bg-white">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 via-[#1a2332]/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 brightness-90 contrast-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-[#1a2332] group-hover:text-[#f5a623] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="mb-6 text-[#1a2332]/70 leading-relaxed flex-grow text-sm font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {service.description}
                </p>
                <div className="mt-auto flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/servicios/${service.id}`)}
                    className="flex-1 border-2 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white font-semibold transition-all"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Ver Más
                  </Button>
                  <a
                    href={`https://wa.me/51994172181?text=${encodeURIComponent(`Hola, me gustaría cotizar el servicio de ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1a2332] w-full font-bold shadow-lg transition-all" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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
