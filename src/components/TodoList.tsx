import type { Todo } from "../types";
import TodoItem from "./TodoItem/TodoItem";
interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (todoId: Todo["id"]) => void;
  onDeleteTodo: (todoId: Todo["id"]) => void;
}

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
