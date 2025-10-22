import { Card } from "@/components/ui/card";
import { useScrollFade } from "@/hooks/useScrollFade";
const tokenomicsData = [{
  title: "Game Dev",
  percentage: "40%",
  description: "Web3 & Web2 creation"
}, {
  title: "Operations",
  percentage: "25%",
  description: "Team & infrastructure"
}, {
  title: "Treasury",
  percentage: "20%",
  description: "Community initiatives"
}, {
  title: "Liquidity",
  percentage: "15%",
  description: "Market & rewards"
}, {
  title: "IP Rights",
  percentage: "100%",
  description: "Token holder owned"
}, {
  title: "Revenue",
  percentage: "∞",
  description: "Shared with holders"
}, {
  title: "Governance",
  percentage: "1:1",
  description: "Token voting power"
}, {
  title: "Buyouts",
  percentage: "Pro-rata",
  description: "Proportional payouts"
}, {
  title: "Royalties",
  percentage: "Ongoing",
  description: "From all games"
}];
const Tokenomics = () => {
  const {
    elementRef,
    isVisible
  } = useScrollFade();
  return <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      
      <div ref={elementRef} className={`w-full max-w-md mx-auto relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-3 gap-3">
          {tokenomicsData.map((item, index) => <Card key={index} className="p-3 bg-card/80 backdrop-blur-sm border-2 active:border-accent/50 transition-all duration-200 active:scale-[0.98]">
              <div className="space-y-1.5">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {item.percentage}
                </div>
                <h3 className="text-sm font-semibold leading-tight">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Tokenomics;