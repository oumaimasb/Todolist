import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://todolist-25103-default-rtdb.firebaseio.com/todolist.json")
      .then((response) => response.json())
      .then((responseData) => {
        const loadedTodos = [];
        for (const key in responseData) {
          loadedTodos.push({
            id: key,
            task: responseData[key].task,
          });
        }
        setTodos(loadedTodos);
      });
  }, []);

  const addTask = (todo) => {
    fetch("https://todolist-25103-default-rtdb.firebaseio.com/todolist.json", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((repsonseData) => {
        setTodos((prevTodo) => [
          ...prevTodo,
          { id: repsonseData.name, ...todo },
        ]);
      });
  };

  const removeTask = (todoId) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="App">
      <Form onAdd={addTask} />
      <TodoList todos={todos} onRemove={removeTask} />
    </div>
  );
};

export default Todo;
