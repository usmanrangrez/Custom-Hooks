import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./style.css";
import { useLocalStorage } from "../MoreHooks/useLocalSorage";

const Form = () => {
  const [newTodoName, setTodoName] = useState("");
  const [todos, setTodos] = useLocalStorage("form", []);
  const [optVal, setOptVal] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (newTodoName === "") {
      return;
    } else {
      setTodos((prev) => {
        return [
          ...prev,
          { name: newTodoName, complete: false, id: crypto.randomUUID() },
        ];
      });
    }
    setTodoName("");
  }

  function deleteTodo(todoID) {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoID);
    });
  }

  function toggleTodo(todoId) {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todoId === todo.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    });
  }

  return (
    <>
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            );
          })}
      </ul>

      <form onSubmit={addTodo}>
        <label htmlFor="nt">New Todo</label>
        <input
          type="text"
          id="nt"
          value={newTodoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button type="submit">Add Todo</button>
        <br />
        <br />
        <br />
        <select value={optVal} onChange={(e) => setOptVal(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
      <p>{optVal}</p>
    </>
  );
};

export default Form;
