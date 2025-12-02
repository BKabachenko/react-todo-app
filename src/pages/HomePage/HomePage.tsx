import { useEffect, useMemo, useState } from "react";
import TodoList from "../../components/TodoList/TodoList";
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import type { Todo, FilterType } from "../../types";
import { setJson, getJson } from "../../utils/LocalStorage";
import s from "./HomePage.module.scss";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>("all");

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
    if (isLoading || isError) {
      return;
    }

    setJson("todos", todos);
  }, [todos, isLoading, isError]);

  const handleAddTodo = (text: Todo["text"]) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
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

  const filteredTodo = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });
  }, [todos, filter]);

  if (isLoading) {
    return <h2>"Todo list is loading... please wait.</h2>;
  }
  if (isError) {
    return <h2> Something went wrong...</h2>;
  }
  return (
      <div className={s.main__wrapper}>
        <div className={s.main__headblock}>
          <div className={s.headblock__input}>
          <AddTodoForm onAddTodo={handleAddTodo} />
          </div>
          <div className={s.headblock__filterblock}>
            <button onClick={() => setFilter("all")} disabled={filter === "all"} className={filter === "all" ? "active" : ""}>
              All
            </button>
            <button onClick={() => setFilter("active")} disabled={filter === "active"}>
              Active
            </button>
            <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>
              Completed
            </button>
          </div>
        </div>
        <div className={s.main__todolist}>
          <TodoList
            todos={filteredTodo}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
        <div className={s.main__footblock}>
          <p>{filteredTodo.length} items in list</p>
        </div>
      </div>
  );
};

export default HomePage;
