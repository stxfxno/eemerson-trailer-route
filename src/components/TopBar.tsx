import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#1a2332] text-white py-2.5 text-xs md:text-sm border-b border-[#f5a623]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <a
              href="tel:+51994172181"
              className="flex items-center gap-2 hover:text-[#f5a623] transition-colors whitespace-nowrap font-medium"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 text-[#f5a623]" />
              <span className="hidden sm:inline">(51) 994-172-181</span>
              <span className="sm:hidden">994-172-181</span>
            </a>
            <a
              href="tel:+51926903132"
              className="flex items-center gap-2 hover:text-[#f5a623] transition-colors whitespace-nowrap font-medium"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 text-[#f5a623]" />
              <span className="hidden sm:inline">(01) 691-0940</span>
              <span className="sm:hidden">691-0940</span>
            </a>
            <a
              href="mailto:eemersonsac@eemersonsac.com"
              className="flex items-center gap-2 hover:text-[#f5a623] transition-colors font-medium"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 text-[#f5a623]" />
              <span className="hidden lg:inline">eemersonsac@eemersonsac.com</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
