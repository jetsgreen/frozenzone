import React, { Component } from "react";
import CharactersCard from "./components/CharactersCard/characters";
import NavBar from "./components/NavBar/nav"
import Title from "./components/Title/title";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper/wrapper";
import Footer from "./components/Footer/footer"
import Score from "./components/Score/score";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    clickedCharactersIds: [],
    score: 0,
    topScore: 12,
    status: ""
  };

  shuffleCharacters = id => {

    let clickedCharactersIds = this.state.clickedCharactersIds;

    if (clickedCharactersIds.includes(id)) {
      this.setState({ clickedCharactersIds: [], score: 0, status: "Game over! You lost. Click again to play!" });

      return;

    } else {

      clickedCharactersIds.push(id)

      if (clickedCharactersIds.length === 12) {

        this.setState({ score: 12, status: "Winner! Click to play again!", clickedCharactersIds: [] });
        console.log('You Win');
        return;
      }
      this.setState({ characters, clickedCharactersIds, score: clickedCharactersIds.length, status: " " });

      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
    this.setState({characters})
  }
  render() {
    return (
      <Wrapper>
        <NavBar
         
          score={this.state.score}
          topScore={this.state.topScore}
          status={this.state.status} />
        <Score
          total={this.state.score}
          goal={12}
          
        />
        <Title />
        <div className="row">

          {this.state.characters.map(character => (
            <CharactersCard
              shuffleCharacters={this.shuffleCharacters}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}

        </div>

        <Footer />
      </Wrapper>

    );
  }

}


export default App;
