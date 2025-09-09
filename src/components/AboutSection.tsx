import { Heart, Shield, Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-6">About Raksha Hygiene</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe every woman deserves access to safe, comfortable, and sustainable hygiene products. 
            Our mission is to empower women while protecting our planet for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 product-card bg-card rounded-2xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Empowering Women</h3>
            <p className="text-muted-foreground">
              We provide affordable, high-quality hygiene products that give women confidence and comfort during their menstrual cycle.
            </p>
          </div>

          <div className="text-center p-8 product-card bg-card rounded-2xl">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Premium Quality</h3>
            <p className="text-muted-foreground">
              Our products are designed with the latest technology to ensure maximum comfort, protection, and peace of mind.
            </p>
          </div>

          <div className="text-center p-8 product-card bg-card rounded-2xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Eco-Friendly</h3>
            <p className="text-muted-foreground">
              Made with biodegradable materials and sustainable practices, our products care for both you and the environment.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg fade-in-delay">
          <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Our Story</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Raksha Hygiene was founded with a simple yet powerful vision: to create a world where every woman has access to 
            safe, comfortable, and sustainable menstrual products. We started as a small team of passionate individuals who 
            recognized the need for better hygiene solutions that don't compromise on quality or environmental responsibility.
            <br /><br />
            Today, we're proud to serve thousands of women across the country, providing them with products that not only 
            meet their needs but exceed their expectations. Every pad we create is a step towards a healthier, more 
            sustainable future for all women.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;