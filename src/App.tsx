import st from "./App.module.scss";
import useApp from "./hooks/useApp";
import clsx from "clsx";

function App() {
  const {
    todoList,
    inputValue,
    handleRemoveTodo,
    handleChangeInput,
    handleAddTodo,
    handleCompletedTodo,
  } = useApp();

  return (
    <div className={st.container}>
      <div className={st.todoBlock}>
        <div className={st.title}>
          <h1>할 일 목록</h1>
        </div>

        {todoList.map((todoContent) => (
          <div className={st.todoContentContainer} key={todoContent.id}>
            <div>
              <input
                type="checkbox"
                defaultChecked={todoContent.completed}
                onClick={() => handleCompletedTodo(todoContent.id)}
              />
              <span className={clsx(todoContent.completed && st.completedText)}>
                {todoContent.title}
              </span>
            </div>
            <button
              onClick={() => handleRemoveTodo(todoContent.id)}
              className={st.deleteTodoButton}
            >
              x
            </button>
          </div>
        ))}

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
      </div>
    </div>
  );
}

export default App;
