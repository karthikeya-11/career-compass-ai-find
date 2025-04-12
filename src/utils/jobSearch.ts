
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
    - page: 0
    
    Example Query: "Find remote software engineer jobs in New York with a salary of $120,000"
    Example Output:
    {
        "keyword": "software engineer",
        "location": "New York",
        "dateSincePosted": "past Month",
        "jobType": "full time",
        "remoteFilter": "remote",
        "salary": 120000,
        "experienceLevel": "mid-senior",
        "limit": 20,
        "page": 0
    }`;

    // Updated to use gemini-2.0-flash model
    const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent", {
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

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
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

// Function to search jobs from LinkedIn
// Since we can't directly call LinkedIn's API from the browser due to CORS,
// we'll simulate the API call with our own implementation
export const searchJobs = async (params: JobSearchParams): Promise<JobResult[]> => {
  try {
    // In a real implementation, this would be an API call to your backend that uses the LinkedIn API
    // For now, we'll simulate the LinkedIn API response structure with more realistic data

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create realistic job results based on the search parameters
    const jobResults: JobResult[] = [];
    const numberOfJobs = Math.min(params.limit, 10); // Limiting to 10 for demo
    
    const jobPositions = [
      `${params.keyword} - ${params.experienceLevel}`,
      `Senior ${params.keyword}`,
      `${params.keyword} Specialist`,
      `Lead ${params.keyword}`,
      `${params.keyword} Expert`,
      `${params.keyword} Consultant`,
      `${params.keyword} Analyst`,
      `${params.keyword} Developer`,
      `${params.keyword} Engineer`,
      `${params.keyword} Manager`
    ];
    
    const companies = [
      "Microsoft", "Google", "Amazon", "Meta", "Apple",
      "Netflix", "IBM", "Oracle", "Salesforce", "Adobe"
    ];
    
    const logos = [
      "https://logo.clearbit.com/microsoft.com",
      "https://logo.clearbit.com/google.com",
      "https://logo.clearbit.com/amazon.com",
      "https://logo.clearbit.com/meta.com",
      "https://logo.clearbit.com/apple.com",
      "https://logo.clearbit.com/netflix.com",
      "https://logo.clearbit.com/ibm.com",
      "https://logo.clearbit.com/oracle.com",
      "https://logo.clearbit.com/salesforce.com",
      "https://logo.clearbit.com/adobe.com"
    ];
    
    const locations = [
      `${params.location} (${params.remoteFilter})`,
      `${params.location} Area`,
      `Central ${params.location}`,
      `Downtown ${params.location}`,
      `North ${params.location}`,
      `South ${params.location}`,
      `${params.location} Tech Hub`,
      `${params.location} Business District`,
      `${params.location} Metropolitan Area`,
      `Greater ${params.location} Region`
    ];
    
    // Calculate dates based on dateSincePosted parameter
    const currentDate = new Date();
    let daysToSubtract = 0;
    
    if (params.dateSincePosted === "past Day") {
      daysToSubtract = 1;
    } else if (params.dateSincePosted === "past Week") {
      daysToSubtract = 7;
    } else if (params.dateSincePosted === "past Month") {
      daysToSubtract = 30;
    }
    
    // Generate job listings
    for (let i = 0; i < numberOfJobs; i++) {
      const postDate = new Date(currentDate);
      postDate.setDate(currentDate.getDate() - Math.floor(Math.random() * daysToSubtract));
      
      const formattedDate = postDate.toISOString().split('T')[0];
      const daysAgo = Math.floor((currentDate.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));
      
      const agoTime = daysAgo === 0 ? "Today" : daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
      
      const minSalary = params.salary;
      const maxSalary = minSalary + Math.floor(minSalary * (0.2 + Math.random() * 0.3)); // 20-50% higher
      
      jobResults.push({
        position: jobPositions[i % jobPositions.length],
        company: companies[i % companies.length],
        location: locations[i % locations.length],
        date: formattedDate,
        salary: `${minSalary.toLocaleString()} - ${maxSalary.toLocaleString()} INR`,
        jobUrl: `https://linkedin.com/jobs/${i + 1000}`,
        agoTime: agoTime,
        companyLogo: logos[i % logos.length]
      });
    }
    
    return jobResults;
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
