import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const Community = () => {
  const { elementRef, isVisible } = useScrollFade();

  return (
    <section className="py-16 px-4 pb-20 bg-gradient-to-t from-muted/30 to-background">
      <div 
        ref={elementRef}
        className={`w-full max-w-md mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center space-y-6">
          <div className="space-y-3 px-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Join the Community
            </h2>
            <p className="text-sm text-muted-foreground">
              Be part of the revolution in gaming IP ownership
            </p>
          </div>

          <Card className="p-5 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <div className="space-y-5">
              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full gap-2 py-6" asChild>
                  <a href="https://x.com/dieguysgame" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg font-bold">𝕏</span>
                    Follow on X
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full gap-2 py-6 border-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord
                </Button>
                <Button size="lg" variant="outline" className="w-full gap-2 py-6 border-2">
                  <FileText className="h-5 w-5" />
                  Read Docs
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Stay updated with the latest developments, participate in governance, 
                  and connect with other holders building the future of gaming together.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;
