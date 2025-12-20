import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import servicesHeroImage from "@/assets/services-hero.webp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Container, Snowflake, Droplet, AlertTriangle, Forklift, Clock, Shield, CheckCircle, Truck } from "lucide-react";
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
        <div className="container mx-auto px-4 py-20 bg-white">
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

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesWithIcons.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 flex flex-col">
                <div className="relative h-56 overflow-hidden bg-[#1a2332]/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#f5a623]/10 mb-4">
                    <service.icon className="w-6 h-6 text-[#f5a623]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-3 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>{service.title}</h3>
                  <p className="text-[#1a2332]/70 text-sm leading-relaxed mb-4 font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>{service.description}</p>

                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.particularities.slice(0, 4).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#f5a623] flex-shrink-0 mt-0.5" />
                        <span className="text-[#1a2332]/70 font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/servicios/${service.id}`)}
                      className="flex-1 border-2 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white font-bold uppercase tracking-wide"
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
                      <Button size="sm" className="bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1a2332] w-full font-bold uppercase tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Cotizar
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-[#1a2332] via-[#1a2332] to-[#2a3342] rounded-2xl p-8 md:p-12 relative overflow-hidden">
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
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
