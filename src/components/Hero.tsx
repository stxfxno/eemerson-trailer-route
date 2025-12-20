import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';

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
      <div className="relative z-20 container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contenido izquierdo */}
          <div className="max-w-2xl">
            {/* Titular moderno y directo */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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
      </div>

      {/* Animación Spline a la derecha - posición absoluta */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[450px] lg:h-[550px] xl:h-[700px] 2xl:h-[850px] w-1/2 z-10">
        <Spline scene="https://prod.spline.design/07SUpQ1twxSNYT6E/scene.splinecode" />
      </div>
    </section>
  );
};

export default Hero;
