import './Services.css';

// Things I can help you with 
const Services = () => {
  
  // When someone clicks the button, show them my email
  const handleGetQuote = () => {
    alert('Email me at: jmendezr@centennialcollege.ca if you want to hire me!');
  };
  
  return (
    <div className="services">
      <h1>What I Can Do For You</h1>
      <p>I'm still learning but I can help with some computer stuff!</p>
      
      <div className="service-list">
        <div className="service">
          <h3>🌐 Make Websites</h3>
          <p>websites using HTML, CSS and JavaScript.</p>
          <button onClick={handleGetQuote}>Ask me about this</button>
        </div>
        
        <div className="service">
          <h3>🖥️ Fix Computer Problems general maintenance</h3>
          <p>fixing computer problems and provide IT support.</p>
          <button onClick={handleGetQuote}>Ask me about this</button>
        </div>
        
        
        <div className="service">
          <h3>🔒 Security tools and good practices</h3>
          <p>I can help make your computer more secure.</p>
          <button onClick={handleGetQuote}>Ask me about this</button>
        </div>
        
        <div className="service">
          <h3>🖥️ Build Custom PCs</h3>
          <p>I can help you pick computer parts and put them together.</p>
          <button onClick={handleGetQuote}>Ask me about this</button>
        </div>
      </div>
      
    </div>
  );
};

export default Services;