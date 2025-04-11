
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface AIPromptSectionProps {
  className?: string;
}

const AIPromptSection: React.FC<AIPromptSectionProps> = ({ className }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a question or prompt.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate AI response with a delay
    setTimeout(() => {
      // Example responses based on keywords
      let aiResponse = '';
      const lowercasePrompt = prompt.toLowerCase();
      
      if (lowercasePrompt.includes('scholarship')) {
        aiResponse = "I found several scholarship opportunities that might interest you. The most relevant is the 'Tech Leaders Scholarship' with a deadline in 3 weeks. It offers $5,000 for students in computer science and related fields. Would you like me to provide more details?";
      } else if (lowercasePrompt.includes('intern') || lowercasePrompt.includes('internship')) {
        aiResponse = "I found 12 internship opportunities matching your interests. Top matches include a Remote Software Engineering Internship at TechCorp and a Data Analysis Internship at DataInsights. Both offer competitive stipends and flexible hours.";
      } else if (lowercasePrompt.includes('job')) {
        aiResponse = "Based on your profile, I've found 8 entry-level job opportunities in your area. The most promising is a Junior Developer position at InnovateTech, offering remote work options and competitive benefits.";
      } else {
        aiResponse = "I can help you find scholarships, internships, and job opportunities tailored to your interests and qualifications. Please specify what type of opportunity you're looking for, and any preferences regarding location, field, or deadline.";
      }
      
      setResponse(aiResponse);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Ask CareerCompass AI</h2>
          <p className="text-muted-foreground">
            Get personalized recommendations and answers about opportunities
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Find me scholarships for computer science students in India"
              className="pr-24 py-6 text-lg"
            />
            <Button 
              type="submit" 
              className={cn(
                "absolute right-2 top-1/2 transform -translate-y-1/2",
                {"animate-pulse": isLoading}
              )}
              disabled={isLoading}
            >
              {isLoading ? "Thinking..." : "Ask AI"} <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
        
        {response && (
          <Card className="p-6 bg-gradient-to-br from-pastel-blue/50 to-pastel-purple/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                  <path d="M12 16v-4M12 8h.01"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-2">CareerCompass AI</h3>
                <Textarea 
                  value={response} 
                  readOnly 
                  className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[120px]"
                />
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AIPromptSection;
