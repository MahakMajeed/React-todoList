import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Eat more fruits and vege",
    "pick up the kids from school",
  ]);
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  );
}

export default App;
