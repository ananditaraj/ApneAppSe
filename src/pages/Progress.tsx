
import { useState } from "react";
import { Navbar } from "@/components/Layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChatSupport } from "@/components/Chat/ChatSupport";
import { Calendar, PieChart, BarChart, TrendingUp, Award, Target, CheckCircle2 } from "lucide-react";

const ProgressPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  
  // Mock data for the calendar view
  const calendarData = [
    { date: '2025-04-01', duration: 45, completed: 2 },
    { date: '2025-04-02', duration: 0, completed: 0 },
    { date: '2025-04-03', duration: 30, completed: 1 },
    { date: '2025-04-04', duration: 60, completed: 3 },
    { date: '2025-04-05', duration: 20, completed: 1 },
    { date: '2025-04-06', duration: 0, completed: 0 },
    { date: '2025-04-07', duration: 90, completed: 4 },
    { date: '2025-04-08', duration: 45, completed: 2 },
    { date: '2025-04-09', duration: 30, completed: 1 },
    { date: '2025-04-10', duration: 60, completed: 2 },
    { date: '2025-04-11', duration: 45, completed: 2 },
    { date: '2025-04-12', duration: 0, completed: 0 },
    { date: '2025-04-13', duration: 30, completed: 1 },
    { date: '2025-04-14', duration: 75, completed: 3 },
    { date: '2025-04-15', duration: 45, completed: 2 },
    { date: '2025-04-16', duration: 60, completed: 2 },
  ];
  
  // Mock courses data
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      completed: 35,
      totalModules: 10,
      completedModules: 3,
      lastActive: "2 hours ago",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=170",
    },
    {
      id: 2,
      title: "Data Science Essentials",
      completed: 68,
      totalModules: 12,
      completedModules: 8,
      lastActive: "Yesterday",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300&h=170",
    },
    {
      id: 3,
      title: "Mobile App Development",
      completed: 12,
      totalModules: 15,
      completedModules: 2,
      lastActive: "3 days ago",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=170",
    },
  ];
  
  // Mock certificates data
  const certificates = [
    {
      id: 1,
      title: "JavaScript Essentials",
      issueDate: "March 15, 2025",
      status: "Completed",
    },
    {
      id: 2,
      title: "HTML & CSS Mastery",
      issueDate: "February 2, 2025",
      status: "Completed",
    },
  ];
  
  // Mock achievements data
  const achievements = [
    {
      id: 1,
      title: "First Course Completed",
      description: "You completed your first course",
      date: "February 2, 2025",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "7-Day Streak",
      description: "You studied for 7 consecutive days",
      date: "April 8, 2025",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Fast Learner",
      description: "Completed 5 modules in one day",
      date: "April 7, 2025",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="bg-primary/5 py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Your Learning Progress</h1>
            <p className="text-gray-600">Track your development journey and achievements</p>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Learning Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">7 days</div>
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Courses In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">3</div>
                  <Target className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completed Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">2</div>
                  <Award className="h-5 w-5 text-secondary" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">42 hrs</div>
                  <PieChart className="h-5 w-5 text-secondary" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="activity" className="mt-10">
            <TabsList className="mb-6">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="courses">Course Progress</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Learning Activity</CardTitle>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant={selectedPeriod === "week" ? "default" : "outline"}
                        onClick={() => setSelectedPeriod("week")}
                      >
                        Week
                      </Button>
                      <Button 
                        size="sm" 
                        variant={selectedPeriod === "month" ? "default" : "outline"}
                        onClick={() => setSelectedPeriod("month")}
                      >
                        Month
                      </Button>
                      <Button 
                        size="sm" 
                        variant={selectedPeriod === "year" ? "default" : "outline"}
                        onClick={() => setSelectedPeriod("year")}
                      >
                        Year
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Calendar View (Simplified representation) */}
                  <div className="grid grid-cols-7 gap-2 mb-8">
                    {calendarData.map((day, index) => (
                      <div 
                        key={index} 
                        className={`aspect-square rounded-md p-1 flex flex-col items-center justify-center border ${
                          day.duration > 0 
                            ? day.duration > 60 
                              ? 'bg-primary/20 border-primary/30' 
                              : day.duration > 30 
                                ? 'bg-primary/10 border-primary/20' 
                                : 'bg-primary/5 border-primary/10'
                            : 'bg-gray-100 border-gray-200'
                        }`}
                      >
                        <div className="text-xs font-medium">
                          {new Date(day.date).getDate()}
                        </div>
                        {day.duration > 0 && (
                          <div className="text-[10px] text-gray-600 mt-1">
                            {day.duration}m
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Time/Module breakdown */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium mb-4">Time Spent by Subject</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Web Development</span>
                            <span className="text-gray-500">12h 30m</span>
                          </div>
                          <ProgressBar value={45} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Data Science</span>
                            <span className="text-gray-500">18h 15m</span>
                          </div>
                          <ProgressBar value={65} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Mobile Development</span>
                            <span className="text-gray-500">6h 45m</span>
                          </div>
                          <ProgressBar value={25} className="h-2" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">Daily Activity</h3>
                      <div className="h-40 flex items-end gap-2">
                        {calendarData.slice(-7).map((day, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center">
                            <div 
                              className="w-full bg-primary/20 rounded-sm mb-1" 
                              style={{ 
                                height: `${(day.duration / 90) * 100}%`,
                                minHeight: day.duration > 0 ? '4px' : '0' 
                              }}
                            ></div>
                            <div className="text-xs text-gray-500">
                              {['S', 'M', 'T', 'W', 'T', 'F', 'S'][new Date(day.date).getDay()]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="courses">
              <div className="grid gap-6">
                <h3 className="font-semibold text-lg">Courses In Progress</h3>
                
                {courses.map(course => (
                  <Card key={course.id}>
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full md:w-32 h-20 md:h-24 object-cover rounded"
                        />
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">{course.title}</h4>
                            <Badge>{course.completed}% Complete</Badge>
                          </div>
                          
                          <ProgressBar value={course.completed} className="h-2 mb-3" />
                          
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>Modules: {course.completedModules}/{course.totalModules}</span>
                            <span>Last activity: {course.lastActive}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Button>Continue</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <h3 className="font-semibold text-lg mt-6">Completed Courses</h3>
                
                <Card>
                  <CardContent className="p-5">
                    <div className="divide-y">
                      {certificates.map(cert => (
                        <div key={cert.id} className="py-4 first:pt-0 last:pb-0">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">{cert.title}</h4>
                              <p className="text-sm text-gray-500">Completed on {cert.issueDate}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge variant="outline" className="bg-green-50">
                                <CheckCircle2 className="mr-1 h-3 w-3 text-green-500" /> {cert.status}
                              </Badge>
                              <Button variant="outline" size="sm">
                                Certificate
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="achievements">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map(achievement => (
                  <Card key={achievement.id} className="overflow-hidden">
                    <div className="bg-primary/5 p-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {achievement.icon}
                      </div>
                    </div>
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      <p className="text-xs text-gray-500">Earned on {achievement.date}</p>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Locked achievements */}
                {[1, 2, 3].map(id => (
                  <Card key={`locked-${id}`} className="overflow-hidden opacity-50">
                    <div className="bg-gray-100 p-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold mb-1">Achievement Locked</h4>
                      <p className="text-sm text-gray-600">Keep learning to unlock this achievement</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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

export default ProgressPage;
