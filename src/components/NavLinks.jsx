export default function NavLinks({
  isDarkMode,
  todos,
  isClicked,
  setIsClicked,
  handleClearCompleted,
}) {
  return (
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
  );
}
