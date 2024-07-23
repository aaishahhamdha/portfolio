import React, { useState, useEffect, useRef } from 'react';
import '../Hero/Hero.css';
import Aaishah from '../../assets/aaishah.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded && contentRef.current) {
      const content = contentRef.current;
      const text = "I am a self-motivated, quick-learning individual with a fervent interest in emerging technologies and creative problem-solving. I love taking on challenges and finding innovative solutions.Fascinated by the potential of technology to reshape our reality , I aspire to become a  Software Engineer. I firmly believe that daring to take the first step is the key to success";
      content.textContent = '';
      let charIndex = 0;

      function type() {
        if (charIndex < text.length) {
          content.textContent += text[charIndex];
          charIndex++;
          setTimeout(type, 30);
        }
      }
      
      type();

      return () => {
        content.textContent = '';
      };
    }
  }, [isLoaded]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section>
      <div className='hero'>
        <div className='herotext'>
          <span className='t1'>
            <p className={`myname ${isLoaded ? 'loaded-name' : ''}`}>Aaishah Hamdha</p>
            <h4 className={`Uni ${isLoaded ? 'loaded-text' : ''}`}>
              University of Moratuwa
            </h4>
            <h4 className={`Uni2 ${isLoaded ? 'loaded-text' : ''}`}>
              BSc(Hons) in Information Technology
            </h4>
          </span>
          <div className={`About ${isLoaded ? 'loaded-about' : ''}`}>
            <div id='about-content' ref={contentRef}>
             
            </div>
          </div>
        </div>
        <div className='image'>
          <div className='blob1'></div>
          <div className='blob2'></div>
          <img src={Aaishah} className={`mypic ${isLoaded ? 'loaded-img' : ''}`} alt='Aaishah Hamdha' onLoad={handleImageLoad} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
