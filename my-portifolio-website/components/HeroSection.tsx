import { ArrowDown, Download, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="absolute w-[500px] h-[500px] bg-primary/10 animate-pulse rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-border">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Greater Vancouver, BC
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Pedro Costa</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Computer Science Student & Developer
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about{" "}
            <span className="text-primary font-semibold">
              software development
            </span>{" "}
            and{" "}
            <span className="text-primary font-semibold">cybersecurity</span>.
            Dean's List student with expertise in full-stack development, AI,
            and IoT. Currently conducting undergraduate research.
          </p>

          {/* Academic Achievement Badge */}
          <div className="mt-16 inline-flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Dean's List</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>TRU Cybersecurity Club</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Full Stack</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className=" bg-primary rounded-full mt-2">
            <Button
              size="lg"
              className="hero-gradient text-primary-foreground hover:glow-effect transition-all duration-300 group"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowDown
                  size={18}
                  className="ml-2 group-hover:translate-y-1 transition-transform"
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
