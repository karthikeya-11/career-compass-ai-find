
import React, { useState } from 'react';
import { extractEntitiesWithGemini, searchJobs, filterUniqueJobs, type JobSearchParams, type JobResult } from '@/utils/jobSearch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Briefcase, MapPin, Calendar, ExternalLink, Heart, Share2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const JobSearch = () => {
  const [prompt, setPrompt] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [jobResults, setJobResults] = useState<JobResult[]>([]);
  const { toast } = useToast();
  
  // Search parameters
  const [searchParams, setSearchParams] = useState<JobSearchParams>({
    keyword: "software engineer",
    location: "Hyderabad",
    dateSincePosted: "past Month",
    jobType: "full time",
    remoteFilter: "on-site",
    salary: 100000,
    experienceLevel: "mid-senior",
    limit: 20,
    page: 0
  });
  
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  
  const handleParamChange = (field: keyof JobSearchParams, value: string | number) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSearch = async () => {
    try {
      setIsSearching(true);
      
      // Extract entities from prompt if provided
      if (prompt.trim()) {
        const extractedParams = await extractEntitiesWithGemini(prompt);
        setSearchParams(extractedParams);
      }
      
      // Search for jobs with current parameters
      const results = await searchJobs(searchParams);
      const uniqueResults = filterUniqueJobs(results);
      
      setJobResults(uniqueResults);
      
      toast({
        title: "Search completed",
        description: `Found ${uniqueResults.length} jobs matching your criteria.`,
      });
    } catch (error) {
      console.error("Search error:", error);
      toast({
        title: "Search error",
        description: "An error occurred while searching for jobs.",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <Input
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Search for jobs (e.g., 'Find remote software engineer jobs in New York with a salary of $100,000')"
            className="w-full p-6 text-lg pr-32"
          />
          <Button
            onClick={handleSearch}
            disabled={isSearching}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {isSearching ? "Searching..." : "Search Jobs"}
          </Button>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {jobResults.length > 0 
              ? `Found ${jobResults.length} jobs matching your criteria.` 
              : "Enter a search prompt or use the advanced filters to find jobs."}
          </p>
          <Button 
            variant="ghost" 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm"
          >
            {showAdvanced ? "Hide Advanced Options" : "Show Advanced Options"}
          </Button>
        </div>
        
        <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced} className="space-y-4">
          <CollapsibleContent className="space-y-4 border rounded-lg p-4 bg-card">
            <h3 className="text-lg font-medium">Advanced Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Keyword</label>
                <Input
                  value={searchParams.keyword}
                  onChange={(e) => handleParamChange('keyword', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input
                  value={searchParams.location}
                  onChange={(e) => handleParamChange('location', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Posted Since</label>
                <Select
                  value={searchParams.dateSincePosted}
                  onValueChange={(value) => handleParamChange('dateSincePosted', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="past Day">Past Day</SelectItem>
                    <SelectItem value="past Week">Past Week</SelectItem>
                    <SelectItem value="past Month">Past Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Type</label>
                <Select
                  value={searchParams.jobType}
                  onValueChange={(value) => handleParamChange('jobType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full time">Full Time</SelectItem>
                    <SelectItem value="part time">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Work Mode</label>
                <Select
                  value={searchParams.remoteFilter}
                  onValueChange={(value) => handleParamChange('remoteFilter', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select work mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="on-site">On-site</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Experience Level</label>
                <Select
                  value={searchParams.experienceLevel}
                  onValueChange={(value) => handleParamChange('experienceLevel', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry level">Entry Level</SelectItem>
                    <SelectItem value="associate">Associate</SelectItem>
                    <SelectItem value="mid-senior">Mid-Senior</SelectItem>
                    <SelectItem value="director">Director</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Minimum Salary</label>
                <Input
                  type="number"
                  min="0"
                  step="10000"
                  value={searchParams.salary}
                  onChange={(e) => handleParamChange('salary', Number(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Results Limit</label>
                <Input
                  type="number"
                  min="1"
                  max="50"
                  value={searchParams.limit}
                  onChange={(e) => handleParamChange('limit', Number(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Page Number</label>
                <Input
                  type="number"
                  min="0"
                  value={searchParams.page}
                  onChange={(e) => handleParamChange('page', Number(e.target.value))}
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handleSearch} disabled={isSearching}>
                {isSearching ? "Searching..." : "Search with Filters"}
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      {isSearching && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="animate-pulse">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-200 dark:bg-gray-700 h-12 w-12 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      
      {!isSearching && jobResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobResults.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      )}
      
      {!isSearching && prompt && jobResults.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            We couldn't find any jobs matching your search criteria. Try adjusting your filters or search terms.
          </p>
          <Button variant="outline" onClick={() => setPrompt("")}>
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
};

interface JobCardProps {
  job: JobResult;
}

const JobCard = ({ job }: JobCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    
    toast({
      title: isSaved ? "Removed from saved" : "Job saved",
      description: isSaved 
        ? "This job has been removed from your saved items." 
        : "This job has been saved to your profile.",
    });
  };
  
  const handleShare = () => {
    setIsShared(true);
    navigator.clipboard.writeText(`Check out this job: ${job.position} at ${job.company}. ${job.jobUrl}`);
    
    toast({
      title: "Link copied",
      description: "Job link has been copied to your clipboard.",
    });
    
    setTimeout(() => setIsShared(false), 2000);
  };
  
  const handleApply = () => {
    window.open(job.jobUrl, '_blank');
    
    toast({
      title: "Opening application",
      description: `Redirecting to apply for ${job.position} at ${job.company}.`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center">
              <img 
                src={job.companyLogo} 
                alt={job.company} 
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  // Fallback for broken image links
                  (e.target as HTMLImageElement).src = 'https://placehold.co/200x200?text=' + job.company.substring(0, 2);
                }}
              />
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                {job.position}
              </CardTitle>
              <CardDescription>{job.company}</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="h-fit">
            {job.agoTime}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" /> 
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 flex-shrink-0" /> 
          <span>Posted: {job.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <Briefcase className="h-4 w-4 flex-shrink-0" /> 
          <span>{job.salary}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button 
          variant="default" 
          size="sm" 
          className="w-1/2" 
          onClick={handleApply}
        >
          Apply Now
        </Button>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className={isSaved ? "text-red-500 bg-red-50 dark:bg-red-900/20" : ""}
            onClick={handleSave}
          >
            <Heart className={`h-4 w-4 ${isSaved ? "fill-red-500" : ""}`} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={isShared ? "text-green-500 bg-green-50 dark:bg-green-900/20" : ""}
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobSearch;
