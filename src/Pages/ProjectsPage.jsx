
import React from 'react';
import Menubar from '../Components/Menubar';
import Project from '../Components/Project';
import Footer from '../Components/Footer';

// IMPORTANT: The component name must match the import in App.jsx
// Use 'ProjectsPage' for consistency with routing
const ProjectsPage = () => {
    return (
        <div>
            {/* Menubar is now rendered in App.jsx, not here! */}
            <Project />
            <Footer />
        </div>
    );
};

export default ProjectsPage;
