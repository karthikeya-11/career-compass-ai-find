
import { Button } from "@/components/ui/button";
import { Send, Clock, Search, BookOpen } from "lucide-react";

const TelegramBotSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Stay Updated with Our Telegram Bot</h2>
            <p className="text-lg text-muted-foreground">Get real-time notifications on new opportunities that match your profile directly in your Telegram inbox.</p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Real-time Updates</h3>
                  <p className="text-muted-foreground">Be the first to know about new opportunities as soon as they're posted.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Custom Searches</h3>
                  <p className="text-muted-foreground">Set up personalized search queries and get notifications for matching results.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Saved Opportunities</h3>
                  <p className="text-muted-foreground">Save and organize opportunities directly from the chat interface.</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 gap-2" size="lg">
              <Send className="h-4 w-4" /> Join Bot on Telegram
            </Button>
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
  );
};

export default TelegramBotSection;
