import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Eemerson SAC Logo" className="h-12 w-12" />
          <span className="text-2xl font-bold text-primary">Eemerson SAC</span>
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
          <Button variant="cta" size="sm">
            Cotizar Ahora
          </Button>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
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
    </header>
  );
};

export default Header;
