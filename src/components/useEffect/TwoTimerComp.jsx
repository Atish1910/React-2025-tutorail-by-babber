import { useEffect, useState } from "react";

function TimerComp(){
  const [seconds, setSeconds] = useState(0);
  useEffect(() =>{
    const intervalId = setInterval(() => {
      console.log("set Interval Executed");
      setSeconds(prevSeconds => prevSeconds +1)
    }, 1000);

    return () =>{
      console.log("Time to STop");
      clearInterval(intervalId);
    };
  }, [])
  // it will render only on 1st render
  return(
    <>  
      <p>Timer Componenmt will add counter on every sec, if you want to stop counter comment component from app.jsx</p>
      <h1>{seconds} : seconds</h1>
    </>
  )
}
export default TimerComp;