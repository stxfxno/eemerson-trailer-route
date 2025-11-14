import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/51994172181?text=${encodeURIComponent("Hola, me gustaría solicitar una cotización gratis")}`,
      "_blank"
    );
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px] bg-primary overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40 z-10" />
      <img
        src={heroImage}
        alt="Transporte de carga profesional"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Bienvenido a
            <br />
            <span className="text-accent italic">Eemerson SAC</span>
            <br />
            Su Socio en Logística
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Eemerson SAC: Soluciones logísticas personalizadas para empresas.
            Asistimos en la expansión y transporte de mercancías a lo largo del Perú,
            con experiencia y confiabilidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" onClick={handleWhatsAppClick}>
              Cotización Gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToServices}
              className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
