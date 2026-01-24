import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import JavaService from "./pages/services/JavaService";
import PythonService from "./pages/services/PythonService";
import DevOpsService from "./pages/services/DevOpsService";
import TestingService from "./pages/services/TestingService";
import Ai from "./pages/services/AiService";
import WhoWeAre from "./pages/about/Weare";
import Whatwedo from "./pages/about/Whatwedo";
import Ourexperience from "./pages/about/Ourexperience";
import Ourmission from "./pages/about/Ourmission";
import Ourvalues from "./pages/about/Ourvalues";
import Ourvision from "./pages/about/Ourvision";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/what-we-do" element={<Whatwedo />} />
        <Route path="/about/Our-mission" element={<Ourmission />} />
        <Route path="/about/Our-values" element={<Ourvalues />} />
        <Route path="/about/Our-experience" element={<Ourexperience />} />
        <Route path="/about/Our-vision" element={<Ourvision />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/java" element={<JavaService />} />
        <Route path="/services/python" element={<PythonService />} />
        <Route path="/services/devops" element={<DevOpsService />} />
        <Route path="/services/testing" element={<TestingService />} />
        <Route path="/services/artifical" element={<Ai />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
