
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import OpportunityCard, { Opportunity } from '@/components/OpportunityCard';
import FilterSection, { FilterOptions } from '@/components/FilterSection';
import Footer from '@/components/Footer';
import { mockOpportunities, searchMockOpportunities, filterOpportunities } from '@/data/mockData';
import { Search, Filter, SlidersHorizontal, MapPin, Clock, Tag, BookOpen, Briefcase, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { motion } from '@/components/ui/motion';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Opportunity[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [currentTab, setCurrentTab] = useState('all');
  const { toast } = useToast();
  
  const [filters, setFilters] = useState<FilterOptions>({
    types: ['scholarship', 'internship', 'job'],
    locations: [],
    maxDistance: 50,
    deadlineRange: 30,
    sortBy: 'relevance',
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    setHasSearched(true);
    setIsAiThinking(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      setIsAiThinking(false);
      setAiResponse(`Here are some opportunities matching "${query}". I've focused on ${getRandomFocus()} opportunities based on your search terms.`);
      
      // Simulate an API call with a delay
      const results = searchMockOpportunities(query);
      setSearchResults(results);
      setIsSearching(false);
    }, 2000);
  };
  
  const getRandomFocus = () => {
    const focuses = ['local', 'remote', 'entry-level', 'student-friendly', 'recently posted'];
    return focuses[Math.floor(Math.random() * focuses.length)];
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    
    if (searchResults.length) {
      const filtered = filterOpportunities(searchResults, newFilters);
      setSearchResults(filtered);
      
      toast({
        title: "Filters applied",
        description: `${filtered.length} opportunities match your filters.`,
      });
    }
  };
  
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    
    let filteredResults = searchResults.length > 0 ? searchResults : mockOpportunities;
    
    if (value !== 'all') {
      filteredResults = filteredResults.filter(opp => opp.type === value);
    }
    
    setSearchResults(filteredResults);
  };

  // Load initial opportunities
  useEffect(() => {
    setSearchResults(mockOpportunities);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Search Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Opportunities</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect scholarship, internship, or job opportunity tailored to your skills and interests
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchBar 
              onSearch={handleSearch} 
              isLoading={isSearching}
              className="max-w-3xl mx-auto"
            />
          </motion.div>
          
          {/* AI Response Area */}
          {(isAiThinking || aiResponse) && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto mt-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.64"></path>
                      <path d="M21 3v9h-9"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-medium">CareerCompass AI</h3>
                    </div>
                    <div className="mt-1">
                      {isAiThinking ? (
                        <div className="flex gap-1 items-center text-muted-foreground">
                          <span>Analyzing your query</span>
                          <span className="flex gap-1">
                            <span className="animate-bounce delay-0">.</span>
                            <span className="animate-bounce delay-150">.</span>
                            <span className="animate-bounce delay-300">.</span>
                          </span>
                        </div>
                      ) : (
                        <p>{aiResponse}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Opportunity Listings Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold mb-2"
              >
                {hasSearched ? `Results for "${searchQuery}"` : "All Opportunities"}
              </motion.h2>
              <p className="text-muted-foreground">
                {searchResults.length} opportunities available
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <FilterSection onFilterChange={handleFilterChange} />
            </div>
          </div>
          
          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Tabs 
              defaultValue="all" 
              value={currentTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="grid grid-cols-4 max-w-md mx-auto">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <span>All</span>
                </TabsTrigger>
                <TabsTrigger value="scholarship" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Scholarships</span>
                </TabsTrigger>
                <TabsTrigger value="internship" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Internships</span>
                </TabsTrigger>
                <TabsTrigger value="job" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  <span>Jobs</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
          
          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isSearching ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl p-5 h-52 relative"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-10 w-10"></div>
                      <div>
                        <div className="bg-gray-200 dark:bg-gray-700 h-5 w-32 rounded-md mb-2"></div>
                        <div className="bg-gray-200 dark:bg-gray-700 h-3 w-20 rounded-md"></div>
                      </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-6 w-24 rounded-full"></div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 w-full rounded-md"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 w-full rounded-md"></div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <div className="bg-gray-200 dark:bg-gray-700 h-8 w-24 rounded-md"></div>
                    <div className="flex gap-2">
                      <div className="bg-gray-200 dark:bg-gray-700 h-8 w-8 rounded-md"></div>
                      <div className="bg-gray-200 dark:bg-gray-700 h-8 w-8 rounded-md"></div>
                    </div>
                  </div>
                  <div className="shimmer"></div>
                </motion.div>
              ))
            ) : searchResults.length > 0 ? (
              // Search results
              searchResults.map((opp, index) => (
                <motion.div
                  key={opp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <OpportunityCard opportunity={opp} />
                </motion.div>
              ))
            ) : (
              // No results found
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground max-w-md mb-4">
                  Try adjusting your search terms or filters to find more opportunities.
                </p>
                <Button onClick={() => setSearchResults(mockOpportunities)}>
                  View All Opportunities
                </Button>
              </div>
            )}
          </div>
          
          {/* Pagination - Simple version */}
          {searchResults.length > 0 && (
            <div className="flex justify-center mt-10">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0">1</Button>
                <Button variant="outline" className="w-10 h-10 p-0">2</Button>
                <Button variant="outline" className="w-10 h-10 p-0">3</Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Explore;
