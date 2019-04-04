import React, { Component } from "react";
import copy from "copy-text-to-clipboard";
import "./App.css";

const face = "¯\\_(ツ)_/¯";

class App extends Component {
  handleClick = () => {
    copy(face);
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>{face}</button>
      </div>
    );
  }
}

export default App;
