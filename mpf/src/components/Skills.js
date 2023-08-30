import React from "react";

function Skills(){
    return(
        <div className="skills" id="skills">
           <h1>Skills</h1>
           <div className="my-skills">
            <div className="skill">
                <h2>Front-end</h2>
                <ul>
                <img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge" />
                <img alt="Css" src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white&style=for-the-badge" />
                <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge" />
                <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge" />
                <img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
                </ul>
            </div>
            <div className="skill">
            <h2>Back-end</h2>
            <ul>
            <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge" />
            <img alt="Flask" src="https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white&style=for-the-badge" />
            </ul>
            </div>
            <div className="skill">
            <h2>Other Skills/Tools</h2>
            <ul>
            <img alt="Git" src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge" />
            <img alt="Netlify" src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white&style=for-the-badge" />
            <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge" />
            <img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=white&style=for-the-badge" />
            <img alt="Render" src="https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=white&style=for-the-badge" />
            <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge" />
            </ul>
            </div>
           </div>
           <div className="section-divider"></div>
        </div>
    )
}

export default Skills;