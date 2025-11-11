import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Eemerson SAC Logo" className="h-12 w-12" />
              <span className="text-xl font-bold">Eemerson SAC</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Eemerson SAC ofrece soluciones logísticas y de transporte personalizadas 
              en todo el Perú. Como miembro de un grupo empresarial especializado, 
              creamos un grupo de empresas afiliadas expertas que ofrecen permisos 
              regulatorios, seguro de carga y servicios de facturación.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Carga Completa
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Carga Parcial
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Transporte Local
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Cotización Gratis
                </a>
              </li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <p className="flex items-start gap-2">
                <span className="font-semibold text-accent">Teléfono:</span>
                <a href="tel:+51999999999" className="hover:text-accent transition-colors">
                  +51 999 999 999
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold text-accent">Email:</span>
                <a href="mailto:contacto@eemersonsac.com" className="hover:text-accent transition-colors">
                  contacto@eemersonsac.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold text-accent">Dirección:</span>
                <span>Lima, Perú</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Eemerson SAC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
