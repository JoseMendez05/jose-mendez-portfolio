import './About.css';
import profileImage from '../assets/images/IMG_0787.CR3.jpg';
import resumePdf from '../assets/documents/Resume Jose Mendez.pdf';


// About page component - tells people about me
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      
      <img src={profileImage} alt="Jose Mendez" className="profile-pic" />
      
      <div className="about-text">
        <h2>Hi! I'm Jose Mendez</h2>
        <p>I'm a Software Engineer Technology Student at Centennial College.</p>
        <p>I'm learning how to make websites and applications. This is my first React project!</p>
        
        <h3>What I'm Learning:</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
        </ul>
        
        <h3>My Goals:</h3>
        <p>I want to become a good web developer and make cool websites for people.</p>
        
        <div className="resume-section">
          <h3>My Resume:</h3>
          <p>Want to know more about my background? You can download my resume here:</p>
          <a href={resumePdf} download="Resume Jose Mendez.pdf" className="resume-link">
            📄 Download My Resume
          </a>
        </div>
 
      </div>
    </div>
  );
};

export default About;