import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceById } from "@/data/servicesData";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  FileText,
  Shield,
  Radio,
  Gauge,
  Lock,
  Eye,
  CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const service = serviceId ? getServiceById(serviceId) : undefined;

  useEffect(() => {
    if (!service) {
      navigate("/servicios");
    }
  }, [service, navigate]);

  if (!service) {
    return null;
  }

  const gallery = service.gallery || [service.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // Características de logística inteligente
  const smartLogistics = [
    {
      icon: Radio,
      title: "Rastreo 24/7 en Tiempo Real",
      description: "App móvil y portal web que te permite ver la ubicación exacta, temperatura y presión del isotanque en todo momento."
    },
    {
      icon: FileText,
      title: "Gestión Cero Papel",
      description: "Todas las certificaciones y documentos de carga accesibles digitalmente desde cualquier dispositivo."
    },
    {
      icon: Eye,
      title: "Seguridad Predictiva",
      description: "Sensores inteligentes que detectan y previenen problemas antes de que ocurran, no solo los monitoran."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Moderno y Dinámico */}
        <section className="relative bg-[#1a2332] text-white overflow-hidden min-h-[600px] flex items-center">
          {/* Overlay con gradiente más agresivo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/85 to-[#1a2332]/60 z-10"></div>

          {/* Image Slider con filtro */}
          <div className="absolute inset-0">
            <img
              src={gallery[currentImageIndex]}
              alt={`${service.title} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover brightness-75 contrast-125 transition-opacity duration-500"
            />
          </div>

          {/* Slider Controls */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#f5a623]/20 hover:bg-[#f5a623]/40 backdrop-blur-sm transition-all border border-[#f5a623]/30"
              >
                <ChevronLeft className="w-6 h-6 text-[#f5a623]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#f5a623]/20 hover:bg-[#f5a623]/40 backdrop-blur-sm transition-all border border-[#f5a623]/30"
              >
                <ChevronRight className="w-6 h-6 text-[#f5a623]" />
              </button>

              {/* Slider Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-[#f5a623] w-12"
                        : "bg-white/40 hover:bg-white/60 w-8"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="container mx-auto px-4 py-16 relative z-20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/servicios")}
              className="mb-8 text-white hover:bg-white/10 hover:text-[#f5a623] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Servicios
            </Button>

            <div className="max-w-4xl space-y-6">
              {/* Titular principal - Mayúsculas, impactante */}
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                LOGÍSTICA QUÍMICA
                <br />
                <span className="text-[#f5a623]">SIN INTERRUPCIONES.</span>
              </h1>

              {/* Subtítulo moderno */}
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Moviliza tu carga crítica con la tecnología más segura.
                <span className="text-[#f5a623] font-semibold"> Así de simple.</span>
              </p>

              {/* CTA Principal */}
              <div className="pt-4">
                <a
                  href={`https://wa.me/51994172181?text=${encodeURIComponent(`Hola, quiero calcular mi ruta para ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1a2332] font-bold text-lg px-8 py-6 rounded-lg shadow-2xl hover:shadow-[#f5a623]/50 transition-all uppercase tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Calcula Tu Ruta →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Logística Inteligente y Transparente */}
              <div>
                <h2 className="text-4xl font-black text-[#1a2332] mb-3 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  LOGÍSTICA INTELIGENTE
                </h2>
                <div className="w-24 h-1 bg-[#f5a623] mb-10"></div>

                <div className="grid md:grid-cols-3 gap-6">
                  {smartLogistics.map((item, index) => (
                    <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all bg-white group hover:-translate-y-1">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-[#f5a623]/10 flex items-center justify-center group-hover:bg-[#f5a623]/20 transition-colors">
                          <item.icon className="w-7 h-7 text-[#f5a623]" strokeWidth={2} />
                        </div>
                        <h3 className="font-bold text-lg text-[#1a2332]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Nuestro Protocolo PRO */}
              <div>
                <h2 className="text-4xl font-black text-[#1a2332] mb-3 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  LA SEGURIDAD ES
                  <br />
                  <span className="text-[#f5a623]">INNEGOCIABLE</span>
                </h2>
                <div className="w-24 h-1 bg-[#f5a623] mb-10"></div>

                <div className="grid md:grid-cols-2 gap-4">
                  {service.particularities.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-[#f5a623] shadow-md hover:shadow-lg transition-all bg-white">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#f5a623]/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-[#f5a623]" strokeWidth={3} />
                        </div>
                        <span className="text-[#1a2332] leading-relaxed font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {item}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Ejemplo Caso Real */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3342] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5a623]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="text-4xl">📋</span>
                    Caso Real
                  </h3>
                  <p className="text-white/90 leading-relaxed text-lg italic" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    "{service.example}"
                  </p>
                </div>
              </div>

              {/* Empresas que Confían - Con diseño de logos */}
              {service.clients && service.clients.length > 0 && (
                <div>
                  <h2 className="text-4xl font-black text-[#1a2332] mb-3 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    CONFÍAN EN NOSOTROS
                  </h2>
                  <div className="w-24 h-1 bg-[#f5a623] mb-10"></div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {service.clients.map((client, index) => (
                      <Card key={index} className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 hover:shadow-lg transition-all bg-white group">
                        <CardContent className="p-8 flex flex-col items-center justify-center gap-4 min-h-[140px]">
                          <div className="w-16 h-16 rounded-full bg-[#f5a623]/10 group-hover:bg-[#f5a623]/20 flex items-center justify-center transition-colors">
                            <span className="text-2xl font-black text-[#1a2332]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                              {client.charAt(0)}
                            </span>
                          </div>
                          <span className="font-bold text-center text-lg text-[#1a2332]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {client}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h2 className="text-4xl font-black text-[#1a2332] mb-3 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    PREGUNTAS FRECUENTES
                  </h2>
                  <div className="w-24 h-1 bg-[#f5a623] mb-10"></div>

                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {service.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-2 border-[#1a2332]/10 rounded-xl px-6 bg-white hover:border-[#f5a623]/30 transition-all"
                      >
                        <AccordionTrigger className="text-left hover:text-[#f5a623] font-semibold text-lg py-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>

            {/* Sidebar - Sticky y Simplificado */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card - Más agresivo y directo */}
                <Card className="border-4 border-[#f5a623] shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-br from-[#f5a623] to-[#f5a623]/80 p-1">
                    <CardContent className="bg-white p-8 space-y-6">
                      <div className="text-center space-y-4">
                        <h3 className="text-3xl font-black text-[#1a2332] uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          ¿LISTO PARA<br />EMPEZAR?
                        </h3>
                        <p className="text-muted-foreground" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          Obtén una cotización inmediata
                        </p>
                      </div>

                      <a
                        href={`https://wa.me/51994172181?text=${encodeURIComponent(`Hola, quiero calcular mi ruta para ${service.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          size="lg"
                          className="w-full bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1a2332] font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Calcula Tu Ruta →
                        </Button>
                      </a>

                      <div className="pt-4 border-t border-[#1a2332]/10 text-center">
                        <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          <strong className="text-[#1a2332]">Teléfono:</strong>
                        </p>
                        <p className="text-xl font-bold text-[#1a2332]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          +51 994 172 181
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
