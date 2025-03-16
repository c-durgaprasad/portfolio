import {Link} from "react-router-dom"
import "./index.css"

import Header from "../Header"
import Footer from "../Footer"


const Contact = ()=> 
    <div>
        <Header/>
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <footer>
        <div className="footer-content">
          <div className="contact-section">
            <h2 className="con-info">Contact Information</h2>
            <ul>
              <li>
                Email: 
                <a href="mailto:dprasad.ch10@gmail.com"> dprasad.ch10@gmail.com</a>
              </li>
              <li>
                Phone:
                <a href="tel: +919666995796" className="contact-a">
                   +91 9666995796
                </a>
              </li>
              <li>Social Media:
                <a href="https://linkedin.com/in/dprasad10" target='__blank' className="contact-a"> LinkedIn</a>,  
                <a href="https://github.com/c-durgaprasad" target='__blank'> GitHub</a>,
                <a href="https://api.whatsapp.com/send?phone=9666995796" target='__blank'> Whatsapp</a>,
                <a href="https://www.instagram.com/ojas_gambheera_2410/profilecard/?igsh=MWxkNDZ0OTRtbTZyMA==" target='__blank'> Instagram</a>
              </li>
            </ul>
          </div>
      </div>
    </footer>
    <footer>
        <div className="footer-content">
          <div className="contact-section">
            <h2 className="con-info">Quick Links</h2>
            <div className="quick-links-container">
              <Link to="/" className="quick-link">Home</Link>
              <Link to="/experience" className="quick-link">Work Experience</Link>
              <Link to="/education" className="quick-link">Education</Link>
              <Link to="/certificates" className="quick-link">Certificates</Link>
              <Link to="/skills" className="quick-link">Skills</Link>
              <Link to="/projects" className="quick-link">Projects</Link>
            </div>
          </div>
      </div>
    </footer>
    <Footer/>
    </div>

export default Contact