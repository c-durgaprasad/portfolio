import React from "react";
import "./index.css";

import Header from "../Header"
import Footer from "../Footer"

const educationData = [
  {
    degree: "NxtWave (MERN Fullstack Developer)",
    institution: "NxtWave's CCBP 4.0 Intensive",
    year: "2022-Present",
    grade: "NA"
  },
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Adikavi Nanayya University",
    year: "2024",
    grade: "7.5 CGPA",
  },
  {
    degree: "Bachelor's Of Science (Computer Science)",
    institution: "VSM College",
    year: "2022",
    grade: "9.08 CGPA",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vikas Junior College",
    year: "2019",
    grade: "9.71 CGPA",
  },{
    degree: "SSC",
    institution: "SPSR ZP High School",
    year: "2017",
    grade: "9.0 CGPA",
  },
];

const EducationCard = ({ degree, institution, year, grade }) => (
  <div className="education-card">
    <div className="card-header">
      <div>
        <h3 className="card-title">{degree}</h3>
        <p className="institution">{institution}</p>
      </div>
    </div>
    <div className="card-content">
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Grade:</strong> {grade}</p>
    </div>
  </div>
);

const Education= () => {
  return (
    <div>
      <Header/>
        <div className="education-container">
            <p className="section__text__p1">Education & Qualifications</p>
            <h2 className="title">Education</h2>
            <div className="e-card-container">
              {educationData.map((edu, index) => (
                  <EducationCard key={index} {...edu} />
              ))}
            </div>  
        </div>
      <Footer/>
      </div>
  );
};

export default Education
