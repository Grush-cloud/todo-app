import { useState } from "react";
import "./App.css";

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
      <div id="img-container">
        <img
          className="header-img"
          src={isDarkMode ? "bg-desktop-dark.jpg" : "bg-desktop-light.jpg"}
          alt="Background Image"
        />
        <div className="header-container">
          <h1 className="header-text">TODO</h1>
          <a onClick={handleDarkMode}>
            <img
              className="header-icon"
              src={isDarkMode ? "icon-sun.svg" : "icon-moon.svg"}
            />
          </a>
        </div>
      </div>

      <div className="todo-container">
        <form onSubmit={handleOnClickAdd}>
          <div className="input-wrapper">
            <input
              type="text"
              value={todoItem}
              placeholder="Create a new todo..."
              className={isDarkMode ? "todo-input-dark" : "todo-input"}
              onChange={handleOnchange}
            />
            <button
              className={isDarkMode ? "add-button-dark" : "add-button"}
            ></button>
          </div>
        </form>

        <div className="todo-list">
          {filteredTodos.map((item) => (
            <div
              className={isDarkMode ? "todo-item-dark" : "todo-item"}
              key={item.id}
            >
              <span className="completed-span">
                <input
                  type="checkbox"
                  className={
                    isDarkMode
                      ? "completed-checkbox-dark"
                      : "completed-checkbox"
                  }
                  checked={item.status}
                  onChange={() => handleToggleStatus(item.id)}
                />
              </span>
              <span
                className={
                  item.status === true ? "todo-text-completed" : "todo-text"
                }
              >
                {item.text}
              </span>
              <span className="remove-span">
                <a
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <img src="icon-cross.svg" alt="Cross" />
                </a>
              </span>
            </div>
          ))}
        </div>

        <div className={isDarkMode ? "links-dark" : "links"}>
          <p>{todos.filter((item) => !item.status).length} items left</p>

          <p>
            <a
              className={isClicked === "all" ? "active" : ""}
              onClick={() => setIsClicked("all")}
            >
              All
            </a>
          </p>
          <p>
            <a
              className={isClicked === "active" ? "active" : ""}
              onClick={() => setIsClicked("active")}
            >
              Active
            </a>
          </p>
          <p>
            <a
              className={isClicked === "completed" ? "active" : ""}
              onClick={() => setIsClicked("completed")}
            >
              Completed
            </a>
          </p>

          <p>
            <a onClick={handleClearCompleted}>Clear Completed</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
