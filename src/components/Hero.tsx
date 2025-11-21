import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              Tanya Goel
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI Product Manager | GenAI • Digital Acquisition • Analytics
            </p>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 animate-fade-in-delay">
            Transforming complex problems into simple, scalable AI-enabled products that deliver real value to millions of users
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-delay">
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-glow hover:shadow-soft transition-smooth text-base px-8 py-6"
              asChild
            >
              <a href="/Tanya_Goel_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/5 transition-smooth text-base px-8 py-6"
              asChild
            >
              <a href="mailto:goeltanya01@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
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
