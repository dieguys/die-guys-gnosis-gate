import { Card } from "@/components/ui/card";

const tokenomicsData = [
  {
    title: "Game Development",
    percentage: "40%",
    description: "Funding for Web3 and Web2 game creation",
  },
  {
    title: "Operations",
    percentage: "25%",
    description: "Team, marketing, and infrastructure",
  },
  {
    title: "Community Treasury",
    percentage: "20%",
    description: "Governance and community initiatives",
  },
  {
    title: "Liquidity & Rewards",
    percentage: "15%",
    description: "Market making and holder incentives",
  },
];

const Tokenomics = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="w-full max-w-md mx-auto relative z-10">
        <div className="text-center mb-10 space-y-3 px-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Tokenomics
          </h2>
          <p className="text-sm text-muted-foreground">
            Sustainable value creation for all
          </p>
        </div>

        <div className="space-y-4">
          {tokenomicsData.map((item, index) => (
            <Card
              key={index}
              className="p-5 bg-card/80 backdrop-blur-sm border-2 active:border-accent/50 transition-all duration-200 active:scale-[0.98]"
            >
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {item.percentage}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 p-5 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-center">The Flywheel Effect</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every game developed generates revenue that flows back to token holders. 
              Web3 games utilize unique token flywheels for protocol revenue, while Web2 
              games share royalties directly with the community. In the event of an IP 
              buyout, all token holders receive their proportional payout.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Tokenomics;
