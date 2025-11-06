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
  { icon: Check, title: "Reliability", description: "Trusted by manufacturers worldwide for consistent quality and on-time delivery of industrial solutions." },
  { icon: Lightbulb, title: "Innovation", description: "Cutting-edge mold machinery and equipment that drives efficiency and productivity in modern manufacturing." },
  { icon: Users, title: "Partnership", description: "Building long-term relationships through dedicated support, expert consultation, and tailored solutions." },
];

interface HomeProps {
  navigate: (page: string) => void;
}

export const Home = ({ navigate }: HomeProps) => (
  <main className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section className="text-center animate-fade-in-up">
      <div className="animate-float">
        <MtsLogo className="h-20 w-20 mx-auto animate-glow-pulse" color="hsl(193 100% 50%)" />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mt-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
        MTS TECH
      </h1>
      <p className="text-lg font-semibold text-primary mt-3 tracking-wider">PRECISION. POWER. PARTNERSHIP.</p>
      <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Your trusted supplier and trading partner for high-performance mold machinery and industrial equipment. We connect technology with trust — delivering quality solutions to manufacturers worldwide.
      </p>
    </section>

    <section className="space-y-6 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">What We Offer</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {whatWeOfferCards.map((card, index) => (
          <Card key={card.title} className="p-6 text-center cursor-pointer group hover:scale-105 hover:glow-cyan transition-all duration-300 animate-fade-in" onClick={() => navigate(card.page)} style={{ animationDelay: `${index * 0.1}s` }}>
            <card.icon className="w-10 h-10 mx-auto text-primary mb-3 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
          </Card>
        ))}
      </div>
    </section>

    <section className="space-y-6 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">Why Choose MTS Tech</h2>
      <div className="space-y-6">
        {whyChooseCards.map((card, index) => (
          <Card key={card.title} className="p-6 group hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="flex items-start space-x-4">
              <card.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:text-accent transition-colors duration-300" strokeWidth={2} />
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="mt-1 text-muted-foreground">{card.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>

    <section className="py-12 rounded-xl text-center relative overflow-hidden glass-effect border border-primary/20 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold text-foreground">Get in Touch</h2>
        <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
          Let us power your next project. Contact our team today for expert consultation and a competitive quote.
        </p>
        <div className="mt-8 max-w-sm mx-auto">
          <Button onClick={() => navigate('contact')} size="lg" className="w-full">Contact Our Team</Button>
        </div>
      </div>
    </section>
  </main>
);
