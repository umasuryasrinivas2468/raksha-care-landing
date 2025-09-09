import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Shield, Truck } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const OrderSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    product: '',
    quantity: '1'
  });

  const indianStates = [
    'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Gujarat', 'Haryana', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu',
    'Telangana', 'Uttar Pradesh', 'West Bengal'
  ];

  const products = [
    { id: 'regular', name: 'Regular Comfort Pads', price: 149 },
    { id: 'ultra-thin', name: 'Ultra-Thin Pads', price: 179 },
    { id: 'eco', name: 'Eco-Friendly Pads', price: 199 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.address || !formData.city || !formData.state || !formData.pincode || !formData.product) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields marked with * are required to complete your order.",
        variant: "destructive"
      });
      return;
    }

    // Here you would integrate with payment gateway
    toast({
      title: "Order submitted successfully!",
      description: "We'll process your order and send you payment instructions via email."
    });
    
    console.log('Order submitted:', formData);
  };

  const selectedProduct = products.find(p => p.id === formData.product);
  const totalPrice = selectedProduct ? selectedProduct.price * parseInt(formData.quantity) : 0;

  return (
    <section id="order" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-6">Place Your Order</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience premium comfort and protection? Fill out the form below to place your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg fade-in">
              <h3 className="text-2xl font-semibold text-foreground mb-8">Order Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="form-field">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="rounded-lg"
                    required
                  />
                </div>
                
                <div className="form-field">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="form-field mb-6">
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="rounded-lg"
                  required
                />
              </div>

              <div className="form-field mb-6">
                <Label htmlFor="address" className="text-sm font-medium text-foreground mb-2 block">Complete Address *</Label>
                <Textarea
                  id="address"
                  placeholder="House/Flat No., Street, Area, Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="rounded-lg min-h-[80px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="form-field">
                  <Label htmlFor="city" className="text-sm font-medium text-foreground mb-2 block">City *</Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="rounded-lg"
                    required
                  />
                </div>
                
                <div className="form-field">
                  <Label className="text-sm font-medium text-foreground mb-2 block">State *</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map(state => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="form-field">
                  <Label htmlFor="pincode" className="text-sm font-medium text-foreground mb-2 block">PIN Code *</Label>
                  <Input
                    id="pincode"
                    type="text"
                    placeholder="400001"
                    value={formData.pincode}
                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                    className="rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="form-field">
                  <Label className="text-sm font-medium text-foreground mb-2 block">Product *</Label>
                  <Select value={formData.product} onValueChange={(value) => setFormData({...formData, product: value})}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map(product => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} - ₹{product.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="form-field">
                  <Label htmlFor="quantity" className="text-sm font-medium text-foreground mb-2 block">Quantity</Label>
                  <Select value={formData.quantity} onValueChange={(value) => setFormData({...formData, quantity: value})}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                <CreditCard className="mr-2 h-5 w-5" />
                Proceed to Payment - ₹{totalPrice}
              </Button>
            </form>
          </div>

          <div className="space-y-6 fade-in-delay">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Order Summary</h3>
              {selectedProduct ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{selectedProduct.name}</span>
                    <span className="font-medium">₹{selectedProduct.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity</span>
                    <span className="font-medium">{formData.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-secondary">Free</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-foreground">Total</span>
                      <span className="text-lg font-semibold text-primary">₹{totalPrice}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">Select a product to see order summary</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Secure checkout with SSL encryption</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Truck className="h-5 w-5 text-secondary" />
                <span>Free delivery across India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <CreditCard className="h-5 w-5 text-secondary" />
                <span>Multiple payment options available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;