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
        <h6> i am Parent Xcontext </h6>
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