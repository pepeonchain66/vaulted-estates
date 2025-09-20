import { Building2, Github, Twitter, Linkedin } from "lucide-react";

export const AnimatedFooter = () => {
  const buildings = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    height: Math.random() * 60 + 40,
    delay: Math.random() * 3,
    encrypted: Math.random() > 0.5,
  }));

  return (
    <footer className="relative bg-gradient-to-t from-background via-card/50 to-transparent overflow-hidden">
      {/* Animated Skyscrapers */}
      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 opacity-30">
        {buildings.map((building) => (
          <div
            key={building.id}
            className="relative bg-gradient-to-t from-primary/20 to-accent/20 border-l border-r border-primary/10"
            style={{
              width: '6%',
              height: `${building.height}%`,
              animationDelay: `${building.delay}s`,
            }}
          >
            {/* Encrypted windows */}
            <div className="absolute inset-0 grid grid-cols-2 gap-px p-1">
              {Array.from({ length: Math.floor(building.height / 15) }).map((_, windowIndex) => (
                <div
                  key={windowIndex}
                  className={`
                    w-full h-2 rounded-sm
                    ${building.encrypted ? 'encrypted-window' : 'bg-primary/30'}
                  `}
                  style={{
                    animationDelay: `${building.delay + windowIndex * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold gradient-text">RealChain</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Democratizing real estate investment through secure, private tokenization on blockchain.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Properties</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Portfolio</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Analytics</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Staking</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Compliance</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Security</li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Community</h3>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Twitter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 RealChain. All rights reserved. Built on secure blockchain infrastructure.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Network: Mainnet
            </span>
            <span>•</span>
            <span>Last Block: 18,429,156</span>
          </div>
        </div>
      </div>
    </footer>
  );
};