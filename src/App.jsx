import AllRoute from "./Routes/Routes";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("default-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <AllRoute />
    </>
  );
}

export default App;
