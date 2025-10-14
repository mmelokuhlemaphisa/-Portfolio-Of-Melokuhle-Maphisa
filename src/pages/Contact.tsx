
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";

export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        color: "#222",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <NavBar />
      <main style={{ flex: 1, padding: "2.5rem 0", textAlign: "center" }}>
        <div
          style={{
            maxWidth: 500,
            margin: "0 auto",
            background: "#f7f7f7",
            borderRadius: 12,
            padding: "2.5rem 2rem",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ color: "#111", marginBottom: "1.2rem" }}>Contact Me</h1>
          <p
            style={{
              color: "#555",
              marginBottom: "1.5rem",
              fontSize: "1.08rem",
            }}
          >
            Have a question, want to collaborate, or just want to say hi? Fill
            out the form below and I'll get back to you as soon as possible. You
            can also reach me directly using the contact details or connect with
            me on social media!
          </p>
          <div
            style={{ marginBottom: "2rem", color: "#333", fontSize: "1.05rem" }}
          >
            <div style={{ marginBottom: "0.7rem" }}>
              <b>Email:</b> melokuhlemaphisa99@gmail.com
            </div>
            <div style={{ marginBottom: "0.7rem" }}>
              <b>Phone:</b> +27 64 958 1777
            </div>
            <div style={{ marginBottom: "0.7rem" }}>
              <b>Location:</b> Ezembeni Area, Ceza, 3866
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.2rem",
                marginTop: "1rem",
              }}
            >
              <a
                href="https://github.com/mmelokuhlemaphisa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "color 0.2s, textDecoration 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#007bff";
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#222";
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/melokuhle-maphisa-04aa4b348/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "color 0.2s, textDecoration 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#007bff";
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#222";
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: "0.8rem",
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: "0.8rem",
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              style={{
                padding: "0.8rem",
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#222",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "0.9rem 0",
                fontWeight: "bold",
                fontSize: "1.1rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#444";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#222";
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

