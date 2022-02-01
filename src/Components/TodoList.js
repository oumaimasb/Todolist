import React from "react";
import "../App.scss";

const TodoList = (props) => {
  return (
    <div className="task-list">
      <ul>
        {props.todos.map((ig) => (
          <li key={ig.id} onClick={props.onRemove.bind(this, ig.id)}>
            <span>{ig.task}</span>
            <button className="task-button">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
