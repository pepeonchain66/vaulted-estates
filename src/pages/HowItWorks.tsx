import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  TrendingUp, 
  Users, 
  Building, 
  Zap,
  ArrowRight,
  CheckCircle,
  Wallet,
  FileText,
  PieChart
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Wallet",
      description: "Link your Web3 wallet to access the platform and manage your investments securely.",
      icon: Wallet,
      details: [
        "MetaMask, WalletConnect supported",
        "Secure authentication",
        "No personal data stored"
      ]
    },
    {
      number: "02", 
      title: "Browse Properties",
      description: "Explore our curated selection of premium real estate opportunities across major cities.",
      icon: Building,
      details: [
        "Verified property listings",
        "Detailed financial metrics",
        "Professional photography"
      ]
    },
    {
      number: "03",
      title: "Review Investment Terms",
      description: "Understand the tokenization structure, expected returns, and privacy protections.",
      icon: FileText,
      details: [
        "Transparent fee structure",
        "Legal documentation",
        "Risk assessments"
      ]
    },
    {
      number: "04",
      title: "Purchase Tokens",
      description: "Buy fractional ownership tokens starting from $100. Your investment remains private until finalization.",
      icon: PieChart,
      details: [
        "Minimum $100 investment",
        "Encrypted transactions",
        "Instant token delivery"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "Zero-knowledge proofs keep your investment details private until property finalization."
    },
    {
      icon: Lock,
      title: "Anti-Front Running", 
      description: "Encrypted valuations prevent market manipulation and ensure fair pricing for all investors."
    },
    {
      icon: TrendingUp,
      title: "Automated Returns",
      description: "Smart contracts automatically distribute rental income and appreciation gains to token holders."
    },
    {
      icon: Users,
      title: "Fractional Access",
      description: "Own portions of premium real estate that would otherwise be inaccessible to individual investors."
    }
  ];

  const faqs = [
    {
      question: "How does tokenization work?",
      answer: "Each property is divided into tokens representing fractional ownership. When you buy tokens, you own a proportional share of the property and its income."
    },
    {
      question: "What makes this platform private?",
      answer: "We use zero-knowledge proofs and encryption to keep investment details confidential until property sales finalize, preventing front-running."
    },
    {
      question: "How do I receive returns?",
      answer: "Returns are automatically distributed through smart contracts. Rental income is paid monthly, while appreciation is realized when properties are sold."
    },
    {
      question: "What's the minimum investment?",
      answer: "You can start investing with as little as $100, making premium real estate accessible to everyone."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-background via-background/80 to-background border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <Zap className="w-4 h-4 mr-2" />
              Learn the Process
            </Badge>
            
            <h1 className="text-5xl font-bold leading-tight">
              How{" "}
              <span className="gradient-text">Tokenization</span>{" "}
              Works
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we're revolutionizing real estate investment through 
              blockchain technology and privacy-preserving protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Investment Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four simple steps to start building your real estate portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-primary/60">{step.number}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button variant="hero" size="lg">
              Start Investing Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Advanced technology meets traditional real estate investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Get answers to common questions about tokenized real estate
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;