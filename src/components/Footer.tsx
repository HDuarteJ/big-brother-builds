const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              Big Brother Contracting
            </h3>
            <p className="text-primary-foreground/80">
              Quality craftsmanship and reliable service for all your carpentry and renovation needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Custom Carpentry</li>
              <li>Home Renovations</li>
              <li>Deck Building</li>
              <li>Commercial Projects</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@bigbrothercontracting.com</li>
              <li>Serving the Greater Area</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Big Brother Contracting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
