import { MessageSquare, Brain, Calendar, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Chat-Based Activity Logging",
    description: "Log your farming activities naturally using voice or text in Malayalam, Tamil, or English. Just speak like you would to a friend.",
    titleMl: "സംസാര രീതിയിൽ രേഖപ്പെടുത്തൽ"
  },
  {
    icon: Brain,
    title: "Personalized AI Guidance",
    description: "Get advice tailored to your specific crop, location, soil type, and current weather conditions. Smart recommendations when you need them.",
    titleMl: "വ്യക്തിഗത AI ഉപദേശം"
  },
  {
    icon: Calendar,
    title: "Smart Reminders",
    description: "Never miss important farming activities. Receive timely alerts for fertilization, pest control, and harvesting based on your crop cycle.",
    titleMl: "സ്മാർട്ട് ഓർമ്മപ്പെടുത്തലുകൾ"
  },
  {
    icon: Cloud,
    title: "Weather-Based Alerts",
    description: "Get hyperlocal weather updates and recommendations. Know the best time to irrigate, spray, or harvest based on upcoming weather.",
    titleMl: "കാലാവസ്ഥ അടിസ്ഥാന മുന്നറിയിപ്പുകൾ"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One App
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Krishi Sakhi combines AI intelligence with local farming knowledge to help you make better decisions every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        {feature.titleMl}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
