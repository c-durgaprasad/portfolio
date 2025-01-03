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
              <a href="#linkedin"> LinkedIn</a>,  
              <a href="#twitter"> Instagram</a>, 
              <a href="#youtube"> YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <Footer/>
    </div>

export default Contact