import { FaHtml5 } from "react-icons/fa";
import "./index.css"

const Skill = (props)=> {
    const {skillItem} = props 
    const {skill, rate} = skillItem
    const badge= "https://img.freepik.com/free-vector/black-quality-badge_1053-330.jpg?t=st=1735707409~exp=1735711009~hmac=49af5d403e1f09f4c658f8ddc14f1d28039b4f38a1e68ac0b044d696a678e71a&w=740" 
    return(
        <div className="article-container">
            <article>
                <FaHtml5 className="badge"/> 
                <img src={badge} alt="skill" className="badge"/>
                <div>
                  <h3>{skill}</h3>
                  <p>{rate}</p>
                </div>
            </article>
        </div>
    )
}

export default Skill