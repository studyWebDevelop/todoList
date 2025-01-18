import { TodoContentsType } from "../../interface/todoContents.interface";
import st from "./todoContent.module.scss";
import clsx from "clsx";

interface TodoContentProps extends TodoContentsType {
  handleCompletedTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
}

const TodoContent = ({
  id,
  title,
  completed,
  handleCompletedTodo,
  handleRemoveTodo,
}: TodoContentProps) => {
  return (
    <div className={st.todoContentContainer} key={id}>
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
  );
};

export default TodoContent;
