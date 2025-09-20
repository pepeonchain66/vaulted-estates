export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <rect x="4" y="8" width="24" height="16" rx="2" fill="currentColor" opacity="0.9"/>
          <rect x="6" y="10" width="20" height="2" rx="1" fill="white"/>
          <rect x="6" y="14" width="16" height="2" rx="1" fill="white"/>
          <rect x="6" y="18" width="12" height="2" rx="1" fill="white"/>
          <circle cx="22" cy="12" r="2" fill="white"/>
          <path d="M8 4L12 8L16 4L20 8L24 4" stroke="white" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Vaulted Estates
        </span>
        <span className="text-xs text-muted-foreground">Secure Investment Platform</span>
      </div>
    </div>
  );
};