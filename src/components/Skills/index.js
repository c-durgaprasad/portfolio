import Header from "../Header"
import Skill from "../Skill"
import Footer from "../Footer"

import "./index.css"

const frontendSkill = [
  {
    id: 1,
    skill: "HTML",
    icon: "https://static.javatpoint.com/htmlpages/images/html-tutorial.png"
  },{
    id: 2,
    skill: "CSS",
    icon: "https://images.javatpoint.com/csspages/images/css-tutorial.png"
  },{
    id: 3,
    skill: "Bootstrap",
    icon: "https://images.javatpoint.com/bootstrappages/images/bootstrap-tutorial.png"
  },
  {
    id: 4,
    skill: "JavaScript",
    icon: "https://images.javatpoint.com/images/javascript/javascript_logo.png"
  },
  {
    id: 5,
    skill: "React JS",
    icon: "https://images.javatpoint.com/tutorial/reactjs/images/reactjs-tutorial.png"
  },
]

const backendSkill = [
  {
    id: 1,
    skill: "Node JS",
    icon: "https://d2jdgazzki9vjm.cloudfront.net/js/nodejs/images/node-js-tutorial.png"
  },{
    id: 2,
    skill: "Express JS",
    icon: "https://www.bytestechnolab.com/wp-content/uploads/2022/12/our-express-js-webapp-development.webp"
  },
  {
    id: 3,
    skill: "Python",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png"
  }
]
const databaseSkill = [{
  id: 1,
  skill: "SQL",
  icon: "data:image/png;base64,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"
}]

const otherSkill = [{
  id: 1,
  skill: "VS Code",
  icon: "data:image/png;base64,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"
},
{
  id: 2,
  skill: "Github",
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png"
},{
  id: 3,
  skill: "Ms Office",
  icon: "https://icon-library.com/images/microsoft-office-logo-icon/microsoft-office-logo-icon-1.jpg"
}]

const Skills = ()=> 
    <div>
      <Header/>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="details-section">
        <h1 className="skill-heading">Frontend Development</h1>
        <div className="skill-all-container">
          {frontendSkill.map(item => 
            <div className="skill-container">
              <Skill skillItem={item} /> 
            </div>    
          )}
        </div>
      </div>
      <div className="details-section">
        <h1 className="skill-heading">Backend Development</h1>
        <div className="skill-all-container">
          {backendSkill.map(item => 
            <div className="skill-container">
              <Skill skillItem={item} /> 
            </div>    
          )}
        </div>
      </div>
      <div className="details-section">
        <h1 className="skill-heading">Database</h1>
        <div className="skill-all-container">
          {databaseSkill.map(item => 
            <div className="skill-container">
              <Skill skillItem={item} /> 
            </div>    
          )}
        </div>
      </div>
      <div className="details-section">
        <h1 className="skill-heading">Other Skills</h1>
        <div className="skill-all-container">
          {otherSkill.map(item => 
            <div className="skill-container">
              <Skill skillItem={item} /> 
            </div>    
          )}
        </div>
      </div>
      <Footer/>
    </div>

export default Skills