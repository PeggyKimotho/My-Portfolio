import React from "react";

function Contact() {

    return(
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <p>I am always open to discussing new projects and opportunities in the tech world. I am also available for freelance work.</p>
            <h3>Get In Touch</h3>
            <p>Email: peggykimotho@gmail.com</p>
            <p>Phone: +254 705414954</p>
            <h3>Find Me On</h3>
            <div className="contact-icons">
                <a href="https://www.linkedin.com/in/peggykimotho/"><img src="linkedin.png" alt="LinkedIn" width="40px" height="40px" /></a>
                <a href="https://github.com/PeggyKimotho"><img src="github.png" alt="Github" width="40px" height="40px"/></a>
                <a href="mailto:peggykimotho@gmail.com"><img src="gmail.png" alt="Mail" width="40px" height="40px"/></a>
            </div>
            <div className="section-divider"></div>
        </div>
    )
}

export default Contact;