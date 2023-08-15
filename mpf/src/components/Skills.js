import React from "react";

function Skills(){
    return(
        <div className="skills">
           <h1>Skills</h1>
           <div className="my-skills">
            <div className="skill">
                <h1>Front-end</h1>
                <ul>
                <img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge" />
                <img alt="Css" src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white&style=for-the-badge" />
                <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge" />
                <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge" />
                <img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
                </ul>
            </div>
            <div className="skill">
            <h1>Back-end</h1>
            </div>
            <div className="skill">
            <h1>Other Skills/Tools</h1>
            </div>
           </div>
        </div>
    )
}

export default Skills;