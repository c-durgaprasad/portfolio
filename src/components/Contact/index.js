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
            <li>Email: dprasad.ch10@gmail.com</li>
            <li>Phone: +919666995796</li>
            <li>Social Media:
              <a href="https://linkedin.com/in/dprasad10" target='__blank'> LinkedIn</a>,  
              <a href="https://github.com/c-durgaprasad" target='__blank'> GitHub</a>,
              <a href="https://api.whatsapp.com/send?phone=9666995796" target='__blank'> Whatsapp</a>,
              <a href="https://www.instagram.com/ojas_gambheera_2410/profilecard/?igsh=MWxkNDZ0OTRtbTZyMA==" target='__blank'> Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <Footer/>
    </div>

export default Contact