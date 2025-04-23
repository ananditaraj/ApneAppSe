
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowRight } from "lucide-react";

const featuredCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript to create modern websites.",
    level: "Beginner",
    duration: "10 weeks",
    students: 2540,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=170",
    progress: 0,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Create native mobile apps for iOS and Android platforms.",
    level: "Intermediate",
    duration: "12 weeks",
    students: 1820,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=170",
    progress: 35,
  },
  {
    id: 3,
    title: "Data Science Essentials",
    description: "Learn data analysis, visualization, and machine learning basics.",
    level: "Advanced",
    duration: "14 weeks",
    students: 1240,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300&h=170",
    progress: 68,
  },
];

export function FeaturedCourses() {
  return (
    <section className="py-12 container">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Featured Courses</h2>
          <p className="text-gray-500">Explore our most popular learning paths</p>
        </div>
        <Button variant="ghost" className="mt-4 md:mt-0">
          View All Courses <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
              <Badge className="absolute top-2 right-2" variant={course.level === "Beginner" ? "default" : course.level === "Intermediate" ? "secondary" : "outline"}>
                {course.level}
              </Badge>
            </div>
            <CardHeader className="pb-3">
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  {course.students.toLocaleString()}
                </div>
              </div>
              {course.progress > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {course.progress > 0 ? "Continue Learning" : "Start Learning"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
