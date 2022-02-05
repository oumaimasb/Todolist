import React from "react";
// import "../App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, CloseButton } from "react-bootstrap";

const TodoList = (props) => {
  return (
    <div className="container ">
      <ListGroup variant="flush">
        {props.todos.map((ig) => (
          <ListGroup.Item key={ig.id}>
            <span>{ig.task}</span>
            <CloseButton
              className="closebutton"
              onClick={props.onRemove.bind(this, ig.id)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
