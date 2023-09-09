import React from "react";

function Projects(){
    return(
        <div className="projects" id="projects">
           <h1>Projects</h1>
           <div className="my-projects">
        <div className="project-card">
            <img src="BMI project image.png" alt="BMI Calculator"/>
            <h3>BMI Calculator</h3>
            <p>A web application that empowers you to take charge of your well-being by calculating your Body Mass Index based on your height and weight.</p>
            <p>Technologies Used: <br/> HTML, CSS, JavaScript, React</p>
            <div className="direct"> 
            <a href="https://bmi-calculator-app-dun.vercel.app/" target="_blank" rel="noreferrer"><button>Visit Site</button></a>
            <a href="https://github.com/PeggyKimotho/BMI-Calculator-App" target="_blank" rel="noreferrer"><button>Code</button></a>
            </div>
        </div>
        <div className="project-card">
            <img src="Tasklister.png" alt="Tasklister App" />
            <h3>TaskLister</h3>
            <p>A web application that helps you take control of your productivity through seamlessly organizing your to-do's and tracking progress all within one place.</p>
            <p>Technologies Used: <br/> HTML, CSS, JavaScript</p>
            <div className="direct"> 
            <a href="https://peggykimotho.github.io/tasklister-app/" target="_blank" rel="noreferrer"><button>Visit Site</button></a>
            <a href="https://github.com/PeggyKimotho/tasklister-app" target="_blank" rel="noreferrer"><button>Code</button></a>
            </div>
        </div>
        <div className="project-card">
            <img src="Awesome Quotes.png" alt="Quote Search App" />
            <h3>Awesome Quotes</h3>
            <p>A site where you can find inspiration and motivation through random quotes of different categories from different authors.</p>
            <p>Technologies Used: <br/> HTML, CSS, JavaScript, API</p>
            <div className="direct"> 
            <a href="https://peggykimotho.github.io/Awesome-Quotes-App/" target="_blank" rel="noreferrer"><button>Visit Site</button></a>
            <a href="https://github.com/PeggyKimotho/Awesome-Quotes-App" target="_blank" rel="noreferrer"><button>Code</button></a>
            </div>
        </div>
        <div className="project-card">
            <img src="Portfolio screenshot.png" alt="My Portfolio" />
            <h3>My Portfolio</h3>
            <p>A site where you can find out more about me and my skills.</p>
            <p>Technologies Used: <br/> HTML, CSS, JavaScript, Bootstrap, React</p>
            <div className="direct"> 
            <a href="https://peggykimotho.vercel.app/" target="_blank" rel="noreferrer"><button>Visit Site</button></a>
            <a href="ttps://github.com/PeggyKimotho/My-Portfolio" target="_blank" rel="noreferrer"><button>Code</button></a>
            </div>
        </div>
              
    </div>
    <div className="home-btn">
    <a href="https://github.com/PeggyKimotho"><button className="more-projects">View More Projects</button></a>
    </div>
    <div className="section-divider"></div>
        </div>
        
    )
}

export default Projects;