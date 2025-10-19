import { Button } from "@/components/ui/button";
import heroImage from "@/assets/deck_background.webp";
import logo from "@/assets/big_brother_logo.png";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-black h-screen relative h-[calc(100vh*1.1)] flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(223, 243, 10, 0.05), rgba(24, 14, 12, 0.90)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}

      <div className="flex-col items-center justify-center align-center container relative z-10 px-4 md:px-6 py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo with Glassmorphism Effect */}
          <div className="mb-8 inline-block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-14 border border-white/20 shadow-2xl">
              <img 
                src={logo} 
                alt="Big Brother Contracting" 
                className="h-32 md:h-60 w-auto mx-auto"
              />
            </div>
          </div>
          
          {/* Tagline */}
          <h1 className="border-b border-orange-500 font-heading text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight py-8">
            We Help You Build Your Dreams
          </h1> 
        </div>
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-xl md:text-2xl text-primary-foreground/90 mt-auto mb-8 font-medium">
            Quality Craftsmanship You Can Trust
          </p>
          {/* <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Professional carpentry and renovation services for residential and commercial projects. 
            From custom decks to complete home renovations, we bring your vision to life.
          </p> */}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-heading font-semibold text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                fill="#f4f3f3ff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
