import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home } from "./Home";
import { Products } from "./Products";
import { Services } from "./Services";
import { About } from "./About";
import { Contact } from "./Contact";

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <Products navigate={navigate} />;
      case 'services':
        return <Services navigate={navigate} />;
      case 'about':
        return <About navigate={navigate} />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header currentPage={currentPage} navigate={navigate} />
      {renderPage()}
      <Footer navigate={navigate} />
    </div>
  );
};

export default Index;
