import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = [
    "Full-Stack Developer",
    "Problem Solver",
    "UI/UX Enthusiast",
    "Creative Thinker",
    "Tech Innovator",
  ];
  
  const currentWord = words[currentWordIndex];

  const skills: Skill[] = [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 88, icon: "🟨" },
    { name: "TypeScript", level: 85, icon: "🔷" },
    { name: "Node.js", level: 82, icon: "🟢" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "Bootstrap", level: 85, icon: "🌊" },
    { name: "Git/GitHub", level: 88, icon: "📚" },
    { name: "VS Code", level: 90, icon: "💻" },
  ];

  const projects: Project[] = [
    {
      title: "Job Tracker App",
      description:
        "Professional job application tracking system with status management and analytics",
      tech: ["React", "Node.js", "MongoDB", "CSS3"],
      github: "https://github.com/mmelokuhlemaphisa/job-tracker-app",
      live: "https://job-tracker-app-wmdf.onrender.com/",
      image: "💼",
    },
    {
      title: "Weather Application",
      description:
        "Real-time weather forecasting app with location-based data and responsive design",
      tech: ["JavaScript", "Weather API", "HTML5", "CSS3"],
      github: "https://github.com/mmelokuhlemaphisa/weather-application",
      live: "https://weather-application-3wux.onrender.com/",
      image: "🌤️",
    },
    {
      title: "Shopping List App",
      description:
        "Interactive shopping list manager with add, edit, and delete functionality",
      tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      github: "https://github.com/mmelokuhlemaphisa/shopping-list-app",
      live: "#",
      image: "🛒",
    },
    {
      title: "Dictionary App",
      description:
        "Comprehensive dictionary application with word definitions and pronunciations",
      tech: ["React", "Dictionary API", "CSS3"],
      github: "https://github.com/mmelokuhlemaphisa/dictionary-app",
      live: "#",
      image: "📚",
    },
    {
      title: "Electrical SDS Vault",
      description:
        "Safety Data Sheet management system for electrical components and equipment",
      tech: ["React", "Node.js", "Database", "PDF Management"],
      github: "https://github.com/mmelokuhlemaphisa/electrical-sds-vault",
      live: "#",
      image: "⚡",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#222",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      }}
    >
      <NavBar />

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(135deg, #fff 0%, #f8f9fa 100%)",
          padding: "2rem",
        }}
      >
        {/* Floating Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "60px",
            height: "60px",
            background: "linear-gradient(45deg, #e9ecef, #dee2e6)",
            borderRadius: "50%",
            opacity: 0.3,
            animation: "float 6s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "60%",
            right: "15%",
            width: "40px",
            height: "40px",
            background: "linear-gradient(45deg, #adb5bd, #868e96)",
            borderRadius: "50%",
            opacity: 0.3,
            animation: "float 4s ease-in-out infinite 1s",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "160px",
              height: "160px",
              margin: "0 auto 2rem",
              background: "linear-gradient(135deg, #343a40 0%, #6c757d 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "4rem",
              fontWeight: "bold",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              border: "4px solid white",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            MM
          </div>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #212529 0%, #495057 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-1px",
              lineHeight: "1.1",
            }}
          >
            Melokuhle Maphisa
          </h1>

          {/* Animated Typing Text */}
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "2rem",
              color: "#495057",
              minHeight: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span>I'm a</span>
            <span
              style={{
                color: "#212529",
                fontWeight: "700",
                borderRight: "3px solid #6c757d",
                paddingRight: "8px",
                minWidth: "320px",
                textAlign: "left",
              }}
            >
              {currentWord}
            </span>
          </div>

          <p
            style={{
              fontSize: "1.3rem",
              color: "#6c757d",
              marginBottom: "3rem",
              lineHeight: "1.7",
              fontWeight: "400",
            }}
          >
            Passionate software developer crafting digital experiences that
            blend beautiful design with cutting-edge functionality.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "4rem",
            }}
          >
            <button
              style={{
                padding: "16px 40px",
                background: "#212529",
                color: "white",
                border: "none",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#495057";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#212529";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.15)";
              }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </button>

            <button
              style={{
                padding: "16px 40px",
                background: "transparent",
                color: "#212529",
                border: "2px solid #212529",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f8f9fa";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Connect
            </button>
          </div>

          {/* Social Media Links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              margin: "0 auto 4rem",
              maxWidth: "600px",
              padding: "0 1rem",
            }}
          >
            <a
              href="https://github.com/mmelokuhlemaphisa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.8rem 1.5rem",
                background: "rgba(33, 37, 41, 0.05)",
                borderRadius: "50px",
                color: "#212529",
                fontSize: "1rem",
                fontWeight: "500",
                textDecoration: "none",
                transition: "all 0.3s ease",
                border: "1px solid rgba(33, 37, 41, 0.1)",
                margin: "0 0.5rem 1rem",
                minWidth: "140px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#212529";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(33, 37, 41, 0.05)";
                e.currentTarget.style.color = "#212529";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              title="View my GitHub profile"
              aria-label="GitHub Profile"
            >
              <span style={{ marginRight: "8px" }}>📚</span> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/melokuhle-maphisa-04aa4b348/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.8rem 1.5rem",
                background: "rgba(33, 37, 41, 0.05)",
                borderRadius: "50px",
                color: "#212529",
                fontSize: "1rem",
                fontWeight: "500",
                textDecoration: "none",
                transition: "all 0.3s ease",
                border: "1px solid rgba(33, 37, 41, 0.1)",
                margin: "0 0.5rem 1rem",
                minWidth: "140px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#0A66C2";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "#0A66C2";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(10, 102, 194, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(33, 37, 41, 0.05)";
                e.currentTarget.style.color = "#212529";
                e.currentTarget.style.borderColor = "rgba(33, 37, 41, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              title="Connect on LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <span style={{ marginRight: "8px" }}>💼</span> LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
              padding: "2.5rem",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  color: "#212529",
                  marginBottom: "0.5rem",
                }}
              >
                7+
              </div>
              <div style={{ color: "#6c757d", fontWeight: "500" }}>
                Projects Completed
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  color: "#212529",
                  marginBottom: "0.5rem",
                }}
              >
                8+
              </div>
              <div style={{ color: "#6c757d", fontWeight: "500" }}>
                Technologies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "8rem 2rem",
          background: "#f8f9fa",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#212529",
              textAlign: "center",
            }}
          >
            About Me
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#6c757d",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 4rem",
              lineHeight: "1.7",
            }}
          >
            I'm a passionate software developer with expertise in modern web
            technologies
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4rem",
              marginBottom: "4rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "2rem",
                  color: "#212529",
                }}
              >
                Professional Summary
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#495057",
                  marginBottom: "2rem",
                  maxWidth: "800px",
                }}
              >
                I'm a dedicated software developer with a strong foundation in
                modern web technologies. My expertise includes building
                responsive, user-friendly applications using React, TypeScript,
                and Node.js. I'm passionate about writing clean, efficient code
                and continuously learning new technologies to stay current with
                industry trends.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "2rem",
                  color: "#212529",
                }}
              >
                My Skills
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      background: "white",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      textAlign: "center",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0,0,0,0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.05)";
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {skill.icon}
                    </div>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "#212529",
                      }}
                    >
                      {skill.name}
                    </h4>
                    <div
                      style={{
                        height: "6px",
                        background: "#e9ecef",
                        borderRadius: "3px",
                        overflow: "hidden",
                        marginTop: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: "100%",
                          background: "#212529",
                          borderRadius: "3px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          padding: "8rem 2rem",
          background: "white",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#212529",
              textAlign: "center",
            }}
          >
            Featured Projects
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#6c757d",
              textAlign: "center",
              marginBottom: "4rem",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "200px",
                    background:
                      "linear-gradient(135deg, #212529 0%, #495057 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4rem",
                    color: "white",
                  }}
                >
                  {project.image}
                </div>
                <div style={{ padding: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginBottom: "1rem",
                      color: "#212529",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "#6c757d",
                      marginBottom: "1.5rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "2rem",
                    }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          background: "#f8f9fa",
                          color: "#495057",
                          padding: "0.4rem 1rem",
                          borderRadius: "20px",
                          fontSize: "0.9rem",
                          fontWeight: "500",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    <button
                      style={{
                        padding: "12px 24px",
                        background: "transparent",
                        color: "#212529",
                        border: "2px solid #212529",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        flex: 1,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "#f8f9fa";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      GitHub
                    </button>
                    <button
                      style={{
                        padding: "12px 24px",
                        background:
                          project.live === "#" ? "#cccccc" : "#212529",
                        color: project.live === "#" ? "#666666" : "white",
                        border: "none",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor:
                          project.live === "#" ? "not-allowed" : "pointer",
                        transition: "all 0.3s ease",
                        flex: 1,
                        opacity: project.live === "#" ? 0.6 : 1,
                      }}
                      onMouseOver={(e) => {
                        if (project.live !== "#") {
                          e.currentTarget.style.background = "#495057";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }
                      }}
                      onMouseOut={(e) => {
                        if (project.live !== "#") {
                          e.currentTarget.style.background = "#212529";
                          e.currentTarget.style.transform = "translateY(0)";
                        }
                      }}
                      onClick={() => {
                        if (project.live !== "#") {
                          window.open(project.live, "_blank");
                        }
                      }}
                      disabled={project.live === "#"}
                    >
                      {project.live === "#" ? "Coming Soon" : "Live Demo"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <button
              style={{
                padding: "16px 40px",
                background: "transparent",
                color: "#212529",
                border: "2px solid #212529",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#212529";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#212529";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
              onClick={() => (window.location.href = "/projects")}
            >
              View All Projects →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "8rem 2rem",
          background: "#212529",
          color: "white",
        }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "2rem",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "3rem",
              opacity: 0.9,
              lineHeight: "1.7",
            }}
          >
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology. Feel free to reach
            out!
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                padding: "2rem",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/melokuhle-maphisa-04aa4b348/",
                  "_blank"
                )
              }
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
                💼 LinkIn
              </h3>
              <p style={{ opacity: 0.8 }}>
                https://www.linkedin.com/in/melokuhle-maphisa-04aa4b348/
              </p>
            </div>

            <div
              style={{
                padding: "2rem",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() =>
                window.open("https://github.com/mmelokuhlemaphisa", "_blank")
              }
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
                📱 GitHub
              </h3>
              <p style={{ opacity: 0.8 }}>
                https://github.com/mmelokuhlemaphisa
              </p>
            </div>
          </div>

          <button
            style={{
              padding: "16px 40px",
              background: "white",
              color: "#212529",
              border: "none",
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#f8f9fa";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(255,255,255,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(255,255,255,0.2)";
            }}
            onClick={() => window.open("/contact", "_blank")}
          >
            Send Message
          </button>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.5rem !important;
            flex-direction: column !important;
          }
          
          .stats-container {
            gap: 2rem !important;
            flex-direction: column !important;
          }

          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .skills-grid {
            grid-template-columns: 1fr !important;
          }

          .projects-grid {
            grid-template-columns: 1fr !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}
