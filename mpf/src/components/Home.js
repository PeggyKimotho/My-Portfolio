import React from "react";

function Home(){
    return(
        <div className="home-pg" id="home">
           <h1>Hi, I'm Peggy.</h1> 
           <h2>A Full-Stack Developer.</h2> 
           <p className="p">Experienced Full Stack Developer with a demonstrated history of working in the internet industry. Building Web applications with Angular, PHP, Laravel, Python, Django, Flask, MySQL/Postgres and some other cool libraries and frameworks.</p>
            <div className="home-btn">
            <button>View Resume</button>
            <a href="#contact"><button>Contact Me</button></a>
            
            </div>
            <div className="contact-icons">
            <a href="https://www.linkedin.com/in/peggykimotho/"><img src="linkedin.png" alt="LinkedIn" width="40px" height="40px"/></a>
            <a href="https://github.com/PeggyKimotho"><img src="github.png" alt="Github" width="40px" height="40px"/></a>
            <a href="mailto:peggykimotho@gmail.com"><img src="gmail.png" alt="Mail" width="40px" height="40px"/></a>
            </div>
        </div>
    )
}

export default Home;