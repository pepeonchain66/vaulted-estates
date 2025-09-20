import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Book, 
  Code, 
  Shield, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Download,
  Github,
  FileText,
  Lock,
  Users,
  TrendingUp
} from "lucide-react";

const Docs = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of tokenized real estate investment",
      icon: Book,
      articles: [
        "What is Real Estate Tokenization?",
        "Setting Up Your Wallet",
        "Making Your First Investment",
        "Understanding Tokens & Ownership"
      ]
    },
    {
      title: "Privacy & Security",
      description: "How we protect your investments and data",
      icon: Shield,
      articles: [
        "Zero-Knowledge Proofs Explained",
        "Anti-Front Running Protection",
        "Encrypted Valuations",
        "Smart Contract Security"
      ]
    },
    {
      title: "Investment Guide",
      description: "Strategies and best practices for investors",
      icon: TrendingUp,
      articles: [
        "Portfolio Diversification",
        "Risk Management",
        "Return Calculations",
        "Exit Strategies"
      ]
    },
    {
      title: "Developer Resources",
      description: "Technical documentation for builders",
      icon: Code,
      articles: [
        "API Reference",
        "Smart Contract Documentation",
        "Integration Guide",
        "SDK & Libraries"
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Whitepaper",
      description: "Technical overview of our platform",
      icon: FileText,
      external: true
    },
    {
      title: "GitHub Repository",
      description: "Open source components and examples",
      icon: Github,
      external: true
    },
    {
      title: "API Documentation",
      description: "Complete API reference and examples",
      icon: Code,
      external: true
    },
    {
      title: "Security Audit",
      description: "Third-party security assessment report",
      icon: Lock,
      external: true
    }
  ];

  const featuredArticles = [
    {
      title: "Understanding Real Estate Tokenization",
      description: "A comprehensive guide to how blockchain technology is revolutionizing real estate investment.",
      readTime: "8 min read",
      category: "Beginner"
    },
    {
      title: "Privacy-First Investment Platform",
      description: "Learn how zero-knowledge proofs protect your investment data while ensuring market transparency.",
      readTime: "12 min read", 
      category: "Advanced"
    },
    {
      title: "Smart Contract Architecture",
      description: "Deep dive into our smart contract design and security considerations for tokenized properties.",
      readTime: "15 min read",
      category: "Technical"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-background via-background/80 to-background border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <Book className="w-4 h-4 mr-2" />
              Knowledge Base
            </Badge>
            
            <h1 className="text-5xl font-bold leading-tight">
              Documentation &{" "}
              <span className="gradient-text">Resources</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand and use our tokenized real estate platform. 
              From basic concepts to advanced technical implementation.
            </p>

            <div className="relative max-w-md mx-auto">
              <input 
                placeholder="Search documentation..."
                className="w-full pl-4 pr-10 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                    {link.external && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-12 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Documentation Sections</h2>
            <p className="text-muted-foreground">Comprehensive guides organized by topic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {section.articles.map((article, i) => (
                      <div 
                        key={i}
                        className="flex items-center justify-between p-2 rounded hover:bg-card/50 transition-colors cursor-pointer group"
                      >
                        <span className="text-sm group-hover:text-primary transition-colors">{article}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-muted-foreground">Popular and essential reading for platform users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {article.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Developer Tools</h2>
            <p className="text-muted-foreground">Resources for building on our platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-background border border-border/50">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">SDK & Libraries</h3>
              <p className="text-sm text-muted-foreground mb-4">JavaScript and Python SDKs for platform integration</p>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download SDK
              </Button>
            </div>

            <div className="text-center p-6 rounded-lg bg-background border border-border/50">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">API Reference</h3>
              <p className="text-sm text-muted-foreground mb-4">Complete REST API documentation with examples</p>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Docs
              </Button>
            </div>

            <div className="text-center p-6 rounded-lg bg-background border border-border/50">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground mb-4">Join our developer community for support</p>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;