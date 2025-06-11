import "../Styles/HomeComponent.css";
import "../App.css";
import { Link, useNavigate} from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="footer_content">
          <div className="footer_display_text">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              onClick={() => navigate('/')}
            >
              JLHE
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Stay Connected
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Empowering Businesses, Building Futures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="footer_inp"
            >
              <input type="text" placeholder="Enter Your Name" />
              <button>Stay Tuned!</button>
            </motion.div>
          </div>
          <div className="footer_display_text">
            <motion.span
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
            >
              The Future Of The People's Mind
            </motion.span>
            <div className="footer_nav_container">
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="footer_nav_content"
              >
                <h2>Company</h2>
                <nav>
                  <Link to="/" className="footer_links">
                    Home
                  </Link>
                  <Link to="/About" className="footer_links">
                    About
                  </Link>
                  <Link to="/Contact" className="footer_links">
                    Contact
                  </Link>
                  <Link to="/Services" className="footer_links">
                    Services
                  </Link>
                </nav>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="footer_nav_content"
              >
                <h2>Support</h2>
                <nav>
                  <Link to="/FAQ" className="footer_links">
                    FAQ
                  </Link>
                  <Link to="/Contact" className="footer_links">
                    Customer Support
                  </Link>
                </nav>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: false }}
                className="footer_nav_content"
              >
                <h2>Services</h2>
                <nav>
                  <Link to="/HR" className="footer_links">
                    Human Resources
                  </Link>
                  <Link to="/Logistics" className="footer_links">
                    Logistics
                  </Link>
                  <Link to="/EducationalServices" className="footer_links">
                    Educational Services
                  </Link>
                </nav>
              </motion.div>
            </div>
          </div>
        </div>
        <p className="copy_right">&copy; Copyright. All Right Reserved 2025.</p>
      </motion.footer>
    </>
  );
};

export default Footer;
