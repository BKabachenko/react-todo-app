import type { Todo } from "../../types";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss"
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (todoId: Todo["id"]) => void;
  onDeleteTodo: (todoId: Todo["id"]) => void;
}

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  const [parent] = useAutoAnimate();

  return (
    <ul className={s.ul} ref={parent}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
