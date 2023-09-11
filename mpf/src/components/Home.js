import React from "react";

function Home(){
    return(
        <div className="home-pg" id="home">
           <h1>Hi, I'm Peggy.</h1> 
           <h2>A Full-Stack Software Developer.</h2> 
           <p className="p">Certified in building innovative and impactful web applications. My expertise lies in utilizing HTML, CSS, JavaScript, React, Bootstrap, Python and Flask to bring ideas to life.</p>
            <div className="home-btn">
            <a href="Peggy Kimotho Resume.pdf" target="_blank" rel="noreferrer"><button>View Resume</button></a>
            <a href="#contact"><button>Contact Me</button></a>
            
            </div>
            <div className="contact-icons">
            <a href="https://www.linkedin.com/in/peggykimotho/" target="_blank" rel="noreferrer"><img src="linkedin.png" alt="LinkedIn" width="40px" height="40px"/></a>
            <a href="https://github.com/PeggyKimotho"target="_blank" rel="noreferrer"><img src="github.png" alt="Github" width="40px" height="40px"/></a>
            <a href="mailto:peggykimotho@gmail.com" target="_blank" rel="noreferrer"><img src="gmail.png" alt="Mail" width="40px" height="40px"/></a>
            </div>
            <div className="section-divider"></div>
            <br />
        </div>
    )
}

export default Home;