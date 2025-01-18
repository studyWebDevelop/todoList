import React, { useState } from "react";
import type { TodoContentsType } from "../interface/todoContents.interface";

const useApp = () => {
  const [todoList, setTodoList] = useState<TodoContentsType[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleRemoveTodo = (id: number) => {
    const filterContents = todoList.filter(
      (todoContent) => todoContent.id !== id
    );

    setTodoList(filterContents);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const newTodoContent = {
      id: todoList.length,
      title: inputValue,
      completed: false,
    };

    setTodoList((prevTodoList) => [...prevTodoList, newTodoContent]);
    setInputValue("");
  };

  const handleCompletedTodo = (id: number) => {
    const completedTodo = todoList.map((todoContent) =>
      todoContent.id === id
        ? {
            ...todoContent,
            completed: !todoContent.completed,
          }
        : todoContent
    );

    setTodoList(completedTodo);
  };

  return {
    inputValue,
    todoList,
    handleRemoveTodo,
    handleChangeInput,
    handleAddTodo,
    handleCompletedTodo,
  };
};

export default useApp;
