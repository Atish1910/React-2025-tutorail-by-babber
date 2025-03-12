import { useParams } from "react-router-dom";

function ParamComp(){
  
  const {id} = useParams();
  return(
    <>
      <h6>param  :{id}</h6>
    </>
  )
}
export default ParamComp;