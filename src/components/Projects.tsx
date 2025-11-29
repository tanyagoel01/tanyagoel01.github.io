import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, TrendingUp, Target, Zap, CheckCircle2, ArrowRight, Brain, BookOpen } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      id: "aisathi",
      title: "AI Sathi",
      subtitle: "Offline AI Learning Companion",
      tagline: "Empowering rural education with fully offline, SLM-powered learning on basic smartphones",
      problem: "Rural students in India lack access to quality educational content and personalized tutoring due to limited internet connectivity and expensive data plans. Traditional online learning platforms are inaccessible to students in remote areas.",
      solution: "A fully offline, SLM-powered AI tutor that delivers NCERT lessons, Hindi-English literacy, and voice-based doubt solving on basic smartphones without requiring internet access.",
      metrics: [
        { label: "Offline Capability", value: "100%" },
        { label: "Device Support", value: "Basic Smartphones" },
        { label: "Languages", value: "Hindi + English" }
      ],
      sections: [
        {
          icon: Brain,
          title: "Product Design & Learning Flows",
          content: "Designed child-friendly learning flows and concepts optimized for offline usage. Created intuitive interfaces that work seamlessly on low-end smartphones with limited storage and processing power."
        },
        {
          icon: Zap,
          title: "Technical Architecture",
          content: "Architected an offline-first solution using on-device ASR/TTS (Automatic Speech Recognition/Text-to-Speech) for voice interactions, WebGPU/WASM runtimes for efficient AI model execution, and IndexedDB caching for content storage. Ensured the app runs smoothly without internet connectivity."
        },
        {
          icon: Target,
          title: "Product Strategy & Roadmap",
          content: "Defined the product roadmap to include adaptive learning algorithms, AI-generated progress reports, voice navigation for accessibility, and a Teacher Mode for educators. Strategized scaling across rural schools and anganwadis (rural childcare centers) to maximize educational impact."
        },
        {
          icon: BookOpen,
          title: "Content & Curriculum",
          content: "Integrated NCERT-aligned curriculum content with Hindi-English literacy modules. Designed voice-based doubt solving capabilities that allow students to ask questions and receive AI-powered explanations in their preferred language, all without internet access."
        }
      ],
      learnings: [
        "Offline-first architecture is critical for rural adoption-WebGPU/WASM runtimes enable efficient on-device AI processing",
        "Voice-based interactions significantly improve accessibility for students with limited literacy or tech familiarity",
        "Child-friendly UI design and simple navigation are essential for engagement in educational products",
        "IndexedDB caching strategy must balance content richness with device storage constraints"
      ]
    },
    {
      id: "bandhanpoints",
      title: "BandhanPoints",
      subtitle: "Digital Loyalty Platform for Local Indian Shopkeepers",
      tagline: "Empowering local retailers with digital-first loyalty solutions",
      problem: "Local retailers in India struggle to retain customers and compete with large e-commerce platforms. Traditional loyalty programs are expensive, complex, and not accessible to small businesses.",
      solution: "A merchant-customer loyalty platform enabling retailers to issue and redeem reward points, increasing repeat visits through simple mobile journeys.",
      metrics: [
        { label: "Merchants Onboarded", value: "100+" },
        { label: "Active Users", value: "1,000+" },
        { label: "Repeat Transaction Rate", value: "25%" }
      ],
      sections: [
        {
          icon: Users,
          title: "Research & Strategy",
          content: "Conducted research across various local businesses (kirana stores, salons, pharmacies & cafés) to define user personas, identify loyalty pain points, and align product opportunities with India's 'Digital India' & 'Vocal for Local' vision."
        },
        {
          icon: Target,
          title: "Design & Features",
          content: "Designed the Product Requirements Document (PRD), user journeys, and feature scope for both merchant and customer applications. This included features like QR onboarding, loyalty configuration, automated point crediting, and repeat-visit analytics."
        },
        {
          icon: Zap,
          title: "Implementation & Pilot",
          content: "Built the MVP (Minimum Viable Product) prototype independently using 'Vibe Coding' and successfully executed a Tier-2 city pilot program. This pilot onboarded over 100 merchants and more than 1,000 users, achieving a 25% repeat transaction rate."
        },
        {
          icon: TrendingUp,
          title: "Impact & Iteration",
          content: "Validated product-market fit through the pilot, demonstrating strong merchant adoption and customer engagement. Iterated on feedback to improve onboarding flows and analytics dashboards, making the platform more accessible for small business owners."
        }
      ],
      learnings: [
        "Simplified onboarding is critical for small business adoption-reduced merchant setup complexity significantly",
        "Real-time analytics drive merchant engagement and help them understand customer behavior patterns",
        "QR-based onboarding and UPI integration require careful UX design to ensure smooth user experience",
        "Local language support and voice-based flows significantly improve adoption in Tier-2/3 cities"
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
    <section ref={ref} id="projects" className={`py-24 md:py-32 bg-muted/30 ${isVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}>
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
                className="group border-border/50 overflow-hidden animate-scale-in cursor-pointer animate-hover-lift h-full flex flex-col"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => openProject(project.id)}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex-1 flex flex-col">
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
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 group-hover:bg-primary group-hover:text-white transition-smooth"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
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
