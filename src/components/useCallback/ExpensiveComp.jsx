import { useCallback, useEffect, useRef, useState } from "react";
import { set } from "react-hook-form";

function ExpensiveComp(){
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const prevrousFunction = useRef(null)
  const expensiveCalculation = useCallback(() =>{
    console.log("Renning Expensive Calculation...");
    let result = 0;
    for(let i = 0; i < 10000000; i++){
      result += 1;
    }
    return result;
  },[count]);

  useEffect(() =>{
    if(prevrousFunction.current){
      if(prevrousFunction.current === expensiveCalculation){
        console.log("function not re renderd")
        console.log("function not re renderd")
      }else{
        console.log("function re renderd")
      }

    }else{
      prevrousFunction.current = expensiveCalculation;
    }
  }, [expensiveCalculation])
  
  return(
    <>
      <div className="row border border-dark py-5 ">
        <h2>Expensive Calculation useing useCallback Hook</h2>
        <p>{count}</p>
        
        <div className="">
          <input 
            type="text"
            className=""
            value={text}
            onChange={(e) =>setText(e.target.value)}
            placeholder="Type Something"
          />
          <p>Expensive Caluclation Results : {expensiveCalculation()}</p>
          <div className="">
            <button className="btn btn-warning" onClick={() => setCount(count + 1)}>button1</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default ExpensiveComp;