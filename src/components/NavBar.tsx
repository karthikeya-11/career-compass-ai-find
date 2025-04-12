
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">CareerCompass AI</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/explore" className="text-sm font-medium hover:text-primary transition-colors">Explore Opportunities</Link>
            <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link to="/telegram-bot" className="text-sm font-medium hover:text-primary transition-colors">Telegram Bot</Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <User className="h-4 w-4" />
              Sign In
            </Button>
            <Button className="hidden md:flex">Sign Up</Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 transition-all duration-300 md:hidden",
          {
            "opacity-100": isOpen,
            "opacity-0 pointer-events-none": !isOpen
          }
        )}
      >
        <nav className="flex flex-col p-4 gap-2">
          <Link 
            to="/" 
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/explore" 
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Explore Opportunities
          </Link>
          <Link 
            to="/features" 
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/telegram-bot" 
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Telegram Bot
          </Link>
          <Link 
            to="/dashboard" 
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
          
          <Button variant="outline" className="mt-2 justify-start">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button className="mt-2">Sign Up</Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
