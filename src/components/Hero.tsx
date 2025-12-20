import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-truck.webp";

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
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[750px] bg-[#1a2332] overflow-hidden flex items-center">
      {/* Overlay más agresivo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/85 to-[#1a2332]/60 z-10" />

      {/* Imagen con filtros */}
      <img
        src={heroImage}
        alt="Transporte de carga profesional"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-75 contrast-125"
      />

      <div className="relative z-20 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl">
          {/* Titular moderno y directo */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase leading-tight tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            TRANSPORTE
            <br />
            <span className="text-[#f5a623]">SIN LÍMITES.</span>
          </h1>

          {/* Subtítulo más directo */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Conectamos tu carga con todo el Perú.
            <span className="text-[#f5a623] font-semibold"> Rápido. Seguro. Confiable.</span>
          </p>

          {/* CTAs modernos */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1a2332] font-bold text-lg px-8 py-6 rounded-lg shadow-2xl hover:shadow-[#f5a623]/50 transition-all uppercase tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Cotización Gratis →
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToServices}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a2332] backdrop-blur-sm font-bold text-lg px-8 py-6 rounded-lg transition-all uppercase tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
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
