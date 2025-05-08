import "../../App.css";
import "../../Styles/Pages.css";
import "../../Styles/Logistics.css";
import { motion } from "framer-motion";
const Logistics2 = () => {
  return (
    <>
      <div className="logis_section2">
        <div className="logis_section2_content">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            Discover The Full <i>Range</i> Of <i>Services</i> Offered By{" "}
            <i>Shipping</i>.
          </motion.h1>
          <motion.div className="logis_gallery">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="logis_gallery_content"
            >
              <p>“Secure. Tracked. Delivered.”</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="logis_gallery_content"
            >
              <p>Global Reach, On-Time Always.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="logis_gallery_content"
            >
              <p>Fast, Reliable Road Delivery</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Logistics2;
