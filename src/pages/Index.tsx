
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import OpportunityCard, { Opportunity } from '@/components/OpportunityCard';
import FilterSection, { FilterOptions } from '@/components/FilterSection';
import Footer from '@/components/Footer';
import { mockOpportunities, searchMockOpportunities, filterOpportunities } from '@/data/mockData';
import { Sparkles, ArrowRight, BookOpen, Briefcase, GraduationCap, Send, MessageSquare, Globe, Zap, Award, User, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

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

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100",
      role: "Computer Science Student",
      message: "CareerCompass AI helped me find a remote internship that perfectly matched my skills. The personalized recommendations made my job search so much easier!",
      stars: 5,
    },
    {
      id: 2,
      name: "Rahul Verma",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100",
      role: "Engineering Graduate",
      message: "I discovered a scholarship that covered my master's degree tuition through this platform. The AI understood exactly what I was looking for.",
      stars: 5,
    },
  ];

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

      {/* Features Overview Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">One Platform, Endless Possibilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CareerCompass AI brings together everything you need to accelerate your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scholarships</h3>
              <p className="text-muted-foreground mb-6">
                Discover scholarships tailored to your academic achievements, field of study, and personal background.
              </p>
              <Link to="/features" className="text-primary font-medium flex items-center justify-center gap-1 hover:underline">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Internships</h3>
              <p className="text-muted-foreground mb-6">
                Find internships that provide real-world experience in your field, whether remote or in your local area.
              </p>
              <Link to="/features" className="text-primary font-medium flex items-center justify-center gap-1 hover:underline">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Jobs</h3>
              <p className="text-muted-foreground mb-6">
                Explore career opportunities that match your skills, experience level, and location preferences.
              </p>
              <Link to="/features" className="text-primary font-medium flex items-center justify-center gap-1 hover:underline">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Opportunities Preview Section */}
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
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="gap-2">
              View All Opportunities <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose CareerCompass AI?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another opportunity platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
              <p className="text-muted-foreground">
                Our advanced algorithms analyze your skills and preferences to recommend the most relevant opportunities for you.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regional Focus</h3>
              <p className="text-muted-foreground">
                We specialize in local and regional opportunities that are often overlooked by global platforms.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Telegram Integration</h3>
              <p className="text-muted-foreground">
                Get real-time notifications and search for opportunities directly from Telegram.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Opportunities</h3>
              <p className="text-muted-foreground">
                Access scholarships and internships that aren't listed on other platforms through our exclusive partnerships.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Guidance</h3>
              <p className="text-muted-foreground">
                Receive tailored advice on applications, interviews, and career development from our AI assistant.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Student-First Approach</h3>
              <p className="text-muted-foreground">
                Built by students for students, we understand the unique challenges and needs of today's learners.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/features">
              <Button size="lg" className="gap-2">
                Explore All Features <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Telegram Bot Section Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">CareerCompass in Your Pocket</h2>
              <p className="text-lg text-muted-foreground">
                Get real-time notifications on new opportunities directly in your Telegram inbox. Never miss a deadline again!
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Instant Updates</h3>
                    <p className="text-muted-foreground">Be the first to know about new opportunities as soon as they're posted.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Search On-the-Go</h3>
                    <p className="text-muted-foreground">Find opportunities whenever and wherever you are with our smart Telegram bot.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/telegram-bot">
                <Button className="mt-6 gap-2" size="lg">
                  <Send className="h-4 w-4" /> Learn More About Our Bot
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 border-b pb-4 mb-4">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">CareerCompass AI</h3>
                    <p className="text-xs text-muted-foreground">Bot</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg inline-block max-w-[80%]">
                    Hello! I'm CareerCompass AI. What opportunities are you looking for today?
                  </div>
                  
                  <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg inline-block max-w-[80%] ml-auto">
                    I'm looking for remote internships in web development
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg inline-block max-w-[80%]">
                    Great! I found 5 remote web development internships. Here's the top match: <br /><br />
                    <strong>Frontend Developer Intern</strong><br />
                    TechSolutions Inc.<br />
                    Remote | Deadline: May 15, 2024<br /><br />
                    Reply with "1" to see details or "more" to see more results.
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 h-full w-full bg-primary/20 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Personal Career Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Coming soon: Track your applications, manage deadlines, and get personalized recommendations
            </p>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 overflow-hidden">
              <img 
                src="https://cdn.dribbble.com/userupload/4551584/file/original-6bec1c6c01143bca1af8f3839c634e90.png?compress=1&resize=1024x768" 
                alt="Dashboard Preview" 
                className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 w-full h-full rounded-xl -z-10"></div>
          </div>

          <div className="text-center mt-12">
            <Link to="/dashboard">
              <Button size="lg">Preview Dashboard</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hear from students who found amazing opportunities through CareerCompass AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white dark:bg-gray-800 hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-center mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < testimonial.stars ? 'fill-amber-500' : ''}`} />
                    ))}
                  </div>
                  
                  <p className="text-sm">"{testimonial.message}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/about">
              <Button variant="outline" size="lg" className="gap-2">
                Read More Stories <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Opportunity?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of students who've discovered their path to success with CareerCompass AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Get Started Now</Button>
              <Link to="/telegram-bot">
                <Button variant="outline" size="lg" className="gap-2">
                  <Send className="h-4 w-4" /> Connect with Bot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
