import React, { useState, useEffect } from 'react';
import './contact.css';
import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import four from '../../assets/4.jpg';
import five from '../../assets/5.jpg';
import six from '../../assets/6.jpg';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const images = [one, two, three, four, five, six];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, subject, message });
  };

  return (
   
    <section className='cont'>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <h1>Contact Me</h1>
          <span>
            <input
              type="text"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='name'
            />
            <input
              type="email"
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mail'
            />
          </span>
          <input
            type="text"
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='input2'
          />
          <textarea
            value={message}
            placeholder='Message'
            onChange={(e) => setMessage(e.target.value)}
            className='input2'
          />
          <button type="submit">Send Now</button>
        </form>
        <div className='images'>
          <div className="slider">
            
            <img src={images[currentIndex]} className="slide-image" alt={`Slide ${currentIndex}`} />
            
          </div>
        </div>
      </div>
      <footer style={{ textAlign: 'center' }} className='footer'>
        @aaisHam2024
      </footer>
    </section>
   
  
  );
};

export default Contact;
