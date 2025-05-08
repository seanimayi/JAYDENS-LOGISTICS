import { NavLink } from "react-router-dom";
import "../App.css";
import "../Styles/Pages.css";
const Links = () => {
  return (
    <>
      <div className="services_links">
        <div className="service_links_content">
          <nav>
            <NavLink
              to="/Logistics"
              className={({ isActive }) => (isActive ? "active_link" : "")}
            >
              Logistics
            </NavLink>
            <NavLink
              to="/HR"
              className={({ isActive }) => (isActive ? "active_link" : "")}
            >
              HR Development
            </NavLink>
            <NavLink
              to="/EducationalServices"
              className={({ isActive }) => (isActive ? "active_link" : "")}
            >
              Educational Services
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Links;
