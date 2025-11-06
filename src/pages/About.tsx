import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Lightbulb, Users, Globe, Award } from "lucide-react";

const coreValues = [
  { 
    icon: Check, 
    title: "Reliability", 
    description: "We stand behind every product and service we deliver, ensuring consistent quality and dependable performance that our clients can trust." 
  },
  { 
    icon: Lightbulb, 
    title: "Innovation", 
    description: "We continuously seek out the latest technological advancements to provide our clients with state-of-the-art solutions that drive competitive advantage." 
  },
  { 
    icon: Users, 
    title: "Partnership", 
    description: "We build long-term relationships based on mutual respect, transparency, and shared success with every client we serve." 
  },
  { 
    icon: Globe, 
    title: "Global Reach", 
    description: "Based in China with a worldwide perspective, we connect international manufacturers with the best industrial solutions across borders." 
  },
  { 
    icon: Award, 
    title: "Excellence", 
    description: "We are committed to excellence in every aspect of our business, from product selection to customer service and ongoing support." 
  },
];

interface AboutProps {
  navigate: (page: string) => void;
}

export const About = ({ navigate }: AboutProps) => (
  <main className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section>
      <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">About MTS Tech</h1>
      <Card className="p-6 mt-4">
        <p className="text-lg text-foreground">
          MTS Tech is a leading Chinese-based trading and supplier company specializing in high-performance mold machinery, 
          industrial equipment, and advanced technology solutions for manufacturers worldwide.
        </p>
        <p className="mt-4 text-lg text-foreground">
          With a commitment to excellence and innovation, we bridge the gap between cutting-edge technology and reliable partnership, 
          ensuring our clients receive the best equipment and support for their manufacturing needs.
        </p>
      </Card>
    </section>

    <section className="space-y-10">
      <Card className="p-6 space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">
          Our Mission
        </h2>
        <p className="text-lg text-foreground">
          To deliver world-class industrial machinery and equipment that empowers manufacturers to achieve precision, 
          efficiency, and growth in their operations.
        </p>
      </Card>

      <Card className="p-6 space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">
          Our Vision
        </h2>
        <p className="text-lg text-foreground">
          To be the most trusted global partner for industrial technology solutions, recognized for our reliability, 
          innovation, and commitment to customer success.
        </p>
      </Card>

      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <Card key={index} className="p-6">
              <value.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
              <p className="mt-1 text-muted-foreground text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </section>

    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 border-b-2 border-primary/10 pb-2">
        Why Choose MTS Tech
      </h2>
      <Card className="p-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
          {[
            "Extensive network of trusted manufacturers and suppliers in China",
            "Rigorous quality control and inspection processes",
            "Expert consultation and technical support",
            "Competitive pricing and flexible payment terms",
            "Comprehensive export and logistics support",
            "Multilingual customer service team"
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>

    <section className="py-12 bg-secondary rounded-xl text-center">
      <h2 className="text-2xl font-extrabold text-foreground">Partner with Us</h2>
      <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
        Ready to experience the MTS Tech difference? Contact our global team today.
      </p>
      <div className="mt-6 max-w-xs mx-auto">
        <Button onClick={() => navigate('contact')} className="w-full" size="lg">
          Contact for Partnership
        </Button>
      </div>
    </section>
  </main>
);
