import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import jsPDF from "jspdf";

// TypeScript interfaces
interface Skill {
  name: string;
  level: number;
  icon: string;
}

// Data arrays
const skills: Skill[] = [
  { name: "JavaScript", level: 90, icon: "🟨" },
  { name: "TypeScript", level: 85, icon: "🔷" },
  { name: "React", level: 88, icon: "⚛️" },
  { name: "Node.js", level: 82, icon: "🟢" },
  { name: "HTML5", level: 95, icon: "🟧" },
  { name: "CSS3", level: 90, icon: "🎨" },
  { name: "Git", level: 85, icon: "📁" },
  { name: "Python", level: 75, icon: "🐍" },
];


const About: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);

    try {
      // Create PDF document
      const pdf = new jsPDF();

      // Set page margins
      const margin = 20;
      const pageWidth = pdf.internal.pageSize.width;
      const contentWidth = pageWidth - margin * 2;

      // Header background
      pdf.setFillColor(33, 37, 41); // Dark background
      pdf.rect(0, 0, pageWidth, 50, "F");

      // Header text
      pdf.setTextColor(255, 255, 255); // White text
      pdf.setFontSize(28);
      pdf.setFont("helvetica", "bold");
      pdf.text("MELOKUHLE MAPHISA", pageWidth / 2, 25, { align: "center" });

      // Subtitle
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "normal");
      pdf.text("Software Developer & ICT Business Analyst", pageWidth / 2, 38, {
        align: "center",
      });

      // Reset text color to black
      pdf.setTextColor(0, 0, 0);
      let yPos = 65;

      // Contact Information Section
      pdf.setFillColor(248, 249, 250); // Light gray background
      pdf.rect(margin, yPos - 5, contentWidth, 35, "F");

      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(33, 37, 41); // Dark gray
      pdf.text("CONTACT INFORMATION", margin + 5, yPos + 5);
      yPos += 15;

      // Contact details in two columns
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);

      // Left column
      pdf.text("Email: melokuhlemaphisa99@gmail.com", margin + 5, yPos);
      pdf.text("Phone: 064 958 1777", margin + 5, yPos + 6);
      pdf.text("Address: Ezembeni Area, Ceza, 3866", margin + 5, yPos + 12);

      // Right column
      pdf.text("GitHub: github.com/mmelokuhlemaphisa", margin + 100, yPos);
      pdf.text(
        "LinkedIn: linkedin.com/in/melokuhle-maphisa",
        margin + 100,
        yPos + 6
      );

      yPos += 25;

      // Personal Details Section
      pdf.setFillColor(248, 249, 250); // Light gray background
      pdf.rect(margin, yPos - 5, contentWidth, 28, "F");

      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(33, 37, 41);
      pdf.text("PERSONAL DETAILS", margin + 5, yPos + 5);
      yPos += 15;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);

      // Two column layout
      pdf.text("Date of Birth: 17 August 1999", margin + 5, yPos);
      pdf.text("Nationality: South African", margin + 100, yPos);
      yPos += 6;
      pdf.text("Gender: Female", margin + 5, yPos);
      pdf.text("Languages: IsiZulu, English", margin + 100, yPos);

      yPos += 20;

      // Objective Section
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(33, 37, 41);
      pdf.text("CAREER OBJECTIVE", margin, yPos);

      // Underline
      pdf.setDrawColor(33, 37, 41);
      pdf.line(margin, yPos + 2, margin + 50, yPos + 2);
      yPos += 12;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);
      const objectiveText =
        "To obtain a position in a growth-oriented company where I can utilize my academic knowledge and work experience to deliver quality results, face challenges with resilience, and develop into a well-rounded professional. Now specializing in software development with modern web technologies.";
      const objectiveLines = pdf.splitTextToSize(objectiveText, contentWidth);
      pdf.text(objectiveLines, margin, yPos);
      yPos += objectiveLines.length * 5 + 15;

      // Technical Skills Section
      pdf.setFillColor(248, 249, 250);
      pdf.rect(margin, yPos - 5, contentWidth, 40, "F");

      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(33, 37, 41);
      pdf.text("TECHNICAL SKILLS", margin + 5, yPos + 5);
      yPos += 18;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);

      // Skills in organized categories
      pdf.setFont("helvetica", "bold");
      pdf.text("Frontend Technologies:", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("JavaScript, TypeScript, React, HTML5, CSS3", margin + 60, yPos);
      yPos += 6;

      pdf.setFont("helvetica", "bold");
      pdf.text("Backend & APIs:", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("Node.js, Express.js, Python, REST APIs", margin + 60, yPos);
      yPos += 6;

      pdf.setFont("helvetica", "bold");
      pdf.text("Development Tools:", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("Git, GitHub, VS Code, Postman, Figma", margin + 60, yPos);
      yPos += 6;

      pdf.setFont("helvetica", "bold");
      pdf.text("Methodologies:", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("Responsive Design, UI/UX Principles, Agile", margin + 60, yPos);

      yPos += 20;

      // Education Section
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(33, 37, 41);
      pdf.text("EDUCATION", margin, yPos);

      // Underline
      pdf.setDrawColor(33, 37, 41);
      pdf.line(margin, yPos + 2, margin + 35, yPos + 2);
      yPos += 12;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);

      // 2024 Education
      pdf.setFont("helvetica", "bold");
      pdf.text("2024", margin, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        "Diploma in Information and Communication Technology",
        margin + 25,
        yPos
      );
      yPos += 5;
      pdf.text("in Business Analysis", margin + 25, yPos);
      yPos += 5;
      pdf.setFont("helvetica", "italic");
      pdf.text("Durban University of Technology (DUT)", margin + 25, yPos);
      yPos += 10;

      // 2019 Education
      pdf.setFont("helvetica", "bold");
      pdf.text("2019", margin, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("Electrical Engineering N3", margin + 25, yPos);
      yPos += 5;
      pdf.setFont("helvetica", "italic");
      pdf.text("Ekurhuleni West TVET College", margin + 25, yPos);
      yPos += 10;

      // 2017 Education
      pdf.setFont("helvetica", "bold");
      pdf.text("2017", margin, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("Matric (Grade 12)", margin + 25, yPos);
      yPos += 5;
      pdf.setFont("helvetica", "italic");
      pdf.text("Phikwase High School", margin + 25, yPos);
      yPos += 15;

      // Check if we need a new page
      if (yPos > 250) {
        pdf.addPage();
        yPos = 30;
      }

      // Work Experience Section
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(33, 37, 41);
      pdf.text("WORK EXPERIENCE", margin, yPos);

      // Underline
      pdf.setDrawColor(33, 37, 41);
      pdf.line(margin, yPos + 2, margin + 55, yPos + 2);
      yPos += 12;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);

      // Job title and dates
      pdf.setFont("helvetica", "bold");
      pdf.text("Fieldworker", margin, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("January 2022 - June 2022", margin + 100, yPos);
      yPos += 5;

      pdf.setFont("helvetica", "italic");
      pdf.text("Census South Africa", margin, yPos);
      yPos += 10;

      pdf.setFont("helvetica", "normal");
      pdf.text(
        "• Collected and recorded demographic data for the national census",
        margin + 5,
        yPos
      );
      yPos += 5;
      pdf.text(
        "• Ensured data integrity and compliance with confidentiality protocols",
        margin + 5,
        yPos
      );
      yPos += 5;
      pdf.text(
        "• Communicated effectively with community members and field teams",
        margin + 5,
        yPos
      );
      yPos += 5;
      pdf.text(
        "• Maintained accurate records and met daily collection targets",
        margin + 5,
        yPos
      );
      yPos += 15;

      // Project Experience Section
      pdf.setFillColor(248, 249, 250);
      pdf.rect(margin, yPos - 5, contentWidth, 65, "F");

      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(33, 37, 41);
      pdf.text("SOFTWARE DEVELOPMENT PROJECTS", margin + 5, yPos + 5);
      yPos += 18;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);

      // Project 1
      pdf.setFont("helvetica", "bold");
      pdf.text("Job Tracker App", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        "Professional job application tracking system with analytics",
        margin + 5,
        yPos + 5
      );
      pdf.text(
        "Live: https://job-tracker-app-wmdf.onrender.com/",
        margin + 5,
        yPos + 10
      );
      yPos += 18;

      // Project 2
      pdf.setFont("helvetica", "bold");
      pdf.text("Weather Application", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        "Real-time weather forecasting with location-based data",
        margin + 5,
        yPos + 5
      );
      pdf.text(
        "Live: https://weather-application-3wux.onrender.com/",
        margin + 5,
        yPos + 10
      );
      yPos += 18;

      // Project 3
      pdf.setFont("helvetica", "bold");
      pdf.text("Shopping List App", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        "Interactive shopping list manager with CRUD functionality",
        margin + 5,
        yPos + 5
      );
      yPos += 12;

      // Project 4
      pdf.setFont("helvetica", "bold");
      pdf.text("Dictionary App", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        "Comprehensive dictionary with definitions and pronunciations",
        margin + 5,
        yPos + 5
      );
      yPos += 12;

      // Project 5
      pdf.setFont("helvetica", "bold");
      pdf.text("Electrical SDS", margin + 5, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        "Safety Data Sheet management for electrical components",
        margin + 5,
        yPos + 5
      );

      yPos += 20;

      // References Section
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(33, 37, 41);
      pdf.text("REFERENCES", margin, yPos);

      // Underline
      pdf.setDrawColor(33, 37, 41);
      pdf.line(margin, yPos + 2, margin + 40, yPos + 2);
      yPos += 12;

      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);

      // Reference 1
      pdf.setFont("helvetica", "bold");
      pdf.text("Nkosithandile Nyandeni", margin, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("Phone: 076 252 5376", margin, yPos + 5);

      // Reference 2 (next to first)
      pdf.setFont("helvetica", "bold");
      pdf.text("Bongekile Maphisa", margin + 90, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("Phone: 079 171 6079", margin + 90, yPos + 5);
      yPos += 15;

      // Reference 3 (centered)
      pdf.setFont("helvetica", "bold");
      pdf.text("Mduduzi Buthelezi", margin + 45, yPos);
      pdf.setFont("helvetica", "normal");
      pdf.text("Phone: 064 643 2345", margin + 45, yPos + 5);

      // Add footer with page number and date
      yPos = pdf.internal.pageSize.height - 15;
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "italic");
      pdf.setTextColor(128, 128, 128);
      pdf.text("Melokuhle Maphisa - Curriculum Vitae", margin, yPos);
    

      // Save the PDF
      pdf.save("Melokuhle_Maphisa_CV.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

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
          padding: "8rem 2rem 4rem",
          background: "linear-gradient(135deg, #fff 0%, #f8f9fa 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              margin: "0 auto 2rem",
              background: "linear-gradient(135deg, #343a40 0%, #6c757d 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "5rem",
              fontWeight: "bold",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              border: "6px solid white",
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
              fontSize: "3.5rem",
              fontWeight: "800",
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #212529 0%, #495057 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-1px",
            }}
          >
            About Melokuhle Maphisa
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              color: "#6c757d",
              marginBottom: "3rem",
              lineHeight: "1.7",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Passionate software developer crafting digital solutions with modern
            technologies and clean, efficient code.
          </p>

          <button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            style={{
              padding: "16px 40px",
              background: isDownloading ? "#6c757d" : "#212529",
              color: "white",
              border: "none",
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: isDownloading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            onMouseOver={(e) => {
              if (!isDownloading) {
                e.currentTarget.style.background = "#495057";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.25)";
              }
            }}
            onMouseOut={(e) => {
              if (!isDownloading) {
                e.currentTarget.style.background = "#212529";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.15)";
              }
            }}
          >
            {isDownloading ? "Downloading..." : "Download CV"}
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "white",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "2rem",
                  color: "#212529",
                }}
              >
                My Story
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#495057",
                  marginBottom: "1.5rem",
                }}
              >
                Born on August 17, 1999, in Ezembeni Area, Ceza, my journey
                began with a strong educational foundation. After completing my
                Matric at Phikwase High School in 2017, I pursued Electrical
                Engineering N3 at Ekurhuleni West TVET College, which sparked my
                interest in technology.
              </p>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#495057",
                  marginBottom: "1.5rem",
                }}
              >
                In 2024, I completed my Diploma in Information and Communication
                Technology in Business Analysis at Durban University of
                Technology. This academic journey, combined with my work
                experience as a Census SA Fieldworker, taught me the importance
                of data integrity, communication, and attention to detail.
              </p>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#495057",
                }}
              >
                Today, I've transitioned into software development, combining my
                analytical background with modern web technologies. I specialize
                in creating responsive, user-friendly applications using React,
                Node.js, and TypeScript, always striving to deliver quality
                results and face challenges with resilience.
              </p>
            </div>

            <div
              style={{
                background: "#f8f9fa",
                padding: "3rem",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "2rem",
                  color: "#212529",
                  textAlign: "center",
                }}
              >
                Quick Facts
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    background: "white",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateX(5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                >
                  <span style={{ fontSize: "1.5rem" }}>🎓</span>
                  <span style={{ color: "#495057" }}>
                    ICT-Business Analysis Graduate (DUT)
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    background: "white",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateX(5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                >
                  <span style={{ fontSize: "1.5rem" }}>📍</span>
                  <span style={{ color: "#495057" }}>
                    Ezembeni Area, Ceza, KZN
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    background: "white",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateX(5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                >
                  <span style={{ fontSize: "1.5rem" }}>💼</span>
                  <span style={{ color: "#495057" }}>Software Developer</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    background: "white",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateX(5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                >
                  <span style={{ fontSize: "1.5rem" }}>�</span>
                  <span style={{ color: "#495057" }}>064 958 1777</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    background: "white",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateX(5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                >
                  <span style={{ fontSize: "1.5rem" }}>🌍</span>
                  <span style={{ color: "#495057" }}>
                    IsiZulu & English Speaker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#f8f9fa",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "3rem",
              color: "#212529",
              textAlign: "center",
            }}
          >
            Technical Skills
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "15px",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "2.5rem" }}>{skill.icon}</span>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#212529",
                      margin: 0,
                    }}
                  >
                    {skill.name}
                  </h3>
                </div>

                <div
                  style={{
                    height: "8px",
                    background: "#e9ecef",
                    borderRadius: "4px",
                    overflow: "hidden",
                    marginBottom: "0.8rem",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      background: "linear-gradient(90deg, #212529, #495057)",
                      borderRadius: "4px",
                      width: `${skill.level}%`,
                      transition: "width 1.5s ease-in-out",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#6c757d",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                  }}
                >
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Quote Section */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#212529",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <blockquote
            style={{
              fontSize: "1.5rem",
              fontStyle: "italic",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}
          >
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <cite
            style={{
              fontSize: "1.1rem",
              opacity: 0.8,
            }}
          >
            – Cory House
          </cite>
        </div>
      </section>

      <Footer />

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          .hero-avatar {
            width: 150px !important;
            height: 150px !important;
            fontSize: 4rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
