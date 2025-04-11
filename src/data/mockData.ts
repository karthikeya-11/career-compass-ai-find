
import { Opportunity } from "../components/OpportunityCard";

export const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Women in Technology Scholarship",
    organization: "Tech Innovation Foundation",
    location: "National",
    deadline: "May 30, 2024",
    type: "scholarship",
    description: "A scholarship program designed for women pursuing degrees in computer science, engineering, or related technology fields. The scholarship covers tuition and provides mentorship opportunities with industry leaders.",
    url: "#"
  },
  {
    id: "2",
    title: "Frontend Developer Internship",
    organization: "WebSphere Technologies",
    location: "Remote",
    deadline: "April 15, 2024",
    type: "internship",
    description: "A 3-month remote internship for students skilled in modern frontend technologies like React, TypeScript, and Tailwind CSS. Interns will work on real-world projects under the guidance of senior developers.",
    url: "#"
  },
  {
    id: "3",
    title: "Data Scientist",
    organization: "Analytics Innovations",
    location: "Hyderabad",
    deadline: "June 10, 2024",
    type: "job",
    description: "Looking for a talented data scientist with expertise in machine learning, statistical analysis, and data visualization. The role involves developing and implementing data models to solve complex business problems.",
    url: "#"
  },
  {
    id: "4",
    title: "Merit-based Engineering Scholarship",
    organization: "Future Engineers Foundation",
    location: "National",
    deadline: "July 20, 2024",
    type: "scholarship",
    description: "A prestigious scholarship awarded to outstanding engineering students with demonstrated academic excellence. The scholarship covers full tuition and includes a stipend for books and supplies.",
    url: "#"
  },
  {
    id: "5",
    title: "UX/UI Design Internship",
    organization: "Creative Design Studios",
    location: "Remote",
    deadline: "May 5, 2024",
    type: "internship",
    description: "A 4-month internship for aspiring UX/UI designers passionate about creating intuitive and visually appealing user experiences. Interns will collaborate with product teams to design interfaces for web and mobile applications.",
    url: "#"
  },
  {
    id: "6",
    title: "Software Engineer",
    organization: "InnoTech Solutions",
    location: "Bangalore",
    deadline: "April 30, 2024",
    type: "job",
    description: "Seeking a motivated software engineer to join our development team. The role involves designing, developing, and maintaining software applications using modern technologies such as React, Node.js, and AWS.",
    url: "#"
  }
];

export const searchMockOpportunities = (query: string) => {
  if (!query) return [];
  
  // Simulate a search by filtering opportunities that contain the query in title or description
  const lowercaseQuery = query.toLowerCase();
  
  return mockOpportunities.filter(
    opp => 
      opp.title.toLowerCase().includes(lowercaseQuery) || 
      opp.description.toLowerCase().includes(lowercaseQuery) ||
      opp.organization.toLowerCase().includes(lowercaseQuery) ||
      opp.location.toLowerCase().includes(lowercaseQuery) ||
      opp.type.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterOpportunities = (opportunities: Opportunity[], filters: any) => {
  return opportunities.filter(opp => {
    // Filter by type
    if (filters.types.length > 0 && !filters.types.includes(opp.type)) {
      return false;
    }
    
    // More filters can be added here
    
    return true;
  });
};
