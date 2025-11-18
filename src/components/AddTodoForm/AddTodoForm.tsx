import React, { useState } from "react";
import type { Todo } from "../../types";
import s from "./AddTodoForm.module.scss"
interface AddTodoFormProps {  
  onAddTodo: (text: Todo['text']) => void;
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    onAddTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}
    className={s.form}>
      <input
        type="text"
        value={text}
        
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
