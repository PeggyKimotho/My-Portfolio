import React from "react";

function Navbar(){
    return(
        <div className="container d-flex">
         <h1 className="logo mr-auto">Peggy Kimotho</h1>
         <nav className="nav-menu"> 
         <ul>
            <li><a href="">About</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
            </ul>  
            </nav>
        </div>
    )
}

export default Navbar;