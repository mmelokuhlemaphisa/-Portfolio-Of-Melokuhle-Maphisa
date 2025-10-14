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
        background: "#fff",
        color: "#222",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <NavBar />
      <main style={{ flex: 1, padding: "2.5rem 0", textAlign: "center" }}>
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            background: "#f7f7f7",
            borderRadius: 12,
            padding: "2.5rem 2rem",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ color: "#111", marginBottom: "1.5rem" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#444", marginBottom: "1.5rem" }}>
            This Privacy Policy describes how your information is collected,
            used, and shared when you visit or interact with the Portfolio
            website.
          </p>
          <div style={{ textAlign: "left", margin: "0 auto", color: "#222" }}>
            <h2>Information Collected</h2>
            <p>
              We only collect personal information you voluntarily provide
              through the Contact Us form. This includes:
            </p>
            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message</li>
            </ul>
            <h2>Purpose of Collection</h2>
            <p>
              We collect your data to respond to your enquiries and improve
              communication. Your data will not be used for marketing or shared
              with third parties.
            </p>
            <h2>Data Storage</h2>
            <p>
              Submitted information is not stored in a database. If connected to
              an email system, your message may be temporarily stored in our
              inbox and deleted after 30 days.
            </p>
            <h2>Your Rights</h2>
            <p>
              You may request access to the personal data we have about you, ask
              for corrections, or request deletion of your data at any time by
              contacting us through the same form.
            </p>
            <h2>Security</h2>
            <p>
              All communication through our website is encrypted via HTTPS to
              protect your data during transmission.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this policy, please use the{" "}
              <Link to="/contact">Contact Us</Link> page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
