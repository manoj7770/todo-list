import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item-container">
      <p>{props.text}</p>
      <button
        className="todo-item-delete-button"
        onClick={props.removeFromList}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;