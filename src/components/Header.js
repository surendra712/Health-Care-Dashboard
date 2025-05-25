import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">Healthcare.</div>
        <div className="header-search">
          <input type="search" placeholder="Search for anything..." />
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-notifications">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </div>
        
        <div className="header-user-profile">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" />
          <span>John Doe</span>
        </div>
        
        <button className="header-add-button">+</button>
      </div>
    </header>
  );
}

export default Header;