import React, { Component } from "react";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="email"
          value={this.state.email}
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          value={this.state.password}
          name="password"
          placeholder="pswd"
          onChange={this.handleChange}
        />
        <button onClick="form.reset()">Log In</button>
        <br />
        <h2>{this.state.email}</h2>
        <br />
        <div>
          <h3>Your Super Secret Password is: {this.state.password}</h3>
        </div>
      </form>
    );
  }
}

export default LogIn;
