import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "American Express",
      role: "Product Manager – Digital Acquisition",
      period: "Feb 2023 – Present",
      location: "Gurugram, India",
      achievements: [
        "Led AI-assisted product initiatives using GenAI-driven insight synthesis and automated requirement drafting, accelerating feature planning cycles by 30%",
        "Owned end-to-end product transition for 4 global markets, migrating acquisition workflows from POD to POA systems, improving deployment scalability",
        "Drove product roadmap for digital acquisition and analytics journeys, delivering 15% revenue growth and 25% lift in user engagement through customer journey mapping and experimentation",
        "Defined product vision and KPIs for self-serve analytics dashboard, reducing report turnaround time by 40% and improving leadership's real-time decision-making"
      ]
    },
    {
      company: "American Express",
      role: "Associate Product Manager – Digital Experience & Insights",
      period: "May 2021 – Jan 2023",
      location: "Gurugram, India",
      achievements: [
        "Launched self-serve analytics features with AI-assisted metric explanations and automated trend summaries, increasing stakeholder adoption by 40%",
        "Delivered user insights for NA card segments using GenAI-supported synthesis of interviews, surveys, and competitive research, improving digital conversion by 20%",
        "Built performance dashboards with LLM-powered narrative generation, reducing manual reporting efforts by 60%",
        "Standardized KPIs and data instrumentation across 4 business units with AI-assisted documentation, improving reporting accuracy by 30%"
      ]
    },
    {
      company: "Avis E Solutions",
      role: "Software Engineer I",
      period: "Feb 2020 – Apr 2021",
      location: "Noida, India",
      achievements: [
        "Improved agent workflow efficiency by redesigning internal tools based on analytics-driven insights, reducing idle time by 90%",
        "Rebuilt workflow platforms using Java-based microservices and REST APIs, cutting manual effort by 50% across 200+ daily active users",
        "Owned complete SDLC for support features—from requirements to deployment—ensuring high reliability and on-time agile delivery"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Experience</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading digital transformation and AI-enabled products at scale
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.period}`}
                className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-smooth border border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg gradient-primary">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-smooth">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-lg font-semibold text-primary">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
