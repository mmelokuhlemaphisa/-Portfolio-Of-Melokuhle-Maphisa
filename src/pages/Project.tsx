import React from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  status: string;
}

const Project = () => {
  const navigate = useNavigate();

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
      status: "in-development",
    },
  ];

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
        backgroundColor: "#ffffff",
        color: "#333333",
        padding: "60px 20px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#212529",
              letterSpacing: "-0.5px",
            }}
          >
            My Projects
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#6c757d",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            A collection of my work showcasing my skills in web development and problem-solving.
            Each project demonstrates my ability to create functional and user-friendly applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            padding: "0 15px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e9ecef",
                borderRadius: "12px",
                padding: "25px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = "#dee2e6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                e.currentTarget.style.borderColor = "#e9ecef";
              }}
            >
              {/* Status Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  backgroundColor: getStatusColor(project.status),
                  color: "white",
                  padding: "3px 10px",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {project.status.replace("-", " ")}
              </div>

              {/* Project Content */}
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#212529",
                  marginRight: "80px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#6c757d",
                  marginBottom: "18px",
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
                    color: "#2c3e50",
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
                        backgroundColor: "#edf2f7",
                        color: "#2c3e50",
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
                    color: "#2c3e50",
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
                    color: "#4a5568",
                  }}
                >
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "8px",
                        fontSize: "0.95rem",
                        display: "flex",
                        alignItems: "center",
                        lineHeight: "1.5",
                      }}
                    >
                      <span style={{ color: "#4a5568", marginRight: "10px" }}>
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
                    color: "#2c3e50",
                    border: "2px solid #2c3e50",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2c3e50";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = "#2c3e50";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#2c3e50";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#2c3e50";
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
                      project.liveUrl === "#" ? "#e2e8f0" : "#2c3e50",
                    color: project.liveUrl === "#" ? "#4a5568" : "white",
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
                      e.currentTarget.style.backgroundColor = "#1a365d";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (project.liveUrl !== "#") {
                      e.currentTarget.style.backgroundColor = "#2c3e50";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.color = "white";
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
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 25px",
              backgroundColor: "#f8f9fa",
              color: "#495057",
              border: "1px solid #dee2e6",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e9ecef";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span>←</span> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
