
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, BookOpen, Briefcase, Rocket, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  location: string;
  deadline: string;
  type: 'scholarship' | 'internship' | 'job';
  description: string;
  url: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
  className?: string;
}

const OpportunityCard = ({ opportunity, className }: OpportunityCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    
    toast({
      title: isSaved ? "Removed from saved" : "Saved successfully",
      description: isSaved ? "The opportunity has been removed from your saved items." : "The opportunity has been added to your saved items.",
    });
  };
  
  const handleShare = () => {
    setIsShared(true);
    navigator.clipboard.writeText(`Check out this ${opportunity.type}: ${opportunity.title} at ${opportunity.organization}. ${opportunity.url}`);
    
    toast({
      title: "Link copied",
      description: "Opportunity link has been copied to clipboard.",
    });
    
    setTimeout(() => setIsShared(false), 2000);
  };
  
  const handleApply = () => {
    window.open(opportunity.url, '_blank');
    
    toast({
      title: "Opening application",
      description: `Redirecting to apply for ${opportunity.title} at ${opportunity.organization}.`,
    });
  };
  
  const getIcon = () => {
    switch (opportunity.type) {
      case 'scholarship':
        return <BookOpen className="h-5 w-5 text-custom-purple" />;
      case 'internship':
        return <Briefcase className="h-5 w-5 text-custom-orange" />;
      case 'job':
        return <Rocket className="h-5 w-5 text-custom-bright-blue" />;
    }
  };
  
  const getEmoji = () => {
    switch (opportunity.type) {
      case 'scholarship':
        return '📚';
      case 'internship':
        return '💼';
      case 'job':
        return '🚀';
    }
  };
  
  const cardClassName = () => {
    switch (opportunity.type) {
      case 'scholarship':
        return 'opportunity-card-scholarship';
      case 'internship':
        return 'opportunity-card-internship';
      case 'job':
        return 'opportunity-card-job';
    }
  };

  return (
    <div className={cn(
      "relative rounded-xl p-5 transition-all duration-300 hover:shadow-md", 
      cardClassName(),
      className,
      "group"
    )}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{opportunity.title}</h3>
            <p className="text-sm text-muted-foreground">{opportunity.organization}</p>
          </div>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 animate-fade-in">
          {getEmoji()} {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
        </Badge>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" /> 
          <span>{opportunity.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" /> 
          <span>Deadline: {opportunity.deadline}</span>
        </div>
      </div>
      
      <div className={cn("mt-4 transition-all duration-300 overflow-hidden", {
        "h-0 opacity-0": !isExpanded,
        "opacity-100 max-h-32": isExpanded
      })}>
        <p className="text-sm">{opportunity.description}</p>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground group-hover:text-primary/80 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "View Less" : "View More"}
        </Button>
        
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "transition-all duration-300",
                    {
                      "text-red-500 bg-red-50 dark:bg-red-950/30 hover:bg-red-100": isSaved,
                    }
                  )}
                  onClick={handleSave}
                >
                  <Heart className={cn("h-4 w-4 transition-all", {
                    "fill-red-500 scale-110": isSaved
                  })} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {isSaved ? "Remove from saved" : "Save opportunity"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className={cn(
                    "transition-all duration-300",
                    {
                      "text-green-500 bg-green-50 dark:bg-green-950/30": isShared,
                    }
                  )}
                  onClick={handleShare}
                >
                  <Share2 className={cn("h-4 w-4 transition-all", {
                    "scale-110": isShared
                  })} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Share opportunity
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={handleApply}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Apply now
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
