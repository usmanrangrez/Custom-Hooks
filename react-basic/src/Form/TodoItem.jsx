import React from "react";

const TodoItem = ({ id, deleteTodo, toggleTodo, name, complete }) => {
  return (
    <div className={complete ? "completed" : ""}>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <p>{name}</p>
      <button onClick={() => deleteTodo(id)}>DELETE</button>
    </div>
  );
};

export default TodoItem;
