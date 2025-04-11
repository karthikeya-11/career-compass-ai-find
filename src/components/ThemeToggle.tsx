
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  
  // On mount, read the theme from localStorage or default to system preference
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    
    toast({
      title: `${newTheme === 'dark' ? 'Dark' : 'Light'} mode activated`,
      description: `Switched to ${newTheme} mode for better ${newTheme === 'dark' ? 'night time' : 'day time'} viewing`,
      duration: 2000,
    });
  };
  
  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <Button 
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className={`absolute top-0 left-0 h-5 w-5 text-yellow-400 transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
        <Moon className={`absolute top-0 left-0 h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
