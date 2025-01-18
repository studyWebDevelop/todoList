import { Draggable } from "react-beautiful-dnd";
import { TodoContentsType } from "../../interface/todoContents.interface";
import st from "./todoContent.module.scss";
import clsx from "clsx";
import React, { useState } from "react";

interface TodoContentProps extends TodoContentsType {
  idx: number;
  todoList: TodoContentsType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoContentsType[]>>;
  handleCompletedTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoContent = React.memo(
  ({
    id,
    idx,
    title,
    completed,
    todoList,
    setTodoList,
    handleCompletedTodo,
    handleRemoveTodo,
  }: TodoContentProps) => {
    const [editTodoTitle, setEditTodoTitle] = useState(title);
    const [isEdit, setIsEdit] = useState(false);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditTodoTitle(e.target.value);
    };

    const handleIsEdit = () => {
      setIsEdit(!isEdit);
    };

    const onSaveTodo = () => {
      const updatedTodoList = todoList.map((todoContent) =>
        todoContent.id === id
          ? { ...todoContent, title: editTodoTitle }
          : todoContent
      );

      setTodoList(updatedTodoList);
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));

      setIsEdit(false);
    };

    return (
      <Draggable draggableId={id.toString()} index={idx}>
        {(provided, snapshot) => (
          <div
            className={clsx(
              st.todoContentContainer,
              snapshot.isDragging && st.isDraggingTodo
            )}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            {isEdit ? (
              <input
                className={st.modifyInput}
                type="text"
                value={editTodoTitle}
                onChange={handleChangeTitle}
              />
            ) : (
              <div>
                <input
                  type="checkbox"
                  defaultChecked={completed}
                  onClick={() => handleCompletedTodo(id)}
                />
                <span
                  className={clsx(st.todoText, completed && st.completedText)}
                >
                  {title}
                </span>
              </div>
            )}
            <div className={st.buttonWrapper}>
              <div onClick={handleIsEdit}>
                {isEdit ? (
                  <button type="button" onClick={onSaveTodo}>
                    save
                  </button>
                ) : (
                  "edit"
                )}
              </div>
              <button
                onClick={() => handleRemoveTodo(id)}
                className={st.deleteTodoButton}
              >
                x
              </button>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
);

export default TodoContent;
