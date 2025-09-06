import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menubar from './Components/Menubar';
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import SkillsPage from './Pages/SkillsPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';

const App = () => {
  // ...smooth scrolling code...

  return (
    <Router>
      {/* Menubar is rendered ONCE here, inside Router, so routing works for all pages */}
      <Menubar />
      <Routes>
        {/* Route paths must match NavLink 'to' values exactly (case-sensitive) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;