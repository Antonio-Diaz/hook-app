import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";
import { useFrom } from "../../Hooks/useFrom";
import "./styles.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange] = useFrom({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: "toggle",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };
  return (
    <div>
      <h1>todoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd
            description={description}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
