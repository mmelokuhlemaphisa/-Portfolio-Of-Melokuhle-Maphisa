
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";

export default function Contact() {
  return (
    <div>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <NavBar />
        <main
          style={{ flex: 1, padding: "2rem 0", textAlign: "center" }}
        ></main>
        <Footer />
      </div>
    </div>
  );
}
