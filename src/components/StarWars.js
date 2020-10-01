import React, { Component } from "react";

class StarWars extends Component {
  constructor() {
    super();
    this.state = {
      loding: false,
      ship: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/starships/2/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          ship: data,
        });
      });
  }

  render() {
    console.log(this.state.loading);
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h1>{this.state.ship.name}</h1>
            <h3>{this.state.ship.hyperdrive_rating}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default StarWars;
