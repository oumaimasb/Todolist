import "../App.scss";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

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
    <form className="task" onSubmit={submitHandler}>
      <div className="task-box">
        <input
          value={input}
          onChange={updateInput}
          type="text"
          className="task-bar"
          id="task"
          placeholder="Task"
        />
        <button className="task-button" type="submit">
          <AddIcon />
        </button>
      </div>
    </form>
  );
});

export default Form;
