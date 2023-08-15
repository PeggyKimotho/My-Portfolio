import React from "react";

function Home(){
    return(
        <div className="home-pg">
           <h1>Hi, I'm Peggy.</h1> 
           <h1>A Full-Stack Developer</h1> 
           <p>Experienced Full Stack Developer with a demonstrated history of working in the internet industry. Building Web applications with Angular, PHP, Laravel, Python, Django, Flask, MySQL/Postgres and some other cool libraries and frameworks.</p>
            <div className="home-btn">
            <button>View Resume</button>
            <button>Contact Me</button>
            
            </div>
            <div className="contact-icons">
            <a href="https://www.linkedin.com/in/peggykimotho/"><img src="linkedin.png" alt="LinkedIn" width="50px" height="50px"/></a>
            <a href="https://github.com/PeggyKimotho"><img src="github.png" alt="Github" width="50px" height="50px"/></a>
            <a href="mailto:peggykimotho@gmail.com"><img src="gmail.png" alt="Mail" width="50px" height="50px"/></a>
            </div>
        </div>
    )
}

export default Home;