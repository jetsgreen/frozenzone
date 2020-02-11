import React from "react";
import "./title.css";

function Title(props) {
  return <div className="jumbotron">
  <div className="container">
    <h1 className="title">Clicky Game</h1>
    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
    
 <div className = "score-board">
    <div className="header">{props.children}</div>
    
    </div>
  

  </div>
</div>
}

export default Title;


