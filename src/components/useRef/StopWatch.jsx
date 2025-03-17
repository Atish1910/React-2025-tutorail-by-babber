import { useRef, useState } from "react";
import { set } from "react-hook-form";

function StopWatch(){
  const [time, setTime] = useState(0);
  
  let timeRef = useRef(null);

  function startTimer(){
    timeRef.current = setInterval(() =>{
      setTime(time => time + 1)
    }, 1000)
  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current = null;

  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  return(
    <>
      <h3>Stop watch Application</h3>
      <h6>{time} : Seconds</h6>
      <div className="">
        <button className="btn btn-primary" onClick={startTimer}>Start</button>
      </div>
      <div className="py-3">
        <button className="btn btn-secondary" onClick={stopTimer}>Stop</button>
      </div>
      <div className="">
        <button className="btn btn-success" onClick={resetTimer}>Reset</button>
      </div>
    </>
  )
}

export default StopWatch;