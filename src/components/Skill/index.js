import "./index.css"

const Skill = (props)=> {
    const {skillItem} = props 
    const {skill, icon} = skillItem
    return(
        <div className="skill-section"> 
            <img src={icon} alt="icon"  className="icon-image"/>
            <p className="skill">{skill}</p>
        </div>
    )
}

export default Skill