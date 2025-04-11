
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  message: string;
  stars: number;
}

const testimonials: Testimonial[] = [
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
  {
    id: 3,
    name: "Ananya Patel",
    avatar: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=100",
    role: "Data Science Student",
    message: "The Telegram bot notifications are a game-changer. I got alerted about a job opening and applied within hours of it being posted. Now I work there!",
    stars: 4,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from students who found amazing opportunities through CareerCompass AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default TestimonialSection;
