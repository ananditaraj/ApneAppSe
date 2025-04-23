
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import AnimatedHeroBackground from "./AnimatedHeroBackground";

export function DashboardHero() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-20 overflow-hidden">
      <AnimatedHeroBackground />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Develop Your Skills, <br />
              <span className="text-primary">Shape Your Future</span>
            </h1>
            <p className="max-w-[600px] text-gray-700 md:text-xl">
              Access interactive courses, track your progress, and get your questions answered in real-time.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-primary">Explore Courses</Button>
              <Button variant="outline">Continue Learning</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-sm text-gray-500">Courses</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xl font-bold">100k+</div>
                  <div className="text-sm text-gray-500">Graduates</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xl font-bold">20+</div>
                  <div className="text-sm text-gray-500">Mentors</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
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
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

