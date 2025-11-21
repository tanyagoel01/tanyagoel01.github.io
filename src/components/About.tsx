import { Sparkles, Brain, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI-First Mindset",
      description: "I leverage GenAI and LLMs to accelerate product development cycles and create intelligent user experiences"
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description: "5+ years delivering measurable results: 15% revenue growth, 25% engagement lift, and 40% faster insights"
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      description: "Expert at aligning engineering, design, and business teams to ship products that solve real customer problems"
    },
    {
      icon: Sparkles,
      title: "End-to-End Ownership",
      description: "From technical foundation to strategic vision, I bridge the gap between what's possible and what's needed"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold">About Me</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8 mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 animate-fade-in">
              I'm a <span className="font-semibold text-primary">Product Manager with 5+ years of experience</span> building digital acquisition and AI-enabled products at American Express. My journey started in engineering, which gave me a deep appreciation for what's technically possible—and more importantly, what creates real user value.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 animate-fade-in">
              I believe the best products emerge when you truly understand your users and leverage the right technology to solve their problems. That's why I'm obsessed with <span className="font-semibold text-accent">AI-assisted workflows, rapid experimentation, and data-driven decisions</span>. I use GenAI not just in products, but in my own workflow—accelerating insight synthesis, automating requirement drafting, and uncovering patterns that would otherwise take weeks.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 animate-fade-in">
              Whether I'm <span className="font-semibold">leading product transitions across 4 global markets</span>, <span className="font-semibold">defining KPIs for self-serve analytics dashboards</span>, or <span className="font-semibold">building MVPs from scratch</span>, my north star remains the same: create simple, scalable products that make people's lives better. Because at the end of the day, great product management is about turning complexity into clarity and insights into action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-smooth border border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl gradient-primary">
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
