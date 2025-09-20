import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp, MapPin, DollarSign } from "lucide-react";

const Properties = () => {
  const allProperties = [
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
    {
      id: "4",
      name: "Downtown Retail",
      location: "Chicago, IL",
      totalValue: "$1.5M",
      tokensAvailable: 750,
      totalTokens: 1500,
      apy: "6.8%",
      encrypted: false,
    },
    {
      id: "5",
      name: "Waterfront Complex",
      location: "Seattle, WA",
      totalValue: "$4.1M",
      tokensAvailable: 1650,
      totalTokens: 4100,
      apy: "9.3%",
      encrypted: true,
    },
    {
      id: "6",
      name: "Corporate Tower",
      location: "Los Angeles, CA",
      totalValue: "$5.2M",
      tokensAvailable: 2080,
      totalTokens: 5200,
      apy: "7.9%",
      encrypted: false,
    },
  ];

  const categories = ["All Properties", "Residential", "Commercial", "Mixed Use"];
  const sortOptions = ["Newest", "Highest APY", "Lowest Price", "Most Available"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-background via-background/80 to-background border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <TrendingUp className="w-4 h-4 mr-2" />
              Live Property Market
            </Badge>
            
            <h1 className="text-5xl font-bold leading-tight">
              Tokenized Real Estate{" "}
              <span className="gradient-text">Marketplace</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium real estate investments with fractional ownership. 
              Start building your portfolio from $100.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{allProperties.length}</div>
                <div className="text-sm text-muted-foreground">Active Properties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">$18.2M</div>
                <div className="text-sm text-muted-foreground">Available Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7.8%</div>
                <div className="text-sm text-muted-foreground">Avg. Returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card/20 border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === "All Properties" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input 
                  placeholder="Search properties..."
                  className="pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              
              <select className="px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Market Overview</h2>
            <p className="text-muted-foreground">Real-time statistics from our tokenized property ecosystem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-background border border-border/50">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border border-border/50">
              <DollarSign className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-2xl font-bold text-accent">$18.2M</div>
              <div className="text-sm text-muted-foreground">Total Value</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border border-border/50">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary">7.8%</div>
              <div className="text-sm text-muted-foreground">Avg. APY</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border border-border/50">
              <Badge className="w-8 h-8 text-accent mx-auto mb-4 flex items-center justify-center">24</Badge>
              <div className="text-2xl font-bold text-accent">4,250</div>
              <div className="text-sm text-muted-foreground">Investors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;