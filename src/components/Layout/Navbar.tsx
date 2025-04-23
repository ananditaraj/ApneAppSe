import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="border-b sticky top-0 z-30 bg-white">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-xl text-primary">
            <span>ApneAppSe</span>
            <span className="text-secondary">.com</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/courses" className="font-medium transition-colors hover:text-primary">
              Courses
            </Link>
            <Link to="/progress" className="font-medium transition-colors hover:text-primary">
              My Progress
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search courses..."
              className="rounded-full bg-gray-100 px-4 py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <Button
            variant="ghost" 
            size="icon"
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-xs text-white flex items-center justify-center">
              2
            </span>
          </Button>
          
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <div className="container flex flex-col space-y-3">
            <div className="relative flex items-center mb-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search courses..."
                className="w-full rounded-full bg-gray-100 px-4 py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Link to="/" className="py-2 font-medium">Home</Link>
            <Link to="/courses" className="py-2 font-medium">Courses</Link>
            <Link to="/progress" className="py-2 font-medium">My Progress</Link>
          </div>
        </div>
      )}
    </header>
  );
}
