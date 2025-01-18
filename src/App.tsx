import st from "./App.module.scss";
import TodoContent from "./components/todoContent";
import TodoInput from "./components/todoInput";
import useApp from "./hooks/useApp";

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
          <TodoContent
            key={todoContent.id}
            {...todoContent}
            handleRemoveTodo={handleRemoveTodo}
            handleCompletedTodo={handleCompletedTodo}
          />
        ))}

        <TodoInput
          handleAddTodo={handleAddTodo}
          inputValue={inputValue}
          handleChangeInput={handleChangeInput}
        />
      </div>
    </div>
  );
}

export default App;
