import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Home, Wrench, Building2 } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Custom Carpentry",
    description: "Bespoke woodwork tailored to your specific needs. From furniture to built-ins, we create pieces that perfectly fit your space and style."
  },
  {
    icon: Home,
    title: "Home Renovations",
    description: "Complete renovation services to transform your living space. Kitchen remodels, bathroom upgrades, and full home makeovers."
  },
  {
    icon: Wrench,
    title: "Deck & Outdoor Structures",
    description: "Beautiful outdoor living spaces including custom decks, pergolas, and gazebos. Built to last and designed to impress."
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Professional contracting for businesses. Office renovations, retail spaces, and commercial carpentry with minimal disruption."
  }
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive carpentry and contracting solutions for every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
