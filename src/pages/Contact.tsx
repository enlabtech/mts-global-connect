import { useState, FormEvent, ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Box, Phone, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ 
    name: '', 
    email: '', 
    company: '', 
    message: '' 
  });
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Form Submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We will get back to you shortly.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <main className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Contact Us</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-4xl">
          Get in touch with our team to discuss your industrial equipment needs.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Quick Contact</h2>
            <Card className="p-4 flex justify-between items-center hover:bg-secondary transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <Box className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">bd@mtstech.cn</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-muted-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Card>
            <Card className="p-4 flex justify-between items-center hover:bg-secondary transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+8801612984848</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-muted-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Business Hours</h2>
            <Card className="p-4 space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Monday - Friday:</span>
                <span className="text-muted-foreground">9:00 AM - 6:00 PM (CST)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Saturday:</span>
                <span className="text-muted-foreground">9:00 AM - 1:00 PM (CST)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-destructive" />
                <span className="font-semibold text-foreground">Sunday:</span>
                <span className="text-destructive">Closed</span>
              </div>
            </Card>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">Our Location</h2>
            <Card className="p-4 flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground">
                Based in China, serving manufacturers worldwide with logistics and distribution support.
              </p>
            </Card>
          </section>
        </div>

        <Card className="p-8 lg:col-span-2">
          <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@company.com"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name (optional)"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your equipment needs..."
                required
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full mt-6" size="lg">
              Send Message
            </Button>
            
            <p className="text-xs text-muted-foreground mt-2">
              We aim to respond within one business day.
            </p>
          </form>
        </Card>
      </div>
    </main>
  );
};
