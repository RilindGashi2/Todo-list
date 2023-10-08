import React, { useState } from 'react';
import './HeadMain.css'; // Import the CSS file

const HeadComponent = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav-links">
        <li onClick={() => handleTabChange('home')}>
          <button className={`bn632-hover ${activeTab === 'home' ? 'bn20' : ''}`}>
            Home
          </button>
        </li>
        <li onClick={() => handleTabChange('about')}>
          <button className={`bn632-hover ${activeTab === 'about' ? 'bn20' : ''}`}>
            About
          </button>
        </li>
      </ul>
      {activeTab === 'home' && <Home />}
      {activeTab === 'about' && <About />}
    </div>
  );
  }  

const Home = () => {
  return (
    <div>
      <h2>Welcome Home</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>Welcome to About Page</h2>
    </div>
  );
};

export default HeadComponent;
