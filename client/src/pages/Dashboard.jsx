import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // Import the Sidebar
import "../styles/Dashboard.css";
import { FaBell } from "react-icons/fa";

function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`dashboard ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />

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
