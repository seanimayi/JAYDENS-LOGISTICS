import "../../App.css";
import "../../Styles/Pages.css";
import "../../Styles/Logistics.css";
import { motion } from "framer-motion";
import Pic from "../../assets/shipping2.jpg";
import { useNavigate } from "react-router-dom";
const LogisticsSection3 = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="logistics3_container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="logistics3_content"
        >
          <div className="logistics3_text">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Start Shipping, We Are Available.
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              onClick={() => navigate('/Contact')}
            >
              Start Shipping
            </motion.button>
          </div>
          <img src={Pic} alt="Shipping" />
        </motion.div>
      </div>
    </>
  );
};

export default LogisticsSection3;
