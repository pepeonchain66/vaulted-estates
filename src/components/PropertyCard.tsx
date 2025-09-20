import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Lock, Eye } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  totalValue: string;
  tokensAvailable: number;
  totalTokens: number;
  apy: string;
  encrypted: boolean;
  image?: string;
}

export const PropertyCard = ({ 
  name, 
  location, 
  totalValue, 
  tokensAvailable, 
  totalTokens, 
  apy, 
  encrypted 
}: PropertyCardProps) => {
  const [isRevealed, setIsRevealed] = useState(!encrypted);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <Building className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {isRevealed ? name : "████ █████"}
            </h3>
            <p className="text-muted-foreground text-sm">
              {isRevealed ? location : "██████, ██"}
            </p>
          </div>
        </div>
        
        {encrypted && !isRevealed && (
          <Button
            variant="cyber"
            size="sm"
            onClick={handleReveal}
            className="gap-2"
          >
            <Eye className="w-4 h-4" />
            Reveal
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Total Value</span>
          <span className="font-semibold text-lg">
            {isRevealed ? totalValue : "$███,███"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">APY</span>
          <Badge variant="secondary" className="bg-accent/10 text-accent">
            {isRevealed ? apy : "█.█%"}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Tokens Available
            </span>
            <span className="font-medium">
              {isRevealed ? `${tokensAvailable}/${totalTokens}` : "███/███"}
            </span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
              style={{ 
                width: isRevealed ? `${(tokensAvailable / totalTokens) * 100}%` : '50%' 
              }}
            />
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            variant="hero" 
            className="flex-1"
            disabled={!isRevealed}
          >
            {encrypted && !isRevealed ? (
              <Lock className="w-4 h-4" />
            ) : (
              "Invest Now"
            )}
          </Button>
          <Button variant="outline" size="sm" disabled={!isRevealed}>
            Details
          </Button>
        </div>
      </div>

      {encrypted && !isRevealed && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg pointer-events-none encrypted-window" />
      )}
    </Card>
  );
};