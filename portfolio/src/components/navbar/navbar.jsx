import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { LinkedinOutlined, GithubOutlined, MediumOutlined, CodeOutlined } from '@ant-design/icons';
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState('dark');

  const handleDarkMode = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light-theme');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light-theme');
      setTheme('dark');
    }
  };

  return (
    <div className='nav'>
      <div className='nav-left'>
        {theme==='dark'?(<span className='icons'>
          <span className='iconbox'><LinkedinOutlined style={{ color: '#dccfb9', fontSize: 20 }} /></span>
          <span className='iconbox'><GithubOutlined style={{ color: '#dccfb9', fontSize: 20 }} /></span>
          <span className='iconbox'><MediumOutlined style={{ color: '#dccfb9', fontSize: 20 }} /></span>
          <span className='iconbox'><CodeOutlined style={{ color: '#dccfb9', fontSize: 20 }} /></span>
        </span>):(<span className='icons'>
          <span className='iconbox'><LinkedinOutlined style={{ color: '#aa936b', fontSize: 20 }} /></span>
          <span className='iconbox'><GithubOutlined style={{ color: '#aa936b', fontSize: 20 }} /></span>
          <span className='iconbox'><MediumOutlined style={{ color: '#aa936b', fontSize: 20 }} /></span>
          <span className='iconbox'><CodeOutlined style={{ color: '#aa936b', fontSize: 20 }} /></span>
        </span>)}
        
      </div>
      <div className='nav-right'>
        <ul className='links'>
          <li>
            <Link smooth to="#Hero" className='nav-item'>
              Home
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
      </div>
    </div>
  );
};

export default Navbar;
