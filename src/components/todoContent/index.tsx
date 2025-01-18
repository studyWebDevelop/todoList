import { Draggable } from "react-beautiful-dnd";
import { TodoContentsType } from "../../interface/todoContents.interface";
import st from "./todoContent.module.scss";
import clsx from "clsx";

interface TodoContentProps extends TodoContentsType {
  handleCompletedTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
  idx: number;
}

const TodoContent = ({
  id,
  idx,
  title,
  completed,
  handleCompletedTodo,
  handleRemoveTodo,
}: TodoContentProps) => {
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
          <div>
            <input
              type="checkbox"
              defaultChecked={completed}
              onClick={() => handleCompletedTodo(id)}
            />
            <span className={clsx(st.todoText, completed && st.completedText)}>
              {title}
            </span>
          </div>
          <button
            onClick={() => handleRemoveTodo(id)}
            className={st.deleteTodoButton}
          >
            x
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default TodoContent;
