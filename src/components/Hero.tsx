import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import dieGuysLogo from "@/assets/die-guys-logo.png";
const Hero = () => {
  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-12 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-center px-4">
            <img src={dieGuysLogo} alt="Die Guys Logo" className="w-full max-w-[280px] h-auto" />
          </div>
          
          <p className="text-base text-muted-foreground px-6 leading-relaxed">Gaming IP featuring a collection of animal-themed chibis</p>

          <div className="flex flex-col gap-3 px-4 pt-2">
            <Button size="lg" className="w-full text-base py-6 shadow-glow">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="w-full text-base py-6 border-2" asChild>
              <a href="https://diceguysdocs.vercel.app/" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;