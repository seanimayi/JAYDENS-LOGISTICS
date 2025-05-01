import "../Styles/AboutComponent.css";
import { useState, useEffect } from "react";
const AboutNum = () => {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]); // Initial numbers

  useEffect(() => {
    const targets = [150, 300, 450, 150]; // Target numbers
    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 35; // Interval for updating the numbers

    targets.forEach((target, index) => {
      let current = 0;
      const increment = target / (duration / interval);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setNumbers((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, interval);
    });
  }, []);
  return (
    <>
      <div className="aboutnum_container">
        <div className="aboutnum_content">
          <div className="aboutnum_numbers">
            <div className="aboutnum_number">
              <h2>{numbers[0]}+</h2>
              <p>Clients Served</p>
            </div>
            <div className="aboutnum_number">
              <h2>{numbers[1]}+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="aboutnum_number">
              <h2>{numbers[2]}+</h2>
              <p>Dedicated Professionals</p>
            </div>
            <div className="aboutnum_number">
              <h2>{numbers[3]}+</h2>
              <p>Stock Market</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNum;
