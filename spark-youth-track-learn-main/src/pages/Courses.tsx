
import { useState } from "react";
import { Navbar } from "@/components/Layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChatSupport } from "@/components/Chat/ChatSupport";
import { Search, Clock, Users, Filter } from "lucide-react";

const categories = [
  "All Categories", "Web Development", "Mobile Development", "Data Science", 
  "UI/UX Design", "Digital Marketing", "Machine Learning", "Cloud Computing"
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript to create modern websites.",
    level: "Beginner",
    duration: "10 weeks",
    students: 2540,
    category: "Web Development",
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
    category: "Mobile Development",
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
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300&h=170",
    progress: 68,
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    description: "Master the art of creating intuitive and beautiful user interfaces.",
    level: "Beginner",
    duration: "8 weeks",
    students: 1820,
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&h=170",
    progress: 0,
  },
  {
    id: 5,
    title: "Advanced JavaScript",
    description: "Dive deep into JavaScript patterns, frameworks, and best practices.",
    level: "Advanced",
    duration: "10 weeks",
    students: 940,
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=170",
    progress: 0,
  },
  {
    id: 6,
    title: "Python for Data Analysis",
    description: "Use Python to analyze and visualize complex data sets.",
    level: "Intermediate",
    duration: "12 weeks",
    students: 1120,
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=300&h=170",
    progress: 0,
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredCourses = courses.filter(course => {
    // Search filter
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === "All Categories" || 
                            course.category === selectedCategory;
    
    // Level filter
    const matchesLevel = selectedLevel === "All Levels" || 
                         course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="bg-primary/5 py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-6">Explore Courses</h1>
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input 
                  placeholder="Search for courses..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="md:w-auto"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </div>
            
            {showFilters && (
              <div className="mt-4 p-4 border rounded-lg bg-white space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <Button
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLevel(level)}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="container py-12">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing {filteredCourses.length} courses</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <Badge 
                      className="absolute top-2 right-2" 
                      variant={
                        course.level === "Beginner" ? "default" : 
                        course.level === "Intermediate" ? "secondary" : 
                        "outline"
                      }
                    >
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
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <h3 className="text-lg font-medium mb-2">No courses found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <ChatSupport />
      
      <footer className="border-t py-6 bg-gray-50">
        <div className="container text-center text-sm text-gray-500">
          <p>© 2025 SparkLearn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
