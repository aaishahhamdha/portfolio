import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { LinkedinOutlined, GithubOutlined, MediumOutlined, CodeOutlined } from '@ant-design/icons';
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { MenuOutlined } from '@ant-design/icons'; 

const Navbar = () => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDarkMode = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light-theme');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light-theme');
      setTheme('dark');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav'>
      <div className='nav-left'>
        {theme === 'dark-theme' ? (
          <span className='icons'>
           <a href="http://www.linkedin.com/in/aaishah-hamdha/" target="_blank" rel="noopener noreferrer"> <span className='iconbox' ><LinkedinOutlined style={{ color: '#dccfb9', fontSize: 20 }} /></span></a>
           <a href="https://github.com/aaishahhamdha" target="_blank" rel="noopener noreferrer"><span className='iconbox'><GithubOutlined style={{ color: '#dccfb9', fontSize: 20 }} /></span></a>
           <a href="https://medium.com/@aaishamdha" target="_blank" rel="noopener noreferrer"><span className='iconbox'><MediumOutlined style={{ color: '#dccfb9', fontSize: 20 }} /></span></a>
           <a href="https://www.hackerrank.com/profile/aishahhamdha" target="_blank" rel="noopener noreferrer"><span className='iconbox'><CodeOutlined style={{ color: '#dccfb9', fontSize: 20 }} /></span></a>
          </span>
        ) : (
          <span className='icons'>
            <a href="http://www.linkedin.com/in/aaishah-hamdha/" target="_blank" rel="noopener noreferrer"> <span className='iconbox' ><LinkedinOutlined style={{ color: '#aa936b', fontSize: 20 }} /></span></a>
            <a href="https://github.com/aaishahhamdha" target="_blank" rel="noopener noreferrer"><span className='iconbox'><GithubOutlined style={{ color: '#aa936b', fontSize: 20 }} /></span></a>
            <a href="https://medium.com/@aaishamdha" target="_blank" rel="noopener noreferrer"><span className='iconbox'><MediumOutlined style={{ color: '#aa936b', fontSize: 20 }} /></span></a>
            <a href="https://www.hackerrank.com/profile/aishahhamdha" target="_blank" rel="noopener noreferrer"><span className='iconbox'><CodeOutlined style={{ color: '#aa936b', fontSize: 20 }} /></span></a>
          </span>
        )}
      </div>
      <div className='nav-right'>
        <ul className={`links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link smooth to="#Hero" className='nav-item'>
              About
            </Link>
          </li>
          <li>
            <Link smooth to="#Skills" className='nav-item'>
              Skills
            </Link>
          </li>
          <li>
            <Link smooth to="#Projects" className='nav-item'>
              Projects
            </Link>
          </li>
          <li>
            <Link smooth to="#blogs" className='nav-item'>
              Blogs
            </Link>
          </li>
          <li>
            <Link smooth to="#Contact" className='nav-item'>
              Contact
            </Link>
          </li>
          <img
            id='sun-moon'
            src={theme === 'dark' ? sun : moon}
            onClick={handleDarkMode}
          />
        </ul>
        <MenuOutlined className="hamburger" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
