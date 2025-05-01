import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./HomePage/Navbar"; // Import NavBar here
import Home from "./HomePage/Home";
import About from "./AboutPage/About"; // Add this import
import Contact from "./ContactPage/Contact"; // Add this import
import Services from "./ServicesPage/Services"; // Add this import
import "./App.css";

function App() {
  return (
    <Router>
          <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found.</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
