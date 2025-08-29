import React from 'react';
import Menubar from '../Components/Menubar';
import About from '../Components/About';
import Footer from '../Components/Footer';

const AboutPage = () => {
    return (
        <div>
            {/* Menubar is now rendered in App.jsx, not here! */}
            <About />
            <Footer />
        </div>
    );
};

export default AboutPage;
