
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Zap, MessageSquare, Bell, BarChart4, Database, Lock, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Smart AI-Powered Search",
      description: "Our proprietary AI analyzes your search queries to understand your intent beyond just keywords. It understands context, location preferences, and skill requirements."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Regional Focus",
      description: "Unlike global platforms, we specialize in local and regional opportunities, giving students access to opportunities they won't find elsewhere."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Telegram Bot Integration",
      description: "Get real-time notifications and search for opportunities directly from Telegram. No need to constantly check the website."
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Smart Deadline Alerts",
      description: "Never miss an application deadline with our intelligent notification system that reminds you at the optimal time."
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary" />,
      title: "Personalized Recommendations",
      description: "The more you use CareerCompass AI, the better it gets at recommending opportunities that match your skills, interests, and career goals."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Comprehensive Database",
      description: "We aggregate opportunities from thousands of sources, including university portals, government websites, and exclusive partnerships with employers."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Privacy-Focused",
      description: "We never sell your data to third parties. Your search history and preferences are used solely to improve your experience."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Multilingual Support",
      description: "Search for opportunities in multiple languages, making it easier for students from diverse backgrounds to find relevant information."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Features that Set Us Apart</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              CareerCompass AI is built with cutting-edge technology to help students discover opportunities that perfectly match their skills and aspirations.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Watch Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Compare</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how CareerCompass AI stacks up against traditional job search platforms
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b dark:border-gray-700"></th>
                  <th className="text-center p-4 border-b dark:border-gray-700">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center mb-2">
                        <span className="text-white font-bold">C</span>
                      </div>
                      <span className="font-bold">CareerCompass AI</span>
                    </div>
                  </th>
                  <th className="text-center p-4 border-b dark:border-gray-700">
                    <span className="font-bold text-muted-foreground">Traditional Platforms</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b dark:border-gray-700 font-medium">AI-Powered Search</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-green-500">✓</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Regional Focus</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-green-500">✓</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Telegram Integration</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-green-500">✓</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Smart Notifications</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-green-500">✓</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-yellow-500">Limited</td>
                </tr>
                <tr>
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Personalization</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-green-500">Advanced</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-yellow-500">Basic</td>
                </tr>
                <tr>
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Student-Focused</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-green-500">✓</td>
                  <td className="text-center p-4 border-b dark:border-gray-700 text-red-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Perfect Opportunity?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of students who have found scholarships, internships, and jobs through CareerCompass AI.
            </p>
            <Button size="lg" className="animate-pulse">Get Started Now</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
