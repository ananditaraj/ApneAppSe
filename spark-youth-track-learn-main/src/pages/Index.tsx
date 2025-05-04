
import { Navbar } from "@/components/Layout/Navbar";
import { DashboardHero } from "@/components/Dashboard/DashboardHero";
import { FeaturedCourses } from "@/components/Dashboard/FeaturedCourses";
import { ProgressOverview } from "@/components/Dashboard/ProgressOverview";
import { RecommendedPath } from "@/components/Dashboard/RecommendedPath";
import { ChatSupport } from "@/components/Chat/ChatSupport";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { ArrowUpCircle, Sparkles } from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Mark page as loaded after a short delay for animations
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    
    // Track scrolling for back-to-top button
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`min-h-screen bg-dark-bg text-white transition-opacity duration-500 ${pageLoaded ? 'opacity-100' : 'opacity-0'} relative`}>
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-neo-purple/50 animate-float"></div>
        <div className="absolute top-1/3 left-3/4 w-3 h-3 rounded-full bg-neo-orange/50 animate-float-horizontal"></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-neo-purple/50 animate-float-horizontal"></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 rounded-full bg-neo-orange/50 animate-float"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        {/* Do not touch the hero section */}
        <DashboardHero />
        
        <Separator className="bg-gradient-to-r from-transparent via-dark-border to-transparent max-w-7xl mx-auto opacity-50" />
        
        <div className="relative">          
          <ProgressOverview />
          
          <Separator className="bg-gradient-to-r from-transparent via-dark-border to-transparent max-w-7xl mx-auto opacity-50" />
          
          <FeaturedCourses />
          
          <Separator className="bg-gradient-to-r from-transparent via-dark-border to-transparent max-w-7xl mx-auto opacity-50" />
          
          <RecommendedPath />
          
          <ChatSupport />
        </div>
      </main>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-dark-card p-2 rounded-full shadow-lg transition-all duration-500 border border-dark-border ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} hover:border-neo-purple group`}
        aria-label="Back to top"
      >
        <div className="relative overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-neo-purple to-neo-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <ArrowUpCircle className="w-8 h-8 text-neo-purple transition-all duration-300 group-hover:text-white group-hover:-translate-y-1" />
        </div>
      </button>
      
      <footer className="border-t border-dark-border py-8 bg-dark-card relative overflow-hidden">
        {/* Decorative footer elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-purple to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-orange to-transparent"></div>
        </div>
        
        <div className="container text-center relative z-10">
          <div className="mb-6 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center group">
              <Sparkles className="h-5 w-5 text-neo-purple group-hover:text-neo-orange transition-colors duration-300" />
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4">&copy; 2025 ApneAppSe.com. All rights reserved.</p>
          <div className="mt-3 flex justify-center space-x-6">
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
          <p className="text-xs text-gray-600 mt-6 max-w-md mx-auto">
            Empowering your learning journey with next-generation educational technology and personalized learning paths
          </p>
        </div>
      </footer>
    </div>
  );
};

const FooterLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-neo-purple transition-all duration-300 relative group overflow-hidden"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neo-purple to-neo-orange transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
  </a>
);

export default Index;
