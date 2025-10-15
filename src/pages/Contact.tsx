import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "16px",
            padding: "3rem 2.5rem",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            border: "1px solid #f0f0f0",
          }}
        >
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1
              style={{
                color: "#1a1a1a",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontWeight: "700",
                letterSpacing: "-0.5px",
              }}
            >
              Get In Touch
            </h1>
            <p
              style={{
                color: "#666",
                marginBottom: "0",
                fontSize: "1.1rem",
                lineHeight: "1.6",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Information */}
          <div
            style={{
              marginBottom: "3rem",
              padding: "2rem",
              background: "#fafafa",
              borderRadius: "12px",
              border: "1px solid #f0f0f0",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                textAlign: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#888",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Email
                </div>
                <div
                  style={{
                    color: "#1a1a1a",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  melokuhlemaphisa99@gmail.com
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#888",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Phone
                </div>
                <div
                  style={{
                    color: "#1a1a1a",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  +27 64 958 1777
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#888",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Location
                </div>
                <div
                  style={{
                    color: "#1a1a1a",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  Ezembeni Area, Ceza
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid #f0f0f0",
              }}
            >
              <a
                href="https://github.com/mmelokuhlemaphisa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1a1a1a",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  padding: "0.75rem 1.5rem",
                  border: "2px solid #1a1a1a",
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                  background: "transparent",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#1a1a1a";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/melokuhle-maphisa-04aa4b348/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1a1a1a",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  padding: "0.75rem 1.5rem",
                  border: "2px solid #1a1a1a",
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                  background: "transparent",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#1a1a1a";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "8px",
                  border: "2px solid #f0f0f0",
                  fontSize: "1rem",
                  background: "#fafafa",
                  color: "#1a1a1a",
                  width: "100%",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a1a1a";
                  e.target.style.background = "#ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#f0f0f0";
                  e.target.style.background = "#fafafa";
                }}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "8px",
                  border: "2px solid #f0f0f0",
                  fontSize: "1rem",
                  background: "#fafafa",
                  color: "#1a1a1a",
                  width: "100%",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a1a1a";
                  e.target.style.background = "#ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#f0f0f0";
                  e.target.style.background = "#fafafa";
                }}
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "8px",
                  border: "2px solid #f0f0f0",
                  fontSize: "1rem",
                  background: "#fafafa",
                  color: "#1a1a1a",
                  width: "100%",
                  resize: "vertical",
                  transition: "all 0.3s ease",
                  outline: "none",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a1a1a";
                  e.target.style.background = "#ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#f0f0f0";
                  e.target.style.background = "#fafafa";
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: "#1a1a1a",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "1.2rem 2rem",
                fontWeight: "600",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                marginTop: "0.5rem",
                letterSpacing: "0.5px",
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
              Send Message
            </button>
          </form>

          {/* Additional Info */}
          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              background: "#fafafa",
              borderRadius: "8px",
              border: "1px solid #f0f0f0",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#666",
                margin: "0",
                fontSize: "0.95rem",
                lineHeight: "1.5",
              }}
            >
              💼 <strong>Available for:</strong> Freelance projects,
              collaborations, and full-time opportunities
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
