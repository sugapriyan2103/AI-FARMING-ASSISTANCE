import { Button } from "@/components/ui/button";
import { Smartphone, Leaf } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/80 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <Leaf className="absolute top-10 left-10 h-32 w-32 rotate-12" />
        <Leaf className="absolute bottom-10 right-10 h-40 w-40 -rotate-12" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of Kerala farmers already using Krishi Sakhi to grow smarter, healthier crops.
          </p>
          <p className="text-lg text-primary-foreground/80 italic">
            കൃഷി സഖിയുമായി ഇന്നു തന്നെ ആരംഭിക്കൂ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 pt-4">
            Free to use • Available in Malayalam, Tamil & English • Works offline
          </p>
        </div>
      </div>
    </section>
  );
};
