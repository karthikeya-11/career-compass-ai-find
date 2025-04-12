
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import JobSearch from '@/components/JobSearch';
import { Briefcase } from 'lucide-react';

const Jobs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Job
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/80">
              Search for jobs powered by LinkedIn and AI
            </p>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-custom-purple/10 to-transparent opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-white/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-white/5 to-transparent"></div>
      </section>
      
      {/* Job Search Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Search Jobs
            </h2>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6">
            <JobSearch />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 px-4 bg-pastel-gray/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Smart Job Search Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Search</h3>
              <p className="text-muted-foreground">
                Simply describe what you're looking for in natural language, and our AI will find the right matches.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn Integration</h3>
              <p className="text-muted-foreground">
                Access millions of job listings from LinkedIn's powerful database integrated directly into our platform.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Filtering</h3>
              <p className="text-muted-foreground">
                Fine-tune your search with detailed filters for job type, location, salary range, and experience level.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Jobs;
