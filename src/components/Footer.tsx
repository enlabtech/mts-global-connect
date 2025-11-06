import { MtsLogo } from "./MtsLogo";

interface FooterProps {
  navigate: (page: string) => void;
}

export const Footer = ({ navigate }: FooterProps) => (
  <footer className="bg-gray-800 text-white mt-16 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <div className="flex justify-center items-center space-x-2">
        <MtsLogo className="h-8 w-8" color="#3B82F6" />
        <span className="text-xl font-bold">MTS TECH</span>
      </div>
      <p className="text-sm text-gray-400">
        Precision. Power. Partnership. &copy; {new Date().getFullYear()}
      </p>
      <div className="flex justify-center space-x-4 text-sm">
        <button onClick={() => navigate('home')} className="text-gray-400 hover:text-white transition-colors">
          Home
        </button>
        <button onClick={() => navigate('about')} className="text-gray-400 hover:text-white transition-colors">
          Privacy Policy
        </button>
        <button onClick={() => navigate('contact')} className="text-gray-400 hover:text-white transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  </footer>
);
