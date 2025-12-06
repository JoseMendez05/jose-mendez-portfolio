import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I'm Jose Mendez!</h1>
      <p>Welcome to my portfolio website</p>
      
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I am a Software Engineer Technology Student. My background is in IT support and systems administration, and I am passionate about building efficient and scalable software solutions. 
        </p>
      </div>

      <div className="navigation-links">
        <h2>Check out my pages:</h2>
        {/* These are links to other pages on my website */}
        <Link to="/about">About Me</Link>
        <Link to="/projects">My Projects</Link>
        <Link to="/education">My Education</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  );
};

export default Home;