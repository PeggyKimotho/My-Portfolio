import React from "react";

function Projects(){
    return(
        <div className="projects" id="projects">
           <h1>Projects</h1>
           <div className="my-projects">
        <div className="project-card">
            <img src="BMI project image.png" alt="BMI Calculator"/>
            <h3>BMI Calculator</h3>
            <p>Technologies Used: <br/> HTML, CSS, JavaScript, React</p>
            <div className="direct"> 
            <a href="https://bmi-calculator-app-dun.vercel.app/"><button>Visit Site</button></a>
            <a href="https://github.com/PeggyKimotho/BMI-Calculator-App"><button>Code</button></a>
            </div>
        </div>
        <div className="project-card">
            <img src="BMI project image.png" alt="Tasklister App" />
            <h3>TaskLister</h3>
            <p>Technologies Used: <br/> HTML, CSS, JavaScript</p>
            <div className="direct"> 
            <a href="https://peggykimotho.github.io/tasklister-app/"><button>Visit Site</button></a>
            <a href="https://github.com/PeggyKimotho/tasklister-app"><button>Code</button></a>
            </div>
        </div>
        <div className="project-card">
            <img src="Awesome Quotes.png" alt="Quote Search App" />
            <h3>Awesome Quotes</h3>
            <p>Technologies Used: <br/> HTML, CSS, JavaScript, API</p>
            <div className="direct"> 
            <a href="https://peggykimotho.github.io/Awesome-Quotes-App/"><button>Visit Site</button></a>
            <a href="https://github.com/PeggyKimotho/Awesome-Quotes-App"><button>Code</button></a>
            </div>
        </div>
        <div className="project-card">
            <img src="BMI project image.png" alt="My Portfolio" />
            <h3>My Portfolio</h3>
            <p>Technologies Used: <br/> HTML, CSS, JavaScript, Bootstrap, React</p>
            <div className="direct"> 
            <a href="https://peggykimotho.vercel.app/"><button>Visit Site</button></a>
            <a href="ttps://github.com/PeggyKimotho/My-Portfolio"><button>Code</button></a>
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