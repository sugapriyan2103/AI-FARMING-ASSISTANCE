import { User, Sprout, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: User,
    number: "01",
    title: "Create Your Profile",
    titleMl: "പ്രൊഫൈൽ സൃഷ്ടിക്കുക",
    description: "Tell us about your farm - location, crops, soil type, and irrigation method. This helps us personalize advice just for you."
  },
  {
    icon: Sprout,
    number: "02",
    title: "Log Your Activities",
    titleMl: "പ്രവർത്തനങ്ങൾ രേഖപ്പെടുത്തുക",
    description: "Use voice or text to log daily activities like watering, fertilizing, or pest sightings. It's as easy as sending a message."
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Get Smart Advice",
    titleMl: "മികച്ച ഉപദേശം നേടുക",
    description: "Receive personalized recommendations based on your farm data, weather conditions, and crop cycle. Timely guidance when you need it."
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Grow Better Crops",
    titleMl: "മികച്ച വിളവെടുപ്പ്",
    description: "Track your progress, learn from patterns, and make data-driven decisions to improve your yields season after season."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Krishi Sakhi Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to smarter farming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  {step.titleMl}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
