import { Logo } from "@/components/Logo";
import { WalletConnection } from "@/components/WalletConnection";
import { VirtualCityscape } from "@/components/VirtualCityscape";
import { PropertyCard } from "@/components/PropertyCard";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, TrendingUp, Users, Building, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-cityscape.jpg";

const Index = () => {
  const featuredProperties = [
    {
      id: "1",
      name: "Manhattan Plaza",
      location: "New York, NY",
      totalValue: "$2.4M",
      tokensAvailable: 1250,
      totalTokens: 2400,
      apy: "8.5%",
      encrypted: true,
    },
    {
      id: "2", 
      name: "Tech Hub Office",
      location: "San Francisco, CA",
      totalValue: "$3.2M",
      tokensAvailable: 890,
      totalTokens: 3200,
      apy: "7.2%",
      encrypted: false,
    },
    {
      id: "3",
      name: "Luxury Residential",
      location: "Miami, FL", 
      totalValue: "$1.8M",
      tokensAvailable: 2100,
      totalTokens: 1800,
      apy: "9.1%",
      encrypted: true,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Private by Design",
      description: "Zero-knowledge proofs protect all valuations until finalization"
    },
    {
      icon: Lock,
      title: "Anti-Front Running",
      description: "Encrypted data prevents market manipulation and unfair advantages"
    },
    {
      icon: TrendingUp,
      title: "Optimized Returns",
      description: "Smart contracts automatically distribute dividends and rewards"
    },
    {
      icon: Users,
      title: "Fractional Ownership",
      description: "Own portions of premium real estate starting from $100"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/properties" className="text-foreground hover:text-primary transition-colors">Properties</Link>
              <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">How it Works</Link>
              <Link to="/analytics" className="text-foreground hover:text-primary transition-colors">Analytics</Link>
              <Link to="/docs" className="text-foreground hover:text-primary transition-colors">Docs</Link>
            </div>

            <WalletConnection />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <Zap className="w-4 h-4 mr-2" />
              Private Beta Now Live
            </Badge>
            
            <h1 className="text-6xl font-bold leading-tight">
              Own Real Estate,{" "}
              <span className="gradient-text">Privately on Chain</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Democratize real estate investment through secure tokenization. 
              Property valuations remain encrypted until finalization, preventing front-running 
              and ensuring fair market access for all investors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/properties">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Building className="w-5 h-5 mr-2" />
                  Explore Properties
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$24M+</div>
                <div className="text-sm text-muted-foreground">Total Value Locked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">12,500+</div>
                <div className="text-sm text-muted-foreground">Token Holders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8.7%</div>
                <div className="text-sm text-muted-foreground">Avg. APY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Dashboard */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Virtual Real Estate Dashboard</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our 3D visualization of tokenized properties. 
              Encrypted buildings show locked valuations awaiting finalization.
            </p>
          </div>
          
          <VirtualCityscape />
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              🔒 Buildings with green windows represent encrypted properties
              • 🔓 Blue windows show public valuations
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Privacy & Security</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Advanced cryptographic techniques ensure fair markets and protect investor interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground text-lg">
              Premium real estate opportunities now available for tokenized investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/properties">
              <Button variant="hero" size="lg">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <AnimatedFooter />
    </div>
  );
};

export default Index;