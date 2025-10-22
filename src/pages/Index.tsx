import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Tokenomics from "@/components/Tokenomics";
import Community from "@/components/Community";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ValueProps />
      <Tokenomics />
      <Community />
    </main>
  );
};

export default Index;
