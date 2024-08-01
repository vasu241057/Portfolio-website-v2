import "./index.css";
import "./App.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div>
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
