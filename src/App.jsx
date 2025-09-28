import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css'

/**
 * Main App component that sets up routing for the portfolio website
 * COMP229 Assignment 1 - React Portfolio Site
 * This component handles the overall structure and navigation for all pages
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation bar component - appears on all pages */}
        <Navbar />
        
        {/* Main content area with routing */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
