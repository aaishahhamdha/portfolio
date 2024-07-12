import React from 'react';
import './Skills.css';
import cImg from '../../assets/c.png';
import pImg from '../../assets/p.png';
import jImg from '../../assets/j.svg';
import rImg from '../../assets/r.png';
import nImg from '../../assets/n.png';
import sImg from '../../assets/s.png';
import fImg from '../../assets/f.png';

import pmImg from '../../assets/pm.png';
import leadershipImg from '../../assets/lead.jpeg';
import timeManagementImg from '../../assets/time.png';
import problemSolvingImg from '../../assets/ps.jpeg';
import effectiveCommunicationImg from '../../assets/com.jpeg';
import criticalThinkingImg from '../../assets/crit.jpeg';
import StressManagementImg from '../../assets/crit.jpeg';
import TeamworkImg from '../../assets/com.jpeg';


const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const technicalSkills = [
  { id: 1, imgSrc: cImg, progress: 90 },
  { id: 2, imgSrc: pImg, progress: 75 },
  { id: 3, imgSrc: jImg, progress: 60 },
  { id: 4, imgSrc: rImg, progress: 85 },
  { id: 5, imgSrc: nImg, progress: 50 },
  { id: 6, imgSrc: sImg, progress: 70 },
  { id: 7, imgSrc: fImg, progress: 95 },
];

const professionalSkills = [
  { id: 1, imgSrc: pmImg, name: 'Project Management' },
  { id: 2, imgSrc: leadershipImg, name: 'Leadership' },
  { id: 3, imgSrc: timeManagementImg, name: 'Time Management' },
  { id: 4, imgSrc: problemSolvingImg, name: 'Problem Solving' },
  { id: 5, imgSrc: effectiveCommunicationImg, name: 'Effective Communication' },
  { id: 6, imgSrc: criticalThinkingImg, name: 'Critical Thinking' },
  { id: 7, imgSrc: StressManagementImg, name: 'Stress Management' },
  { id: 8, imgSrc: TeamworkImg, name: 'Teamwork' },
];

const Skills = () => {
  const chunkedTechnicalSkills = chunkArray(technicalSkills, 2);
  const chunkedProfessionalSkills = chunkArray(professionalSkills, 2);

  return (
    <section className='skills'>
      <div className='skills-container'>
        <div className='tech'>
          <h2>Technical Skills</h2>
          <div className='contttt'>
            {chunkedTechnicalSkills.map((row, rowIndex) => (
              <div className='row' key={rowIndex}>
                {row.map(item => (
                  <div className='col' key={item.id}>
                    <img src={item.imgSrc} alt={`Image ${item.id}`} className='skillimg' />
                    <div className='progressbar'>
                      <div className='progress' style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr className='hr'/>
        <div className='prof'>
          <h2>Professional Skills</h2>
          <div className='contttt'>
            {chunkedProfessionalSkills.map((row, rowIndex) => (
              <div className='row' key={rowIndex}>
                {row.map(skill => (
                  <div className='col' key={skill.id}>
                    <img src={skill.imgSrc} alt={skill.name} className='skillimg' />
                    <p className='skillname'>{skill.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
