import { NavLink } from "react-router-dom";
import {
  MdAccountBox,
  MdAdminPanelSettings,
  MdLogout,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdPostAdd,
  MdSupervisedUserCircle,
} from "react-icons/md";
const SideBar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 md:w-[17%] w-[15%] h-full overflow-x-hidden">
        <div className="flex flex-start items-start justify-start flex-col gap-2 md:p-[1.5rem]">
          <h1 className="text-white font-bold md:text-3xl text-2xl text-center w-full md:mt-0 mt-5 md:text-start">JLHE</h1>
          <nav className="flex flex-col md:items-start items-center justify-center md:justify-start md:gap-5 gap-8 mt-[2rem] text-white w-full">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdOutlineDashboard size={20} />
              <div className="md:block hidden">Dashboard</div>
            </NavLink>
            <NavLink
              to="post"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdPostAdd size={20} />
              <div className="md:block hidden">Post</div>
            </NavLink>
            <NavLink
              to="admin"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdAdminPanelSettings size={20} />
              <div className="md:block hidden">Admin</div>
            </NavLink>
            <NavLink
              to="employees"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdSupervisedUserCircle size={20} />
              <div className="md:block hidden">Employees</div>
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdAccountBox size={20} />
              <div className="md:block hidden">Profiles</div>
            </NavLink>
            <NavLink
              to="settings"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdOutlineSettings size={20} />
              <div className="md:block hidden">Settings</div>
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdLogout size={20} />
              <div className="md:block hidden">Logout</div>
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
