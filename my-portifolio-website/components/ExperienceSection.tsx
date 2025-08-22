import { Building, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Undergraduate Research Program",
      company: "Thompson Rivers University",
      location: "Kamloops, BC",
      period: "Jan. 2025 – Present",
      type: "Research",
      description:
        "Researching security solutions for automotive networks under faculty supervision.",
      responsibilities: [
        "Developed a security detection software solution for Controller Area Networks (CAN).",
        "Implemented and executed five CAN attack types — Spoofing, DoS, Replay, ID Injection, and Bit Flipping — using a self-coded malicious Electronic Control Unit (ECU).",
        "Built a complete IoT-based simulation environment to evaluate system resilience.",
        "Collected and processed datasets to train and evaluate ML models (Neural Network, Random Forest).",
        "Benchmarked models for resource usage and detection efficiency for real-world CAN security.",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Machine Learning",
        "CAN Protocol",
        "Cybersecurity",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Skindeck Startup",
      location: "United States (Remote)",
      period: "Oct. 2024 – Mar. 2025",
      type: "Full-time",
      description:
        "Contributed to production projects serving 30K+ users, including skindeck.com and admit.org.",
      responsibilities: [
        "Implemented application security best practices to protect user data in production.",
        "Contributed across the full development cycle: planning, implementation, testing, deployment.",
        "Developed responsive frontend components and backend APIs.",
        "Optimized application performance and user experience.",
        "Collaborated with cross-functional teams in an agile environment.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "GraphQL",
        "Cloudflare",
        "Vercel",
        "Security",
      ],
    },
    {
      title: "Cybersecurity Trainee",
      company: "Vortex Security",
      location: "Rio de Janeiro, Brazil",
      period: "Apr. 2024 – Aug. 2024",
      type: "Training",
      description:
        "Hands-on cybersecurity training in both defensive (blue team) and offensive (red team) operations.",
      responsibilities: [
        "Enhanced blue team skills through SOC mentorship using Wazuh, Nmap, Wireshark, Nessus, and virtualized environments.",
        "Developed red team expertise by performing simulated attacks and vulnerability assessments with Burp Suite and Metasploit.",
        "Configured Linux systems and analyzed network protocols for secure environments.",
        "Simulated secure infrastructures using Cisco Packet Tracer.",
      ],
      technologies: [
        "Linux",
        "Wazuh SIEM",
        "Nmap",
        "Wireshark",
        "Nessus",
        "VirtualBox",
        "Burp Suite",
        "Metasploit",
        "Cisco Packet Tracer",
        "Kali Linux",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through research, development, and cybersecurity
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect z-10"></div>

                {/* Experience Card */}
                <div
                  className={`w-full md:w-6/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card
                    className={`p-6 card-gradient m-6 gap-3 border-border/50 hover:border-primary/30 transition-all duration-300 group elegant-shadow ${
                      index % 2 === 0
                        ? "shadow-[8px_10px_20px_0px_#00000030]"
                        : "shadow-[-8px_10px_20px_0px_#00000030]"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary font-semibold mt-1">
                          <Building size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col sm:text-right text-sm text-muted-foreground">
                        <div className="flex items-center sm:justify mb-1 text-nowrap">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center sm:justify-end">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 w-min text-nowrap">
                      {exp.type}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm font-semibold bg-[#282c34] hover:bg-[#7c3bed1a] text-foreground border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
