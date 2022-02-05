import "../App.scss";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import DoneIcon from "@material-ui/icons/Done";

const Form = React.memo((props) => {
  const [input, setInput] = useState([]);

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd({ task: input });
    setInput([]);
  };
  return (
    <InputGroup className="mb-3 task">
      <FormControl
        className="task-bar"
        value={input}
        onChange={updateInput}
        type="text"
        id="task"
        placeholder="Task"
      />
      <Button
        className="task-button"
        type="submit"
        onClick={submitHandler}
        variant="outline-secondary"
        id="button-addon2"
      >
        <DoneIcon />
      </Button>
    </InputGroup>
  );
});

export default Form;
