
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  const teamMembers = [
    {
      name: "Ankit Sharma",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100",
      bio: "Former AI researcher at Google, passionate about making education accessible to all."
    },
    {
      name: "Priya Mehta",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100",
      bio: "Machine learning expert with a background in natural language processing and information retrieval."
    },
    {
      name: "Raj Patel",
      role: "Head of Partnerships",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      bio: "10+ years experience in edutech and career counseling, building networks across industries."
    },
    {
      name: "Sanya Kumar",
      role: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=100",
      bio: "Award-winning designer focused on creating intuitive and accessible user experiences."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize access to career opportunities for students across all regions, backgrounds, and disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg">
                CareerCompass AI was born out of frustration. As students ourselves, we found it incredibly difficult to discover relevant opportunities that matched our skills and aspirations, especially those in our region.
              </p>
              <p className="text-lg">
                The existing platforms were too generic, focusing on global opportunities that were often inaccessible or irrelevant to students in specific regions. We wanted to create a tool that would help students find scholarships, internships, and jobs that were truly accessible to them.
              </p>
              <p className="text-lg">
                In 2023, we launched the first version of CareerCompass AI, focusing on helping students in major Indian cities. The response was overwhelming, with thousands of students finding opportunities they wouldn't have discovered otherwise.
              </p>
              <p className="text-lg">
                Today, we're expanding to more regions, continuously improving our AI, and building partnerships with universities and employers to bring even more exclusive opportunities to our platform.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/20 w-full h-full rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do at CareerCompass AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Accessibility</h3>
              <p>We believe every student deserves access to great opportunities, regardless of their background or location.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p>We continuously push the boundaries of AI to create smarter, more personalized recommendation systems.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Privacy</h3>
              <p>We respect user data and are committed to maintaining the highest standards of privacy and security.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Inclusivity</h3>
              <p>We design our platform to be accessible and useful for students of all disciplines and career paths.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p>We meticulously verify opportunities to ensure students only see legitimate, valuable listings.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Community</h3>
              <p>We foster a supportive community where students can share experiences and help each other succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals behind CareerCompass AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Help us democratize access to career opportunities for students everywhere.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
