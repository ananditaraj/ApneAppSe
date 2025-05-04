
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, ChevronRight, Zap } from "lucide-react";

export function RecommendedPath() {
  const learningPath = [
    { 
      id: 1, 
      title: "Web Fundamentals", 
      completed: true,
      description: "HTML, CSS, and basic JavaScript",
      duration: "4 weeks"
    },
    { 
      id: 2, 
      title: "JavaScript Deep Dive", 
      completed: true,
      description: "Advanced JS concepts and ES6 features",
      duration: "6 weeks"
    },
    { 
      id: 3, 
      title: "React Essentials", 
      completed: false,
      current: true,
      description: "Components, state, and hooks",
      duration: "8 weeks"
    },
    { 
      id: 4, 
      title: "Backend Development", 
      completed: false,
      description: "Node.js, Express, and databases",
      duration: "10 weeks"
    },
    { 
      id: 5, 
      title: "Full Stack Project", 
      completed: false,
      description: "Build a complete web application",
      duration: "6 weeks"
    }
  ];

  return (
    <section className="py-8 container relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute -top-20 right-40 w-60 h-60 bg-neo-purple/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute -bottom-20 left-40 w-60 h-60 bg-neo-orange/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold tracking-tight mb-6 relative inline-flex items-center">
          Your Learning Path
          <Zap className="ml-2 h-5 w-5 text-neo-orange animate-pulse" />
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neo-purple to-neo-orange"></span>
        </h2>
        
        <Card className="neo-card bg-dark-card border border-dark-border hover:border-neo-purple/30 transition-all duration-500">
          <CardHeader className="pb-3 border-b border-dark-border bg-gradient-to-r from-dark-bg to-dark-card">
            <CardTitle className="text-white flex items-center">
              Web Developer Career Path
              <span className="ml-2 text-xs bg-gradient-to-r from-neo-purple to-neo-orange px-2 py-0.5 rounded-md text-white">Recommended</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative p-6">
              {/* Timeline line */}
              <div className="absolute left-3.5 top-0 bottom-0 w-1 bg-gradient-to-b from-neo-purple via-dark-border to-neo-orange"></div>
              
              {/* Path steps */}
              <div className="space-y-8">
                {learningPath.map((step, index) => (
                  <div key={step.id} className="relative pl-12 group">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step.completed ? "bg-neo-orange/20 text-neo-orange shadow-glow-orange" :
                      step.current ? "bg-neo-purple/20 text-neo-purple shadow-glow-purple" :
                      "bg-dark-card text-gray-400 border border-dark-border"
                    } group-hover:scale-110`}>
                      {step.completed ? (
                        <BadgeCheck className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className={`${
                      step.current ? 'bg-neo-purple/5 border-neo-purple/20' : 
                      step.completed ? 'bg-neo-orange/5 border-neo-orange/20' : 
                      'bg-dark-card border-dark-border'
                    } border rounded-lg p-4 transition-all duration-300 group-hover:translate-x-1`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className={`font-semibold ${
                            step.current ? 'text-neo-purple' : 
                            step.completed ? 'text-neo-orange' : 
                            'text-white'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                          <p className="text-xs text-gray-500 mt-2 flex items-center">
                            <Clock className="h-3 w-3 mr-1 inline" />
                            {step.duration}
                          </p>
                        </div>
                        
                        <Button 
                          variant={step.completed ? "ghost" : step.current ? "default" : "outline"}
                          size="sm"
                          className={`
                            ${step.completed ? "text-neo-orange hover:text-neo-orange border border-neo-orange/30 hover:bg-neo-orange/10" : ""}
                            ${step.current ? "bg-gradient-to-r from-neo-purple to-neo-purple/80 hover:from-neo-purple hover:to-neo-purple" : ""}
                            transition-all duration-300 group-hover:scale-105
                          `}
                          disabled={!step.current && !step.completed}
                        >
                          <span className="flex items-center">
                            {step.completed ? "Review" : step.current ? "Continue" : "Start"}
                            <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${step.current ? "group-hover:translate-x-1" : ""}`} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Clock({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
