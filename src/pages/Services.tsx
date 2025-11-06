import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ShieldCheck, MessageSquare, Truck, Wrench, Users, Check } from "lucide-react";

const servicesList = [
  { icon: ShoppingCart, title: "Equipment Procurement", description: "Comprehensive sourcing and procurement services for industrial machinery and equipment from verified Chinese manufacturers.", features: ["Access to extensive network of manufacturers", "Competitive pricing negotiation", "Product specification verification", "Factory background checks"] },
  { icon: ShieldCheck, title: "Quality Inspection", description: "Rigorous quality control and inspection processes to ensure all equipment meets international standards and specifications.", features: ["Pre-shipment inspections", "Factory audit services", "Product testing and certification", "Detailed inspection reports"] },
  { icon: MessageSquare, title: "Technical Consultation", description: "Expert technical guidance and consultation to help you select the right equipment for your specific manufacturing needs.", features: ["Equipment selection advice", "Technical specifications review", "Process optimization recommendations", "Technology upgrade consulting"] },
  { icon: Truck, title: "Export & Logistics", description: "Complete export documentation and logistics coordination to ensure smooth international shipping and customs clearance.", features: ["Export documentation handling", "Customs clearance support", "International shipping coordination", "Delivery tracking and monitoring"] },
  { icon: Wrench, title: "After-Sales Support", description: "Ongoing technical support and spare parts supply to keep your equipment running at peak performance.", features: ["Technical troubleshooting assistance", "Spare parts procurement", "Maintenance guidance", "Warranty claim support"] },
  { icon: Users, title: "Custom Solutions", description: "Tailored equipment and system design services for unique manufacturing requirements and specialized applications.", features: ["Custom machinery design", "System integration planning", "Specialized equipment sourcing", "Project management support"] },
];

const processSteps = [
  { step: 1, title: "Initial Consultation", description: "We discuss your requirements and manufacturing needs in detail." },
  { step: 2, title: "Solution Design", description: "We identify and recommend the best equipment and suppliers for your needs." },
  { step: 3, title: "Quality Assurance", description: "Rigorous inspection and testing before shipment." },
  { step: 4, title: "Logistics & Export", description: "Complete export and shipping coordination to your location." },
  { step: 5, title: "Ongoing Support", description: "Continuous technical assistance and spare parts supply." },
];

interface ServicesProps { navigate: (page: string) => void; }

export const Services = ({ navigate }: ServicesProps) => (
  <main className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section className="animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Services</h1>
      <p className="mt-3 text-lg text-muted-foreground max-w-4xl">Comprehensive support throughout your equipment procurement and implementation journey.</p>
    </section>

    <section className="space-y-8">
      {servicesList.map((service, index) => (
        <Card key={index} className="p-8 group hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex items-start space-x-4">
            <service.icon className="w-10 h-10 text-primary flex-shrink-0 mt-1 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
            <div>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Key Features:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-muted-foreground">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" strokeWidth={3} /><span className="text-sm">{feature}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </section>

    <section className="space-y-8 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">Our Process</h2>
      <div className="relative border-l-2 border-primary/30 pl-8 space-y-10 md:pl-10 md:ml-6">
        {processSteps.map((step, index) => (
          <div key={step.step} className="relative animate-slide-in-left" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="absolute -left-12 top-0 md:-left-12 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg glow-cyan">{step.step}</div>
            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
            <p className="mt-1 text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-12 rounded-xl text-center relative overflow-hidden glass-effect border border-primary/20 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold text-foreground">Ready to Get Started?</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Contact us today to discuss your equipment needs and discover how we can help power your manufacturing success.</p>
        <div className="mt-8 max-w-xs mx-auto"><Button onClick={() => navigate('contact')} size="lg" className="w-full">Request a Consultation</Button></div>
      </div>
    </section>
  </main>
);
