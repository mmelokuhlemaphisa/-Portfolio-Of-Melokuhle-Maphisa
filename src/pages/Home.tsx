import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillsCategory {
  [key: string]: Skill[];
}



export default function Home() {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const words: string[] = [
    "Full-Stack Developer",
    "Problem Solver",
    "UI/UX Enthusiast",
    "Creative Thinker",
    "Tech Innovator",
  ];

  const skills: SkillsCategory = {
    frontend: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 88, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "HTML/CSS", level: 95, icon: "🎨" },
      { name: "Bootstrap", level: 85, icon: "🌊" },
    ],
    backend: [
      { name: "Node.js", level: 82, icon: "🟢" },
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "json-server", level: 80, icon: "💾" }
    ],
    tools: [
      { name: "Git/GitHub", level: 88, icon: "📚" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Figma", level: 75, icon: "🎯" },
      { name: "Postman", level: 80, icon: "📬" },
    
    ],
  };


  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      setTimeout(typeEffect, isDeleting ? 100 : 150);
    };

    const timer = setTimeout(typeEffect, 200);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, words]);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 15px 40px rgba(66, 68, 78, 0.6)";
  };

  const handleButtonOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.4)";
  };

  const handleOutlineButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "#667eea";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.transform = "translateY(-3px)";
  };

  const handleOutlineButtonOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "#667eea";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(-5px)";
  };

  const handleCardOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

 const handleResumeButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.3)";
  };

  const handleResumeButtonOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
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
        overflowX: "hidden",
      }}
    >
      <NavBar />

      <main
        style={{
          flex: 1,
          padding: "0",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          }}
        >
          {/* Background Elements */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              width: "60px",
              height: "60px",
              background: "linear-gradient(45deg, white, black)",
              borderRadius: "50%",
              opacity: 0.1,
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
              background: "linear-gradient(45deg, #f093fb, #f5576c)",
              borderRadius: "50%",
              opacity: 0.1,
              animation: "float 4s ease-in-out infinite 1s",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "30%",
              left: "20%",
              width: "80px",
              height: "80px",
              background: "linear-gradient(45deg, #4facfe, #00f2fe)",
              borderRadius: "20%",
              transform: "rotate(45deg)",
              opacity: 0.1,
              animation: "float 8s ease-in-out infinite 0.5s",
            }}
          />

          {/* Hero Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "2rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                margin: "0 auto 2rem",
                background: "linear-gradient(135deg, white 0%, black 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
                border: "4px solid white",
                animation: "bounce 2s ease-in-out infinite",
              }}
            >
              MM
            </div>

            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
              }}
            >
              Melokuhle Maphisa
            </h1>

            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                marginBottom: "2rem",
                color: "#444",
                minHeight: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <span>I'm a</span>
              <span
                style={{
                  color: "#667eea",
                  fontWeight: "700",
                  borderRight: "2px solid #667eea",
                  paddingRight: "4px",
                  minWidth: "280px",
                  textAlign: "left",
                }}
              >
                {displayText}
              </span>
            </div>

            <p
              style={{
                fontSize: "1.25rem",
                color: "#666",
                marginBottom: "3rem",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              Passionate software developer crafting digital experiences that
              blend beautiful design with cutting-edge functionality. Let's
              build something amazing together.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "4rem",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "14px 32px",
                  background:
                    "linear-gradient(135deg, white 0%, black 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                }}
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonOut}
              >
                View My Work
              </button>

              <button
                style={{
                  padding: "14px 32px",
                  background: "transparent",
                  color: "#667eea",
                  border: "2px solid #667eea",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={handleOutlineButtonHover}
                onMouseOut={handleOutlineButtonOut}
              >
                Let's Connect
              </button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "4rem",
                flexWrap: "wrap",
                padding: "2rem",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "20px",
                maxWidth: "800px",
                margin: "0 auto",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "black",
                    marginBottom: "0.5rem",
                  }}
                >
                  7+
                </div>
                <div style={{ color: "#666", fontWeight: "500" }}>
                  Projects Completed
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "black",
                    marginBottom: "0.5rem",
                  }}
                >
                  5+
                </div>
                <div style={{ color: "#666", fontWeight: "500" }}>
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Technologies Section */}
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
                color: "#333",
                textAlign: "center",
              }}
            >
              Skills & Technologies
            </h2>

            <div
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                marginBottom: "3rem",
                flexWrap: "wrap",
              }}
            >
              {Object.keys(skills).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "12px 24px",
                    background:
                      activeTab === tab
                        ? "linear-gradient(135deg, white 0%, black 100%)"
                        : "transparent",
                    color: activeTab === tab ? "white" : "#667eea",
                    border: `2px solid #667eea`,
                    borderRadius: "25px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textTransform: "capitalize",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              {skills[activeTab].map((skill: Skill, index: number) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "15px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={handleCardHover}
                  onMouseOut={handleCardOut}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{skill.icon}</span>
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
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
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        background:
                          "linear-gradient(135deg, grey 0%, black 100%)",
                        borderRadius: "4px",
                        width: `${skill.level}%`,
                        transition: "width 1s ease-in-out",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "0.5rem",
                      color: "#666",
                      fontSize: "0.9rem",
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

      
        {/* About Section */}
        <section
          style={{
            padding: "6rem 2rem",
            background: "linear-gradient(135deg, grey 0%, black 100%)",
            color: "white",
          }}
        >
          <div
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "2rem",
              }}
            >
              About Me
            </h2>
            <div
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "3rem",
                opacity: 0.9,
              }}
            >
              <p>
                I'm a passionate software developer with  creating web applications that solve real-world
                problems. I specialize in modern JavaScript frameworks and love
                working on both frontend and backend development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying updated with the latest industry trends.
              </p>
            </div>
            <button
              style={{
                padding: "14px 32px",
                background: "white",
                color: "#667eea",
                border: "none",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              onMouseOver={handleResumeButtonHover}
              onMouseOut={handleResumeButtonOut}
            >
              Download Resume
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

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem !important;
            }
            
            .hero-subtitle {
              fontSize: 1.2rem !important;
            }
            
            .stats-container {
              gap: 2rem !important;
            }
          }
        `}</style>
      </main>

      <Footer />
    </div>
  );
}
