import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MtsLogo } from "@/components/MtsLogo";
import { Package, Wrench, Info, Phone, Check, Lightbulb, Users } from "lucide-react";

const whatWeOfferCards = [
  { title: "Products", icon: Package, page: "products" },
  { title: "Services", icon: Wrench, page: "services" },
  { title: "About Us", icon: Info, page: "about" },
  { title: "Contact", icon: Phone, page: "contact" },
];

const whyChooseCards = [
  { 
    icon: Check, 
    title: "Reliability", 
    description: "Trusted by manufacturers worldwide for consistent quality and on-time delivery of industrial solutions." 
  },
  { 
    icon: Lightbulb, 
    title: "Innovation", 
    description: "Cutting-edge mold machinery and equipment that drives efficiency and productivity in modern manufacturing." 
  },
  { 
    icon: Users, 
    title: "Partnership", 
    description: "Building long-term relationships through dedicated support, expert consultation, and tailored solutions." 
  },
];

interface HomeProps {
  navigate: (page: string) => void;
}

export const Home = ({ navigate }: HomeProps) => (
  <main className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section className="text-center">
      <MtsLogo className="h-20 w-20 mx-auto" color="#0A579B" />
      <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mt-4">MTS TECH</h1>
      <p className="text-lg font-semibold text-primary mt-2 tracking-wider">PRECISION. POWER. PARTNERSHIP.</p>
      <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
        Your trusted supplier and trading partner for high-performance mold machinery and industrial equipment. 
        We connect technology with trust — delivering quality solutions to manufacturers worldwide.
      </p>
    </section>

    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">
        What We Offer
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {whatWeOfferCards.map((card) => (
          <Card 
            key={card.title}
            className="p-6 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => navigate(card.page)}
          >
            <card.icon className="w-10 h-10 mx-auto text-primary mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
          </Card>
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">
        Why Choose MTS Tech
      </h2>
      <div className="space-y-6">
        {whyChooseCards.map((card) => (
          <Card key={card.title} className="p-6">
            <div className="flex items-start space-x-4">
              <card.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" strokeWidth={2} />
              <div>
                <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                <p className="mt-1 text-muted-foreground">{card.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>

    <section className="py-12 bg-secondary rounded-xl text-center">
      <h2 className="text-2xl font-extrabold text-foreground">Get in Touch</h2>
      <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
        Let us power your next project. Contact our team today for expert consultation and a competitive quote.
      </p>
      <div className="mt-6 max-w-sm mx-auto">
        <Button onClick={() => navigate('contact')} className="w-full" size="lg">
          Contact Our Team
        </Button>
      </div>
    </section>
  </main>
);
