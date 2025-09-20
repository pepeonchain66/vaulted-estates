import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter
} from "lucide-react";

const Analytics = () => {
  const marketMetrics = [
    {
      title: "Total Value Locked",
      value: "$24.2M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Active Investors",
      value: "12,847",
      change: "+8.3%", 
      trend: "up",
      icon: Activity
    },
    {
      title: "Properties Listed",
      value: "156",
      change: "+15.2%",
      trend: "up", 
      icon: PieChart
    },
    {
      title: "Average APY",
      value: "8.7%",
      change: "-0.3%",
      trend: "down",
      icon: TrendingUp
    }
  ];

  const topPerformingProperties = [
    {
      name: "Manhattan Plaza",
      location: "New York, NY",
      apy: "9.5%",
      returns: "+$45K",
      trend: "up"
    },
    {
      name: "Tech Hub Office", 
      location: "San Francisco, CA",
      apy: "8.8%",
      returns: "+$38K",
      trend: "up"
    },
    {
      name: "Luxury Residential",
      location: "Miami, FL",
      apy: "9.1%",
      returns: "+$29K", 
      trend: "up"
    },
    {
      name: "Waterfront Complex",
      location: "Seattle, WA",
      apy: "7.2%",
      returns: "+$22K",
      trend: "down"
    }
  ];

  const marketActivity = [
    { time: "2 hours ago", event: "New property listed", detail: "Downtown Retail - Chicago, IL" },
    { time: "4 hours ago", event: "Property fully funded", detail: "Corporate Tower - Los Angeles, CA" },
    { time: "6 hours ago", event: "Dividend distributed", detail: "Manhattan Plaza - $2,400" },
    { time: "8 hours ago", event: "New investor joined", detail: "Wallet: 0x742d...a9f1" },
    { time: "12 hours ago", event: "Property valuation updated", detail: "Tech Hub Office +2.3%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-background via-background/80 to-background border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <BarChart3 className="w-4 h-4 mr-2" />
              Real-Time Data
            </Badge>
            
            <h1 className="text-5xl font-bold leading-tight">
              Market{" "}
              <span className="gradient-text">Analytics</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive insights into the tokenized real estate market. 
              Track performance, trends, and opportunities in real-time.
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Last 30 Days
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter Data
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;
              
              return (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                    <div className={`flex items-center gap-1 text-sm ${
                      metric.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}>
                      <TrendIcon className="w-4 h-4" />
                      {metric.change}
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {metric.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance Chart */}
            <div className="p-6 rounded-lg bg-background border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Portfolio Performance</h3>
                <Button variant="outline" size="sm">30D</Button>
              </div>
              
              <div className="h-64 bg-gradient-to-t from-primary/5 to-transparent rounded-lg flex items-end justify-center">
                <div className="text-center space-y-2">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto" />
                  <p className="text-sm text-muted-foreground">Interactive chart coming soon</p>
                </div>
              </div>
            </div>

            {/* Distribution Chart */}
            <div className="p-6 rounded-lg bg-background border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Asset Distribution</h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <PieChart className="w-12 h-12 text-accent mx-auto" />
                  <p className="text-sm text-muted-foreground">Distribution chart coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Performing Properties */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Properties */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Top Performing Properties</h3>
              
              <div className="space-y-4">
                {topPerformingProperties.map((property, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{property.name}</h4>
                        <p className="text-sm text-muted-foreground">{property.location}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{property.apy}</div>
                        <div className={`text-sm flex items-center gap-1 ${
                          property.trend === "up" ? "text-green-500" : "text-red-500"
                        }`}>
                          {property.trend === "up" ? 
                            <ArrowUpRight className="w-3 h-3" /> : 
                            <ArrowDownRight className="w-3 h-3" />
                          }
                          {property.returns}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Activity */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Recent Market Activity</h3>
              
              <div className="space-y-4">
                {marketActivity.map((activity, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-card/30 border border-border/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{activity.event}</h4>
                        <p className="text-sm text-muted-foreground">{activity.detail}</p>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <Button variant="outline">View All Activity</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Statistics</h2>
            <p className="text-muted-foreground">Real-time data from our tokenization ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">156</div>
              <div className="text-xs text-muted-foreground">Properties</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-accent">$24.2M</div>
              <div className="text-xs text-muted-foreground">Total Value</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">12,847</div>
              <div className="text-xs text-muted-foreground">Investors</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-accent">8.7%</div>
              <div className="text-xs text-muted-foreground">Avg APY</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">94%</div>
              <div className="text-xs text-muted-foreground">Funded</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-accent">15</div>
              <div className="text-xs text-muted-foreground">Cities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;