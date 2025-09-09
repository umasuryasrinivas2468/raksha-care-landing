import { Button } from "@/components/ui/button";
import productRegular from "@/assets/product-regular.jpg";
import productUltraThin from "@/assets/product-ultra-thin.jpg";
import productEco from "@/assets/product-eco.jpg";
import { ShoppingCart, Star } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Regular Comfort Pads",
      price: "₹149",
      originalPrice: "₹199",
      image: productRegular,
      description: "Our classic comfort pads with superior absorption and all-day protection.",
      features: ["8-hour protection", "Soft cotton top sheet", "Leak-proof design"],
      rating: 4.8
    },
    {
      id: 2,
      name: "Ultra-Thin Pads",
      price: "₹179",
      originalPrice: "₹229",
      image: productUltraThin,
      description: "Ultra-thin design without compromising on protection and comfort.",
      features: ["Slim profile", "Maximum absorption", "Flexible fit"],
      rating: 4.9
    },
    {
      id: 3,
      name: "Eco-Friendly Pads",
      price: "₹199",
      originalPrice: "₹249",
      image: productEco,
      description: "100% biodegradable pads made from organic materials for the conscious woman.",
      features: ["Biodegradable", "Organic cotton", "Plastic-free"],
      rating: 4.7
    }
  ];

  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-6">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of premium sanitary pads designed to meet every woman's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card bg-card rounded-2xl p-6 shadow-lg fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-muted/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">{product.description}</p>
                
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={scrollToOrder}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;