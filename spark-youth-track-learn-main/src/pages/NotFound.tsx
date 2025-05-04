
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg text-white p-4">
      <div className="relative max-w-md w-full">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-neo-purple/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-neo-orange/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        
        <div className="text-center relative z-10 bg-dark-card border border-dark-border rounded-xl p-8 backdrop-blur-sm">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dark-bg border border-dark-border mb-6">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neo-purple to-neo-orange">404</h1>
          </div>
          
          <p className="text-xl text-white mb-2">Page Not Found</p>
          <p className="text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
          
          <Button asChild className="futuristic-button">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
          
          {/* Circuit-like decorative lines */}
          <div className="absolute h-px w-40 bg-neo-purple/30 top-10 -left-40 hidden md:block"></div>
          <div className="absolute h-px w-40 bg-neo-orange/30 bottom-10 -right-40 hidden md:block"></div>
          <div className="absolute w-px h-40 bg-neo-purple/30 left-10 -top-40 hidden md:block"></div>
          <div className="absolute w-px h-40 bg-neo-orange/30 right-10 -bottom-40 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
