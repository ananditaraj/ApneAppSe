
import { useEffect, useState } from "react";

interface TechFact {
  fact: string;
}

export default function AnimatedHeroBackground() {
  const [fact, setFact] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // Fetch random tech fact using the NumbersAPI
  useEffect(() => {
    const fetchFact = async () => {
      setLoading(true);
      try {
        // Using Numbers API to get tech/math related facts
        const res = await fetch("http://numbersapi.com/random/math?json=true");
        const data: TechFact = await res.json();
        setFact(data.fact || "Technology is transforming the world at an unprecedented pace.");
      } catch {
        setFact("Did you know? 90% of the world's data has been created in just the last few years.");
      } finally {
        setLoading(false);
      }
    };
    fetchFact();
    
    // Refresh every 15s
    const interval = setInterval(fetchFact, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Dark background with animated elements */}
      <div className="absolute inset-0 bg-dark-bg">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `radial-gradient(#8B5CF6 1px, transparent 1px), radial-gradient(#F97316 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 25px 25px',
            animation: 'gradientMove 20s linear infinite alternate'
          }}
        />
        
        {/* Futuristic hexagonal pattern overlay */}
        <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>
        
        {/* Digital circuit lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10,10 L50,10 L50,50 L90,50" stroke="#8B5CF6" strokeWidth="0.5" fill="none" />
                <path d="M90,10 L50,90" stroke="#F97316" strokeWidth="0.5" fill="none" />
                <path d="M10,90 L30,50 L70,70" stroke="#8B5CF6" strokeWidth="0.5" fill="none" />
                <circle cx="10" cy="10" r="2" fill="#8B5CF6" />
                <circle cx="50" cy="10" r="2" fill="#8B5CF6" />
                <circle cx="90" cy="10" r="2" fill="#F97316" />
                <circle cx="10" cy="90" r="2" fill="#8B5CF6" />
                <circle cx="50" cy="90" r="2" fill="#F97316" />
                <circle cx="50" cy="50" r="2" fill="#8B5CF6" />
                <circle cx="90" cy="50" r="2" fill="#F97316" />
                <circle cx="30" cy="50" r="2" fill="#8B5CF6" />
                <circle cx="70" cy="70" r="2" fill="#F97316" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-neo-purple/20 filter blur-xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-52 h-52 rounded-full bg-neo-orange/20 filter blur-xl animate-pulse-glow" 
          style={{ animationDelay: '1.5s' }}
        />
        <div className="absolute top-2/3 left-1/2 w-36 h-36 rounded-full bg-neo-purple/15 filter blur-xl animate-pulse-glow" 
          style={{ animationDelay: '2.7s' }}
        />
      </div>

      {/* Floating particles with glowing effect */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-neo-purple rounded-full animate-float opacity-75 shadow-glow-purple"
        style={{ animationDelay: '0s' }} />
      <div className="absolute top-[30%] left-[15%] w-3 h-3 bg-neo-orange rounded-full animate-float opacity-50 shadow-glow-orange"
        style={{ animationDelay: '1.1s' }} />
      <div className="absolute bottom-[20%] right-[25%] w-5 h-5 bg-neo-purple rounded-full animate-float opacity-60 shadow-glow-purple"
        style={{ animationDelay: '0.7s' }} />
      <div className="absolute bottom-[40%] left-[40%] w-2 h-2 bg-neo-orange rounded-full animate-float opacity-40 shadow-glow-orange"
        style={{ animationDelay: '2.3s' }} />
      <div className="absolute top-[15%] right-[35%] w-3 h-3 bg-neo-purple rounded-full animate-float opacity-50 shadow-glow-purple"
        style={{ animationDelay: '1.5s' }} />

      {/* Fact overlay with enhanced design */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-10 bg-dark-card/90 border border-neo-purple/30 px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.3)] text-white text-center font-semibold text-lg max-w-xl mx-auto pointer-events-auto transition-all backdrop-blur-sm hover:border-neo-purple/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
        <span className="mr-2 text-neo-orange">💡</span>
        {loading ? "Loading fun fact..." : fact}
      </div>

      {/* Futuristic corner accent - top left */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L80,0 L80,10 L10,10 L10,80 L0,80 Z" fill="#8B5CF6" fillOpacity="0.5" />
          <path d="M0,0 L100,0 L100,5 L5,5 L5,100 L0,100 Z" fill="#8B5CF6" />
        </svg>
      </div>

      {/* Futuristic corner accent - bottom right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,100 L20,100 L20,90 L90,90 L90,20 L100,20 Z" fill="#F97316" fillOpacity="0.5" />
          <path d="M100,100 L0,100 L0,95 L95,95 L95,0 L100,0 Z" fill="#F97316" />
        </svg>
      </div>
    </div>
  );
}
