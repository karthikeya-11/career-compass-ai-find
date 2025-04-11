
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Send, Clock, Search, BookOpen, Bell, Zap, Users, Shield, CheckCircle, Download, Smartphone } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from '@/components/ui/motion';
import { useToast } from '@/hooks/use-toast';

const TelegramBot = () => {
  const [qrHovered, setQrHovered] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  // Function to check if element is in viewport
  const checkVisibility = () => {
    document.querySelectorAll("[data-section]").forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
        rect.bottom >= 0
      );
      
      if (isVisible) {
        const sectionId = element.getAttribute("data-section");
        if (sectionId) {
          setVisibleSections(prev => ({...prev, [sectionId]: true}));
        }
      }
    });
  };

  // Monitor scroll to trigger animations
  useEffect(() => {
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);
  
  const handleBotOpen = () => {
    // Open Telegram bot in a new tab
    window.open('https://t.me/CareerCompass5_bot', '_blank');
    
    toast({
      title: "Opening Telegram Bot",
      description: "Redirecting you to the CareerCompass AI bot on Telegram.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary mb-2"
              >
                <Send className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Available on Telegram</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold"
              >
                Your Career Assistant in Your Pocket
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground"
              >
                Get personalized opportunity recommendations, deadline reminders, and search for new openings directly from Telegram.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button size="lg" className="gap-2" onClick={handleBotOpen}>
                  <Send className="h-4 w-4" /> Start Bot on Telegram
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
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
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg inline-block max-w-[80%]"
                  >
                    Hello! I'm CareerCompass AI. What opportunities are you looking for today?
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg inline-block max-w-[80%] ml-auto"
                  >
                    I'm looking for remote internships in web development
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg inline-block max-w-[80%]"
                  >
                    Great! I found 5 remote web development internships. Here's the top match: <br /><br />
                    <strong>Frontend Developer Intern</strong><br />
                    TechSolutions Inc.<br />
                    Remote | Deadline: May 15, 2024<br /><br />
                    Reply with "1" to see details or "more" to see more results.
                  </motion.div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                    <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 h-full w-full bg-primary/20 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 px-4" data-section="qr-section">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections['qr-section'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold"
              >
                Connect in Seconds
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections['qr-section'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg"
              >
                Scan this QR code with your phone's camera to instantly connect with our Telegram bot and start receiving personalized opportunity recommendations.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections['qr-section'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg"
              >
                Alternatively, you can search for <strong>@CareerCompass5_bot</strong> in the Telegram app or click the button below.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections['qr-section'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button className="gap-2" onClick={handleBotOpen}>
                  <Send className="h-4 w-4" /> Open in Telegram
                </Button>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visibleSections['qr-section'] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <div 
                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300"
                onMouseEnter={() => setQrHovered(true)}
                onMouseLeave={() => setQrHovered(false)}
              >
                <div className={`bg-blue-50 p-4 rounded-lg transition-all duration-300 ${qrHovered ? 'scale-105' : ''}`}>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://t.me/CareerCompass5_bot" 
                    alt="Telegram Bot QR Code" 
                    className="w-64 h-64 mx-auto"
                  />
                </div>
                <p className="text-center mt-4 text-muted-foreground">Scan to connect with @CareerCompass5_bot</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Tab Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" data-section="features-tabs">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['features-tabs'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              What Can Our Bot Do?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['features-tabs'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Explore the powerful features of our Telegram bot
            </motion.p>
          </div>

          <Tabs defaultValue="search" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={visibleSections['features-tabs'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="search">Search</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="save">Save & Track</TabsTrigger>
                <TabsTrigger value="commands">Commands</TabsTrigger>
              </TabsList>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={visibleSections['features-tabs'] ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TabsContent value="search" className="bg-white dark:bg-gray-800 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">Intelligent Search</h3>
                    <p>
                      Our bot understands natural language queries and can help you find opportunities based on your specific criteria:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Search based on keywords, skills, or job titles</li>
                      <li>Filter by location preferences (remote, specific cities, etc.)</li>
                      <li>Specify opportunity types (scholarships, internships, jobs)</li>
                      <li>Set salary ranges or scholarship amounts</li>
                      <li>Filter by deadline periods</li>
                    </ul>
                    <p className="italic text-muted-foreground">
                      Example: "Find me remote internships in web development with deadlines in the next month"
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="https://cdn.dribbble.com/users/1138853/screenshots/8894959/media/8b3ce692de30e3a123772b59a67c32c8.gif" 
                      alt="Search Illustration" 
                      className="rounded-lg shadow-md w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="alerts" className="bg-white dark:bg-gray-800 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">Smart Notifications</h3>
                    <p>
                      Stay updated without checking the app constantly:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Get alerts for new opportunities matching your criteria</li>
                      <li>Receive deadline reminders for saved opportunities</li>
                      <li>Customize notification frequency (daily, weekly, immediate)</li>
                      <li>Set quiet hours when you don't want to be disturbed</li>
                      <li>Get application tips as deadlines approach</li>
                    </ul>
                    <p className="italic text-muted-foreground">
                      Never miss an important opportunity or deadline again!
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="https://cdn.dribbble.com/users/2574702/screenshots/6702278/notifications.gif" 
                      alt="Notifications Illustration" 
                      className="rounded-lg shadow-md w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="save" className="bg-white dark:bg-gray-800 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">Save & Track Applications</h3>
                    <p>
                      Manage your opportunities and applications efficiently:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Save interesting opportunities for later</li>
                      <li>Organize opportunities into custom collections</li>
                      <li>Track application statuses (Applied, Interview, Offer, etc.)</li>
                      <li>Set reminders for follow-ups</li>
                      <li>Share opportunities with friends via Telegram</li>
                    </ul>
                    <p className="italic text-muted-foreground">
                      Your personal career assistant that keeps everything organized!
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="https://cdn.dribbble.com/users/1998175/screenshots/15603697/media/9b3604eba6b2db5b111f6cd37dfe25a5.gif" 
                      alt="Save and Track Illustration" 
                      className="rounded-lg shadow-md w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="commands" className="bg-white dark:bg-gray-800 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">Useful Commands</h3>
                    <p>
                      Quick commands to get what you need:
                    </p>
                    <ul className="space-y-2">
                      <li><span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/start</span> - Begin interaction with the bot</li>
                      <li><span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/search</span> - Search for opportunities</li>
                      <li><span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/saved</span> - View your saved opportunities</li>
                      <li><span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/deadlines</span> - See upcoming deadlines</li>
                      <li><span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/preferences</span> - Update your preferences</li>
                      <li><span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/alerts</span> - Manage your notification settings</li>
                      <li><span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/help</span> - Get assistance with using the bot</li>
                    </ul>
                    <p className="italic text-muted-foreground">
                      The bot also understands natural language, so you can simply chat with it!
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg font-mono text-sm">
                      <p className="mb-2"><span className="text-green-500">user:</span> /start</p>
                      <p className="mb-4"><span className="text-blue-500">bot:</span> Welcome to CareerCompass AI! I'm your personal career assistant. What can I help you with today?</p>
                      
                      <p className="mb-2"><span className="text-green-500">user:</span> /search internships in software development</p>
                      <p className="mb-4"><span className="text-blue-500">bot:</span> Searching for software development internships... Found 12 opportunities!</p>
                      
                      <p className="mb-2"><span className="text-green-500">user:</span> /saved</p>
                      <p className="mb-4"><span className="text-blue-500">bot:</span> You have 3 saved opportunities. Here they are...</p>
                      
                      <p className="mb-2"><span className="text-green-500">user:</span> /deadlines this week</p>
                      <p><span className="text-blue-500">bot:</span> You have 2 opportunities with deadlines this week...</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4" data-section="how-it-works">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['how-it-works'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['how-it-works'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Getting started with our Telegram bot is simple
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={visibleSections['how-it-works'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Connect</h3>
              <p>
                Scan the QR code or search for @CareerCompass5_bot on Telegram. Start the bot with the /start command.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={visibleSections['how-it-works'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Set Preferences</h3>
              <p>
                Tell the bot about your interests, skills, location, and the types of opportunities you're looking for.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={visibleSections['how-it-works'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Start Receiving</h3>
              <p>
                Get personalized recommendations, search for opportunities, and receive notifications based on your preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" data-section="mobile-showcase">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={visibleSections['mobile-showcase'] ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative max-w-xs mx-auto md:mx-0">
                <div className="bg-black rounded-[40px] p-3 relative z-20 shadow-xl">
                  <div className="relative bg-white dark:bg-gray-900 rounded-[32px] overflow-hidden h-[580px]">
                    <div className="absolute inset-0 w-full h-full overflow-auto">
                      {/* Phone Screen Content */}
                      <div className="bg-blue-50 dark:bg-gray-800 min-h-full">
                        {/* Telegram Header */}
                        <div className="bg-blue-500 text-white p-3">
                          <div className="flex justify-between items-center">
                            <button className="text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <div className="text-center">
                              <div className="font-medium">CareerCompass AI</div>
                              <div className="text-xs opacity-80">Online</div>
                            </div>
                            <button className="text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle></svg>
                            </button>
                          </div>
                        </div>
                        
                        {/* Chat Messages */}
                        <div className="p-3 space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-2 rounded-lg max-w-[80%] shadow-sm">
                            <p className="text-sm">Welcome to CareerCompass AI! I'm here to help you discover career opportunities. What type of opportunity are you looking for?</p>
                            <p className="text-xs text-right text-gray-500 mt-1">9:30 AM</p>
                          </div>
                          
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg max-w-[80%] ml-auto shadow-sm">
                            <p className="text-sm">I need a remote internship in data science</p>
                            <p className="text-xs text-right text-gray-500 mt-1">9:31 AM</p>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-700 p-2 rounded-lg max-w-[80%] shadow-sm">
                            <p className="text-sm">Great! I found 4 remote data science internships that match your profile. Here's the best match:</p>
                            <div className="mt-2 bg-blue-50 dark:bg-gray-600 p-2 rounded border-l-4 border-blue-500">
                              <p className="font-bold text-sm">Data Science Intern</p>
                              <p className="text-xs">TechInsights Inc. - Remote</p>
                              <p className="text-xs">Deadline: May 20, 2024</p>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <button className="bg-blue-500 text-white text-xs py-1 px-2 rounded">View Details</button>
                              <button className="bg-gray-200 dark:bg-gray-500 text-xs py-1 px-2 rounded">More Results</button>
                            </div>
                            <p className="text-xs text-right text-gray-500 mt-1">9:32 AM</p>
                          </div>
                          
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg max-w-[80%] ml-auto shadow-sm">
                            <p className="text-sm">View Details</p>
                            <p className="text-xs text-right text-gray-500 mt-1">9:32 AM</p>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-700 p-2 rounded-lg max-w-[80%] shadow-sm">
                            <p className="text-sm">Here are the details for the Data Science Intern position:</p>
                            <div className="mt-2 bg-blue-50 dark:bg-gray-600 p-2 rounded">
                              <p className="font-bold text-sm">Data Science Intern</p>
                              <p className="text-xs">TechInsights Inc. - Remote</p>
                              <p className="text-xs">Deadline: May 20, 2024</p>
                              <p className="text-xs mt-1">Requirements: Python, SQL, Statistics</p>
                              <p className="text-xs">Duration: 3 months</p>
                              <p className="text-xs">Stipend: $1000/month</p>
                              <a href="#" className="text-xs text-blue-500 block mt-1">Apply Now →</a>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <button className="bg-blue-500 text-white text-xs py-1 px-2 rounded">Save</button>
                              <button className="bg-gray-200 dark:bg-gray-500 text-xs py-1 px-2 rounded">Share</button>
                            </div>
                            <p className="text-xs text-right text-gray-500 mt-1">9:33 AM</p>
                          </div>
                        </div>
                        
                        {/* Input Area */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-700 p-2">
                          <div className="flex gap-2 items-center">
                            <div className="flex-1 bg-white dark:bg-gray-600 rounded-full px-4 py-2">
                              <input type="text" placeholder="Message" className="bg-transparent border-none outline-none w-full text-sm" />
                            </div>
                            <button className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 z-30 flex justify-center">
                    <div className="w-1/3 h-full bg-black rounded-b-3xl"></div>
                  </div>
                </div>
                
                {/* Phone Reflection */}
                <div className="absolute -bottom-4 -right-4 left-4 h-full rounded-[40px] bg-gradient-to-br from-black/20 to-transparent -z-10 transform rotate-3"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={visibleSections['mobile-showcase'] ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary">
                <Smartphone className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Mobile Experience</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Smart, Interactive, Responsive</h2>
              <p className="text-lg text-muted-foreground">
                Our Telegram bot provides a seamless mobile experience that helps you discover and apply to opportunities on the go.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Intelligent Conversations</h3>
                    <p className="text-muted-foreground">The bot understands natural language queries and provides relevant, personalized responses.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Complete Application Management</h3>
                    <p className="text-muted-foreground">Save, track, and manage applications directly from the chat interface.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">No Installation Required</h3>
                    <p className="text-muted-foreground">Works directly in Telegram - no need to download yet another app or create new accounts.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="gap-2" onClick={handleBotOpen}>
                <Send className="h-4 w-4" /> Try Bot on Telegram
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4" data-section="faq">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={visibleSections['faq'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions about our Telegram bot?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['faq'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Is the Telegram bot free to use?</h3>
              <p>Yes, the Telegram bot is completely free for all students to use. There are no hidden charges.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['faq'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">How often will I receive notifications?</h3>
              <p>You can customize notification frequency in your preferences. By default, you'll receive a daily digest of new opportunities.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['faq'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Is my data private?</h3>
              <p>Absolutely. We take privacy seriously and never share your personal information with third parties. Your data is only used to improve your recommendations.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['faq'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Can I use the bot without the website?</h3>
              <p>Yes, the Telegram bot is a standalone service. While the website offers additional features, you can fully use the bot independently.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['faq'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Does the bot work in all countries?</h3>
              <p>Yes, the bot works globally. However, opportunity recommendations are currently most comprehensive for India, with expanding coverage in other regions.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections['faq'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">How do I report an issue with the bot?</h3>
              <p>You can use the /help command in the bot and select "Report Issue," or contact our support team through the website.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 hero-gradient text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Opportunity Search?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of students who discover perfect opportunities every day with our Telegram bot.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 gap-2"
              onClick={handleBotOpen}
            >
              <Send className="h-4 w-4" /> Open Telegram Bot
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TelegramBot;
