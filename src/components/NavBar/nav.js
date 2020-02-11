import React from "react";
import "./nav.css";

function Navbar(props) {
    return (
     <div>
         <nav className = "navbar">
         <h2 className="nav-title">Clicky Game</h2>
         <h2 className='navBar-score'>Score: {props.score} | Top Score: {props.topScore}</h2>
         <h2 className="status">{props.status}</h2>
          </nav>
         </div>
        
    );
  }
  
  export default Navbar;

