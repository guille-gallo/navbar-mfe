import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import './sidebar.component.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  useEffect(() => {
    const linkitems = document.querySelectorAll('.link-item');
    const links = document.querySelectorAll('.link');

    linkitems.forEach(item => {
      if (isOpen) {
        item.classList.add('enabled');
      } else {
        item.classList.remove('enabled');
      }
    });

    links.forEach(link => {
      if (isOpen) {
        link.classList.add('enabled');
      } else {
        link.classList.remove('enabled');
      }
    });
  }, [isOpen]);

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className="sidebar-nav">
          <li className="link-item" onClick={() => handleLinkClick("/")}>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="link-item" onClick={() => handleLinkClick("/root-mfe/hacker-news")}>
            <Link to="/root-mfe/hacker-news" className="link">
              News Reader
            </Link>
          </li>
          <li className="link-item" onClick={() => handleLinkClick("/root-mfe/books-store")}>
            <Link to="/root-mfe/books-store" className="link">
              Books Store
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
