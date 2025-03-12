

import { createContext, useState } from "react";
import B from "./Xchild/B";

const ThemeContext = createContext();
function Theme(){
  const [theme, setTheme] = useState("red");  


  return(
    <>
    <div className="container">
      <div className="row">

      <h6>CHnage theme from parent to child</h6>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="bg-theme" style={{backgroundColor:theme === "red" ? "red" : "black" }}>
          <B></B>
        </div>
      </ThemeContext.Provider>
      </div>
    </div>
    </>
  )
}
export  default Theme;
export {ThemeContext};