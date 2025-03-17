import { useEffect, useRef, useState } from "react";
import StopWatch from "./StopWatch";

function UseRefComp(){
  const [Count, setCount] = useState(0);
  let val = 1;
  
  
  let valTwo = useRef(0);
  
  function handleClick(){
    
    //this is normal value 
    val = val + 1;
    console.log("value of val is :" , val);
    
    // this is useref value
    valTwo.current = valTwo.current + 1;
    console.log("value of valTwo is :" , valTwo.current);
    
    setCount(Count +1);
  }
  useEffect(() =>{
    console.log("I am rendering on every counting");
  })

  /////////////////////////
  let btnRef = useRef();
  function changeBackground(){
      btnRef.current.style.backgroundColor = "red";
      btnRef.current.style.color = "white";

  }
  return(
    <>
    <div className="container">
      <div className="row">
        <h1>Learn UseRef In Depth React Hook</h1>
        <div className="col-lg-4 py-5 border">
          <h3 className="mb-3">A</h3>
          <p>increment : {Count}</p>
          <button className="btn btn-danger" onClick={handleClick}>click me </button>
        </div>
        <div className="col-lg-4 py-5 border text-center">
          <button className="btn mb-4 border" ref={btnRef}>Change my color</button>
          <button className="btn btn-primary" onClick={changeBackground}>Ckick me To Change above btn color</button>
        </div>
      </div>
      <div className="row text-center mt-5 py-5 border">
          <StopWatch></StopWatch>
      </div>
    </div>
    </>
  )
}
export default UseRefComp;