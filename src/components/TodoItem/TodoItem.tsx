import React from 'react'
import styles from "./TodoItem.module.scss"
import type { Todo } from '../../types'

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (todoId: Todo["id"]) => void;
  onDeleteTodo: (todoId: Todo["id"]) => void;
}

const TodoItem = ({todo, onToggleTodo, onDeleteTodo}: TodoItemProps) => {
  return (
    <li
          key={todo.id}
          className={styles.li}
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
          <button className={styles.btn} onClick={() => onDeleteTodo(todo.id)}> Delete</button>
    </li>
  )
}

export default TodoItem