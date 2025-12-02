import s from "./TodoItem.module.scss";
import type { Todo } from "../../types";
import TrashIcon from "../Icons/TrashIcon";
interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (todoId: Todo["id"]) => void;
  onDeleteTodo: (todoId: Todo["id"]) => void;
}

const textStyle = (completed: boolean) => {
  return completed ? s.completed : "";
};

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) => {
  return (
    <li className={s.li}>
      <label className={s.checkboxContainer}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        ></input>
        <span className={s.checkmark}></span>
      </label>
      <p className={textStyle(todo.completed)} onClick={() => onToggleTodo(todo.id)}>
        {todo.text}
      </p>
      <button className={s.button} onClick={() => onDeleteTodo(todo.id)}>
        <TrashIcon className={s.trashIcon} />
      </button>
    </li>
  );
};

export default TodoItem;
