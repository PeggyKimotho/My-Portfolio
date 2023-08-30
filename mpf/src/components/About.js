import React from "react";

function About(){
    return(
        <div className="about" id="about">
            <h1>About Me</h1>
            <div className="bout">
            <div className="about-me">
            <p>I am a Full Stack Developer based in Kenya, with a passion for creating beautiful and intuitive user experiences. I have a strong background in both front-end and back-end development. I am a self-motivated, hard-working and dedicated individual. Also team player, and always looking to learn new skills and techniques. I do integration of third party services such as Firebase/ AWS / Digital Ocean / Mailchimp and also have experience in building RESTful APIs. I also do integration of payment services such as M-Pesa, Paypal, Flutterwave and Stripe.</p>
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