import "./index.css"
import Header from "../Header"
import Footer from "../Footer"
import ProjectItem from "../ProjectItem"

const projectsList = [{
    id: 1,
    projectImg: "https://i.postimg.cc/9f37QrQk/foodmunch.jpg",
    projectName:"Food Munch",
    projectLink: "https://projectdplink1.ccbp.tech/"
},
{
    id: 2,
    projectImg: "https://i.postimg.cc/bvQ2DpGw/Todos.jpg",
    projectName:"Todos App",
    projectLink: "https://projectdplink.ccbp.tech/"

},{
    id: 3,
    projectImg: "https://i.postimg.cc/ZKR3fGQw/jobbyapp.jpg",
    projectName:"Jobby App",
    projectLink: "https://jobbyappdp.ccbp.tech"

}]

const Projects = ()=> 
    <>
        <div className="projects-bg">
            <Header/>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="projects-container">
                {projectsList.map(projectItem=> <ProjectItem projectItem={projectItem}/> )}
            </div>
        </div>
        <Footer/>
    </>

export default Projects