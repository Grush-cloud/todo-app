export default function Form({
  handleOnClickAdd,
  todoItem,
  isDarkMode,
  handleOnchange,
}) {
  return (
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
  );
}
