
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, Clock, Target } from "lucide-react";

export function ProgressOverview() {
  return (
    <section className="py-8 container">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Your Learning Progress</h2>
      
      <div className="grid gap-6 md:grid-cols-4">
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
            <CardTitle className="text-sm font-medium text-gray-500">Learning Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">42 hrs</div>
              <Clock className="h-5 w-5 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <Tabs defaultValue="courses">
          <TabsList className="mb-4">
            <TabsTrigger value="courses">Current Courses</TabsTrigger>
            <TabsTrigger value="skills">Skills Overview</TabsTrigger>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillProgress skill="HTML/CSS" progress={80} />
                  <SkillProgress skill="JavaScript" progress={65} />
                  <SkillProgress skill="Python" progress={42} />
                  <SkillProgress skill="Data Analysis" progress={28} />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Soft Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillProgress skill="Problem Solving" progress={75} />
                  <SkillProgress skill="Communication" progress={60} />
                  <SkillProgress skill="Team Collaboration" progress={85} />
                  <SkillProgress skill="Time Management" progress={50} />
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
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{title}</h3>
        <Badge variant={badgeColor}>{badge}</Badge>
      </div>
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>{progress}% complete</span>
          <span>Last activity: {lastActivity}</span>
        </div>
      </div>
    </div>
  );
}

function SkillProgress({ skill, progress }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{skill}</span>
        <span className="text-gray-500">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
