
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import OpportunityCard, { Opportunity } from '@/components/OpportunityCard';
import FilterSection, { FilterOptions } from '@/components/FilterSection';
import TelegramBotSection from '@/components/TelegramBotSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import { mockOpportunities, searchMockOpportunities, filterOpportunities } from '@/data/mockData';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Opportunity[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
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
    
    // Simulate an API call with a delay
    setTimeout(() => {
      const results = searchMockOpportunities(query);
      setSearchResults(results);
      setIsSearching(false);
    }, 1500);
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    
    if (searchResults.length) {
      const filtered = filterOpportunities(searchResults, newFilters);
      setSearchResults(filtered);
    }
  };

  // Load some initial opportunities on first render
  useEffect(() => {
    setSearchResults(mockOpportunities.slice(0, 3));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">AI-Powered Recommendations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect <span className="relative whitespace-nowrap">
                <span className="relative z-10">Opportunity</span>
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -bottom-2 left-0 h-[.6em] w-full fill-white/20 rotate-180" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/80">
              Discover scholarships, internships, and jobs that match your skills and interests
            </p>
            
            <SearchBar 
              onSearch={handleSearch} 
              isLoading={isSearching}
              className="max-w-3xl mx-auto"
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-custom-purple/10 to-transparent opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-white/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-white/5 to-transparent"></div>
      </section>
      
      {/* Opportunities Section */}
      <section id="opportunities" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {hasSearched ? `Results for "${searchQuery}"` : "Recommended Opportunities"}
              </h2>
              <p className="text-muted-foreground">
                {hasSearched 
                  ? `Found ${searchResults.length} opportunities matching your search`
                  : "Explore these hand-picked opportunities for you"}
              </p>
            </div>
            
            <FilterSection onFilterChange={handleFilterChange} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isSearching ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
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
            ) : searchResults.length > 0 ? (
              // Search results
              searchResults.map((opp) => (
                <OpportunityCard key={opp.id} opportunity={opp} />
              ))
            ) : hasSearched ? (
              // No results found
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 mb-4">
                  <svg className="h-8 w-8 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 15.5l-3-3m0 0l-3 3m3-3v9m0-9H12a9 9 0 11-9-9h16.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground max-w-md mb-4">
                  We couldn't find any opportunities matching your search criteria. Try changing your search terms or filters.
                </p>
              </div>
            ) : (
              // Initial state
              mockOpportunities.slice(0, 3).map((opp) => (
                <OpportunityCard key={opp.id} opportunity={opp} />
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Telegram Bot Section */}
      <section id="telegram-bot">
        <TelegramBotSection />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
