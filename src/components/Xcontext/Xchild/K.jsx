import { useContext } from "react";
import { XuserContext } from "../Xcontext";

function K(){
  const Xuser = useContext(XuserContext)
  return(
    <>
      <h6>hi i am learning use Context Hooks</h6>
      <p>Props Drilling granbdparents can share data in grand child without </p>
      <p>Designation : {Xuser.designation}</p>
    </>
  )
}

export default K;