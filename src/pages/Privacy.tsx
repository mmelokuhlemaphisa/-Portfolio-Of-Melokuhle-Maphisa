import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import { Link } from "react-router-dom";

export default function Privacy() {
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
            maxWidth: "800px",
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
              Privacy Policy
            </h1>
            <p
              style={{
                color: "#666",
                marginBottom: "0",
                fontSize: "1.1rem",
                lineHeight: "1.6",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              This Privacy Policy describes how your information is collected,
              used, and shared when you visit or interact with my portfolio
              website.
            </p>
          </div>

          {/* Policy Content */}
          <div
            style={{
              textAlign: "left",
              margin: "0 auto",
              color: "#1a1a1a",
              lineHeight: "1.7",
            }}
          >
            {/* Information Collected */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "0.5rem",
                }}
              >
                Information Collected
              </h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                I only collect personal information you voluntarily provide
                through the Contact form. This includes:
              </p>
              <ul
                style={{
                  color: "#666",
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>Your name</li>
                <li style={{ marginBottom: "0.5rem" }}>Your email address</li>
                <li style={{ marginBottom: "0.5rem" }}>Your message content</li>
              </ul>
            </section>

            {/* Purpose of Collection */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "0.5rem",
                }}
              >
                Purpose of Collection
              </h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                I collect your data solely to respond to your enquiries and
                improve communication. Your data will not be used for marketing
                purposes or shared with third parties without your explicit
                consent.
              </p>
            </section>

            {/* Data Storage */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "0.5rem",
                }}
              >
                Data Storage
              </h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                Submitted information is not stored in a database. If connected
                to an email system, your message may be temporarily stored in my
                inbox and deleted after 30 days or once your enquiry has been
                resolved.
              </p>
            </section>

            {/* Your Rights */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "0.5rem",
                }}
              >
                Your Rights
              </h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                You may request access to the personal data I have about you,
                ask for corrections, or request deletion of your data at any
                time by contacting me through the contact form.
              </p>
            </section>

            {/* Security */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "0.5rem",
                }}
              >
                Security
              </h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                All communication through this website is encrypted via HTTPS to
                protect your data during transmission. I implement appropriate
                technical measures to ensure the security of your personal
                information.
              </p>
            </section>

            {/* Cookies */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "0.5rem",
                }}
              >
                Cookies & Analytics
              </h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                This website does not use cookies or any tracking technologies.
                Your browsing experience is completely private and no personal
                data is collected through automated means.
              </p>
            </section>

            {/* Contact Information */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "0.5rem",
                }}
              >
                Contact Me
              </h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                If you have any questions about this Privacy Policy or how your
                data is handled, please don't hesitate to reach out through the{" "}
                <Link
                  to="/contact"
                  style={{
                    color: "#1a1a1a",
                    fontWeight: "600",
                    textDecoration: "none",
                    borderBottom: "2px solid #1a1a1a",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#666";
                    e.currentTarget.style.borderBottomColor = "#666";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#1a1a1a";
                    e.currentTarget.style.borderBottomColor = "#1a1a1a";
                  }}
                >
                  Contact page
                </Link>
                .
              </p>
            </section>

            {/* Policy Updates */}
            <section
              style={{
                padding: "1.5rem",
                background: "#fafafa",
                borderRadius: "8px",
                border: "1px solid #f0f0f0",
              }}
            >
              <h3
                style={{
                  color: "#1a1a1a",
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                }}
              >
                Policy Updates
              </h3>
              <p
                style={{
                  color: "#666",
                  margin: "0",
                  fontSize: "0.95rem",
                }}
              >
                This privacy policy may be updated from time to time to reflect
                changes in my practices or for other operational, legal, or
                regulatory reasons. The latest version will always be posted on
                this page.
              </p>
            </section>

            {/* Last Updated */}
            <div
              style={{
                textAlign: "center",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid #f0f0f0",
              }}
            >
              <p
                style={{
                  color: "#888",
                  margin: "0",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                }}
              >
                Last updated: July 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
