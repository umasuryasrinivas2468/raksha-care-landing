import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-heading text-foreground">Raksha Hygiene</h1>
            <p className="text-xs text-muted-foreground">Protecting Women, Protecting the Planet</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('sustainability')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Sustainability
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
          <Button 
            variant="cta" 
            size="sm"
            onClick={() => scrollToSection('order')}
          >
            Shop Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;