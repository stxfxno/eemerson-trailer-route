import Header from "@/components/Header";
import Footer from "@/components/Footer";
import servicesHeroImage from "@/assets/services-hero.jpg";
import fullTruckLoad from "@/assets/full-truck-load.jpg";
import ltlService from "@/assets/ltl-service.jpg";
import drayageService from "@/assets/drayage-service.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Package, MapPin, Clock, Shield, CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Carga Completa (FTL)",
      description: "Perfecto para envíos dedicados, garantizando transporte exclusivo y tránsito más rápido para grandes volúmenes de carga.",
      image: fullTruckLoad,
      icon: Truck,
      features: [
        "Transporte dedicado exclusivo",
        "Tiempos de tránsito más rápidos",
        "Mayor seguridad de la carga",
        "Ideal para cargas voluminosas"
      ]
    },
    {
      title: "Carga Parcial (LTL)",
      description: "Método de envío rentable para cargas más pequeñas que no requieren un camión completo. Comparte espacio y costos.",
      image: ltlService,
      icon: Package,
      features: [
        "Solución económica",
        "Flexible para diferentes tamaños",
        "Frecuencias regulares",
        "Sin cargas mínimas"
      ]
    },
    {
      title: "Transporte Local (Drayage)",
      description: "Transporte de corta distancia entre puertos, almacenes o terminales. Ideal para movimientos urbanos e intermodales.",
      image: drayageService,
      icon: MapPin,
      features: [
        "Servicio puerta a puerta",
        "Cobertura urbana completa",
        "Transporte intermodal",
        "Tiempos de respuesta rápidos"
      ]
    },
  ];

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
                Nuestros <span className="text-accent">Servicios de Transporte</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 italic">
                Soluciones logísticas integrales para tu empresa
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-destructive mb-6">
              Proveedores de Servicios Logísticos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eemerson SAC ofrece soluciones logísticas y de transporte confiables, 
              minimizando los riesgos y costos de su empresa. Nos encargamos de sus 
              necesidades logísticas en Perú, optimizando su proceso de distribución.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-primary/20">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="cta" className="w-fit">
                      Cotizar Ahora
                    </Button>
                  </CardContent>
                </div>
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
