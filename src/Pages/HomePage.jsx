import React from 'react';
import Menubar from '../Components/Menubar';
import HeroSection from '../Components/HeroSection'; 
import About from '../Components/About';
import Project from '../Components/Project';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <div>
            {/* Menubar is now rendered in App.jsx, not here! */}
            <HeroSection />
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
