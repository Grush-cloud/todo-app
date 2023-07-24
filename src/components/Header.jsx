import "../App.css";
export default function Header({ isDarkMode, handleDarkMode }) {
  return (
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
  );
}
