import { Component } from "react"
import {Link} from "react-router-dom"
import { TiSocialLinkedin } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";

import "./index.css"

import Header from '../Header'
import Footer from "../Footer"

class Home extends Component{

    

    render(){
        return (
        <div className="home-bg" >
          <Header/>
          <div className="home-container">
            <div>
                <div className="profile-container">
                    <img src="https://i.postimg.cc/qqvDpMmY/IMG-20250103-235700.jpg" alt="Durga Prasad profile" className="profile"/>
                </div>
            </div>
            <div className="profile-details">
                <p className="hello_p1">Hello, I'm</p>
                <h1 className="name">Durga Prasad</h1>
                <p className="stack">Fullstack Developer</p>
                <div className="btn-container">
                    <a href="https://drive.google.com/file/d/1YEg36Ohs8bvF0kMvUDxSRVgnnMctfrVI/view?usp=sharing" target="__blank">
                        <button className="btns btn-color-1">Download CV</button>
                    </a>
                    <Link to="/contact">
                        <button className="btns btn-color-2">Contact Info</button>
                    </Link>
                </div>
                <div className="icons-container">
                    <a className="icon-container" href="https://linkedin.com/in/dprasad10" target="__blank"><TiSocialLinkedin className="icon"/></a>
                    <a className="icon-container" href="https://github.com/c-durgaprasad" target="__blank"><FiGithub className="icon"/></a>
                </div>
            </div>
          </div>
          <Footer/>
        </div> 
        )
    }
}

export default Home
