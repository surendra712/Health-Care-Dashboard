import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-heading">General</h2>
      <ul className="sidebar-links">
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
        <li>
          <a href="#">Calendar</a>
        </li>
        <li>
          <a href="#">Appointments</a>
        </li>
        <li>
          <a href="#">Statistics</a>
        </li>
        <li>
          <a href="#">Tests</a>
        </li>
        <li>
          <a href="#">Chat</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Setting</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;