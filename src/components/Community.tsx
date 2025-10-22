import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Twitter, MessageCircle, FileText } from "lucide-react";

const Community = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-t from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground">
            Be part of the revolution in gaming IP ownership
          </p>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Twitter className="h-5 w-5" />
                  Follow on Twitter
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-2">
                  <MessageCircle className="h-5 w-5" />
                  Join Discord
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-2">
                  <FileText className="h-5 w-5" />
                  Read Docs
                </Button>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
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
