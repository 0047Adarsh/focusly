import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaTasks, FaChartBar, FaCog, FaBars } from "react-icons/fa";

function Sidebar({ collapsed, toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="logo">{collapsed ? "F" : "Focusly"}</div>
      <button className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <ul>
        <li onClick={() => navigate("/dashboard")}>
          <FaUserCircle />
          {!collapsed && <span>Profile</span>}
        </li>
        <li onClick={() => navigate("/tasks")}>
          <FaTasks />
          {!collapsed && <span>Tasks</span>}
        </li>
        <li onClick={() => navigate("/analytics")}>
          <FaChartBar />
          {!collapsed && <span>Analytics</span>}
        </li>
        <li onClick={() => navigate("/settings")}>
          <FaCog />
          {!collapsed && <span>Settings</span>}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
