import "../Styles/HomeComponent.css";
import "../App.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const NavBar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const links = document.querySelectorAll(".links");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        const nav = document.querySelector(".header_bar nav");
        nav.classList.remove("openNav");
      });
    });
  }, []);

  const handleClickNav = () => {
    const nav = document.querySelector(".header_bar nav");
    nav.classList.toggle("openNav");
    // Toggle the navigation menu
  };

  window.addEventListener("click", (e) => {
    if (e.target === document.querySelector(".header_bar nav")) {
      document.querySelector(".header_bar nav").classList.remove("openNav");
    }
  });

  // Close the menu when clicking outside

  return (
    <>
      <header className="header_bar">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          onClick={() => navigate('/')}
        >
          <div>JL</div>
          <div>HE</div>
        </motion.h1>

        <motion.nav
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }} // Dynamically add the "openNav" class
        >
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/About" className="links">
            About
          </Link>
          <Link to="/Services" className="links">
            Services
          </Link>
          <Link to="/Contact" className="links">
            Contact
          </Link>
          <Link to="/Contact" className="links">
            Get Started <i className="fas fa-arrow-right"></i>
          </Link>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
          onClick={handleClickNav}
          className="sidenav_icon"
        >
          <i className="fas fa-bars"></i>
        </motion.span>
      </header>
    </>
  );
};

export default NavBar;
