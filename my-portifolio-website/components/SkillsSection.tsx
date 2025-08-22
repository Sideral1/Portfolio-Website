import {
  Code2,
  Layers,
  Cloud,
  BarChart3,
  Shield,
  Cpu,
  Database,
  Globe,
  Server,
  Lock,
} from "lucide-react";
import { Card } from "./ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        "Java",
        "Python",
        "C",
        "C#",
        "SQL",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Frameworks & Platforms",
      icon: Layers,
      skills: [
        "React",
        "Next.js",
        "Spring Boot",
        "Tailwind CSS",
        ".NET",
        "LangChain",
        "LangGraph",
        "LangSmith",
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        "Git",
        "Docker",
        "Postman",
        "Google Cloud Platform",
        "Cloudflare",
        "Vercel",
        "Maven",
      ],
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Machine Learning",
        "Data Analysis",
        "Statistics",
      ],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        "Wireshark",
        "Nmap",
        "Metasploit",
        "Burp Suite",
        "Nessus",
        "Wazuh SIEM",
        "OWASP Top 10",
      ],
    },
    {
      title: "Security & Cryptography",
      icon: Lock,
      skills: [
        "TLS/SSL",
        "PKI",
        "SSH",
        "OAuth2",
        "SHA",
        "MD5",
        "bcrypt",
        "Cryptography",
      ],
    },
  ];

  const highlights = [
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Neural Networks, Random Forest, Feature Engineering",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MySQL, PostgreSQL, Database Design, Query Optimization",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Full-Stack Development, RESTful APIs, GraphQL",
    },
    {
      icon: Server,
      title: "System Architecture",
      description: "Distributed systems, Containerization, Scalable Design",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development,
            cybersecurity, and data science
          </p>
        </div>

        {/* Skill Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="p-4 card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 w-fit bg-primary/10 rounded-lg inline-block m-auto mt-2 group-hover:bg-primary/20 transition-colors">
                <highlight.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-[#282c34] hover:bg-[#7c3bed1a] px-3 py-2 rounded-lg text-sm font-medium text-foreground border border-border text-center hover:border-primary/30 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
