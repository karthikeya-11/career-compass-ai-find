
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import OpportunityCard, { Opportunity } from '@/components/OpportunityCard';
import FilterSection, { FilterOptions } from '@/components/FilterSection';
import { mockOpportunities, searchMockOpportunities, filterOpportunities } from '@/data/mockData';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SearchBar from '@/components/SearchBar';
import AIPromptSection from '@/components/AIPromptSection';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(mockOpportunities);
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
    
    // Simulate an API call with a delay
    setTimeout(() => {
      const results = searchMockOpportunities(query);
      setOpportunities(results);
      setIsSearching(false);
    }, 1500);
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    const filtered = filterOpportunities(opportunities, newFilters);
    setOpportunities(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Opportunities
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/80">
              Discover scholarships, internships, and jobs tailored to your needs
            </p>
            
            <SearchBar 
              onSearch={handleSearch} 
              isLoading={isSearching}
              className="max-w-3xl mx-auto"
            />
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-custom-purple/10 to-transparent opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-white/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-white/5 to-transparent"></div>
      </section>
      
      {/* AI Prompt Section */}
      <section className="py-16 px-4 bg-pastel-gray/30">
        <div className="container mx-auto max-w-6xl">
          <AIPromptSection />
        </div>
      </section>
      
      {/* Opportunities Section */}
      <section id="opportunities" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {searchQuery ? `Results for "${searchQuery}"` : "All Opportunities"}
              </h2>
              <p className="text-muted-foreground">
                {`Found ${opportunities.length} opportunities`}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="date">Newest First</SelectItem>
                  <SelectItem value="deadline">Deadline (Soon)</SelectItem>
                </SelectContent>
              </Select>
              
              <FilterSection onFilterChange={handleFilterChange} />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isSearching ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index} 
                  className="animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl p-5 h-52"
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
                  <div className="absolute inset-0">
                    <div className="shimmer"></div>
                  </div>
                </div>
              ))
            ) : opportunities.length > 0 ? (
              opportunities.map((opp) => (
                <OpportunityCard key={opp.id} opportunity={opp} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground max-w-md mb-4">
                  We couldn't find any opportunities matching your search criteria. Try changing your search terms or filters.
                </p>
                <Button variant="outline" onClick={() => setOpportunities(mockOpportunities)}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
          
          {opportunities.length > 0 && (
            <div className="mt-10 flex justify-center">
              <div className="join">
                <Button variant="outline" className="mx-1">1</Button>
                <Button variant="outline" className="mx-1">2</Button>
                <Button variant="outline" className="mx-1">3</Button>
                <Button variant="outline" className="mx-1">...</Button>
                <Button variant="outline" className="mx-1">8</Button>
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
