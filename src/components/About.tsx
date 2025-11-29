import { Sparkles, Brain, Users, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const highlights = [
    {
      icon: Brain,
      title: "AI-First Mindset",
      description: "I leverage GenAI and LLMs to accelerate product cycles, improve insight workflows, and power intelligent user experiences."
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description: "5+ years delivering measurable improvements such as 15% revenue lift, 25% engagement growth, and 40% faster insights for high-scale products."
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      description: "Align engineering, design, analytics, and business teams to deliver solutions that solve real customer problems."
    },
    {
      icon: Sparkles,
      title: "End-to-End Ownership",
      description: "Bridge technical feasibility with strategic direction shaping product vision, driving execution, and ensuring meaningful outcomes."
    }
  ];

  return (
    <section ref={ref} id="about" className={`py-24 md:py-32 bg-muted/30 ${isVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}>
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold">About Me</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8 mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 animate-fade-in">
              I'm a <span className="font-semibold text-primary">Product Manager (5+ years)</span> building AI-enabled acquisition and engagement products at American Express. With an engineering background, I approach problems with a practical, user-focused mindset while leveraging data and GenAI to accelerate impact.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 animate-fade-in">
              I specialize in <span className="font-semibold text-accent">AI-assisted workflows, rapid experimentation, and insight-driven decision-making</span>, using GenAI to speed up synthesis and prototype iterations. My experience spans <span className="font-semibold">10 global markets</span>, where I've defined KPIs for self-serve analytics, improved decision quality, and shipped multiple MVPs with measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="p-6 rounded-2xl bg-card shadow-soft border border-border/50 animate-scale-in animate-hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
