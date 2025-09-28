import { Link } from 'react-router-dom';
import './Navbar.css';

// Simple navigation bar - my first navbar in React!
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Just my name as the logo */}
        <Link to="/" className="logo">
          Jose's Portfolio
        </Link>

        {/* Simple list of navigation links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;