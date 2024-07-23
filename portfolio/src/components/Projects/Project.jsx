import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import './project.scss';
import hw from '../../assets/mactim.png';
import sw from '../../assets/sw.png';
import port from '../../assets/port.png';
import price from '../../assets/price.png';
import sw2 from '../../assets/sw.jpg';

const projects = [
  {
    id: 1,
    imgsrc: hw,
    name: 'Mactim',
    description: 'A device to Monitor and Control Theft in MotorBikes',
    tech: 'Arduino, C, GPS, GSM, IR sensor, Accelerometer, LED display',
    link: '',
  },
  {
    id: 2,
    imgsrc: sw,
    name: 'Dataverse',
    description: 'NLP based data visualization tool',
    tech: 'ReactJs, Python, SQLite',
    link: '',
  },
  {
    id: 3,
    imgsrc: price,
    name: 'PriceRadar',
    description: 'E-Commerce website for a dress store',
    tech: 'ReactJs, Python, MySQL',
    link: '',
  },
  {
    id: 4,
    imgsrc: port,
    name: 'Portfolio',
    description: 'E-Commerce website for a dress store',
    tech: 'ReactJs, Python, MySQL',
    link: '',
  },

];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Project = () => {
  const chunkedProjects = chunkArray(projects, 4); 

  return (
    <section className='projects-area'>
      <div className='projects'>
        {chunkedProjects.map((row, rowIndex) => (
          <div className='row' key={rowIndex}>
            {row.map(item => (
              <div className='card' key={item.id}>
                <div className='title'>{item.name}</div>
                <div className='image-card'>
                  <img src={item.imgsrc} alt={item.name} />
                </div>
                <div className='description'>{item.description}</div>
                <div className='technologies'>{item.tech}</div>
                <div className='link'>
                  <a href={item.link}>
                    <LinkOutlined />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
