import { Building2, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const experiences = [
    {
      company: "American Express",
      role: "Product Manager – Global Merchant Services",
      period: "Feb 2023 – Present",
      location: "Bangalore, India",
      summary: "Leading AI-enabled acquisition and loyalty initiatives across global markets.",
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
      summary: "Built and launched self-serve analytics products used by 10K+ internal stakeholders.",
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
      summary: "Developed scalable internal tools and web applications to streamline operations.",
      achievements: [
        "Improved agent workflow efficiency by redesigning internal tools based on analytics-driven insights, reducing idle time by 90%",
        "Rebuilt workflow platforms using Java-based microservices and REST APIs, cutting manual effort by 50% across 200+ daily active users",
        "Owned complete SDLC for support features-from requirements to deployment-ensuring high reliability and on-time agile delivery"
      ]
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Career Journey</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How my roles have evolved across product, AI, and engineering.
            </p>
          </div>

          {/* Career Snapshot (Option 4) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Years in Product", value: "5+" },
              { label: "Global Markets", value: "10" },
              { label: "Core Roles", value: "3" },
              { label: "AI Products Shipped", value: "10+" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl bg-card shadow-soft border border-border/60 text-center"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                  {item.value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / small screens – simple stacked cards */}
          <div className="space-y-8 md:hidden">
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
                    <p className="text-base md:text-lg font-semibold text-primary">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
                >
                  {expandedIndex === index ? "Hide details" : "View details"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedIndex === index && (
                  <ul className="mt-4 space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                        <span className="text-primary mt-1 font-bold">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Desktop – vertical timeline layout */}
          <div className="hidden md:block">
            <div className="relative space-y-16">
              {/* Central vertical line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px bg-border/60"
                aria-hidden="true"
              />

              {experiences.map((exp, index) => {
                const isRightSide = index % 2 === 0; // first on the right, then alternate

                const card = (
                  <div 
                    className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-smooth border border-border/50 animate-scale-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg gradient-primary">
                            <Building2 className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-smooth">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-base md:text-lg font-semibold text-primary">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/80 leading-relaxed mb-4 max-w-xl">
                      {exp.summary}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
                    >
                      {expandedIndex === index ? "Hide details" : "View details"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedIndex === index && (
                      <ul className="mt-4 space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                            <span className="text-primary mt-1 font-bold">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );

                return (
                  <div
                    key={`${exp.company}-${exp.period}-timeline`}
                    className="relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-10"
                  >
                    {/* Left column */}
                    <div className="col-start-1">
                      {!isRightSide && card}
                    </div>

                    {/* Timeline dot */}
                    <div className="col-start-2 flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-primary bg-background shadow-soft">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="col-start-3">
                      {isRightSide && card}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
