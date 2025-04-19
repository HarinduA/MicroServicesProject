import React, { useState, useEffect, useRef } from 'react';
import './dashboard.css';

const Header = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const sidenavRef = useRef(null);
  const headerRef = useRef(null);

  const toggleSideNav = () => setSideNavOpen(!isSideNavOpen);

  // Close side nav if clicked outside the side nav or header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidenavRef.current && 
        !sidenavRef.current.contains(event.target) && 
        headerRef.current && 
        !headerRef.current.contains(event.target)
      ) {
        setSideNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header" ref={headerRef}>
        <div className="header-left">
          <button className="sidenav-toggle" onClick={toggleSideNav}>
            &#9776; {/* Hamburger icon */}
          </button>
          <h2 className="header-brand">My Dashboard</h2>
        </div>
        <div className="header-right">
          <div className="user-info">
            <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
            <span className="username">John Doe</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className={`dashboard-body ${isSideNavOpen ? 'sidenav-open' : ''}`}>
        {/* SideNav */}
        <nav className={`dashboard-sidenav ${isSideNavOpen ? 'open' : ''}`} ref={sidenavRef}>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="dashboard-main">
          <h3>Welcome to your dashboard</h3>
          <p>Start building your awesome UI here!</p>
        </main>
      </div>
    </div>
  );
};

export default Header;
