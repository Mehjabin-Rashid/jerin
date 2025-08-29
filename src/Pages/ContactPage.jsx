import React from 'react';
import Menubar from '../Components/Menubar';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const ContactPage = () => {
    return (
        <div>
            {/* Menubar is now rendered in App.jsx, not here! */}
            <Contact />
            <Footer />
        </div>
    );
};

export default ContactPage;
