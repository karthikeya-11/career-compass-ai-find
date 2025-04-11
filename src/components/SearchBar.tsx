
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
  className?: string;
}

const SearchBar = ({ onSearch, isLoading = false, className }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [typingEffect, setTypingEffect] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const { toast } = useToast();
  
  const placeholders = [
    "remote internships for CS students in Hyderabad",
    "scholarships for women in engineering",
    "part-time jobs for college students",
    "summer internships in data science"
  ];
  
  useEffect(() => {
    let currentPlaceholder = placeholders[0];
    let currentIndex = 0;
    let direction = 'typing';
    let textIndex = 0;
    
    // Only start the effect if there's no query
    if (query === '') {
      const interval = setInterval(() => {
        if (direction === 'typing') {
          if (textIndex < currentPlaceholder.length) {
            setTypingEffect(currentPlaceholder.substring(0, textIndex + 1));
            textIndex++;
          } else {
            direction = 'pausing';
            setTimeout(() => {
              direction = 'deleting';
            }, 2000); // Pause for 2 seconds
          }
        } else if (direction === 'deleting') {
          if (textIndex > 0) {
            setTypingEffect(currentPlaceholder.substring(0, textIndex - 1));
            textIndex--;
          } else {
            direction = 'typing';
            currentIndex = (currentIndex + 1) % placeholders.length;
            currentPlaceholder = placeholders[currentIndex];
          }
        }
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast({
        title: "Empty search",
        description: "Please enter what you're looking for.",
        variant: "destructive"
      });
      return;
    }
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full max-w-3xl", className)}>
      <div className="relative flex items-center">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-6 pl-12 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder={query === '' ? typingEffect : "What are you looking for?"}
        />
        {query === '' && (
          <span className={cn("absolute left-[calc(12px+8px+typingEffect.length*0.6rem)] top-1/2 transform -translate-y-1/2 w-0.5 h-5 bg-gray-400", {
            "animate-typing-cursor": showCursor
          })}></span>
        )}
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Button 
          type="submit" 
          className={cn(
            "absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-all backdrop-blur-md", 
            {"animate-pulse-light": isLoading}
          )}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
