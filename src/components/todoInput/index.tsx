import React from "react";
import st from "./todoInput.module.scss";

interface TodoInputProps {
  handleAddTodo: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement>
  ) => void;
  inputValue: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoInput = ({
  handleAddTodo,
  inputValue,
  handleChangeInput,
}: TodoInputProps) => {
  return (
    <form className={st.todoInputWrapper} onSubmit={handleAddTodo}>
      <input
        className={st.todoInput}
        type="text"
        name="value"
        placeholder="해아할 일을 입력해주세요."
        value={inputValue}
        onChange={handleChangeInput}
      />
      <input
        type="button"
        value="입력"
        className={st.todoButton}
        onClick={handleAddTodo}
      />
    </form>
  );
};

export default TodoInput;
