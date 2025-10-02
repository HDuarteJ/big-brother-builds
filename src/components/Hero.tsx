import heroImage from "@/assets/hero-carpentry.jpg";
import logo from "@/assets/big-brother-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo with Glassmorphism Effect */}
          <div className="mb-8 inline-block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <img 
                src={logo} 
                alt="Big Brother Contracting" 
                className="h-32 md:h-40 w-auto mx-auto"
              />
            </div>
          </div>
          
          {/* Tagline */}
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            We Help You Build Your Dreams
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
