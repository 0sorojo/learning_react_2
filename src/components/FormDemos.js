import React, { Component } from "react";

class FormDemos extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      about: "",
      isNotRobot: false,
      whichWitch: "",
      favRecipe: "boiled",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
        />

        <textarea
          name="about"
          value={this.state.about}
          placeholder="Tell us about Yourself"
          onChange={this.handleChange}
        />

        <h1>
          My Name is {this.state.firstName} {this.state.lastName} and{" "}
          {this.state.about}
        </h1>
        <br />
        <label>
          I am not a robot...
          <input
            type="checkbox"
            name="isNotRobot"
            checked={this.state.isNotRobot}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Which Witch Are You?
          <br />
          <input
            type="radio"
            name="whichWitch"
            value="goodWitch"
            checked={this.state.whichWitch === "goodWitch"}
            onChange={this.handleChange}
          />
          <label>Good Witch</label>
          <br />
          <input
            type="radio"
            name="whichWitch"
            value="badWitch"
            checked={this.state.whichWitch === "badWitch"}
            onChange={this.handleChange}
          />
          <label>Bad Witch</label>
        </label>
        <br />
        <label>How do you like your Children cooked?</label>
        <select
          value={this.state.favRecipe}
          onChange={this.handleChange}
          name="favRecipe"
        >
          <option value="boiled">Boiled</option>
          <option value="fricaseed">Fricaseed</option>
          <option value="hasenpfeffered">Hasenpfeffered</option>
          <option value="hashed">Hashed</option>
          <option value="scaloped">Scalloped</option>
        </select>
        <br />
        <h2>Ahh I see you are a {this.state.whichWitch}</h2>
        <h2>and you Like your Children {this.state.favRecipe}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default FormDemos;
