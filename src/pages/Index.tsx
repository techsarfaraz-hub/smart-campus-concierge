import { ChatInterface } from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, MapPin, Utensils, FileText, Users } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const features = [
  {
    icon: Clock,
    title: "Schedules & Calendar",
    description: "Get instant access to academic calendars, registration dates, and important deadlines."
  },
  {
    icon: MapPin,
    title: "Campus Facilities",
    description: "Find locations, hours, and booking information for study rooms, gym, and more."
  },
  {
    icon: Utensils,
    title: "Dining Services",
    description: "Explore dining options, hours, menus, and dietary accommodations across campus."
  },
  {
    icon: BookOpen,
    title: "Library Services",
    description: "Access information about resources, databases, study spaces, and borrowing policies."
  },
  {
    icon: FileText,
    title: "Administrative Help",
    description: "Get guidance on registration, parking permits, ID cards, and campus procedures."
  },
  {
    icon: Users,
    title: "Student Support",
    description: "Find resources for academic support, counseling, and student life activities."
  }
];

const Index = () => {
  const scrollToChat = () => {
    const chatElement = document.getElementById('chat-section');
    chatElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${campusHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary-accent/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Smart Campus
            <span className="block bg-gradient-to-r from-accent-warm to-accent bg-clip-text text-transparent">
              Assistant
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Get instant answers about campus life with our AI-powered assistant. 
            Ask about schedules, facilities, dining, library services, and administrative procedures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToChat}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg shadow-chat transition-all duration-300 transform hover:scale-105"
            >
              Start Chatting
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI assistant has comprehensive knowledge about all aspects of campus life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section id="chat-section" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ask Me Anything
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm here 24/7 to help you navigate campus life. Try asking about library hours, 
              dining options, or how to register for classes.
            </p>
          </div>
          
          <ChatInterface />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Smart Campus Assistant</h3>
          <p className="text-white/80 mb-6">
            Powered by AI to make your campus experience seamless and informed.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;