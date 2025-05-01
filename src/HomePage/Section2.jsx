import "../Styles/HomeComponent.css";
import "../App.css";
import shakehands from "../assets/Shakehands.jpeg";
import { motion } from "framer-motion";
const Section2 = () => {
  return (
    <>
      <div className="section2_container">
        <div className="section2_content">
          <div className="section_column">
            <div className="section_column_text">
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                WHO WE ARE ?
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9885 }}
                viewport={{ once: false }}
              >
                <i>AT</i> <i>JLHE</i>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false }}
              >
                At Jaydens's Logistics, Human Resources, and Educational
                Services, we are committed to supporting businesses and
                individuals through tailored solutions that drive results.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}
                viewport={{ once: false }}
              >
                Our Human Resources services focus on building stronger
                organizations by connecting them with top-tier talent and
                streamlining workforce management. From recruitment and staffing
                to employee development and compliance, we help businesses
                create productive, people-centered workplaces.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.6 }}
                viewport={{ once: false }}
              >
                In our educational services branch, we are passionate about
                unlocking potential through quality training and learning
                opportunities. We design programs that equip individuals with
                the knowledge and skills needed for today’s job market—bridging
                gaps in professional development, leadership, and vocational
                training.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="section_book"
            >
              <div className="section_book_content">
                <img src={shakehands} alt="shake"></img>
                <p>
                  {" "}
                  At Jayden's Logistics, we believe in building a brighter
                  future by empowering businesses and individuals to achieve
                  their full potential.
                </p>

                <div className="section_book_icon_container">
                  <div className="section_book_icon">
                    <i className="fas fa-truck"></i>
                    <i className="fas fa-user-tie"></i>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                </div>

                <button className="section_book_button">Get Started</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
