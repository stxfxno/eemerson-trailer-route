import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";
import { useState } from "react";
import { X } from "lucide-react";
import TopBar from "./TopBar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/51994172181?text=${encodeURIComponent("Hola, me gustaría solicitar una cotización")}`,
      "_blank"
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-background">
      <TopBar />
      <div className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo y navegación a la izquierda */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Eemerson SAC Logo" className="h-12 w-12" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Inicio
            </Link>
            <Link to="/sobre-nosotros" className="text-foreground hover:text-accent transition-colors">
              Sobre Nosotros
            </Link>
            <Link to="/servicios" className="text-foreground hover:text-accent transition-colors">
              Servicios
            </Link>
            <Link to="/contacto" className="text-foreground hover:text-accent transition-colors">
              Contacto
            </Link>
          </nav>
        </div>

        {/* CTA a la derecha */}
        <div className="hidden md:block">
          <Button variant="cta" size="sm" onClick={handleWhatsAppClick}>
            Cotizar Ahora
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />
            <div className="absolute right-0 top-0 h-full w-[280px] bg-background border-l border-border shadow-xl animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-lg font-bold text-primary">Menú</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMobileMenu}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col p-4 gap-4">
                <Link
                  to="/"
                  className="text-foreground hover:text-accent transition-colors py-2 px-3 rounded-md hover:bg-accent/10"
                  onClick={closeMobileMenu}
                >
                  Inicio
                </Link>
                <Link
                  to="/sobre-nosotros"
                  className="text-foreground hover:text-accent transition-colors py-2 px-3 rounded-md hover:bg-accent/10"
                  onClick={closeMobileMenu}
                >
                  Sobre Nosotros
                </Link>
                <Link
                  to="/servicios"
                  className="text-foreground hover:text-accent transition-colors py-2 px-3 rounded-md hover:bg-accent/10"
                  onClick={closeMobileMenu}
                >
                  Servicios
                </Link>
                <Link
                  to="/contacto"
                  className="text-foreground hover:text-accent transition-colors py-2 px-3 rounded-md hover:bg-accent/10"
                  onClick={closeMobileMenu}
                >
                  Contacto
                </Link>
                <Button
                  variant="cta"
                  size="sm"
                  onClick={() => {
                    handleWhatsAppClick();
                    closeMobileMenu();
                  }}
                  className="mt-4"
                >
                  Cotizar Ahora
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
