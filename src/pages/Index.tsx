
import { Navbar } from "@/components/Layout/Navbar";
import { DashboardHero } from "@/components/Dashboard/DashboardHero";
import { FeaturedCourses } from "@/components/Dashboard/FeaturedCourses";
import { ProgressOverview } from "@/components/Dashboard/ProgressOverview";
import { RecommendedPath } from "@/components/Dashboard/RecommendedPath";
import { ChatSupport } from "@/components/Chat/ChatSupport";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <DashboardHero />
        <Separator />
        <ProgressOverview />
        <Separator />
        <FeaturedCourses />
        <Separator />
        <RecommendedPath />
        <ChatSupport />
      </main>
      <footer className="border-t py-6 bg-gray-50">
        <div className="container text-center text-sm text-gray-500">
          <p>© 2025 ApneAppSe.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
