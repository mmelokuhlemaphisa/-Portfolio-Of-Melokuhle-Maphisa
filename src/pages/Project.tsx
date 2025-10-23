import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  category: string;
  status: string;
}

const Project: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Job Tracker Application",
      description:
        "A comprehensive job application tracking system built with React and Node.js. Features include application status management, interview scheduling, and analytics dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/mmelokuhlemaphisa/job-tracker-app",
      liveUrl: "https://job-tracker-app-wmdf.onrender.com/",
      features: [
        "Application status tracking",
        "Interview scheduling",
        "Analytics and reporting",
        "User authentication",
        "Responsive design",
      ],
      category: "web-app",
      status: "completed",
    },
    {
      id: 2,
      title: "Weather Application",
      description:
        "A modern weather application providing real-time weather data with beautiful UI and location-based forecasts.",
      technologies: ["React", "TypeScript", "Weather API", "CSS3"],
      githubUrl: "https://github.com/mmelokuhlemaphisa/weather-application",
      liveUrl: "https://weather-application-3wux.onrender.com/",
      features: [
        "Real-time weather data",
        "5-day forecast",
        "Location search",
        "Weather maps",
        "Mobile responsive",
      ],
      category: "web-app",
      status: "completed",
    },
    {
      id: 3,
      title: "Shopping List App",
      description:
        "A practical shopping list application with item management, categories, and offline functionality.",
      technologies: ["React", "TypeScript", "LocalStorage", "PWA"],
      githubUrl: "https://github.com/mmelokuhlemaphisa/shopping-list-app",
      liveUrl: "#",
      features: [
        "Add/remove items",
        "Item categories",
        "Offline functionality",
        "Progress tracking",
        "Export lists",
      ],
      category: "mobile-web",
      status: "completed",
    },
    {
      id: 4,
      title: "Dictionary App",
      description:
        "An interactive dictionary application with word definitions, pronunciations, and favorites functionality using Redux for state management.",
      technologies: ["React", "Redux", "TypeScript", "Dictionary API"],
      githubUrl: "https://github.com/mmelokuhlemaphisa/redux-dictionary-app",
      liveUrl: "#",
      features: [
        "Real-time word search and definitions",
        "Favorite words collection",
        "Search history tracking",
        "Pronunciation guides",
        "Redux state management",
      ],
      category: "web-app",
      status: "completed",
    },
    {
      id: 5,
      title: "Electrical SDS Vault",
      description:
        "A comprehensive safety data sheet management system for electrical safety compliance, featuring document management and safety tracking.",
      technologies: ["React", "TypeScript", "Node.js", "Database"],
      githubUrl: "https://github.com/mmelokuhlemaphisa/electrical-sds-vault",
      liveUrl: "#",
      features: [
        "Document management system",
        "Safety data sheet storage",
        "Compliance reporting",
        "Safety compliance tracking",
        "User authentication and authorization",
      ],
      category: "web-app",
      status: "in-development",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web-app", name: "Web Applications" },
    { id: "mobile-web", name: "Mobile Web" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#4CAF50";
      case "in-development":
        return "#FF9800";
      default:
        return "#9E9E9E";
    }
  };

  const handleLiveDemo = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };

  const handleGitHub = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "80px 20px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Projects
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#cccccc",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Explore my portfolio of web applications and mobile solutions. Each
            project represents a unique challenge solved with modern
            technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              style={{
                padding: "12px 24px",
                backgroundColor:
                  activeFilter === category.id ? "white" : "transparent",
                color: activeFilter === category.id ? "black" : "white",
                border: "2px solid white",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
                transform:
                  activeFilter === category.id ? "translateY(-2px)" : "none",
                boxShadow:
                  activeFilter === category.id
                    ? "0 5px 15px rgba(255,255,255,0.3)"
                    : "none",
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.backgroundColor = "#333333";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "none";
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #333333",
                borderRadius: "15px",
                padding: "30px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "#666666";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#333333";
              }}
            >
              {/* Status Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  backgroundColor: getStatusColor(project.status),
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {project.status.replace("-", " ")}
              </div>

              {/* Project Content */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  color: "white",
                  marginRight: "100px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#cccccc",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{ marginBottom: "20px" }}>
                <h4
                  style={{
                    fontSize: "1rem",
                    marginBottom: "10px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Technologies:
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "#333333",
                        color: "white",
                        padding: "4px 12px",
                        borderRadius: "15px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div style={{ marginBottom: "25px" }}>
                <h4
                  style={{
                    fontSize: "1rem",
                    marginBottom: "10px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Key Features:
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    color: "#cccccc",
                  }}
                >
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "5px",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "white", marginRight: "8px" }}>
                        •
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={() => handleGitHub(project.githubUrl)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "2px solid white",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "black";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  View Code
                </button>

                <button
                  onClick={() => handleLiveDemo(project.liveUrl)}
                  disabled={project.liveUrl === "#"}
                  style={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor:
                      project.liveUrl === "#" ? "#333333" : "white",
                    color: project.liveUrl === "#" ? "#666666" : "black",
                    border: "none",
                    borderRadius: "8px",
                    cursor: project.liveUrl === "#" ? "not-allowed" : "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    opacity: project.liveUrl === "#" ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (project.liveUrl !== "#") {
                      e.currentTarget.style.backgroundColor = "#f0f0f0";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (project.liveUrl !== "#") {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {project.liveUrl === "#" ? "Coming Soon" : "Live Demo"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              padding: "15px 30px",
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
