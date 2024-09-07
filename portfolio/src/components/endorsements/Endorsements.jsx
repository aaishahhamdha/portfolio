import React from 'react';
import './Endorsements.css';

const educationDetails = [
  {
    institution: "University of Moratuwa",
    duration: "2022-2026 (expected)",
    degree: "BSc Hons in Information Technology",
    gpa: "SGPA 3.95/4.00"
  },
  {
    institution: "Ceylon Ladies’ Campus, Warakapola",
    duration: "2018-2020",
    degree: "GCE AL- Biological Science",
    grades: "Physics- A | Chemistry- A | Biology- C",
    zScore: "Z-Score - 1.8611"
  },
  {
    institution: "Baduriya Cantral College , Mawanella",
    duration: "2014-2017",
    degree: "GCE Ordinary Level",
    grades: "8AB"
  }
];

const endorsements = [
  {
    name: "",
    message: "Talented, Strong technical skills. She excels in problem-solving and teamwork",
    role: "Neeshan Ismath,Software Project Team Leader"
  },
  {
    name: "",
    message: "A brilliant individual with innovative ideas and a great team player.",
    role: " Sahla ASF, undergraduate @UoM"
  }
];

const referrals = [
  {
    name: "Code Gladiators(2024)",
    role: "Semi Finalist"
  },
  {
    name: "FestX 4.0-IEE WIE(2023)",
    role: "Participant"
  },
  {
    name: "WebX-IEE WIE(2024)",
    role: "Result Pending"
  },
  {
    name: "HackMoral 6.0-INTECS(2024)",
    role: "Ongoing"
  },
  {
    name: "Hackelite 1.0 -IEE WIE(2024)",
    role: "Ongoing"
  },
  {
    name: "WSO2 Ballerina",
    role: "Ongoing"
  }
];


const Endorsements = () => {
  return (
    <section className="endorsements-section">
      <div className="education-section">
        <h1>Education</h1>
        <ul className="education-list">
          {educationDetails.map((education, index) => (
            <div className="education-item" key={index}>
              <h3 className="education-institution">{education.institution} ({education.duration})</h3>
              <p className="education-degree">{education.degree}</p>
              {education.gpa && <p className="education-gpa gpa-highlight">{education.gpa}</p>}
              {education.grades && <p className="education-grades">{education.grades}</p>}
              {education.zScore && <p className="education-zscore">{education.zScore}</p>}
            </div>
          ))}
        </ul>
      </div>
      <div className="right-section">
        <div className="endorsement-container">
          <h1 className='end-title'>Endorsements</h1>
          <div className="endorsement-list">
            {endorsements.map((endorsement, index) => (
              <div className="endorsement-card" key={index}>
                <div className="card-inner">
                  <div className="card-front">
                    <p className="endorsement-message">"{endorsement.message}"</p>
                  </div>
                  <div className="card-back">
                    <p className="endorsement-role">{endorsement.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="referrals-container">
          <h1 className='end-title'>Competitions</h1>
          <ul className="referral-list">
            {referrals.map((referral, index) => (
              <li className="referral-item" key={index}>
                <p className="referral-name">{referral.name}</p>
                <p className="referral-role">{referral.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Endorsements;
