import "../../App.css";
import "../../Styles/ES.css";
import { motion } from "framer-motion";

const Educationalcomponent2 = () => {
  return (
    <div className="educational_section_container">
      <motion.div
        initial={{opacity: 0, y: 80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{once: false}}
        className="educational_section_content"
      >
        <div>
          <h2>Programs</h2>
          <p>
            Based on research unified educational services context, the three
            most impactful services to emphasize—especially for attracting
            clients, partners, or funding—are:
          </p>
        </div>
        <div>
          <i className="fas fa-chalkboard-teacher"></i>
          <h2>Training Programs</h2>
          <p>
            High market demand, measurable outcomes, and great for partnerships
            with institutions or companies.
          </p>
        </div>
        <div>
          <i className="fas fa-user-graduate"></i>
          <h2>Higher Education Admissions</h2>
          <p>
            High trust factor, long-term client relationships, and strong appeal
            for middle-class and ambitious families
          </p>
        </div>
        <div>
          <i className="fas fa-award"></i>
          <h2>Scholarship Search</h2>
          <p>
            {" "}
            Strong emotional and social value; good for brand reputation and
            attracting funding or donor partnerships
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Educationalcomponent2;
