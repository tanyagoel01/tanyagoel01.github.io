import { Brain, TrendingUp, Users, BarChart3, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI Product Management",
      skills: [
        "Generative AI & LLM Integration",
        "Prompt Engineering",
        "AI-assisted Ideation & Workflows",
        "AI-supported UX Design",
        "Responsible AI Principles"
      ],
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Product Strategy & Execution",
      skills: [
        "Product Roadmapping & Prioritization",
        "OKRs & KPI Frameworks",
        "MVP Definition & Iteration",
        "Experimentation & A/B Testing",
        "Agile/Scrum & Backlog Management"
      ],
      color: "accent"
    },
    {
      icon: Users,
      title: "User Research & Design",
      skills: [
        "User Journey Mapping",
        "Persona Development",
        "Stakeholder Interviews & Synthesis",
        "Wireframing & Prototyping (Figma)",
        "Usability Testing & Iteration"
      ],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      skills: [
        "Funnel Analysis & Conversion Optimization",
        "Google Analytics & Mixpanel",
        "Tableau & Data Visualization",
        "SQL & Data Pipelines",
        "Statistical Analysis & Reporting"
      ],
      color: "accent"
    },
    {
      icon: Code,
      title: "Technical Foundations",
      skills: [
        "REST APIs & Microservices",
        "Python & Java",
        "Automation & Workflow Tools",
        "Cloud Platforms & DevOps Basics",
        "System Design & Architecture"
      ],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Skills & Expertise</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning AI, product strategy, user research, analytics, and technical foundations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.title}
                  className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-smooth border border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${category.color === 'primary' ? 'gradient-primary' : 'bg-gradient-to-br from-accent to-accent/80'}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-lg">{category.title}</h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li 
                          key={skill}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className={`mt-1 font-bold ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                            •
                          </span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
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

export default Skills;
