import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/movies";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />{" "}
        <main className="container">
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
