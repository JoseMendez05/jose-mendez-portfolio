import './Education.css';

// My education page
const Education = () => {
  return (
    <div className="education">
      <h1>My Education</h1>
      
      <div className="school-info">
        <h2>Current School</h2>
        <h3>Centennial College Toronto, Ontario</h3>
        <p>I'm studying Software Engineering Technology</p>
        <p>Started: September 2024</p>
        <p>End date: April 2027</p>

      </div>
      
      <div className="other-stuff">
        <h2>Other Education</h2>
        <p>CENTU Santo Domingo Dominican Republic</p>
        <p>IT Support.</p>
      </div>

    </div>
  );
};

export default Education;