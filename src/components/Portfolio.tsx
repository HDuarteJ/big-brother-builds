import deckImage from "@/assets/deck-work.jpg";
import kitchenImage from "@/assets/kitchen-cabinets.jpg";
import renovationImage from "@/assets/renovation.jpg";

const projects = [
  {
    image: deckImage,
    title: "Custom Deck Build",
    category: "Outdoor Living"
  },
  {
    image: kitchenImage,
    title: "Kitchen Cabinetry",
    category: "Interior Work"
  },
  {
    image: renovationImage,
    title: "Complete Home Renovation",
    category: "Full Remodel"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the quality and craftsmanship we bring to every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-semibold text-accent-foreground mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-heading text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
