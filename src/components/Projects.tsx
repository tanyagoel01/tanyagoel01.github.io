import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, TrendingUp, Target, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "bandhanpoints",
      title: "BandhanPoints",
      subtitle: "Digital Loyalty Platform for Local Indian Shopkeepers",
      tagline: "Empowering local retailers with digital-first loyalty solutions",
      problem: "Local retailers in India struggle to retain customers and compete with large e-commerce platforms. Traditional loyalty programs are expensive, complex, and not accessible to small businesses.",
      solution: "A two-sided loyalty platform enabling local retailers to award UPI-linked reward points, improving customer retention through simple, mobile-first flows.",
      metrics: [
        { label: "Merchants Onboarded", value: "100+" },
        { label: "Active Users", value: "1,000+" },
        { label: "Repeat Transaction Rate", value: "25%" }
      ],
      sections: [
        {
          icon: Users,
          title: "Users & Market Research",
          content: "Conducted extensive research across kirana stores, salons, pharmacies, and cafés to define personas and identify loyalty pain points. Aligned product opportunities with India's 'Digital India' and 'Vocal for Local' vision, uncovering that 78% of local merchants wanted a simple digital solution but lacked technical resources."
        },
        {
          icon: Target,
          title: "Product Strategy & PRD",
          content: "Designed comprehensive PRD covering merchant and customer apps, including QR onboarding, loyalty configuration, automated point crediting, and repeat-visit analytics. Prioritized features based on merchant feedback and technical feasibility to ensure rapid MVP delivery."
        },
        {
          icon: Zap,
          title: "UPI Integration & Tech Design",
          content: "Conceptualized seamless UPI-linked rewards system allowing instant point crediting after transactions. Designed API architecture connecting payment gateways with loyalty tracking, ensuring security and real-time synchronization."
        },
        {
          icon: TrendingUp,
          title: "MVP Development & Pilot",
          content: "Built functional prototype using Vibe Coding and executed a Tier-2 city pilot. Onboarded 100+ merchants and 1,000+ users, achieving a 25% repeat transaction rate. Iterated based on merchant feedback, simplifying onboarding flow and adding analytics dashboard for retailers to track customer behavior."
        }
      ],
      learnings: [
        "Simplified onboarding is critical for small business adoption—reduced merchant setup from 20 minutes to 5 minutes",
        "Real-time analytics drive merchant engagement—merchants who checked their dashboard weekly retained 40% more customers",
        "UPI integration requires careful security considerations and clear user education about point redemption",
        "Local language support and voice-based flows significantly improved adoption in Tier-2/3 cities"
      ]
    },
    {
      id: "meditrack",
      title: "MediTrack",
      subtitle: "Medicine Reminder & Scheduling Platform",
      tagline: "Helping users stay on track with their health",
      problem: "Patients, especially elderly individuals and those with chronic conditions, struggle with medication adherence, leading to worsening health outcomes and increased hospitalizations.",
      solution: "An MVP medicine reminder platform enabling personalized schedules, automated dosage reminders, and simplified daily health tracking.",
      metrics: [
        { label: "Early Testers", value: "50+" },
        { label: "Missed Dose Reduction", value: "60%" },
        { label: "User Satisfaction", value: "4.5/5" }
      ],
      sections: [
        {
          icon: Users,
          title: "User Research & Problem Discovery",
          content: "Conducted user interviews with patients, caregivers, and healthcare providers to surface adherence challenges. Discovered that 65% of users missed doses due to complex schedules, lack of clear reminders, and difficulty tracking multiple medications."
        },
        {
          icon: Target,
          title: "Feature Prioritization & User Flows",
          content: "Designed detailed user flows and wireframes for medication scheduling, refill alerts, and adherence tracking. Prioritized reminder accuracy, schedule clarity, and ease of onboarding to support a broad, multi-age user base including seniors who are less tech-savvy."
        },
        {
          icon: Zap,
          title: "Prototype Development",
          content: "Built functional prototype using Vibe Coding with intuitive UI featuring large buttons, voice reminders, and visual medication cues. Implemented smart scheduling that adapts to user behavior patterns and sends timely notifications."
        },
        {
          icon: TrendingUp,
          title: "Testing & Iteration",
          content: "Iterated rapidly with early testers, improving usability and reducing missed-dose frequency by 60%. Added features like caregiver notifications, medication history tracking, and integration with pharmacy systems for automatic refill reminders."
        }
      ],
      learnings: [
        "Accessibility is paramount—large text, voice commands, and simple navigation are critical for elderly users",
        "Caregiver involvement significantly improves adherence—added family notification features based on feedback",
        "Smart timing matters—reminders sent 10 minutes before scheduled time had 3x better response rates",
        "Visual medication identification (pill photos) reduced confusion for users taking multiple medications"
      ]
    }
  ];

  const openProject = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end product case studies showcasing problem-solving, user research, and measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-card transition-smooth border-border/50 overflow-hidden animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => openProject(project.id)}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-smooth">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-accent">{project.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{project.tagline}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center p-3 rounded-lg bg-muted/50">
                          <div className="text-2xl font-display font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-smooth"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={closeProject}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {currentProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-display font-bold mb-2">
                  {currentProject.title}
                </DialogTitle>
                <p className="text-accent font-semibold">{currentProject.subtitle}</p>
              </DialogHeader>

              <div className="space-y-8 pt-4">
                {/* Problem & Solution */}
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
                    <h4 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-destructive" />
                      The Problem
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">{currentProject.problem}</p>
                  </div>

                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h4 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      The Solution
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">{currentProject.solution}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="font-display font-bold text-xl mb-4">Impact Metrics</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {currentProject.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-4 rounded-xl gradient-hero border border-border">
                        <div className="text-3xl font-display font-bold text-primary">{metric.value}</div>
                        <div className="text-sm text-muted-foreground mt-2">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Sections */}
                <div className="space-y-6">
                  {currentProject.sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <div key={index} className="p-6 rounded-xl bg-card border border-border/50">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg gradient-primary">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-display font-bold text-lg mb-3">{section.title}</h4>
                            <p className="text-foreground/80 leading-relaxed">{section.content}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Key Learnings */}
                <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                  <h4 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                    Key Learnings
                  </h4>
                  <ul className="space-y-3">
                    {currentProject.learnings.map((learning, index) => (
                      <li key={index} className="flex gap-3 text-foreground/80 leading-relaxed">
                        <span className="text-accent mt-1 font-bold">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
