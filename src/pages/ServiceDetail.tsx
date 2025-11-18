import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceById } from "@/data/servicesData";
import { CheckCircle, ArrowLeft, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Image Slider */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 z-10"></div>

          {/* Image Slider */}
          <div className="absolute inset-0">
            <img
              src={gallery[currentImageIndex]}
              alt={`${service.title} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Slider Controls */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Slider Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-accent w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/servicios")}
              className="mb-6 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Servicios
            </Button>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 italic">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-accent mb-6">Descripción del Servicio</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
              </div>

              {/* Particularities */}
              <div>
                <h2 className="text-3xl font-bold text-accent mb-6">Particularidades</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.particularities.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-accent">
                      <CardContent className="p-4 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Example */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-accent">📋</span>
                  Ejemplo Típico
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg italic">
                  {service.example}
                </p>
              </div>

              {/* Advantages */}
              <div>
                <h2 className="text-3xl font-bold text-accent mb-6">Ventajas del Servicio</h2>
                <div className="space-y-4">
                  {service.advantages.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clients Section */}
              {service.clients && service.clients.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-accent mb-6">Empresas que Confían en Nosotros</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {service.clients.map((client, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 flex flex-col items-center justify-center gap-3 min-h-[120px]">
                          <Building2 className="w-8 h-8 text-accent" />
                          <span className="font-semibold text-center">{client}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-accent mb-6">Preguntas Frecuentes</h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {service.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-border rounded-lg px-6 bg-card"
                      >
                        <AccordionTrigger className="text-left hover:text-accent">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <Card className="border-2 border-accent">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-center">¿Interesado en este servicio?</h3>
                    <p className="text-muted-foreground text-center">
                      Contáctanos para obtener una cotización personalizada
                    </p>
                    <a
                      href={`https://wa.me/51994172181?text=${encodeURIComponent(`Hola, me gustaría cotizar el servicio de ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Cotizar Ahora
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Info Card */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h4 className="font-bold text-lg">Información de Contacto</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Teléfono:</strong><br />
                        +51 994 172 181
                      </p>
                      <p>
                        <strong className="text-foreground">Horario:</strong><br />
                        Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                        Sábados: 8:00 AM - 1:00 PM
                      </p>
                    </div>
                  </CardContent>
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
