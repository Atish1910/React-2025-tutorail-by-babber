import { useState } from "react";

function DataTrasferToParent(props){
  
  return(
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h1>State Lifting Data transfer From Child To Parents</h1>
          <div className="col-lg-4">
            <input type="text" onChange={(e) => props.setName(e.target.value)} />
            <p>i am inside child Component and vaue of name is {props.name}</p>
            <p>{props.children}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DataTrasferToParent;