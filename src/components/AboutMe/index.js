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
                  <p>2+ years <br />Frontend Development</p>
              </div>
              <div className="details-container">
                  <FaUserGraduate className="about-sec-icon"/>
                  <h3>Education</h3>
                  <p>MCA Masters Degree<br />B.Sc Bachelors Degree</p>
              </div>
            </div>
            <div className="text">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                  reprehenderit et laborum, rem, dolore eum quod voluptate
                  exercitationem nobis, nihil esse debitis maxime facere minus sint
                  delectus velit in eos quo officiis explicabo deleniti dignissimos.
                  Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                  reiciendis ea magnam? Nulla, impedit fuga!
                </p>
            </div>
            </div>
          </div>
            
          
        </div>
        <Footer/>
        
    </div>


export default AboutMe