import React from "react";
import "./characters.css";

function CharactersCard(props) {
  return (

    <div className="card">
      <div className="img-container">
        <img className="img" alt={props.id} src={props.image} />
      </div>


      <button onClick={() => props.shuffleCharacters(props.id)} className="btn btn-primary">click me</button>

    </div>

  );
}
export default CharactersCard;
