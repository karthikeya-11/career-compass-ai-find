
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Send, Clock, Search, BookOpen, Bell, Zap, Users, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TelegramBot = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary mb-2">
                <Send className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Available on Telegram</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Your Career Assistant in Your Pocket</h1>
              <p className="text-xl text-muted-foreground">
                Get personalized opportunity recommendations, deadline reminders, and search for new openings directly from Telegram.
              </p>
              <Button size="lg" className="gap-2">
                <Send className="h-4 w-4" /> Start Bot on Telegram
              </Button>
            </div>
            <div className="md:w-1/2 relative">
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
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Connect in Seconds</h2>
              <p className="text-lg">
                Scan this QR code with your phone's camera to instantly connect with our Telegram bot and start receiving personalized opportunity recommendations.
              </p>
              <p className="text-lg">
                Alternatively, you can search for <strong>@CareerCompassAI_bot</strong> in the Telegram app or click the button below.
              </p>
              <Button className="gap-2">
                <Send className="h-4 w-4" /> Open in Telegram
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://t.me/careercompassai_bot" 
                    alt="Telegram Bot QR Code" 
                    className="w-64 h-64 mx-auto"
                  />
                </div>
                <p className="text-center mt-4 text-muted-foreground">Scan to connect with @CareerCompassAI_bot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tab Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Can Our Bot Do?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the powerful features of our Telegram bot
            </p>
          </div>

          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="search">Search</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="save">Save & Track</TabsTrigger>
              <TabsTrigger value="commands">Commands</TabsTrigger>
            </TabsList>
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
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting started with our Telegram bot is simple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Connect</h3>
              <p>
                Scan the QR code or search for @CareerCompassAI_bot on Telegram. Start the bot with the /start command.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Set Preferences</h3>
              <p>
                Tell the bot about your interests, skills, location, and the types of opportunities you're looking for.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Start Receiving</h3>
              <p>
                Get personalized recommendations, search for opportunities, and receive notifications based on your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions about our Telegram bot?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Is the Telegram bot free to use?</h3>
              <p>Yes, the Telegram bot is completely free for all students to use. There are no hidden charges.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">How often will I receive notifications?</h3>
              <p>You can customize notification frequency in your preferences. By default, you'll receive a daily digest of new opportunities.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Is my data private?</h3>
              <p>Absolutely. We take privacy seriously and never share your personal information with third parties. Your data is only used to improve your recommendations.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Can I use the bot without the website?</h3>
              <p>Yes, the Telegram bot is a standalone service. While the website offers additional features, you can fully use the bot independently.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Does the bot work in all countries?</h3>
              <p>Yes, the bot works globally. However, opportunity recommendations are currently most comprehensive for India, with expanding coverage in other regions.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">How do I report an issue with the bot?</h3>
              <p>You can use the /help command in the bot and select "Report Issue," or contact our support team through the website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 hero-gradient text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Opportunity Search?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of students who discover perfect opportunities every day with our Telegram bot.
            </p>
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
              <Send className="h-4 w-4" /> Open Telegram Bot
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TelegramBot;
