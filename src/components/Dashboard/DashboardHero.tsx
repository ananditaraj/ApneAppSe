
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Rocket, Sparkles, Zap } from "lucide-react";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import { useState, useEffect } from "react";

export function DashboardHero() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleHover = (id: string | null) => {
    setHovered(id);
  };

  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <AnimatedHeroBackground />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className={`space-y-6 mt-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-24 h-24 opacity-20">
                <svg className="w-full h-full animate-rotate-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="10 5" />
                </svg>
              </div>
              
              <div className="relative inline-block">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-2">
                  Develop Your Skills, <br />
                  <span className="animated-gradient-text font-extrabold">
                    Shape Your Future
                  </span>
                </h1>
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-neo-orange rounded-full animate-pulse-glow" />
                
                <div className="absolute -right-16 -top-10 text-neo-orange animate-float opacity-80">
                  <Sparkles className="w-12 h-12" />
                </div>
              </div>
              
              <p className="max-w-[600px] text-gray-300 md:text-xl leading-relaxed mt-6 ml-1">
                Access interactive courses, track your progress, and get your questions answered in real-time with our AI-powered learning platform.
              </p>
              
              <div className="flex flex-col gap-4 min-[400px]:flex-row mt-8">
                <Button 
                  className="neo-button bg-gradient-to-r from-neo-purple to-neo-orange hover:bg-gradient-to-r hover:from-neo-purple hover:to-neo-purple text-white font-medium py-6 px-8 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-[0_5px_15px_rgba(139,92,246,0.4)] group"
                  onMouseEnter={() => handleHover("explore")}
                  onMouseLeave={() => handleHover(null)}
                >
                  <Rocket className={`w-5 h-5 mr-2 transition-all duration-500 ${hovered === "explore" ? "animate-float" : ""} group-hover:rotate-12`} />
                  <span>Explore Courses</span>
                  <span className="absolute -z-10 inset-0 rounded-xl bg-gradient-to-r from-neo-purple/20 to-neo-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="neo-button bg-dark-card border border-neo-purple/50 text-white hover:border-neo-purple font-medium py-6 px-8 rounded-xl hover:-translate-y-1 transition-all duration-300 group"
                  onMouseEnter={() => handleHover("continue")}
                  onMouseLeave={() => handleHover(null)}
                >
                  <Zap className={`w-5 h-5 mr-2 transition-all duration-500 ${hovered === "continue" ? "animate-float" : ""} group-hover:text-neo-orange`} />
                  <span>Continue Learning</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className={`flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 gap-4 w-full relative">
              {/* Connecting lines between cards */}
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-30">
                <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#F97316" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
              
              <StatCard 
                icon={<BookOpen className="h-8 w-8 text-neo-purple" />} 
                value="50+" 
                label="Courses" 
                glowColor="neo-purple"
                delay={0}
              />
              
              <StatCard 
                icon={<GraduationCap className="h-8 w-8 text-neo-orange" />} 
                value="100k+" 
                label="Graduates" 
                glowColor="neo-orange"
                delay={150}
              />
              
              <StatCard 
                icon={<Users className="h-8 w-8 text-neo-orange" />} 
                value="20+" 
                label="Mentors" 
                glowColor="neo-orange"
                delay={300}
              />
              
              <StatCard 
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-neo-purple"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93l2.83 2.83" />
                    <path d="M16.24 16.24l2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="M4.93 19.07l2.83-2.83" />
                    <path d="M16.24 7.76l2.83-2.83" />
                  </svg>
                } 
                value="24/7" 
                label="Support" 
                glowColor="neo-purple"
                delay={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  glowColor: "neo-purple" | "neo-orange";
  delay: number;
}

function StatCard({ icon, value, label, glowColor, delay }: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`flex flex-col items-center justify-center neo-card p-6 relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background that appears on hover */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-${glowColor}/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />
      
      {/* Icon with floating animation */}
      <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-${glowColor}/10 mb-3 transition-all duration-500 ${isHovered ? 'animate-float shadow-glow-' + (glowColor === 'neo-purple' ? 'purple' : 'orange') : ''}`}>
        {icon}
      </div>
      
      {/* Content with hover effects */}
      <div className="text-center">
        <div className={`text-2xl font-bold transition-all duration-300 ${isHovered ? 'text-' + glowColor + ' scale-110' : 'text-white'}`}>
          {value}
        </div>
        <div className="text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">
          {label}
        </div>
      </div>
      
      {/* Decorative corner elements that appear on hover */}
      <div className={`absolute top-2 left-2 w-2 h-2 border-t border-l transition-all duration-500 opacity-0 group-hover:opacity-100 ${glowColor === 'neo-purple' ? 'border-neo-purple' : 'border-neo-orange'}`} />
      <div className={`absolute top-2 right-2 w-2 h-2 border-t border-r transition-all duration-500 opacity-0 group-hover:opacity-100 ${glowColor === 'neo-purple' ? 'border-neo-purple' : 'border-neo-orange'}`} />
      <div className={`absolute bottom-2 left-2 w-2 h-2 border-b border-l transition-all duration-500 opacity-0 group-hover:opacity-100 ${glowColor === 'neo-purple' ? 'border-neo-purple' : 'border-neo-orange'}`} />
      <div className={`absolute bottom-2 right-2 w-2 h-2 border-b border-r transition-all duration-500 opacity-0 group-hover:opacity-100 ${glowColor === 'neo-purple' ? 'border-neo-purple' : 'border-neo-orange'}`} />
    </div>
  );
}
