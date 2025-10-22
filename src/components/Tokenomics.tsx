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
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tokenomics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sustainable value creation for all stakeholders
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tokenomicsData.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-card/80 backdrop-blur-sm border-2 hover:border-accent/50 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {item.percentage}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">The Flywheel Effect</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Every game developed generates revenue that flows back to token holders. 
                Web3 games utilize unique token flywheels for protocol revenue, while Web2 
                games share royalties directly with the community. In the event of an IP 
                buyout, all token holders receive their proportional payout.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
