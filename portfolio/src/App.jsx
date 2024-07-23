import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Contact from './components/Contacts/contact.jsx';

import Par2 from './components/parr/Par2.jsx';

import Project from './components/Projects/Project.jsx';
import Skills from './components/Skills/Skills.jsx';
import Blogs from './components/blogs/Blogs.jsx'
import Endorsements from './components/endorsements/Endorsements.jsx';
import './App.scss';


const App = () => {
  
  return (
    <div className='App'>
          <BrowserRouter>
      <div className="container-xl"><Navbar /></div>
      <div className="sec" id="Hero"><Hero /></div>
      <div className="sec" id="Hero2"><Endorsements /></div>
      <div className="sec" id="Skills"><Par2 name={"skills"}/></div>
      <div className="sec" id="Skills2"><Skills /></div>
      <div className="sec" id="Projects"><Par2 name={"projects"}/></div>
      <div className="sec" id="Projects2"><Project /></div>
      <div className="sec" id="blogs"><Par2 name={"blogs"}/></div>
      <div className="sec" id="blogs2"><Blogs /></div>
      <div className="sec" id="Contact"><Contact /></div>
    </BrowserRouter>
    </div>

  );
};

export default App;
