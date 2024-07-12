import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Contact from './components/Contacts/contact.jsx';
import Par1 from './components/parr/Par1.jsx';
import Par2 from './components/parr/Par2.jsx';
import Project from './components/Projects/Project.jsx';
import Skills from './components/Skills/Skills.jsx';
import './App.scss';


const App = () => {
  
  return (
    <div className='App'>
          <BrowserRouter>
      <div className="container-xl"><Navbar /></div>
      <div className="sec" id="Hero"><Hero /></div>
      <div className="sec" id="Skills"><Par1 /></div>
      <div className="sec" id="Skills2"><Skills /></div>
      <div className="sec" id="Projects"><Par2 /></div>
      <div className="sec" id="Projects2"><Project /></div>
      <div className="sec" id="Contact"><Contact /></div>
    </BrowserRouter>
    </div>

  );
};

export default App;
