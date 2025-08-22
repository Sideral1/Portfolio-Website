import { ExternalLink, Github, Server, Brain, Network } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MCP Server",
      description:
        "A containerized architecture for large language models featuring an asynchronous backend with authentication and a scalable frontend. Implemented AI orchestration for seamless model management.",
      longDescription:
        "Built a comprehensive containerized solution for managing large language models with advanced authentication, real-time processing, and AI orchestration capabilities.",
      icon: Server,
      technologies: [
        "Spring Boot",
        "MySQL",
        "Docker",
        "React",
        "Next.js",
        "Java",
        "TypeScript",
      ],
      features: [
        "Asynchronous backend architecture",
        "JWT-based authentication system",
        "Docker containerization",
        "AI model orchestration",
        "Scalable React frontend",
        "RESTful API design",
      ],
      github: "https://github.com/Siderall/mcp-server",
      demo: "#",
      category: "Full-Stack",
    },
    {
      title: "Tennis AI",
      description:
        "Training a machine learning model that predicts tennis match outcomes using advanced feature engineering and data visualization. Comprehensive analysis of player statistics and match dynamics.",
      longDescription:
        "Developed a sophisticated ML model for tennis match prediction with extensive data analysis, feature engineering, and interactive visualizations.",
      icon: Brain,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Jupyter",
      ],
      features: [
        "Advanced feature engineering",
        "Multiple ML algorithms comparison",
        "Interactive data visualizations",
        "Statistical analysis of player performance",
        "Match outcome prediction",
        "Performance metrics evaluation",
      ],
      github: "https://github.com/Sideral1/tennis-ai",
      demo: "#",
      category: "Machine Learning",
    },
    {
      title: "Network Architecture",
      description:
        "A simulated university campus network design with comprehensive core infrastructure configuration and advanced security protocols implementation.",
      longDescription:
        "Designed and implemented a complete network infrastructure simulation for a university campus with security protocols and network management.",
      icon: Network,
      technologies: [
        "Cisco Packet Tracer",
        "Linux",
        "Networking",
        "Security Protocols",
        "VLAN",
        "Routing",
      ],
      features: [
        "Campus network topology design",
        "VLAN configuration and management",
        "Security protocol implementation",
        "Network performance optimization",
        "Cisco router and switch configuration",
        "Network monitoring and management",
      ],
      github: "https://github.com/Siderall/network-architecture",
      demo: "#",
      category: "Networking",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across full-stack development,
            machine learning, and network architecture
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-primary shadow-xl group card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:glow-effect animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-0 w-full lg:h-96">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground md:h-40 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    Key Features:
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#282c34] hover:bg-[#7c3bed1a] skill-tag px-2 py-1 rounded text-xs font-medium text-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
