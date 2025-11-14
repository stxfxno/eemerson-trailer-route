import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Eemerson SAC Logo" className="h-14 w-14" />
              <span className="text-2xl font-bold">Eemerson SAC</span>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed text-sm">
              Eemerson SAC ofrece soluciones logísticas y de transporte personalizadas
              en todo el Perú. Como miembro de un grupo empresarial especializado,
              creamos un grupo de empresas afiliadas expertas que ofrecen permisos
              regulatorios, seguro de carga y servicios de facturación.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Carga Completa
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Carga Parcial
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Transporte Local
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:w-3 transition-all"></span>
                  Cotización Gratis
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div id="contact">
            <h3 className="text-xl font-bold mb-6 text-accent">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm">Llámanos:</span>
                  <div className="flex flex-col gap-1 text-sm">
                    <a href="tel:016910940" className="text-primary-foreground/90 hover:text-accent transition-colors">
                      (01) 691-0940
                    </a>
                    <a href="tel:+51994172181" className="text-primary-foreground/90 hover:text-accent transition-colors">
                      +51 994172181
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm">Envíanos un correo:</span>
                  <a href="mailto:eemersonsac@eemersonsac.com" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm break-all">
                    eemersonsac@eemersonsac.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm">Encuéntranos en:</span>
                  <span className="text-primary-foreground/90 text-sm leading-relaxed">
                    Urb. Pro 2da Et. 5to. Sec. 39 Mza. C5 Lote 11<br />Urb. Pro-Los Olivos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Eemerson SAC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
