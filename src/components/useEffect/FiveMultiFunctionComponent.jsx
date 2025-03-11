import { useEffect, useState } from "react";

function MultiFunctionComp(){
  const [count, setCount] = useState(0);
  useEffect(() =>{
    alert("Count is updating ", count);

  }, [count]);

  const [seconds, setSeconds] = useState(0);
  useEffect(() =>{

    const intervalId = setInterval(() => {
      console.log("Set interval Started")
      setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000);

    return () =>[

    ];
  }, [])
  return(
    <>
    <div className="d-flex justify-content-center align-items-center pb-5">
        <p className="pe-4">Count {count}</p>
        <button onClick={() => setCount(count + 1)} className="btn btn-danger">Counter</button>
    </div>
        <h4>{seconds} : seconds</h4>
    </>
  )
}

export default MultiFunctionComp;