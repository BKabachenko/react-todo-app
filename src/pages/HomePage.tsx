import { useEffect, useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import AddTodoForm from "../components/AddTodoForm/AddTodoForm";
import type { Todo } from "../types";
import { setJson, getJson } from "../utils/LocalStorage";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const loadTodos = async () => {
      const todoJson = getJson<Todo[]>("todos");
      if (todoJson) {
        try {
          setTodos(todoJson);
          return;
        } catch (e) {
          console.error("LS parse error", e);
        } finally {
        setIsLoading(false);
      }
      }
      
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

    loadTodos();
  }, []);

  useEffect(() => {
    if (!isLoading && !isError) {
      setJson("todos", todos);
    }
  }, [todos,isLoading, isError]);

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
    return <h2>"Todo list is loading... please wait.</h2>;
  }
  if (isError) {
    return <h2> Something went wrong...</h2>;
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
};

export default HomePage;
