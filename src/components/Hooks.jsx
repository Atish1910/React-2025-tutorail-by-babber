import { use, useEffect, useState } from "react";

function Hooks(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  
  // first -> side-effect logic
  // SECOND -> cLEAN UP FUNCTION
  // thirds -< Comma Sparated dipendency 

  // veriaton 1: the alret is render on every dom loading activity
  // useEffect(() =>{
  //   alert("I will Run On every Render");
  // })

  // veriation 2 : it ll render only for 1st time
  // useEffect(() =>{
  //   alert("I ll render only 1st Dom Loading")
  // }, [])

  // veriation 2 : it ll render only for 1st time
  useEffect(() =>{
    alert("I ll render when count value ll update")
  }, [count])
  
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Hooks</h1>
          </div>
          <div className="col-lg-4 py-5 border">
            <button onClick={handleClick} className="btn btn-secondary">Click me</button>
            <h5>I will Run On every Render</h5>
            <p>{count}</p>
          </div>
          <div className="col-lg-4 py-5 border">
            <button onClick={handleClick} className="btn btn-secondary">Click me</button>
            <p>{count}</p>
          </div>
          <div className="col-lg-4 py-5 border">
            <button onClick={handleClick} className="btn btn-secondary">Click me</button>
            <p>{count}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hooks;