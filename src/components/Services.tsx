import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  // Tomamos los primeros 6 servicios para el bento grid
  const displayedServices = servicesData.slice(0, 6);

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
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {displayedServices.map((service, index) => {
            // Layout intercalado por columna:
            // Col 1: Grande (0), Pequeño (5)
            // Col 2: Pequeño (1), Grande (3)
            // Col 3: Grande (2), Pequeño (4)
            const isLarge = index === 0 || index === 3 || index === 2;
            
            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#0d1219] border border-[#1a2332]/20 hover:border-[#f5a623]/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl ${
                  isLarge ? 'lg:row-span-2 min-h-[500px]' : 'min-h-[280px]'
                }`}
                onClick={() => navigate(`/servicios/${service.id}`)}
              >
                {/* Imagen de fondo con overlay */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-[#1a2332]/70 to-transparent"></div>
                </div>

                {/* Efecto glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#f5a623]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Contenido */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 
                    className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#f5a623] transition-colors duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className={`text-white/70 text-sm leading-relaxed mb-4 ${isLarge ? 'line-clamp-4' : 'line-clamp-2'}`}
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {service.description}
                  </p>
                  
                  {/* Link con flecha */}
                  <div className="flex items-center gap-2 text-[#f5a623] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Ver más</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Borde brillante en hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#f5a623]/30 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Botón ver todos los servicios */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => navigate('/servicios')}
            className="bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1a2332] font-bold px-8 py-6 rounded-lg shadow-2xl hover:shadow-[#f5a623]/30 transition-all uppercase tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
