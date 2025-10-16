import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  category: string;
  status: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Job Application Tracker",
      description:
        "A comprehensive job application management system built with React TypeScript to help job seekers organize and track their applications efficiently.",
      technologies: ["React", "TypeScript", "Redux", "CSS3", "Local Storage"],
      githubUrl:
        "https://github.com/mmelokuhlemaphisa/ReactTS-Job-Application-Tracker",
      liveUrl: "#",
      features: [
        "Track application status (Applied, Interview, Offer, Rejected)",
        "Add company details and job descriptions",
        "Set reminders for follow-ups",
        "Analytics and insights dashboard",
        "Responsive design for all devices",
      ],
      category: "web-app",
      status: "completed",
    },
    {
      id: 2,
      title: "Dictionary App",
      description:
        "A modern dictionary application with advanced search functionality and word management using Redux for state management.",
      technologies: [
        "React",
        "Redux",
        "JavaScript",
        "API Integration",
        "Bootstrap",
      ],
      githubUrl: "https://github.com/mmelokuhlemaphisa/redux-dictionary-app",
      liveUrl: "#",
      features: [
        "Real-time word search and definitions",
        "Favorite words collection",
        "Search history tracking",
        "Pronunciation guides",
        "Cross-platform compatibility",
      ],
      category: "web-app",
      status: "completed",
    },
    {
      id: 3,
      title: "Shopping List App",
      description:
        "A practical shopping list application that helps users organize their shopping needs with intuitive categorization and sharing features.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage", "PWA"],
      githubUrl: "https://github.com/mmelokuhlemaphisa/Shopping-List-App",
      liveUrl: "#",
      features: [
        "Create and manage multiple shopping lists",
        "Categorize items by department",
        "Quantity and price tracking",
        "Share lists with family/friends",
        "Offline functionality",
      ],
      category: "mobile-web",
      status: "completed",
    },
    {
      id: 4,
      title: "Weather Application",
      description:
        "A beautiful weather application providing real-time weather data, forecasts, and interactive maps with location-based services.",
      technologies: [
        "JavaScript",
        "API Integration",
        "CSS3",
        "Geolocation",
        "Chart.js",
      ],
      githubUrl: "https://github.com/mmelokuhlemaphisa/Weather-Application",
      liveUrl: "#",
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Location-based weather",
        "Interactive weather maps",
        "Temperature unit conversion",
      ],
      category: "web-app",
      status: "completed",
    },
    {
      id: 5,
      title: "Link Vault",
      description:
        "A secure and organized bookmark management system for storing, categorizing, and accessing important links across devices.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Material-UI",
        "Authentication",
      ],
      githubUrl: "https://github.com/mmelokuhlemaphisa/link-vault",
      liveUrl: "#",
      features: [
        "Secure link storage with categories",
        "Browser extension integration",
        "Quick search and filtering",
        "Link preview generation",
        "Cross-device synchronization",
      ],
      category: "web-app",
      status: "Completed",
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

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { color: "#10b981", text: "Completed" },
      "in-progress": { color: "#f59e0b", text: "In Progress" },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] ||
      statusConfig.completed;

    return (
      <span
        style={{
          background: config.color,
          color: "white",
          padding: "0.3rem 0.8rem",
          borderRadius: "20px",
          fontSize: "0.75rem",
          fontWeight: "600",
          marginLeft: "1rem",
        }}
      >
        {config.text}
      </span>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        color: "#1a1a1a",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      }}
    >
      <NavBar />

      <main
        style={{
          flex: 1,
          padding: "4rem 1rem",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            maxWidth: "800px",
            margin: "0 auto 4rem auto",
          }}
        >
          <h1
            style={{
              color: "#1a1a1a",
              marginBottom: "1rem",
              fontSize: "3rem",
              fontWeight: "800",
              letterSpacing: "-0.5px",
              background: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Projects
          </h1>
          <p
            style={{
              color: "#666",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              marginBottom: "2rem",
            }}
          >
            A collection of projects that showcase my skills in web development,
            problem-solving, and creating user-friendly applications.
          </p>

          {/* Filter Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                style={{
                  padding: "0.75rem 1.5rem",
                  background:
                    activeFilter === category.id ? "#1a1a1a" : "transparent",
                  color: activeFilter === category.id ? "#ffffff" : "#1a1a1a",
                  border: "2px solid #1a1a1a",
                  borderRadius: "25px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  if (activeFilter !== category.id) {
                    e.currentTarget.style.background = "#1a1a1a";
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseOut={(e) => {
                  if (activeFilter !== category.id) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#1a1a1a";
                  }
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
                transition: "all 0.3s ease",
                cursor: "pointer",
                height: "fit-content",
              }}
              onClick={() => handleProjectClick(project.githubUrl)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 60px rgba(0,0,0,0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.08)";
              }}
            >
              {/* Project Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{
                    color: "#1a1a1a",
                    margin: "0",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    lineHeight: "1.3",
                  }}
                >
                  {project.title}
                </h3>
                {getStatusBadge(project.status)}
              </div>

              {/* Project Description */}
              <p
                style={{
                  color: "#666",
                  marginBottom: "1.5rem",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4
                  style={{
                    color: "#1a1a1a",
                    margin: "0 0 0.75rem 0",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Technologies Used:
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        background: "rgba(26, 26, 26, 0.05)",
                        color: "#1a1a1a",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        border: "1px solid rgba(26, 26, 26, 0.1)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div style={{ marginBottom: "2rem" }}>
                <h4
                  style={{
                    color: "#1a1a1a",
                    margin: "0 0 0.75rem 0",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Key Features:
                </h4>
                <ul
                  style={{
                    color: "#666",
                    paddingLeft: "1.2rem",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {project.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "0.4rem" }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.githubUrl);
                  }}
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "#1a1a1a",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    flex: 1,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#333333";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#1a1a1a";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  View Code
                </button>

                {project.liveUrl && project.liveUrl !== "#" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.liveUrl!);
                    }}
                    style={{
                      padding: "0.75rem 1.5rem",
                      background: "transparent",
                      color: "#1a1a1a",
                      border: "2px solid #1a1a1a",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      flex: 1,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#1a1a1a";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#1a1a1a";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          style={{
            textAlign: "center",
            marginTop: "5rem",
            padding: "3rem 2rem",
            background: "#fafafa",
            borderRadius: "16px",
            border: "1px solid #f0f0f0",
            maxWidth: "800px",
            margin: "5rem auto 0 auto",
          }}
        >
          <h2
            style={{
              color: "#1a1a1a",
              marginBottom: "1rem",
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            Interested in Collaborating?
          </h2>
          <p
            style={{
              color: "#666",
              marginBottom: "2rem",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}
          >
            I'm always open to discussing new opportunities, project
            collaborations, or any development work. Let's create something
            amazing together!
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            style={{
              padding: "1rem 2.5rem",
              background: "#1a1a1a",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#333333";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#1a1a1a";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get In Touch
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
