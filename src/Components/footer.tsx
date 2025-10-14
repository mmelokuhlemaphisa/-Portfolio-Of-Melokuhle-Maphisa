
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        background: "#222",
        color: "#fff",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <p>
        {" "}
        &copy; {new Date().getFullYear()} Melokuhle Maphisa. All rights
        reserved.
      </p>

<div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
      <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
        Contact
      </Link>

      <Link to="/privacy" style={{ color: "#fff", textDecoration: "none" }}>
       Privacy
      </Link>
</div>

    </footer>
  );
}
