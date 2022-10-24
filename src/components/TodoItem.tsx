import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: Todo; onDelete: (itemId: string) => void }> = (
  props
) => {
  const onClickHandler = (event: React.MouseEvent) => {
    props.onDelete(props.item.id);
  };
  return (
    <li
      className={classes.item}
      key={props.item.id}
      onClick={onClickHandler}
    >{`name: ${props.item.text}.`}</li>
  );
};
export default TodoItem;
// onAddTodo: (text: string) => void
