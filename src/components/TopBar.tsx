import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <a
              href="tel:+51994172181"
              className="flex items-center gap-1.5 hover:text-accent transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="hidden sm:inline">(51) 994-172-181</span>
              <span className="sm:hidden">994-172-181</span>
            </a>
            <a
              href="tel:+51926903132"
              className="flex items-center gap-1.5 hover:text-accent transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="hidden sm:inline">(51) 926-903-132</span>
              <span className="sm:hidden">926-903-132</span>
            </a>
            <a
              href="mailto:eemersonsac@eemersonsac.com"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
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
