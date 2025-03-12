import { useContext } from "react";
import { ThemeContext } from "../Theme";
import K from "./K";

function B(){
  const {theme, setTheme} = useContext(ThemeContext)
  function toggleTheme(){
    if(theme === "red"){
      setTheme("blue");
    }else{
      setTheme("red");
    }
  }
  return(
    <>
      <button onClick={toggleTheme} className="btn btn-secondary">Change Color theme</button>
    </>
  )
}
export default B;