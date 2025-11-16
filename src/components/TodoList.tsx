import React from "react";
import type { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (todoId: Todo["id"]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => onToggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
          ></input>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
