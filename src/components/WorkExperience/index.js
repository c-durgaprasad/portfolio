import React from "react";
import "./index.css"; 
import Header from "../Header";
import Footer from "../Footer";
const experiences = [{
    title:"Process Executive",
    company: "Infosys BPM Ltd",
    startDate: "June 2024",
    location: "Pune, India",
    responsibilities: [
        "Utilized client data to model exposures using AIR software for risk analysis",
        "Produced key outputs, including summary of exposures and technical pricing for underwriters",
        "Conducted data scrubbing, applying terms & conditions, and result publication",
        "Worked across multiple lines of business, including Ki, Cargo, Open Market, and Terrorism",
        "Reviewed submitted data for completeness and accuracy, coordinating follow-ups with underwriters to resolve discrepancies",
        "Converted client-provided data from Excel to AIR/client proprietary formats, ensuring seamless data integration",
        "Coded COPE (Construction, Occupancy, Protection, and Exposure) information for risk assessment and underwriting",
        "Imported and validated exposure data in AIR, performed geocoding for all locations, and conducted exposure analysis to identify potential risks"
    ]
    ,
    technologies: [
        "MS Excel",
        "Multiple LOB's",
        "AIR Software",
        "OPUS",
        "Touchstone",
        "Citrix"

    ]
}]

const WorkExperience = () => {
  return (
    <>
        <Header/>
        <div className="work-experience-container">
        <p className="section__text__p1">My Professional Journey</p>
        <h1 className="title">Work Experience</h1>
        {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
            <h3 className="job-title">{exp.title}</h3>
            <p className="company-info">
                {exp.company} • {exp.startDate} - "Present"
            </p>
            <p className="location">📍 {exp.location}</p>
            <ul className="responsibilities">
                {exp.responsibilities.map((item, i) => (
                <li key={i}>🔹 {item}</li>
                ))}
            </ul>
            <p className="technologies">
                <span>Key Technologies:</span> {exp.technologies.join(", ")}
            </p>
            </div>
        ))}
        </div>
        <Footer/>
    </>
  )
}

export default WorkExperience
