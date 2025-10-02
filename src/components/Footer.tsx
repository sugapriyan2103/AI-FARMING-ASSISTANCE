import { Sprout } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Krishi Sakhi</h3>
              <p className="text-sm text-muted-foreground">കൃഷി സഖി - Your Digital Farm Companion</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Empowering Kerala's smallholder farmers with AI
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2025 Krishi Sakhi. Built with care for farmers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
