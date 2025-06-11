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
      <div className="fixed left-0 top-0 w-[20%] h-full overflow-x-hidden">
        <div className="flex flex-start items-start justify-start flex-col gap-2 p-[1.5rem]">
          <h1 className="text-white font-bold text-3xl">JLHE</h1>
          <nav className="flex flex-col items-start justify-start gap-5 mt-[2rem] text-white w-full">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdOutlineDashboard size={20} />
              Dashboard
            </NavLink>
            <NavLink
              to="post"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdPostAdd size={20} />
              Post
            </NavLink>
            <NavLink
              to="admin"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdAdminPanelSettings size={20} />
              Admin
            </NavLink>
            <NavLink
              to="employees"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdSupervisedUserCircle size={20} />
              Employees
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdAccountBox size={20} />
              Profile
            </NavLink>
            <NavLink
              to="settings"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdOutlineSettings size={20} />
              Settings
            </NavLink>
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <MdLogout size={20} />
              Logout
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
