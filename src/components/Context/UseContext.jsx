import { createContext } from "react";
import ChildA from "./child/ChildA";
import { useState } from "react";
import ChildC from "./child/ChildC";

// steps 1: Create Context
const UserContext = createContext();
// step 2 : Wrap All Child inside a provider
// step 3 : PAss The Value
// Step 4 : consumder ke ander ja ke consume karlo

function UseContext(){

  const [user, setUser] = useState({name : "Atishhhhhh"});

  return(
  
  <>
      <div className="container">
        <div className="row text-center">
          <h1>Learn useContext Hook in Depth</h1>
          <UserContext.Provider value={user }>
            <ChildC></ChildC>
          </UserContext.Provider>
        </div>
      </div>
    </>
  )
}
export default UseContext;
export {UserContext};