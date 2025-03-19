import { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";
import ExpensiveComp from "./ExpensiveComp";

function UseCallbackComp(){
  
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() =>{
      setCount(count + 1);
  }, [count]);

  return(
    <>
      <div className="row text-center border justify-content-center">
        <h1>Learn useCallback hook with Code Examples</h1>
        <p className="text-success">there are 2 components parent and child when we do any oprn or any activity in parent component, child component gfet re render every time to minim ize this problem we use useCallback Hooks</p>
        <span>(i am parent component)</span>
        <h5>count : {count}</h5>
        <div className="">
          <button className="btn btn-primary" onClick={handleClick}>increment Me</button>
        </div>
        <div className=" col-lg-8 py-3 border border-dark my-3">
          <p>Rendering button from child component of use call back</p>
          <ChildCallback ButtonName="Click Me"></ChildCallback>
        </div>
      </div>
      <ExpensiveComp></ExpensiveComp>
    </>
  )
}

export default UseCallbackComp;