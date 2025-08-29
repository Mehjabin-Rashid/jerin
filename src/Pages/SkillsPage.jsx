import React from 'react';
import Menubar from '../Components/Menubar';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';

const SkillsPage = () => {
    return (
        <div>
            {/* Menubar is now rendered in App.jsx, not here! */}
            <Skills />
            <Footer />
        </div>
    );
};

export default SkillsPage;
