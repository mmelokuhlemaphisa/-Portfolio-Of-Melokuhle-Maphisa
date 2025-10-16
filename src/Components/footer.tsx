import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 1rem",
        background: "#1a1a1a",
        color: "white",
        textAlign: "center",
        marginTop: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "1rem",
        flexWrap: "wrap",
        gap: "1.5rem",
        borderTop: "1px solid #333",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "0.95rem",
          color: "#ccc",
          fontWeight: "400",
        }}
      >
        &copy; {new Date().getFullYear()} Melokuhle Maphisa. All rights
        reserved.
      </p>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          to="/contact"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "0.95rem",
            transition: "color 0.3s ease",
            padding: "0.5rem 0",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#f0f0f0";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#fff";
          }}
        >
          Contact
        </Link>
        <Link
          to="/privacy"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "0.95rem",
            transition: "color 0.3s ease",
            padding: "0.5rem 0",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#f0f0f0";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#fff";
          }}
        >
          Privacy
        </Link>
        <a
          href="https://github.com/mmelokuhlemaphisa"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "0.95rem",
            transition: "color 0.3s ease",
            padding: "0.5rem 0",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#f0f0f0";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#fff";
          }}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
