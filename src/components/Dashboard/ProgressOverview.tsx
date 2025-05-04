
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, Clock, Target } from "lucide-react";

export function ProgressOverview() {
  return (
    <section className="py-8 container relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-28 h-28 rounded-full bg-neo-purple/10 blur-2xl"></div>
      <div className="absolute bottom-40 left-10 w-28 h-28 rounded-full bg-neo-orange/10 blur-2xl"></div>
      
      <h2 className="text-2xl font-bold tracking-tight mb-6 relative inline-block">
        Your Learning Progress
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neo-purple to-neo-orange"></span>
      </h2>
      
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-dark-card border border-dark-border hover:border-neo-purple/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Courses In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">3</div>
              <Target className="h-5 w-5 text-neo-purple animate-pulse" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-dark-card border border-dark-border hover:border-neo-purple/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Completed Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">2</div>
              <Award className="h-5 w-5 text-neo-orange animate-pulse" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-dark-card border border-dark-border hover:border-neo-purple/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Learning Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">7 days</div>
              <Calendar className="h-5 w-5 text-neo-purple animate-pulse" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-dark-card border border-dark-border hover:border-neo-purple/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Learning Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">42 hrs</div>
              <Clock className="h-5 w-5 text-neo-orange animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <Tabs defaultValue="courses" className="relative">
          <TabsList className="mb-4 bg-dark-card border border-dark-border p-1 w-full sm:w-auto">
            <TabsTrigger value="courses" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-neo-purple/20 data-[state=active]:to-neo-orange/20 data-[state=active]:text-white">
              Current Courses
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-neo-purple/20 data-[state=active]:to-neo-orange/20 data-[state=active]:text-white">
              Skills Overview
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses">
            <div className="space-y-4">
              <ProgressItem 
                title="Web Development Fundamentals"
                progress={35}
                badge="In Progress"
                badgeColor="default"
                lastActivity="Today"
              />
              <ProgressItem 
                title="Data Science Essentials"
                progress={68}
                badge="In Progress"
                badgeColor="default"
                lastActivity="Yesterday"
              />
              <ProgressItem 
                title="Mobile App Development"
                progress={12}
                badge="Just Started"
                badgeColor="secondary"
                lastActivity="2 days ago"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="skills">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-dark-card border border-dark-border hover:border-neo-purple/50 transition-all duration-300">
                <CardHeader className="pb-3 border-b border-dark-border">
                  <CardTitle className="text-lg text-white flex items-center">
                    <span className="w-2 h-8 bg-neo-purple mr-2 rounded"></span>
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress skill="HTML/CSS" progress={80} color="neo-purple" />
                  <SkillProgress skill="JavaScript" progress={65} color="neo-purple" />
                  <SkillProgress skill="Python" progress={42} color="neo-purple" />
                  <SkillProgress skill="Data Analysis" progress={28} color="neo-purple" />
                </CardContent>
              </Card>
              
              <Card className="bg-dark-card border border-dark-border hover:border-neo-orange/50 transition-all duration-300">
                <CardHeader className="pb-3 border-b border-dark-border">
                  <CardTitle className="text-lg text-white flex items-center">
                    <span className="w-2 h-8 bg-neo-orange mr-2 rounded"></span>
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress skill="Problem Solving" progress={75} color="neo-orange" />
                  <SkillProgress skill="Communication" progress={60} color="neo-orange" />
                  <SkillProgress skill="Team Collaboration" progress={85} color="neo-orange" />
                  <SkillProgress skill="Time Management" progress={50} color="neo-orange" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProgressItem({ title, progress, badge, badgeColor, lastActivity }) {
  return (
    <div className="border border-dark-border rounded-lg p-4 bg-dark-card hover:border-neo-purple/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-white">{title}</h3>
        <Badge variant={badgeColor} className={badgeColor === "secondary" ? "bg-neo-orange" : ""}>{badge}</Badge>
      </div>
      <div className="space-y-2">
        <Progress value={progress} className="h-2" 
          indicator={
            <div className="h-full w-full bg-gradient-to-r from-neo-purple to-neo-orange rounded-full" />
          } 
        />
        <div className="flex justify-between text-sm">
          <span className="text-neo-purple">{progress}% complete</span>
          <span className="text-gray-500">Last activity: {lastActivity}</span>
        </div>
      </div>
    </div>
  );
}

function SkillProgress({ skill, progress, color }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white">{skill}</span>
        <span className={`text-${color}`}>{progress}%</span>
      </div>
      <Progress value={progress} className="h-2"
        indicator={
          <div className={`h-full w-full bg-${color} rounded-full`} />
        }
      />
    </div>
  );
}
