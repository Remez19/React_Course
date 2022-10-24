import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";
function App() {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  // const dummy_todos = ["Remez", "Dor", "Avihai", "Ron"];
  const onAddTodoHandler = (todoText: string) => {
    setTodosList((currList) => {
      return currList.concat(new Todo(todoText));
    });
  };
  const onDeleteHandler = (todoId: string) => {
    setTodosList((currList) => {
      return currList.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todosList} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
