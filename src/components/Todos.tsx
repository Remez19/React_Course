import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onDelete: (todoId: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => {
        return <TodoItem item={item} onDelete={props.onDelete} />;
      })}
    </ul>
  );
};
export default Todos;
