import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import servicesHeroImage from "@/assets/services-hero.webp";
import { Button } from "@/components/ui/button";
import { Package, Container, Snowflake, Droplet, AlertTriangle, Forklift, Clock, Shield, CheckCircle, Truck, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const ServicesPage = () => {
  const navigate = useNavigate();

  const servicesWithIcons = servicesData.map(service => {
    let icon;
    switch(service.id) {
      case "carga-suelta": icon = Package; break;
      case "contenedores": icon = Container; break;
      case "refrigerados": icon = Snowflake; break;
      case "isotanques": icon = Droplet; break;
      case "mercancia-peligrosa": icon = AlertTriangle; break;
      case "montacarga": icon = Forklift; break;
      default: icon = Package;
    }
    return { ...service, icon };
  });

  const benefits = [
    {
      icon: Clock,
      title: "Puntualidad Garantizada",
      description: "Cumplimos con los tiempos de entrega acordados"
    },
    {
      icon: Shield,
      title: "Seguro Completo",
      description: "Tu carga protegida en todo momento"
    },
    {
      icon: Truck,
      title: "Flota Moderna",
      description: "Vehículos equipados con tecnología de punta"
    },
    {
      icon: CheckCircle,
      title: "Seguimiento GPS",
      description: "Monitoreo en tiempo real de tu carga"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#1a2332] text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/85 to-[#1a2332]/60 z-10"></div>
          <img
            src={servicesHeroImage}
            alt="Servicios de Transporte - Eemerson SAC"
            className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-125"
          />
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                SERVICIOS
                <br />
                <span className="text-[#f5a623]">ESPECIALIZADOS</span>
              </h1>
              <div className="w-24 h-1 bg-[#f5a623] mb-6"></div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Soluciones logísticas integrales para tu empresa en todo el Perú
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a2332] mb-4 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                SOLUCIONES
                <br />
                <span className="text-[#f5a623]">LOGÍSTICAS</span>
              </h2>
              <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
              <p className="text-lg text-[#1a2332]/70 leading-relaxed font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Eemerson SAC ofrece soluciones logísticas y de transporte confiables,
                minimizando los riesgos y costos de su empresa. Nos encargamos de sus
                necesidades logísticas en Perú, optimizando su proceso de distribución.
              </p>
            </div>

            {/* Services Alternating Layout */}
            <div className="space-y-8 max-w-7xl mx-auto">
              {servicesWithIcons.map((service, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={service.id}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch"
                  >
                    {/* Card grande con información */}
                    <div 
                      className={`lg:col-span-3 group relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 md:p-10 cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-[#f5a623]/30 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                      onClick={() => navigate(`/servicios/${service.id}`)}
                      style={{ boxShadow: '0 4px 20px rgba(26, 35, 50, 0.08)' }}
                    >
                      <div className="relative z-10">
                        {/* Badge del servicio */}
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#f5a623]/10 rounded-full">
                          <service.icon className="w-5 h-5 text-[#f5a623]" />
                          <span className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider">Servicio</span>
                        </div>
                        
                        <h3 
                          className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {service.title}
                        </h3>
                        
                        <p 
                          className="text-[#1a2332]/60 text-base leading-relaxed mb-6"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                          {service.description}
                        </p>
                        
                        {/* Lista de características */}
                        <ul className="space-y-3 mb-8">
                          {service.particularities.slice(0, 3).map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm">
                              <div className="w-5 h-5 rounded-full bg-[#f5a623]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3 h-3 text-[#f5a623]" />
                              </div>
                              <span className="text-[#1a2332]/70" style={{ fontFamily: "'Open Sans', sans-serif" }}>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Botones */}
                        <div className="flex flex-wrap gap-4">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/servicios/${service.id}`);
                            }}
                            className="bg-[#1a2332] hover:bg-[#1a2332]/90 text-white font-semibold px-6 py-3 rounded-xl transition-all"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            Ver Detalles <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <a
                            href={`https://wa.me/51994172181?text=${encodeURIComponent(`Hola, me gustaría cotizar el servicio de ${service.title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button 
                              variant="outline"
                              className="border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              Solicitar Cotización
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card con imagen */}
                    <div 
                      className={`lg:col-span-2 group relative overflow-hidden rounded-3xl cursor-pointer min-h-[300px] ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                      onClick={() => navigate(`/servicios/${service.id}`)}
                      style={{ boxShadow: '0 4px 20px rgba(26, 35, 50, 0.08)' }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Borde en hover */}
                      <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-[#f5a623] transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-[#1a2332] via-[#1a2332] to-[#2a3342] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5a623]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f5a623]/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-4 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  ¿POR QUÉ ELEGIR
                  <br />
                  <span className="text-[#f5a623]">NUESTROS SERVICIOS?</span>
                </h2>
                <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-12"></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f5a623]/10 mb-4 group-hover:bg-[#f5a623]/20 transition-colors">
                        <benefit.icon className="w-8 h-8 text-[#f5a623]" />
                      </div>
                      <h3 className="font-bold text-lg text-white mb-2 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>{benefit.title}</h3>
                      <p className="text-white/80 font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
