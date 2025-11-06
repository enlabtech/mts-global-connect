import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Wrench, Box, Info, Truck, ShieldCheck } from "lucide-react";

const productCategories = ["All", "Molding Equipment", "Automation Tools", "Components", "Control Systems", "Testing Equipment"];

const productList = [
  { icon: Package, title: "Injection Molding Machines", description: "High-precision injection molding machines for plastic manufacturing with advanced control systems.", category: "Molding Equipment" },
  { icon: Package, title: "Blow Molding Equipment", description: "State-of-the-art blow molding machines for hollow plastic product production.", category: "Molding Equipment" },
  { icon: Wrench, title: "CNC Machining Centers", description: "Multi-axis CNC machining centers for precision metal and component manufacturing.", category: "Automation Tools" },
  { icon: Wrench, title: "Industrial Robots", description: "Programmable industrial robots for assembly, welding, and material handling operations.", category: "Automation Tools" },
  { icon: Box, title: "Mold Components", description: "High-quality mold bases, cores, cavities, and precision components for tool making.", category: "Components" },
  { icon: Box, title: "Hydraulic Systems", description: "Heavy-duty hydraulic power units, pumps, and control systems for industrial machinery.", category: "Control Systems" },
  { icon: Info, title: "Temperature Controllers", description: "Precision temperature control units for mold heating and cooling applications.", category: "Control Systems" },
  { icon: Truck, title: "Material Handling Systems", description: "Automated conveyor systems and material handling equipment for production lines.", category: "Automation Tools" },
  { icon: Package, title: "Extrusion Machinery", description: "High-output extrusion lines for plastic profiles, pipes, and sheet production.", category: "Molding Equipment" },
  { icon: ShieldCheck, title: "Quality Inspection Equipment", description: "Advanced measuring and inspection tools for quality control and assurance.", category: "Testing Equipment" },
];

interface ProductsProps {
  navigate: (page: string) => void;
}

export const Products = ({ navigate }: ProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? productList
    : productList.filter(p => p.category === selectedCategory);

  return (
    <main className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Our Products</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-4xl">
          Comprehensive range of industrial machinery and equipment for modern manufacturing.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {productCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-secondary border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.title} className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <product.icon className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} />
                <span className="text-xs font-semibold px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
              <p className="mt-2 text-muted-foreground">{product.description}</p>
            </div>
            <button 
              onClick={() => navigate('contact')} 
              className="mt-4 text-primary font-semibold flex items-center hover:text-accent transition-colors"
            >
              Request Info &rarr;
            </button>
          </Card>
        ))}
      </section>

      <section className="py-12 bg-secondary rounded-xl text-center shadow-inner">
        <h2 className="text-2xl font-extrabold text-foreground">Need a Custom Solution?</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Cannot find what you are looking for? Contact us for custom machinery solutions tailored to your specific requirements.
        </p>
        <div className="mt-6 max-w-xs mx-auto">
          <Button onClick={() => navigate('contact')} className="w-full" size="lg">
            Contact Our Team
          </Button>
        </div>
      </section>
    </main>
  );
};
