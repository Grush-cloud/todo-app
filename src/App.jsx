import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import NavLinks from "./components/NavLinks";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [isClicked, setIsClicked] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  //captures onchange event on input
  function handleOnchange(e) {
    setTodoItem(e.target.value);
  }

  //adds item to the todos array
  function handleOnClickAdd(e) {
    e.preventDefault();

    if (todoItem.trim() !== "") {
      const newTodo = { id: Math.random(), text: todoItem, status: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoItem("");
    }
  }

  // Toggles the status of a todo item
  function handleToggleStatus(id) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  }

  // Removes a todo item
  function handleRemoveItem(id) {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }

  // Function to clear completed todo items
  function handleClearCompleted() {
    setTodos((prevTodos) => prevTodos.filter((item) => !item.status));
  }

  // Function to filter the todos based on the current view
  const filteredTodos = todos.filter((item) =>
    isClicked === "all"
      ? true
      : isClicked === "active"
      ? !item.status
      : isClicked === "completed"
      ? item.status
      : true
  );

  function handleDarkMode() {
    setIsDarkMode((prevState) => !prevState);
  }

  return (
    <div className={isDarkMode ? "app-container-dark" : ""}>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <div className="todo-container">
        <Form
          handleOnClickAdd={handleOnClickAdd}
          todoItem={todoItem}
          isDarkMode={isDarkMode}
          handleOnchange={handleOnchange}
        />
        <TodoList
          filteredTodos={filteredTodos}
          isDarkMode={isDarkMode}
          handleToggleStatus={handleToggleStatus}
          handleRemoveItem={handleRemoveItem}
        />
        <NavLinks
          isDarkMode={isDarkMode}
          todos={todos}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
