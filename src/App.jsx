
import Header from "./Components/header";
import { Outlet } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext";
import ThemeContextProvider from "./contexts/ThemeContextProvider";
function App() {
 

  return (
    <>
      <ThemeContextProvider >
      <Header />
      <Outlet/>
      </ThemeContextProvider>
    </>
  );
}

export default App;
