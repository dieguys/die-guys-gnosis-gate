import { Card } from "@/components/ui/card";
import { Coins, Gamepad2, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "NFTs & Tokens",
    description: "Issue NFTs and Tokens to fund operations and game development",
  },
  {
    icon: TrendingUp,
    title: "Token Flywheel",
    description: "Every Web3 game has a unique token flywheel generating protocol revenue",
  },
  {
    icon: Gamepad2,
    title: "Royalty Sharing",
    description: "Web2 games share royalties with token holders automatically",
  },
  {
    icon: Users,
    title: "Holder Benefits",
    description: "Token holders receive payouts in the event of IP buyout",
  },
];

const ValueProps = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Die Guys?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A revolutionary approach to gaming IP ownership and value creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
