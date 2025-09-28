import { useState } from 'react';
import './Contact.css';

// Contact form 
const Contact = () => {
  
  // This holds the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  

  const [messageSent, setMessageSent] = useState(false);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    setMessageSent(true);
    
 
    console.log('Someone sent me a message:', formData);
    
    // Reset form after a few seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setMessageSent(false);
    }, 3000);
  };
  
  return (
    <div className="contact">
      <h1>Contact Me!</h1>
      <p>Want to talk to me? Fill out this form or just email me directly.</p>
      
      <div className="contact-info">
        <h2>My Contact Info:</h2>
        <p>📧 Email: jmendezr@centennialcollege.ca</p>
        <p>📱 Phone: 647-123-4567</p>
        <p>📍 Location: Toronto, ON</p>
        <p>💼 LinkedIn: linkedin.com/in/jose-mendez-375198387</p>
        <p>👨‍💻 GitHub: github.com/JoseMendez05</p>
      </div>
      
      {messageSent ? (
        <div className="success">
          <h2>Message Sent!</h2>
          <p>Thanks for contacting me! I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Send me a message:</h2>
          
          <label>Your Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          
          <label>Your Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          
          <label>Your Message:</label>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      )}
      
      <div className="note">
        <p><em>Note: I'm still learning how to make contact forms work properly, so if this doesn't work just email me directly!</em></p>
      </div>
    </div>
  );
};

export default Contact;