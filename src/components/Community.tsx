import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, FileText } from "lucide-react";
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
                <Button size="lg" className="w-full gap-2 py-6">
                  <span className="text-lg font-bold">𝕏</span>
                  Follow on X
                </Button>
                <Button size="lg" variant="outline" className="w-full gap-2 py-6 border-2">
                  <MessageCircle className="h-5 w-5" />
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
