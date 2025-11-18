import { useEffect, useState } from "react";
import Header from "../layout/Header/Header";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";
import type { Todo } from "../types";

const offlineInitialTodos: Todo[] = [
  { id: 1, text: "Вивчити React", completed: false },
  { id: 2, text: "Вивчити Props", completed: true },
  { id: 3, text: "Вивчити useState", completed: true },
];

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>(offlineInitialTodos);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        if (!response.ok) {
          throw new Error("No response from server");
        }
        const data = await response.json();
        const fetchedTodos: Todo[] = data.map(
          (item: { id: number; title: string; completed: boolean }) => ({
            id: item.id,
            text: item.title,
            completed: item.completed,
          })
        );
        setTodos(fetchedTodos);
      } catch (error) {
        setIsError(true);
        console.error("Something went wrong!", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const handleAddTodo = (text: Todo["text"]) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const handleToggleTodo = (todoId: Todo["id"]) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (todoId: Todo["id"]) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != todoId));
  };
  if (isLoading) {
    return <Header title="App is loading... please wait." />;
  }
  if (isError) {
    return <Header title="Something went wrong. :(" />;
  }
  return (
    <>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default HomePage;
