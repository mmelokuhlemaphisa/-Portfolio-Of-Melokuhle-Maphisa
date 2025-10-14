
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{
        padding: "1rem",
        background: "#222",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div></div>

      <div>
        <Link
          to="/"
          style={{ color: "#fff", marginRight: "1rem", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{ color: "#fff", marginRight: "1rem", textDecoration: "none" }}
        >
          About
        </Link>

        <Link
          to="/projects"
          style={{ color: "#fff", marginRight: "1rem", textDecoration: "none" }}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
