import { GiAchievement } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";


import Header from "../Header"
import Footer from "../Footer"

import './index.css'

const AboutMe = ()=> 
    <div>
        <Header/>
        <div className="about-section">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>

          <div className="exp-edu-section">
            <img
                  src="https://i.postimg.cc/HkMgqB8M/IMG-20250104-003037.jpg"
                  alt="Profile"
                  className="about-pic"
                />
            <div className="exp-edu">
            <div className="bg-details">
              <div className="details-container">
                  <GiAchievement className="about-sec-icon"/>
                  <h3>Experience</h3>
                  <p>2+ years <br />Fullstack Development</p>
              </div>
              <div className="details-container">
                  <FaUserGraduate className="about-sec-icon"/>
                  <h3>Education</h3>
                  <p>MCA Masters Degree<br />B.Sc Bachelors Degree</p>
              </div>
            </div>
            <div className="text">
              <p>
                  Driven MCA graduate seeking a challenging software development role to leverage 
                  advanced programming skills, problem-solving abilities, and comprehensive knowledge 
                  of computer applications to contribute to innovative projects and organizational growth.
                  At NxtWave’s CCBP 4.0 Intensive, I’m currently learning fullstack development with a 
                  specialization in 4.0 technologies. In love with the coding challenges and hands-on projects. 
                  With Industry’s first ever IRC 4.0, getting ready to take on new challenges in the tech world.
                </p>
            </div>
            </div>
          </div>
            
          
        </div>
        <Footer/>
        
    </div>


export default AboutMe