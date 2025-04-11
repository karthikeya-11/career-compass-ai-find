
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, BookOpen, Briefcase, Rocket, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Removed from saved" : "Saved successfully",
      description: isSaved ? "The opportunity has been removed from your saved items." : "The opportunity has been added to your saved items.",
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
      { "animate-scale-in": true }
    )}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-sm">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{opportunity.title}</h3>
            <p className="text-sm text-muted-foreground">{opportunity.organization}</p>
          </div>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
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
        "opacity-100": isExpanded
      })}>
        <p className="text-sm">{opportunity.description}</p>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "View Less" : "View More"}
        </Button>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className={cn({
              "text-red-500 bg-red-50 dark:bg-red-950/30": isSaved,
            })}
            onClick={handleSave}
          >
            <Heart className={cn("h-4 w-4 transition-all", {
              "fill-red-500": isSaved
            })} />
          </Button>
          <Button asChild variant="outline" size="icon">
            <a href={opportunity.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
