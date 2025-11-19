import React from "react";
import styles from "./TodoItem.module.scss";
import type { Todo } from "../../types";

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (todoId: Todo["id"]) => void;
  onDeleteTodo: (todoId: Todo["id"]) => void;
}

const textStyle = (completed: boolean) => {
  return completed ? styles.completed : ""
};

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) => {
  return (
    <li className={styles.li}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      ></input>
      <p
        className={textStyle(todo.completed)}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.text}
      </p>
      <button className={styles.btn} onClick={() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
