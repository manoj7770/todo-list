import React from "react";
import TodoDisplay from "./tododisplay";
import TodoInput from "./todoInput";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addToList = (text) => {
    this.setState({ list: this.state.list.concat(text) }, () => {
      console.log(this.state);
    });
  };

  removeFromList = (index) => {
    console.log(index);
    let left = this.state.list.slice(0, index);
    let right = this.state.list.slice(index + 1);
    console.log(left, right);
    this.setState({ list: left.concat(right) });
  };

  render() {
    return (
      <div>
        <TodoInput addToList={this.addToList} />
        <TodoDisplay
          data={this.state.list}
          removeFromList={this.removeFromList}
        />
      </div>
    );
  }
}

export default TodoApp;