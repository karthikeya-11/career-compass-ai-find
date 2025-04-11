
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, BookOpen, Bookmark, Calendar, ChevronRight, Clock, Heart, Search, Settings, Star, User } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const savedOpportunities = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechSolutions Inc.",
      type: "internship",
      location: "Remote",
      deadline: "May 15, 2024",
      daysLeft: 7,
      status: "Applied",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "STEM Scholarship for Women",
      organization: "WomenInTech Foundation",
      type: "scholarship",
      amount: "₹50,000",
      deadline: "June 30, 2024",
      daysLeft: 23,
      status: "Saved",
      logo: "https://images.unsplash.com/photo-1669570094762-828f3dfaf675?w=50&h=50&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Designo Labs",
      type: "job",
      location: "Hyderabad",
      deadline: "April 20, 2024",
      daysLeft: 3,
      status: "Interview",
      logo: "https://images.unsplash.com/photo-1568122506084-57152fe71da1?w=50&h=50&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const recentSearches = [
    "remote internships in web development",
    "scholarships for engineering students",
    "part-time jobs in Bangalore",
    "UI/UX design internships"
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: "Product Designer",
      company: "Designo Labs",
      deadline: "April 20, 2024",
      daysLeft: 3
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "TechSolutions Inc.",
      deadline: "May 15, 2024",
      daysLeft: 7
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: "Data Science Intern",
      company: "Analytics Pro",
      type: "internship",
      match: 95,
      logo: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=50&h=50&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Merit Scholarship",
      organization: "National Education Trust",
      type: "scholarship",
      match: 88,
      logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "CodeCraft Solutions",
      type: "job",
      match: 82,
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <NavBar />

      <div className="flex-1 container mx-auto max-w-7xl px-4 py-8">
        {/* Coming Soon Banner */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Dashboard Coming Soon!</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            We're building a personalized dashboard experience to help you track opportunities, manage applications, and get customized recommendations.
          </p>
          <Button>Sign up for early access</Button>
        </div>
        
        {/* Design Preview */}
        <div className="space-y-8">
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" alt="User" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Rohini</h1>
                <p className="text-muted-foreground">Let's find your next opportunity!</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Settings className="h-4 w-4" /> Preferences
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Bell className="h-4 w-4" /> Notifications
              </Button>
            </div>
          </div>

          {/* Main dashboard content */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Profile Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>70% Complete</span>
                        <span className="text-muted-foreground">7/10</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">Complete your profile to get better recommendations:</p>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        <span>Add your skills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        <span>Upload your resume</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        <span>Connect your LinkedIn</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Complete Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Searches</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm py-1 border-b last:border-0 dark:border-gray-700">
                        <Search className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="flex-1">{search}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Searches
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {upcomingDeadlines.map((item) => (
                      <li key={item.id} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0 dark:border-gray-700">
                        <div className={`p-2 rounded-md ${item.daysLeft <= 3 ? 'bg-red-100 dark:bg-red-900/20 text-red-500' : 'bg-amber-100 dark:bg-amber-900/20 text-amber-500'}`}>
                          <Clock className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.company}</p>
                          <div className="flex gap-2 items-center">
                            <span className="text-xs font-medium">
                              {item.deadline}
                            </span>
                            <span className={`text-xs px-1.5 py-0.5 rounded ${item.daysLeft <= 3 ? 'bg-red-100 dark:bg-red-900/20 text-red-500' : 'bg-amber-100 dark:bg-amber-900/20 text-amber-500'}`}>
                              {item.daysLeft} days left
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Deadlines
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">My Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="saved">
                    <TabsList className="grid w-full grid-cols-4 mb-4">
                      <TabsTrigger value="saved">Saved</TabsTrigger>
                      <TabsTrigger value="applied">Applied</TabsTrigger>
                      <TabsTrigger value="interviews">Interviews</TabsTrigger>
                      <TabsTrigger value="offers">Offers</TabsTrigger>
                    </TabsList>
                    <TabsContent value="saved" className="space-y-4">
                      {savedOpportunities.map((opportunity) => (
                        <div 
                          key={opportunity.id} 
                          className={`flex items-start gap-4 p-4 rounded-lg border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
                            ${opportunity.type === 'scholarship' ? 'opportunity-card-scholarship' : 
                              opportunity.type === 'internship' ? 'opportunity-card-internship' : 
                              'opportunity-card-job'
                            }`}
                        >
                          <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <img src={opportunity.logo} alt="" className="h-full w-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">{opportunity.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {opportunity.company || opportunity.organization}
                                </p>
                              </div>
                              <Badge variant={
                                opportunity.status === 'Applied' ? 'default' :
                                opportunity.status === 'Interview' ? 'secondary' :
                                'outline'
                              }>
                                {opportunity.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{opportunity.deadline}</span>
                              </div>
                              <div className={`flex items-center gap-1 ${opportunity.daysLeft <= 7 ? 'text-red-500' : ''}`}>
                                <Clock className="h-3.5 w-3.5" />
                                <span>{opportunity.daysLeft} days left</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="ghost" size="icon">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="applied">
                      <div className="flex flex-col items-center justify-center py-12">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 mb-4">
                          <Search className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">No applications yet</h3>
                        <p className="text-muted-foreground text-center max-w-md mb-4">
                          When you apply to opportunities, they will appear here for easy tracking.
                        </p>
                        <Button variant="outline">Find opportunities</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="interviews">
                      <div className="flex flex-col items-center justify-center py-12">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 mb-4">
                          <Calendar className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">No upcoming interviews</h3>
                        <p className="text-muted-foreground text-center max-w-md">
                          When you schedule interviews, they will appear here.
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="offers">
                      <div className="flex flex-col items-center justify-center py-12">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 mb-4">
                          <Star className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">No offers yet</h3>
                        <p className="text-muted-foreground text-center max-w-md">
                          Any offers you receive will be displayed here for easy comparison.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage All Opportunities
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recommended For You</CardTitle>
                  <CardDescription>Based on your profile and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendations.map((rec) => (
                      <div 
                        key={rec.id} 
                        className={`flex items-start gap-4 p-4 rounded-lg border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
                          ${rec.type === 'scholarship' ? 'opportunity-card-scholarship' : 
                            rec.type === 'internship' ? 'opportunity-card-internship' : 
                            'opportunity-card-job'
                          }`}
                      >
                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <img src={rec.logo} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{rec.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {rec.company || rec.organization}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                              <div 
                                className="h-full bg-primary rounded-full" 
                                style={{ width: `${rec.match}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-medium">{rec.match}% Match</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View More Recommendations
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Application Stats</CardTitle>
                  <CardDescription>Track your opportunity journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-3xl font-bold mb-1">12</div>
                      <div className="text-sm text-muted-foreground">Opportunities Saved</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-3xl font-bold mb-1">8</div>
                      <div className="text-sm text-muted-foreground">Applications Submitted</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-3xl font-bold mb-1">3</div>
                      <div className="text-sm text-muted-foreground">Interviews Scheduled</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-3xl font-bold mb-1">1</div>
                      <div className="text-sm text-muted-foreground">Offers Received</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
