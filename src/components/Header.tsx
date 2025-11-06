import { MtsLogo } from "./MtsLogo";
import { Package, Wrench, Info, Phone } from "lucide-react";

const navigationItems = [
  { title: "Products", icon: Package, page: "products" },
  { title: "Services", icon: Wrench, page: "services" },
  { title: "About Us", icon: Info, page: "about" },
  { title: "Contact", icon: Phone, page: "contact" },
];

interface HeaderProps {
  currentPage: string;
  navigate: (page: string) => void;
}

export const Header = ({ currentPage, navigate }: HeaderProps) => (
  <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
      <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('home')}>
        <div className="flex items-center space-x-2">
          <MtsLogo className="h-10 w-10" color="#0A579B" />
          <div>
            <span className="text-xl font-extrabold text-foreground tracking-wider block">MTS TECH</span>
            <span className="text-xs text-primary block -mt-1 tracking-widest">PRECISION. POWER. PARTNERSHIP.</span>
          </div>
        </div>
      </div>

      <nav className="hidden md:flex space-x-6 lg:space-x-10">
        {navigationItems.map(item => (
          <button
            key={item.title}
            onClick={() => navigate(item.page)}
            className={`text-base font-medium transition-colors duration-200 ${
              currentPage === item.page 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            {item.title}
          </button>
        ))}
      </nav>

      <div className="md:hidden">
        <select
          value={currentPage}
          onChange={(e) => navigate(e.target.value)}
          className="p-2 border border-input rounded-lg text-foreground bg-background focus:ring-primary focus:border-primary"
        >
          {navigationItems.map(item => (
            <option key={item.page} value={item.page}>{item.title}</option>
          ))}
        </select>
      </div>
    </div>
  </header>
);
