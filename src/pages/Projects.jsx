import './Projects.css';

// My projects page
const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>I'm still learning so I don't have many projects yet, but here's what I've worked on:</p>
      
      <div className="project-list">
        <div className="project">
          <h3>🌐 This Portfolio Website</h3>
          <p>This is actually my first React project! I made it for my Web Development class.</p>
          <p><strong>What I used:</strong> React, HTML, CSS, JavaScript</p>
          <p><strong>What I learned:</strong> How to use React components, useState hook, and React Router</p>
          <p>It took me a while to figure out how everything works, but I'm proud I got it working!</p>
        </div>
        
      </div>
      
      <div className="future-projects">
        <h2>Future Projects</h2>
        <p>I'm planning to work on more projects as I learn new skills.</p>
    
      </div>
    
    </div>
  );
};

export default Projects;