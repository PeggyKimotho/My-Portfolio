import React from "react";

function About(){
    return(
        <div className="about" id="about">
            <h1>About Me</h1>
            <div className="bout">
            <div className="about-me">
            <p>I am a Full Stack Developer based in Kenya, passionate about creating beautiful and functional websites that provide an excellent user experience. <br /> I am self-motivated and always looking to learn new skills and techniques and embrace emerging trends in the industry.</p>
            <div className="home-btn">
            <a href="#contact"><button className="hire-btn">Hire Me</button></a>
            </div>
 </div>
 <div className="about-me">
 <img className="mypic" src="mypic.jpg" alt="Peggy Pic"/>
 </div>
        </div>
        <div className="section-divider"></div>
        </div>
    )
}

export default About;