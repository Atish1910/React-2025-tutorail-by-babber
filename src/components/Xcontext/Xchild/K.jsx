import { useContext } from "react";
import { XuserContext } from "../Xcontext";

function K(){
  const Xuser = useContext(XuserContext)
  return(
    <>
      <h6>hi i am learning use Context Hooks</h6>
      <p>{Xuser.designation}</p>
    </>
  )
}


export default K;