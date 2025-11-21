import { Award, Sparkles, Users, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Star Performer",
      organization: "American Express",
      description: "Recognized for leading digital modernization initiatives that improved data reliability and business KPIs",
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "EDDS Spotlight Award",
      organization: "American Express",
      description: "Honored for innovation and cross-functional collaboration in digital analytics",
      color: "accent"
    },
    {
      icon: Users,
      title: "GHCI Scholar",
      organization: "Grace Hopper Celebration",
      description: "Selected for contributions in AI-driven product innovation and advancing women in tech",
      color: "primary"
    },
    {
      icon: Users,
      title: "Google Women Techmakers Facilitator",
      organization: "Google",
      description: "Selected from 10,000+ applicants to lead workshops on ethical AI adoption",
      color: "accent"
    },
    {
      icon: Code,
      title: "Hackathons & Innovation Events",
      organization: "Various",
      description: "Built LLM-enabled prototypes and social-impact AI tools for real-world use cases",
      color: "primary"
    }
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Recognition & Achievements</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honored for impact, innovation, and leadership in AI product management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.title}
                  className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-smooth border border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className={`p-4 rounded-xl w-fit ${achievement.color === 'primary' ? 'gradient-primary' : 'bg-gradient-to-br from-accent to-accent/80'}`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-xl group-hover:text-primary transition-smooth">
                        {achievement.title}
                      </h3>
                      <p className="text-sm font-semibold text-accent">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
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

export default Achievements;
