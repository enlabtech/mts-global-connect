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
  <header className="fixed top-0 left-0 right-0 glass-effect border-b border-border z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
      <div className="flex-shrink-0 cursor-pointer group" onClick={() => navigate('home')}>
        <div className="flex items-center space-x-3">
          <div className="transition-transform group-hover:scale-110 duration-300">
            <MtsLogo className="h-10 w-10 glow-cyan" color="hsl(193 100% 50%)" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-wider block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MTS TECH</span>
            <span className="text-xs text-primary block -mt-1 tracking-widest">PRECISION. POWER. PARTNERSHIP.</span>
          </div>
        </div>
      </div>

      <nav className="hidden md:flex space-x-6 lg:space-x-10">
        {navigationItems.map(item => (
          <button
            key={item.title}
            onClick={() => navigate(item.page)}
            className={`text-base font-medium transition-all duration-300 relative group ${
              currentPage === item.page ? 'text-primary' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            {item.title}
            <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
              currentPage === item.page ? 'w-full glow-cyan' : 'w-0 group-hover:w-full'
            }`} />
          </button>
        ))}
      </nav>

      <div className="md:hidden">
        <select
          value={currentPage}
          onChange={(e) => navigate(e.target.value)}
          className="p-2 border border-border rounded-lg text-foreground bg-card focus:ring-primary focus:border-primary"
        >
          {navigationItems.map(item => (
            <option key={item.page} value={item.page}>{item.title}</option>
          ))}
        </select>
      </div>
    </div>
  </header>
);
