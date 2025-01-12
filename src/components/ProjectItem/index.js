import "./index.css"

const ProjectItem = (props)=>{
    const {projectItem} = props
    const {projectName, projectImg, projectLink} = projectItem
    return(
        <div className="details-container color-container"  >
            <div class="article-container">
              <img
                src={projectImg}
                alt="Project"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">{projectName}</h2>
            <div className="btn-container">
              <a href=""
              target="__blank" className="a-link">
                <button className="btn btn-color-2 project-btn">
                  Github
                </button>
              </a>              
              <a href={projectLink}
                target="__blank" className="a-link">
                <button className="btn btn-color-2 project-btn">
                  Demo
                </button>
              </a>
            </div>
          </div>
    )
}
    

export default ProjectItem