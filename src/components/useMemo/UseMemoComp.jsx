import { useMemo, useState } from "react";

function UseMemoComp(){
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  // function handleClick(){
  //   setCount(count + 1);
  // }

  function expensiveTask(num){
    console.log("inside expensive task");
    for(let i = 0; i <= 1000000000; i++){
  
    }
    return num * 2;
    
  }
  let doubbleValue = useMemo(() => expensiveTask(input), [input]);
  
  


  return(
    <>
      <div className="container border py-5 text-center">
        <div className="row">
          <h1>Learn useMemo In Depth React Hook</h1>
          <div className="col-lg-4 border py-5">
            <h6 className="">{count} | Seconds</h6>
            <button className="btn btn-danger" onClick={() => setCount(count + 1)}>Increment</button>
          </div>
          <div className="col-lg-4 border py-5">
            <input 
            type="text" 
            placeholder="enter Number" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} />
            <p>{doubbleValue} dobble value</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UseMemoComp;