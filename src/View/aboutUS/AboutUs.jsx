import React from 'react'
import './aboutStyle.scss'
function AboutUs() {
    return (
        <div className="main-about">
            <div className="image">
            <img src={require('../../Assets/pic.jpg')} alt=""/>
            </div>
            <div className="info">
                <h3>Rouzbeh Hatamy</h3>
                <h5>Front-End Developer</h5>
                <a href="https://docdro.id/sfV5zBj">Full Resume</a>
                <a href="https://wa.me/+989336067265"> ✔ Hire me ✔</a>
            </div>
        </div>
    )
}

export default AboutUs
