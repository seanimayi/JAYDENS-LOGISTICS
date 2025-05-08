import "../Styles/HomeComponent.css";
import "../App.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Section4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="section4_container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="section4_container_content"
        >
          <span>
            Contact us to discuss how our services can support your business and
            streamline your logistics needs.
          </span>
          <button onClick={() => navigate("/Contact")}>
            Contact Us <i className="fas fa-arrow-right"></i>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Section4;
