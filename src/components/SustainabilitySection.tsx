import sustainabilityImage from "@/assets/sustainability-infographic.jpg";
import { Leaf, Recycle, TreePine, Droplets } from "lucide-react";

const SustainabilitySection = () => {
  const initiatives = [
    {
      icon: TreePine,
      title: "Biodegradable Materials",
      description: "Our pads decompose naturally within 6 months, unlike conventional pads that take 500-800 years.",
      impact: "90% less environmental impact"
    },
    {
      icon: Recycle,
      title: "Reduced Plastic Use",
      description: "We've eliminated 95% of plastic from our packaging, using recycled and recyclable materials.",
      impact: "50 tons less plastic annually"
    },
    {
      icon: Droplets,
      title: "Water-Conscious Production",
      description: "Our manufacturing process uses 40% less water compared to traditional methods.",
      impact: "1 million liters saved yearly"
    },
    {
      icon: Leaf,
      title: "Organic Cotton",
      description: "Made with 100% organic cotton that's grown without harmful pesticides or chemicals.",
      impact: "Chemical-free farming"
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-6">For the Planet</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're committed to creating products that care for your body and protect our environment. 
            Every choice we make is guided by our responsibility to future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8 fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => {
                const Icon = initiative.icon;
                return (
                  <div 
                    key={index}
                    className="product-card bg-card rounded-xl p-6 text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{initiative.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{initiative.description}</p>
                    <div className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {initiative.impact}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative fade-in-delay">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={sustainabilityImage} 
                alt="Sustainability infographic showing our eco-friendly initiatives"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 text-center fade-in">
          <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Our Environmental Promise</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto">
            By 2025, we pledge to be completely carbon neutral and eliminate all non-biodegradable materials 
            from our products. Join us in creating a sustainable future where periods don't cost the earth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Biodegradable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">6 months</div>
              <div className="text-sm text-muted-foreground">Decomposition time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Less plastic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Carbon</div>
              <div className="text-sm text-muted-foreground">Neutral by 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;