import { Component } from "react";
import { Link } from "react-router-dom";

import './index.css'

class Header extends Component{
  state = {menuClicked: false}

  onClickMenu = () => {
    this.setState(prev=> ({menuClicked: !prev.menuClicked}))
  }

  render() {
    const {menuClicked} = this.state
    const clicked = menuClicked ? "open":""
    return (
      <>
    <nav>
      <div className="logo">Durga Prasad Ch</div>
      <div className="hamburger-menu">
        <div className={`hamburger-icon ${clicked}`} onClick={this.onClickMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu-links ${clicked}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skills" className="li">Skills</Link></li>
          <li><Link to="/projects" className="li">Projects</Link></li>
          <li><Link to="/contact" className="li">Contact</Link></li>      
        </ul>
      </div>
      <ul className="hamburger-menu-lg">
          <li><Link to="/" className="li">Home</Link></li>
          <li><Link to="/about" className="li">About Me</Link></li>
          <li><Link to="/skills" className="li">Skills</Link></li>
          <li><Link to="/projects" className="li">Projects</Link></li>
          <li><Link to="/contact" className="li">Contact</Link></li>
        </ul>
    </nav>
    </>
    )
  }

  }



export default Header
