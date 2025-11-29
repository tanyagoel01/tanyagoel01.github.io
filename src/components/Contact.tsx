import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section ref={ref} id="contact" className={`py-24 md:py-32 relative overflow-hidden ${isVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}>
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Let's Build Something Great</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to discuss product opportunities, AI innovation, or how we can solve real customer problems together. Whether you're looking for a product leader or want to collaborate on an idea, let's connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-delay">
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-glow hover:shadow-soft transition-smooth text-base px-8 py-6"
              asChild
            >
              <a href="mailto:goeltanya01@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/5 transition-smooth text-base px-8 py-6"
              asChild
            >
              <a href="https://www.linkedin.com/in/tanya-g-3a9b61167/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="pt-12 border-t border-border/50 animate-fade-in-delay">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tanya Goel. Built with passion for creating products that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
