import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import "./index.css"

const certificates = [
    {
        image:"https://i.postimg.cc/bYFYMfXC/HTML-CSS-Bootsrtap-page-0001.jpg",
        title:"HTML, CSS and Bootstrap",
        issuer: "NxtWave",
        date:"November 06, 2022",
        url: "https://media-content.ccbp.in/certificates/share/UZUEFVNXHX.png"
    },
    {
        image:"https://i.postimg.cc/dQ9NtJQ6/Bootstrap-page-0001.jpg",
        title:"Bootstrap and Flexbox",
        issuer: "NxtWave",
        date:"November 21, 2022",
        url: "https://media-content.ccbp.in/certificates/share/FBNKMZWOFM.png"
    },
    {
        image:"https://i.postimg.cc/152GydFM/Python-page-0001.jpg",
        title:"Python",
        issuer: "NxtWave",
        date:"February 16, 2023",
        url: "https://media-content.ccbp.in/certificates/share/SCXMZCVPYY.png"
    },
    {
        image:"https://i.postimg.cc/vTjVH14D/Java-Script-page-0001.jpg",
        title:"Javascript",
        issuer: "NxtWave",
        date:"September 22, 2023",
        url: "https://media-content.ccbp.in/certificates/share/IAGOLNOGQX.png"
    },
    {
        image:"https://i.postimg.cc/V5QkVXS9/SQL-page-0001.jpg",
        title:"SQL",
        issuer: "NxtWave",
        date:"May 06, 2023",
        url: "https://media-content.ccbp.in/certificates/share/LUDICGASLP.png"
    },
    {
        image:"https://i.postimg.cc/43LtFFXz/Javascript-Essentials-page-0001.jpg",
        title:"Javascript Essentials",
        issuer: "NxtWave",
        date:"September 24, 2023",
        url: "https://media-content.ccbp.in/certificates/share/UIXWBCFSOV.png"
    },
    {
        image:"https://i.postimg.cc/RF2tv66h/Git-Command-Line-page-0001.jpg",
        title:"Git & Commandline",
        issuer: "NxtWave",
        date:"January 20, 2024",
        url: "https://media-content.ccbp.in/certificates/share/QWCEBMGKBP.png"
    },
    {
        image:"https://i.postimg.cc/htM7f3zH/React-Js-page-0001.jpg",
        title:"React JS",
        issuer: "NxtWave",
        date:"February 03, 2025",
        url: "https://media-content.ccbp.in/certificates/share/VXKLQIOXMO.png"
    }
]

const Certificates = () => {
  return (
    <>
        <Header/>
        <p className="section__text__p1">Milestones & Accolades</p>
        <h2 className="title">Certificates</h2>
            <div className="certificate-grid">
                {certificates.map((cert, index) => (
                <div key={index} className="certificate-card">
                    <img src={cert.image} alt={cert.title} className="certificate-image" />
                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-issuer">Issued by: {cert.issuer}</p>
                    <p className="certificate-date">Date: {cert.date}</p>
                    <a href={cert.url} target="__blank">
                        <button className="view-btn btn-color-1">View</button>
                    </a>
                </div>
                ))}
            </div>
        <Footer/>
    </>
  )
}

export default Certificates
