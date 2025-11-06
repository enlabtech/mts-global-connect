import { MtsLogo } from "./MtsLogo";

interface FooterProps {
  navigate: (page: string) => void;
}

export const Footer = ({ navigate }: FooterProps) => (
  <footer className="relative mt-16 py-8 border-t border-border glass-effect">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <div className="flex justify-center items-center space-x-2 group">
        <div className="transition-transform group-hover:scale-110 duration-300">
          <MtsLogo className="h-8 w-8 glow-cyan" color="hsl(193 100% 50%)" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MTS TECH</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Precision. Power. Partnership. &copy; {new Date().getFullYear()}
      </p>
      <div className="flex justify-center space-x-6 text-sm">
        <button onClick={() => navigate('home')} className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </button>
        <button onClick={() => navigate('about')} className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
          Privacy Policy
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </button>
        <button onClick={() => navigate('contact')} className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
          Contact Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </button>
      </div>
    </div>
  </footer>
);
