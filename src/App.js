import React, { Component } from "react";
import "./App.css";
import { Cardlist } from "./components/Card-list/Card-list";
import { SearchBox } from "./components/Search-box/Search-box";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((reponse) => reponse.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
