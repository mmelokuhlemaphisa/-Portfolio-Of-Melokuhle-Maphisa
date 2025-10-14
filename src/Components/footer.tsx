import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem 1rem 1rem 1rem",
        background: "black",
        color: "white",
        textAlign: "center",
        marginTop: "2rem",
        borderTop: "1px solid #eee",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "0.95rem",
          color: "white",
          marginLeft: "1.5rem",
        }}
      >
        &copy; {new Date().getFullYear()} Melokuhle Maphisa. All rights
        reserved.
      </p>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link
          to="/contact"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Contact
        </Link>
        <Link
          to="/privacy"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Privacy
        </Link>
        <a
          href="https://github.com/mmelokuhlemaphisa"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
