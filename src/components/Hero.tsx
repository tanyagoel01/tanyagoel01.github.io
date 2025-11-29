import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Import profile picture
import profilePic from "@/assets/Profile.JPG";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}>
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 lg:gap-20 animate-fade-in">
            {/* Profile Photo - Left Side */}
            <div className="flex-shrink-0 order-2 md:order-1">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-soft overflow-hidden animate-scale-in ring-2 ring-primary/10 hover:ring-primary/30 transition-all duration-300 hover:scale-105">
                  <img 
                    src={profilePic} 
                    alt="Tanya Goel - AI Product Manager" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                {/* Soft shadow ring */}
                <div className="absolute inset-0 rounded-full shadow-glow opacity-50 -z-10"></div>
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 order-1 md:order-2">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                  Tanya Goel
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  AI Product Manager | American Express
                </p>
              </div>

              <p className="text-lg md:text-xl max-w-2xl md:max-w-none mx-auto md:mx-0 text-foreground/80 animate-fade-in-delay">
                Transforming complex problems into simple, scalable AI-enabled products that deliver real value to millions of users.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start pt-2 animate-fade-in-delay">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white shadow-glow hover:shadow-soft transition-smooth text-base px-8 py-6 hover:scale-105 active:scale-95 group"
                  asChild
                >
                  <a href="/Tanya_Goel_Resume.pdf" download>
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce-subtle" />
                    Download Resume
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary/5 transition-smooth text-base px-8 py-6 hover:scale-105 active:scale-95 group animate-border-glow"
                  asChild
                >
                  <a href="mailto:goeltanya01@gmail.com">
                    <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce-subtle" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer text-muted-foreground hover:text-primary transition-smooth"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
