import { Button } from "@/components/ui/button";
import { Mic, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kerala farmland with modern farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            കൃഷി സഖി
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-primary-foreground/95">
            Your Digital Farm Companion
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            AI-powered farming guidance in your language. Get personalized advice, track activities, and grow better crops with Krishi Sakhi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Chatting
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-card/80 backdrop-blur-sm hover:bg-card text-lg px-8 py-6 rounded-full shadow-lg border-2 border-primary-foreground/30"
            >
              <Mic className="mr-2 h-5 w-5" />
              Use Voice
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-6 text-primary-foreground/80 text-sm">
            <span>മലയാളം</span>
            <span>•</span>
            <span>தமிழ்</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </section>
  );
};
