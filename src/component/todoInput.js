import React from "react";
import "./components.css";
class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleButtonClick = () => {
    this.props.addToList(this.state.item);
    this.setState({ item: "" });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.item}
          onChange={this.handleChange}
          className="todo-input-field"
        />
        <button className="todo-submit-button" onClick={this.handleButtonClick}>
          Submit
        </button>
      </div>
    );
  }
}

export default TodoInput;