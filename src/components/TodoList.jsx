export default function TodoList({
  filteredTodos,
  isDarkMode,
  handleToggleStatus,
  handleRemoveItem,
}) {
  return (
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
                isDarkMode ? "completed-checkbox-dark" : "completed-checkbox"
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
            <a className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
              <img src="icon-cross.svg" alt="Cross" />
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}
