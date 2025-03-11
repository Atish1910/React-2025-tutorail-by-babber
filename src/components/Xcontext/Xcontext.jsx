import { createContext } from "react";
import A from "./Xchild/A";
import { useState } from "react";
import K from "./Xchild/K";

const XuserContext = createContext();

function Xcontext(){
  const [Xuser, setXuser] = useState({designation : " Web Developer"});
  return(
    <>
    <div className="container">
      <div className="row">
        <h1> i am Parent Xcontext </h1>
        {/* <A></A> */}
        <XuserContext.Provider value={Xuser}>
          <K></K>
        </XuserContext.Provider>
      </div>
    </div>
    </>
  )
}

export default Xcontext;
export {XuserContext};