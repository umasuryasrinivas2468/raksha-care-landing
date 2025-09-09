import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
                Protecting Women,
                <span className="text-primary block">Protecting the Planet</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Experience comfort, safety, and sustainability with Raksha Hygiene's premium sanitary pads. 
                Made for modern women who care about their health and the environment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToOrder}
                className="shadow-2xl"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative fade-in-delay">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Premium sanitary pads - comfortable, safe, and eco-friendly"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;