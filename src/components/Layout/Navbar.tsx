
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("/");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Set active page based on current path
    setActivePage(window.location.pathname);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`border-b border-dark-border sticky top-0 z-30 transition-all duration-300 ${scrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg' : 'bg-dark-bg'}`}>
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-xl relative group">
            <span className="text-white">Apne</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-purple to-neo-orange">AppSe</span>
            <span className="text-white">.com</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neo-purple to-neo-orange group-hover:w-full transition-all duration-300"></div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "/courses", label: "Courses" },
              { path: "/progress", label: "My Progress" }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`font-medium transition-all duration-300 relative ${activePage === item.path ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {item.label}
                {activePage === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neo-orange rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search courses..."
              className="rounded-full bg-dark-card border border-dark-border px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-neo-purple text-white w-56 transition-all duration-300 focus:w-64"
            />
          </div>
          
          <Button
            variant="ghost" 
            size="icon"
            className="relative text-white hover:bg-dark-card hover:text-neo-purple transition-all duration-300"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-neo-orange text-xs text-white flex items-center justify-center animate-pulse">
              2
            </span>
          </Button>
          
          <Avatar className="border-2 border-neo-purple/50 hover:border-neo-purple transition-all duration-300">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-dark-card text-neo-purple">ST</AvatarFallback>
          </Avatar>
          
          <Button
            className="md:hidden text-white hover:bg-dark-card hover:text-neo-purple transition-all duration-300"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t border-dark-border py-4 bg-dark-bg/95 backdrop-blur-md animate-accordion-down">
          <div className="container flex flex-col space-y-4">
            <div className="relative flex items-center mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search courses..."
                className="w-full rounded-lg bg-dark-card border border-dark-border px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-neo-purple text-white"
              />
            </div>
            {[
              { path: "/", label: "Home" },
              { path: "/courses", label: "Courses" },
              { path: "/progress", label: "My Progress" }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`py-2 font-medium transition-colors relative pl-4 ${activePage === item.path ? 'text-neo-purple' : 'text-gray-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {activePage === item.path && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neo-orange rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
