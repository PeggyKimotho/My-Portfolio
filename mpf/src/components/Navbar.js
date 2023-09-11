import React, {useState} from "react";

function Navbar(){
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };


    return(
        <div className="navbar">
         <h1 className="logo">Peggy <span className="logo2">Kimotho</span></h1>
         <button className="mobile-menu-icon" onClick={toggleMenu}>
        ☰ 
      </button>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
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