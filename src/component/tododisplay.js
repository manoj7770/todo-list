import React from "react";
import TodoItem from "./todoItem";
function TodoDisplay(props) {
  return (
    <div className="todo-display-container">
      {props.data.map((item, index) => {
        return (
          <TodoItem
            text={item}
            removeFromList={() => props.removeFromList(index)}
          />
        );
      })}
    </div>
  );
}

export default TodoDisplay;