import React, { useState } from "react";
import { FaUserCircle, FaTasks, FaChartBar, FaCog, FaBars, FaBell } from "react-icons/fa"; // Hamburger and other icons
import "../styles/Dashboard.css";

function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`dashboard ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <div className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="logo">
          {sidebarCollapsed ? "F" : "Focusly"}
        </div>
        <button className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </button>
        {/* <ul>
          <li><FaUserCircle /> Profile</li>
          <li><FaTasks /> Tasks</li>
          <li><FaChartBar /> Analytics</li>
          <li><FaCog /> Settings</li>
        </ul> */}
        <ul>
        <li>
          <FaUserCircle />
          {!sidebarCollapsed && <span>Profile</span>}
        </li>
        <li>
          <FaTasks />
          {!sidebarCollapsed && <span>Tasks</span>}
        </li>
        <li>
          <FaChartBar />
          {!sidebarCollapsed && <span>Analytics</span>}
        </li>
        <li>
          <FaCog />
          {!sidebarCollapsed && <span>Settings</span>}
        </li>
      </ul>

      </div>

      <div className="main-content">
        <header className="header">
          <div className="header-left">
            <h1>Welcome back, User</h1>
          </div>
          <div className="header-right">
            <button>Logout</button>
            <div className="profile">
              <FaBell />
              <img src="https://via.placeholder.com/35" alt="profile" />
            </div>
          </div>
        </header>

        <div className="content">
          <div className="card">
            <h2>Your Tasks</h2>
            <p>You have 5 tasks pending.</p>
          </div>
          <div className="card">
            <h2>Recent Activity</h2>
            <p>Completed 2 tasks today!</p>
          </div>
          <div className="card">
            <h2>Statistics</h2>
            <p>Keep track of your productivity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
