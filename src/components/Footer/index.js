import { FaLinkedin, FaGithub, FaInstagram, FaYoutube,FaWhatsapp } from 'react-icons/fa';

import "./index.css"

const Footer=()=> 
        <footer className="icons-copy-right">
            <div className="footer-icons">
                <a href="https://linkedin.com/in/dprasad10" target="__blank" className="icon linkedin"><FaLinkedin size={24} /></a>
                <a href="https://github.com/c-durgaprasad" target="__blank"className="icon github"><FaGithub size={24} /></a>
                <a href="https://www.instagram.com/ojas_gambheera_2410/profilecard/?igsh=MWxkNDZ0OTRtbTZyMA==" target="__blank" className="icon twitter"><FaInstagram size={24} /></a>
                <a href="https://api.whatsapp.com/send?phone=9666995796" target='__blank'><button className="back-to-top"  ><FaWhatsapp size={16} /></button></a>
            </div>
            <div className="footer-copyright">
                <p className='copy-right'>Copyright &copy; 2025 Durga Prasad. All rights reserved.</p>
            </div>
      </footer>

export default Footer