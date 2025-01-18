import st from "./App.module.scss";
import TodoContent from "./components/todoContent";
import TodoInput from "./components/todoInput";
import useApp from "./hooks/useApp";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  const {
    todoList,
    inputValue,
    handleRemoveTodo,
    handleChangeInput,
    handleAddTodo,
    handleCompletedTodo,
    handleRemoveAllTodo,
    handleDragEnd,
  } = useApp();

  return (
    <div className={st.container}>
      <div className={st.todoBlock}>
        <div className={st.titleWrapper}>
          <h1 className={st.title}>할 일 목록</h1>
          <span className={st.removeAll} onClick={handleRemoveAllTodo}>
            전체삭제
          </span>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todoList">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {todoList.map((todoContent, idx) => (
                  <TodoContent
                    key={todoContent.id}
                    {...todoContent}
                    idx={idx}
                    handleRemoveTodo={handleRemoveTodo}
                    handleCompletedTodo={handleCompletedTodo}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

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
