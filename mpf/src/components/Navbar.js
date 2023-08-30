import React from "react";

function Navbar(){
    return(
        <div className="navbar">
         <h1 className="logo">Peggy <span className="logo2">Kimotho</span></h1>
         <nav className="nav-menu"> 
         <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>  
            </nav>
        </div>
    )
}

export default Navbar;