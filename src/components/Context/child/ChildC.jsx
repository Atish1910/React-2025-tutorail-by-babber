import { useContext } from "react";
import { UserContext } from "../UseContext";

function ChildC(){
  const user = useContext(UserContext)
  return(

    <>
      {user.name}
    </>
  )
}
export default ChildC;