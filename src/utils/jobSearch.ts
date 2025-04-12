
import { toast } from "@/components/ui/use-toast";

export interface JobSearchParams {
  keyword: string;
  location: string;
  dateSincePosted: string;
  jobType: string;
  remoteFilter: string;
  salary: number;
  experienceLevel: string;
  limit: number;
  page: number;
}

export interface JobResult {
  position: string;
  company: string;
  location: string;
  date: string;
  salary: string;
  jobUrl: string;
  agoTime: string;
  companyLogo: string;
}

export const extractEntitiesWithGemini = async (prompt: string): Promise<JobSearchParams> => {
  try {
    const apiKey = "AIzaSyA3dqyqPY626oDCBJi8U3y3WdjX8MSAQZI"; // Note: In a production app, this should be stored in environment variables
    
    const instruction = `Extract job details from the given user query. 
    Return a structured JSON with the following fields:
    - keyword (Job title)
    - location (City or Country)
    - dateSincePosted (One of: 'past Day', 'past Week', 'past Month')
    - jobType (One of: 'full time', 'part time', 'contract', 'temporary', 'internship')
    - remoteFilter (One of: 'on-site', 'remote', 'hybrid')
    - salary (Minimum salary as an integer)
    - experienceLevel (One of: 'entry level', 'associate', 'mid-senior', 'director', 'executive')
    - limit (Integer, number of results)
    - page (Integer, page number)

    If any field is missing in the user's query, use the default values:
    - keyword: "software engineer"
    - location: "Hyderabad"
    - dateSincePosted: "past Month"
    - jobType: "full time"
    - remoteFilter: "on-site"
    - salary: 100000
    - experienceLevel: "mid-senior"
    - limit: 20
    - page: 0`;

    const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${instruction}\nUser Query: ${prompt}`
          }]
        }]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to extract entities from prompt");
    }

    const responseText = data.candidates[0]?.content?.parts[0]?.text || "";
    
    // Extract JSON from response text
    const jsonStart = responseText.indexOf("{");
    const jsonEnd = responseText.lastIndexOf("}") + 1;
    
    if (jsonStart !== -1 && jsonEnd !== -1) {
      const jsonString = responseText.substring(jsonStart, jsonEnd);
      return JSON.parse(jsonString);
    } else {
      throw new Error("Could not extract JSON from response");
    }
  } catch (error) {
    console.error("Error extracting entities:", error);
    toast({
      title: "Error processing prompt",
      description: "Could not extract search parameters from your prompt. Using default values.",
      variant: "destructive"
    });
    
    // Return default values if extraction fails
    return {
      keyword: "software engineer",
      location: "Hyderabad",
      dateSincePosted: "past Month",
      jobType: "full time",
      remoteFilter: "on-site",
      salary: 100000,
      experienceLevel: "mid-senior",
      limit: 20,
      page: 0
    };
  }
};

// Mock function to simulate LinkedIn API call
// In a real implementation, you would make an actual API call to LinkedIn
export const searchJobs = async (params: JobSearchParams): Promise<JobResult[]> => {
  try {
    // For demo purposes, let's generate mock data based on the search parameters
    // In a real implementation, this would be an actual API call
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate some mock job results
    const mockCompanies = ["TechCorp", "DataSolutions", "WebInnovate", "CloudSystems", "AIVentures"];
    const mockLogos = [
      "https://placehold.co/200x200?text=TC",
      "https://placehold.co/200x200?text=DS",
      "https://placehold.co/200x200?text=WI",
      "https://placehold.co/200x200?text=CS",
      "https://placehold.co/200x200?text=AI"
    ];
    
    const salaryRanges = [
      `${params.salary.toLocaleString()} - ${(params.salary * 1.2).toLocaleString()} INR`,
      `${params.salary.toLocaleString()} - ${(params.salary * 1.3).toLocaleString()} INR`,
      `${params.salary.toLocaleString()} - ${(params.salary * 1.25).toLocaleString()} INR`,
      `Up to ${(params.salary * 1.4).toLocaleString()} INR`,
      `${params.salary.toLocaleString()}+ INR`
    ];
    
    const timeAgo = ["1 day ago", "2 days ago", "3 days ago", "1 week ago", "Just now"];
    const dates = ["2025-04-01", "2025-04-05", "2025-04-08", "2025-04-10", "2025-04-12"];
    
    // Generate mock results based on the search parameters
    return Array.from({ length: Math.min(params.limit, 10) }, (_, i) => ({
      position: `${params.keyword} (${params.experienceLevel})`,
      company: mockCompanies[i % mockCompanies.length],
      location: `${params.location} (${params.remoteFilter})`,
      date: dates[i % dates.length],
      salary: salaryRanges[i % salaryRanges.length],
      jobUrl: `https://example.com/jobs/${i}`,
      agoTime: timeAgo[i % timeAgo.length],
      companyLogo: mockLogos[i % mockLogos.length]
    }));
    
  } catch (error) {
    console.error("Error searching jobs:", error);
    toast({
      title: "Error searching jobs",
      description: "Could not fetch job listings. Please try again.",
      variant: "destructive"
    });
    return [];
  }
};

// Filter out duplicate jobs
export const filterUniqueJobs = (jobs: JobResult[]): JobResult[] => {
  const uniqueJobs: JobResult[] = [];
  const seen = new Set();

  for (const job of jobs) {
    // Create a unique identifier for the job
    const jobIdentifier = `${job.position}-${job.company}-${job.jobUrl}`;

    if (!seen.has(jobIdentifier)) {
      seen.add(jobIdentifier);
      uniqueJobs.push(job);
    }
  }

  return uniqueJobs;
};
