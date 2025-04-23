
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, ChevronRight } from "lucide-react";

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
    <section className="py-8 container">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Your Learning Path</h2>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Web Developer Career Path</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3.5 top-0 bottom-0 w-1 bg-gray-200"></div>
            
            {/* Path steps */}
            <div className="space-y-8">
              {learningPath.map((step, index) => (
                <div key={step.id} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-1 h-8 w-8 rounded-full flex items-center justify-center ${
                    step.completed ? "bg-secondary/20 text-secondary" :
                    step.current ? "bg-primary/20 text-primary" :
                    "bg-gray-200 text-gray-400"
                  }`}>
                    {step.completed ? (
                      <BadgeCheck className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className={`${step.current ? 'bg-primary/5 border-primary/20' : ''} border rounded-lg p-4`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-semibold ${step.current ? 'text-primary' : ''}`}>{step.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{step.duration}</p>
                      </div>
                      
                      <Button 
                        variant={step.completed ? "ghost" : step.current ? "default" : "outline"}
                        size="sm"
                        className={step.completed ? "text-secondary hover:text-secondary" : ""}
                        disabled={!step.current && !step.completed}
                      >
                        {step.completed ? "Review" : step.current ? "Continue" : "Start"}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
