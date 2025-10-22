import { Card } from "@/components/ui/card";
import { Coins, Gamepad2, TrendingUp, Users } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
const features = [{
  icon: Coins,
  title: "NFTs & Tokens",
  description: "Issue NFTs and Tokens to fund operations and game development"
}, {
  icon: TrendingUp,
  title: "Token Flywheel",
  description: "Every Web3 game has a unique token flywheel generating protocol revenue"
}, {
  icon: Gamepad2,
  title: "Royalty Sharing",
  description: "Web2 games share royalties with token holders automatically"
}, {
  icon: Users,
  title: "Holder Benefits",
  description: "Token holders receive payouts in the event of IP buyout"
}];
const ValueProps = () => {
  const {
    elementRef,
    isVisible
  } = useScrollFade();
  return <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div ref={elementRef} className={`w-full max-w-md mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-10 space-y-3 px-2">
          <h2 className="text-3xl font-bold tracking-tight">What do we do?</h2>
          <p className="text-sm text-muted-foreground">
            A revolutionary approach to gaming IP ownership
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => <Card key={index} className="p-5 bg-card/50 backdrop-blur-sm border-2 active:border-primary/50 transition-all duration-200 active:scale-[0.98]" style={{
          boxShadow: 'var(--shadow-card)'
        }}>
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-semibold leading-tight">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ValueProps;