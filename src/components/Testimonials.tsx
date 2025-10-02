import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text: "Big Brother Contracting transformed our backyard with a beautiful custom deck. The attention to detail and quality of work exceeded our expectations. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    text: "Professional, reliable, and skilled. They renovated our office space on time and within budget. The team was respectful and the craftsmanship is top-notch."
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    text: "We've worked with Big Brother Contracting on multiple projects. Their consistency, quality, and communication make them our go-to contractor."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg bg-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-bold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
