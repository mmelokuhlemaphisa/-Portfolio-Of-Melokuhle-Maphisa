
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <main style={{ flex: 1, padding: "2rem 0", textAlign: "center" }}>
        <h1>Welcome to Melokuhle Maphisa's Portfolio</h1>
        <p>This is the home page of my portfolio website.</p>
      </main>
      <Footer />
    </div>
  );
}
