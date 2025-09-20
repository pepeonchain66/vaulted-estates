import { Button } from "@/components/ui/button";
import { Wallet, Shield, Check } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import { toast } from "sonner";

export const WalletConnection = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    disconnect();
    toast.info("Wallet disconnected");
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-lg px-4 py-2">
        <Check className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium">
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleDisconnect}
          className="text-muted-foreground hover:text-foreground"
        >
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button 
                    variant="wallet" 
                    onClick={openConnectModal}
                    className="gap-2"
                  >
                    <Wallet className="w-4 h-4" />
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button 
                    variant="wallet" 
                    onClick={openChainModal}
                    className="gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Wrong network
                  </Button>
                );
              }

              return (
                <div className="flex items-center gap-3 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-lg px-4 py-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">
                    {`${account.address.slice(0, 6)}...${account.address.slice(-4)}`}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={openAccountModal}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Account
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};