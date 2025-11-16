import { useState } from "react";
import type { Todo } from "./types";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const initialTodos: Todo[] = [
  { id: 1, text: "Вивчити React", completed: false },
  { id: 2, text: "Вивчити Props", completed: true },
  { id: 3, text: "Вивчити useState", completed: true },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (text: Todo['text']) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const handleToggleTodo = (todoId: Todo['id']) => {
    const newArrTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newArrTodo);
  };

  return (
    <>
      <Header title="Мій перший ToDo-список" />

      <AddTodoForm onAddTodo={handleAddTodo} />

      <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
    </>
  );
}

export default App;
