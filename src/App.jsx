import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <NavTabs />

      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
