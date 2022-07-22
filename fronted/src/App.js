import { createContext, useState } from "react";
import HomePage from "./components/Home/homepage";
import MainNavigation from "./components/navigation/main-navigation";

export const ThemeContext = createContext(null);
// {{backgroundColor:'#212121', color:"darkorange"}}
// const themes = {
//   dark: {
//     backgroundColor: '#212121',
//     color: "darkorange"
//   },

// }

function App() {
  const [theme, setTheme] = useState("light");
  const toggleThemeHandler = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleThemeHandler}}>
      <div>
        <MainNavigation />
        <HomePage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
