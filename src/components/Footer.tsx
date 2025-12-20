import logo from "@/assets/logo.webp";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Eemerson SAC Logo" className="h-16 w-16" />
              <span className="text-2xl font-black text-white uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Eemerson SAC
              </span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Logística moderna enfocada en seguridad y eficiencia para tu negocio en todo el Perú.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-black mb-6 text-[#f5a623] uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Servicios
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/servicios" className="text-white/80 hover:text-[#f5a623] transition-colors text-sm flex items-center group font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Carga Suelta
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-white/80 hover:text-[#f5a623] transition-colors text-sm flex items-center group font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Contenedores
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-white/80 hover:text-[#f5a623] transition-colors text-sm flex items-center group font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Refrigerados
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-white/80 hover:text-[#f5a623] transition-colors text-sm flex items-center group font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Isotanques
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-white/80 hover:text-[#f5a623] transition-colors text-sm flex items-center group font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Mercancía Peligrosa
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-white/80 hover:text-[#f5a623] transition-colors text-sm flex items-center group font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Servicio de Montacarga
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div id="contact">
            <h3 className="text-lg font-black mb-6 text-[#f5a623] uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#f5a623] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Llámanos:</span>
                  <div className="flex flex-col gap-1 text-sm">
                    <a href="tel:016910940" className="text-white/80 hover:text-[#f5a623] transition-colors font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      (01) 691-0940
                    </a>
                    <a href="tel:+51994172181" className="text-white/80 hover:text-[#f5a623] transition-colors font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      +51 994172181
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#f5a623] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email:</span>
                  <a href="mailto:eemersonsac@eemersonsac.com" className="text-white/80 hover:text-[#f5a623] transition-colors text-sm break-all font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    eemersonsac@eemersonsac.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f5a623] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Ubicación:</span>
                  <span className="text-white/80 text-sm leading-relaxed font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Callao y Lima Metropolitana, Perú
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f5a623]/20 pt-8 mt-4">
          <p className="text-center text-sm text-white/60 font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            © {new Date().getFullYear()} Eemerson SAC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
