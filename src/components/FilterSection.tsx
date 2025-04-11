
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterSectionProps {
  onFilterChange: (filters: FilterOptions) => void;
  className?: string;
}

export interface FilterOptions {
  types: string[];
  locations: string[];
  maxDistance: number;
  deadlineRange: number;
  sortBy: string;
}

const FilterSection = ({ onFilterChange, className }: FilterSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    types: ["scholarship", "internship", "job"],
    locations: [],
    maxDistance: 50,
    deadlineRange: 30,
    sortBy: "relevance",
  });

  const handleTypeChange = (type: string) => {
    const updatedTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    
    const updatedFilters = { ...filters, types: updatedTypes };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleDeadlineChange = (value: number[]) => {
    const updatedFilters = { ...filters, deadlineRange: value[0] };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSortChange = (value: string) => {
    const updatedFilters = { ...filters, sortBy: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const toggleFilters = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={cn("relative", className)}>
      <Button 
        variant="outline" 
        className="flex items-center gap-2 mb-4"
        onClick={toggleFilters}
      >
        {isExpanded ? <X size={16} /> : <Filter size={16} />}
        {isExpanded ? "Close Filters" : "Filters & Sort"}
      </Button>
      
      <div className={cn(
        "transition-all duration-300 overflow-hidden bg-white dark:bg-gray-900 rounded-xl border shadow-sm",
        {
          "opacity-100 max-h-96": isExpanded,
          "opacity-0 max-h-0 pointer-events-none": !isExpanded
        }
      )}>
        <div className="p-4">
          <Tabs defaultValue="filters" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="filters">Filters</TabsTrigger>
              <TabsTrigger value="sort">Sort</TabsTrigger>
            </TabsList>
            <TabsContent value="filters" className="space-y-4 mt-4">
              <div>
                <h3 className="font-medium mb-2">Opportunity Type</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="scholarship" 
                      checked={filters.types.includes("scholarship")}
                      onCheckedChange={() => handleTypeChange("scholarship")}
                    />
                    <Label htmlFor="scholarship" className="flex items-center gap-1">📚 Scholarships</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="internship" 
                      checked={filters.types.includes("internship")}
                      onCheckedChange={() => handleTypeChange("internship")}
                    />
                    <Label htmlFor="internship" className="flex items-center gap-1">💼 Internships</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="job" 
                      checked={filters.types.includes("job")}
                      onCheckedChange={() => handleTypeChange("job")}
                    />
                    <Label htmlFor="job" className="flex items-center gap-1">🚀 Jobs</Label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Deadline (days)</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[filters.deadlineRange]}
                    max={90}
                    step={1}
                    onValueChange={handleDeadlineChange}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Today</span>
                    <span>{filters.deadlineRange} days</span>
                    <span>90 days</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sort" className="space-y-4 mt-4">
              <div>
                <h3 className="font-medium mb-2">Sort Results By</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant={filters.sortBy === "relevance" ? "default" : "outline"} 
                    className="w-full"
                    onClick={() => handleSortChange("relevance")}
                  >
                    Relevance
                  </Button>
                  <Button 
                    variant={filters.sortBy === "deadline" ? "default" : "outline"} 
                    className="w-full"
                    onClick={() => handleSortChange("deadline")}
                  >
                    Deadline
                  </Button>
                  <Button 
                    variant={filters.sortBy === "recent" ? "default" : "outline"} 
                    className="w-full"
                    onClick={() => handleSortChange("recent")}
                  >
                    Most Recent
                  </Button>
                  <Button 
                    variant={filters.sortBy === "popular" ? "default" : "outline"} 
                    className="w-full"
                    onClick={() => handleSortChange("popular")}
                  >
                    Popular
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
