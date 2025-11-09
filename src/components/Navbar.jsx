import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

// Simple navigation bar - shows auth links when needed
const Navbar = () => {
  const { user, signout } = useContext(AuthContext);

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
          {!user && (
            <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
          {user && (
            <>
              <li className="nav-user">{user.name} ({user.role})</li>
              <li><button className="link-button" onClick={() => signout()}>Sign Out</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;