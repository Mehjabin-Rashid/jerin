import React, { useEffect } from 'react';

import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import SkillsPage from './Pages/SkillsPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';

const App = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      
      // Check if it's an anchor link
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Find the target element
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Scroll smoothly to the element
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add click event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;