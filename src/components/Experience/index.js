import Header from "../Header"
import Skill from "../Skill"
import Footer from "../Footer"

import "./index.css"

const frontendSkill = [
  {
    id: 1,
    skill: "HTML",
    rate: "Experienced"
  },{
    id: 2,
    skill: "CSS",
    rate: "Experienced"
  },{
    id: 3,
    skill: "Bootstrap",
    rate: "Intermediate"
  },
  {
    id: 4,
    skill: "JavaScript",
    rate: "Intermediate"
  },
  {
    id: 5,
    skill: "React JS",
    rate: "Intermediate"
  },
]

const backendSkill = [
  {
    id: 1,
    skill: "Node JS",
    rate: "Intermediate"
  },{
    id: 2,
    skill: "Express JS",
    rate: "Intermediate"
  },
  {
    id: 3,
    skill: "Python",
    rate: "intermediate"
  },{
    id: 4,
    skill: "SQL",
    rate: "Intermediate"
  },
  {
    id: 5,
    skill: "Git",
    rate: "Intermediate"
  },
]

const Experience = ()=> 
    <div>
      <Header/>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="skill-con">
        <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkill.map(item => <Skill skillItem={item} key={item.id}/>)}
            </div>
        </div>
        <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {backendSkill.map(item => <Skill skillItem={item} key={item.id} />)}
            </div>
        </div>
      </div>    
      <Footer/>
    </div>

export default Experience