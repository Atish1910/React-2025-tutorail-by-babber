import { useState } from "react";

function UseMemoComp(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return(
    <>
      <div className="container border py-5 text-center">
        <div className="row">
          <h1>Learn useMemo In Depth React Hook</h1>
          <div className="col-lg-4 border py-5">
            <h6 className="">{count} | Seconds</h6>
            <button className="btn btn-danger" onClick={handleClick}>Increment</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UseMemoComp;