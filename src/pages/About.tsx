import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import { useState } from "react";

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);

    // Create a printable CV content
    const cvContent = `
      MELOKUHLE MAPHISA
      =================
      
      CONTACT INFORMATION
      -------------------
      Email: melokuhlemaphisa99@gmail.com
      Location: Ezembeni Area, Ceza, 3866
      GitHub: https://github.com/mmelokuhlemaphisa
      LinkedIn: linkedin.com/in/melokuhle-maphisa
      
      PROFESSIONAL SUMMARY
      --------------------
      Passionate and dedicated software developer with 2+ years of experience 
      in creating modern, responsive web applications. Strong foundation in 
      JavaScript, React, and Node.js with a commitment to writing clean, 
      efficient code and delivering exceptional user experiences.
      
      TECHNICAL SKILLS
      ----------------
      • Frontend: JavaScript, TypeScript, React, HTML5, CSS3, Tailwind CSS
      • Backend: Node.js, Express.js, Python, REST APIs
      • Tools: Git, GitHub, VS Code, Docker, Postman, Figma
      • Methodologies: Responsive Design, UI/UX Principles
      
      EDUCATION
      ---------
      • Diploma in ICT-Business Analysis – Durban University of Technology (DUT)
      • Web Development Certification – freeCodeCamp
      • Advanced JavaScript Concepts – Online Courses
      
      PROJECT EXPERIENCE
      ------------------
      E-Commerce Platform 
      - Full-stack e-commerce solution with React, Node.js, and MongoDB
      - Implemented user authentication, product catalog, and payment integration
      - Features: Responsive design, real-time inventory, secure checkout
      
      Task Management App 
      - Collaborative task management application with real-time updates
      - Built with React, Firebase, and Material-UI
      - Features: Drag-and-drop interface, team collaboration, progress tracking
      
      Weather Dashboard 
      - Responsive weather application with location-based forecasts
      - Integrated with weather API for real-time data
      - Features: Geolocation, 7-day forecast, responsive design
      
      Portfolio Website 
      - Modern responsive portfolio with smooth animations
      - Built with React, TypeScript, and custom CSS
      - Features: Interactive UI, mobile-responsive, optimized performance
      
      PROFESSIONAL EXPERIENCE
      -----------------------
      Freelance Web Developer (2023 - Present)
      - Developed and maintained web applications for various clients
      - Collaborated with designers to implement responsive UI/UX designs
      - Optimized application performance and implemented best practices
      
      Technical Skills:
      - Developed 7+ projects using modern web technologies
      - Experience with both frontend and backend development
      - Strong problem-solving and debugging skills
      
      ACHIEVEMENTS
      ------------
      • Completed 7+ successful web development projects
      • Maintained 100% client satisfaction rate
      • Consistently delivered projects ahead of schedule
      • Active contributor to open-source communities
      
      INTERESTS & ACTIVITIES
      ----------------------
      • UI/UX Design Principles
      • Open Source Contribution
      • Technology Blogging
      • Community Volunteering
      • Continuous Learning & Skill Development
      
      REFERENCES
      ----------
      Available upon request
      
      "Code is like humor. When you have to explain it, it's bad." – Cory House
    `;

    // Create a blob and download link
    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Melokuhle_Maphisa_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        color: "#222",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      }}
      className="about-page"
    >
      <NavBar />

      <main
        style={{
          flex: 1,
          padding: "2.5rem 1rem",
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1>
            About Me
          </h1>

          {/* Download Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              style={{
                padding: "12px 24px",
                background: "linear-gradient(135deg, grey 0%, black 100%)",
                color: "white",
                border: "none",
                borderRadius: "25px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: isDownloading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                opacity: isDownloading ? 0.7 : 1,
              }}
              onMouseOver={(e) => {
                if (!isDownloading) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(102, 126, 234, 0.4)";
                }
              }}
              onMouseOut={(e) => {
                if (!isDownloading) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(102, 126, 234, 0.3)";
                }
              }}
            >
              {isDownloading ? "Downloading..." : "Download CV (TXT)"}
            </button>

            <button
              onClick={handlePrintCV}
              style={{
                padding: "12px 24px",
                background: "transparent",
                color: "#667eea",
                border: "2px solid #667eea",
                borderRadius: "25px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#667eea";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#667eea";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Print CV
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="cv-container"
        >
          {/* Left Column - Personal Info */}
          <div
            style={{
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              padding: "2rem",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Profile Image */}
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, grey 0%, black 100%)",
                margin: "0 auto 2rem auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                color: "white",
                fontWeight: "bold",
                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
              }}
            >
              MM
            </div>

            {/* Contact Information */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  color: "#333",
                  marginBottom: "1rem",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                Contact Info
              </h3>
              <div style={{ color: "#555", lineHeight: "1.6" }}>
                <p>📧 melokuhle@example.com</p>
                <p>📍 South Africa</p>
                <p>💼 Freelance Developer</p>
                <p>🔗 Available for projects</p>
              </div>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  color: "#333",
                  marginBottom: "1rem",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                Core Skills
              </h3>
              <div style={{ color: "#555" }}>
                <div
                  style={{
                    background: "rgba(102, 126, 234, 0.1)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  JavaScript/TypeScript
                </div>
                <div
                  style={{
                    background: "rgba(102, 126, 234, 0.1)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  React & Next.js
                </div>
                <div
                  style={{
                    background: "rgba(102, 126, 234, 0.1)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  Node.js & Express
                </div>
                <div
                  style={{
                    background: "rgba(102, 126, 234, 0.1)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  MongoDB & PostgreSQL
                </div>
                <div
                  style={{
                    background: "rgba(102, 126, 234, 0.1)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                  }}
                >
                  UI/UX Design
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3
                style={{
                  color: "#333",
                  marginBottom: "1rem",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                Interests
              </h3>
              <ul
                style={{
                  color: "#555",
                  paddingLeft: "1.2rem",
                  lineHeight: "1.6",
                }}
              >
                <li>UI/UX Design</li>
                <li>Open Source</li>
                <li>Tech Blogging</li>
                <li>Community Work</li>
                <li>Mentoring</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Professional Info */}
          <div>
            {/* Professional Summary */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#333",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  borderBottom: "2px solid #667eea",
                  paddingBottom: "0.5rem",
                }}
              >
                Professional Summary
              </h2>
              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                  fontSize: "1.1rem",
                }}
              >
                Hi! I'm Melokuhle Maphisa, a passionate full-stack developer
                based in South Africa. With 2+ years of experience, I specialize
                in creating modern, responsive web applications using
                cutting-edge technologies. I'm dedicated to writing clean,
                efficient code and delivering exceptional user experiences that
                make a real difference.
              </p>
            </section>

            {/* Education */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#333",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  borderBottom: "2px solid #667eea",
                  paddingBottom: "0.5rem",
                }}
              >
                Education & Certifications
              </h2>
              <div style={{ color: "#555" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <h4
                    style={{
                      color: "#667eea",
                      margin: "0 0 0.3rem 0",
                      fontWeight: "600",
                    }}
                  >
                    Diploma in ICT-Business Analysis
                  </h4>
                  <p style={{ margin: 0, color: "#777" }}>
                    Durban University of Technology (DUT)
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <h4
                    style={{
                      color: "#667eea",
                      margin: "0 0 0.3rem 0",
                      fontWeight: "600",
                    }}
                  >
                    Web Development Certification
                  </h4>
                  <p style={{ margin: 0, color: "#777" }}>freeCodeCamp</p>
                </div>
                <div>
                  <h4
                    style={{
                      color: "#667eea",
                      margin: "0 0 0.3rem 0",
                      fontWeight: "600",
                    }}
                  >
                    Advanced JavaScript & React
                  </h4>
                  <p style={{ margin: 0, color: "#777" }}>
                    Online Courses & Self-Study
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
           
            {/* Projects */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#333",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  borderBottom: "2px solid #667eea",
                  paddingBottom: "0.5rem",
                }}
              >
                Key Projects
              </h2>
              <div style={{ color: "#555" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>E-Commerce Platform:</strong> Full-stack solution with
                  React, Node.js, MongoDB
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>Task Management App:</strong> Real-time collaborative
                  application
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>Weather Dashboard:</strong> API-driven responsive
                  weather app
                </div>
                <div>
                  <strong>Portfolio Website:</strong> Modern React portfolio
                  with animations
                </div>
              </div>
            </section>

            {/* Quote */}
            <blockquote
              style={{
                color: "#667eea",
                fontStyle: "italic",
                fontSize: "1.1rem",
                borderLeft: "4px solid #667eea",
                padding: "1rem 1.5rem",
                background: "rgba(102, 126, 234, 0.05)",
                borderRadius: "0 8px 8px 0",
                margin: "2rem 0",
              }}
            >
              "Code is like humor. When you have to explain it, it's bad."
              <br />
              <span style={{ fontSize: "0.9rem", color: "#777" }}>
                – Cory House
              </span>
            </blockquote>
          </div>
        </div>
      </main>

      <Footer />

      {/* Print Styles */}
      <style>{`
        @media print {
          .about-page {
            background: white !important;
          }
          
          .cv-container {
            display: block !important;
          }
          
          button {
            display: none !important;
          }
          
          nav, footer {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .cv-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          main {
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
