import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import About from "./pages/About";
import NotFound from "./pages/404-page";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Privacy" element={<Privacy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
