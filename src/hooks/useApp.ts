import React, { useCallback, useState } from "react";
import type { TodoContentsType } from "../interface/todoContents.interface";
import type { DropResult } from "react-beautiful-dnd";

const useApp = () => {
  const [todoList, setTodoList] = useState<TodoContentsType[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleRemoveTodo = useCallback(
    (id: number) => {
      const filterContents = todoList.filter(
        (todoContent) => todoContent.id !== id
      );

      setTodoList(filterContents);
    },
    [todoList]
  );

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
      isEdit: false,
    };

    setTodoList((prevTodoList) => [...prevTodoList, newTodoContent]);
    setInputValue("");
  };

  const handleCompletedTodo = useCallback(
    (id: number) => {
      const completedTodo = todoList.map((todoContent) =>
        todoContent.id === id
          ? {
              ...todoContent,
              completed: !todoContent.completed,
            }
          : todoContent
      );

      setTodoList(completedTodo);
    },
    [todoList]
  );

  const handleRemoveAllTodo = useCallback(() => {
    setTodoList([]);
  }, []);

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      console.log(result);

      if (!result.destination) return;

      const newTodoList = todoList;

      const [새롭게정렬된todo] = newTodoList.splice(result.source.index, 1);

      newTodoList.splice(result.destination.index, 0, 새롭게정렬된todo);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return {
    inputValue,
    todoList,
    setTodoList,
    handleRemoveTodo,
    handleChangeInput,
    handleAddTodo,
    handleCompletedTodo,
    handleRemoveAllTodo,
    handleDragEnd,
  };
};

export default useApp;
