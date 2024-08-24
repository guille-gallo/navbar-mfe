
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './sidebar.component.scss'; // Assuming you put your styles in Sidebar.css

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="toggle-button" onClick={toggleSidebar}> ${isOpen ? '❌' :  '☰'}</button>
        <ul className="sidebar-nav">
            <li>
                <Link to="/" className="link">
                Home
                </Link>
            </li>
            <li>
                <Link to="root-mfe/hacker-news" className="link">
                News Reader
                </Link>
            </li>
            <li>
                <Link to="root-mfe/books-store" className="link">
                Books Store
                </Link>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
