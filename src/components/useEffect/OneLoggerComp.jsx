import { useEffect, useState } from "react"

function LoggerCompo(){

  const[count, setCount] = useState(0);
  useEffect(() =>{
    alert( "Counter will update on every render" ,count);
  })

  return(
    <>
      <p>Counter will upadte value on each render</p>
      <button className="btn btn-primary" onClick={() => setCount(count+2)}>Update Counter</button>
      <p>{count}</p>      
    </>
  )
}

export default LoggerCompo;