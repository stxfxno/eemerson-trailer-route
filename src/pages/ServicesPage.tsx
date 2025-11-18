import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import servicesHeroImage from "@/assets/services-hero.jpg";
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
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40 z-10"></div>
          <img 
            src={servicesHeroImage} 
            alt="Servicios de Transporte - Eemerson SAC" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
            <div className="max-w-3xl">
              <p className="text-accent text-lg md:text-xl font-semibold mb-4 italic">Services</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nuestros <span className="text-accent italic">Servicios de Transporte</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 italic">
                Soluciones logísticas integrales para tu empresa
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eemerson SAC ofrece soluciones logísticas y de transporte confiables,
              minimizando los riesgos y costos de su empresa. Nos encargamos de sus
              necesidades logísticas en Perú, optimizando su proceso de distribución.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesWithIcons.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border flex flex-col">
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.particularities.slice(0, 4).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

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

          {/* Benefits Section */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              ¿Por Qué Elegir Nuestros Servicios?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
