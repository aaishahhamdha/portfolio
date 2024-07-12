import React, { useState, useEffect } from 'react';
import '../Hero/Hero.css';
import Aaishah from '../../assets/aaishah.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
            <h4 className={`Uni2 ${isLoaded ? 'loaded-text' : ''}`}>BSc(Hons) in Information Technology</h4>
          </span>
          <div className= {`About ${isLoaded ? 'loaded-about' : ''}`}>
            <div>I'm a passionate, straightforward, and dedicated undergraduate with a fervent passion for emerging technologies, creative problem-solving, and the endless possibilities they offer.</div>
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
