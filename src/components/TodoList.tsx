import React from "react";
import type { Todo } from "../types";
interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (todoId: Todo["id"]) => void;
  onDeleteTodo: (todoId: Todo["id"]) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
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
          {todo.text} -
          <button onClick={() => onDeleteTodo(todo.id)}> Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
