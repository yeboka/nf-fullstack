import { useContext } from "react";
import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";

// component => text about theme, button for switching

// create context
// component provider
// state for theme => light | dark
// func change theme
// useContext
// use it

// changing theme

function ThemeComponent() {
  const { theme, changeTheme } = useTheme();

  console.log(theme);

  return (
    <div className={`App ${theme}`}>
      <div className="switcher">
        <p className={`theme_text ${theme === "light" ? "darkText" : "lightText"}`}>
          {theme} theme
        </p>
        <button onClick={changeTheme} className="theme_btn">
          switch theme
        </button>
      </div>
    </div>
  );
}

function TestComponent() {
  return <div className={`light`}></div>;
}

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
