import { useState } from "react";

function DataTravel(props){

  return(
    <>
      <div className="container">
        <div className="row justify-content-center text-center">
          <h1>State Lifting Data From Child To Parent </h1>
          <div className="col-lg-4 p-5 border">
            <input type="text" onChange={(e)=>props.setHeadName(e.target.value)} />
            <p>i am inside Child Component here is input text : {props.headName}</p>
            <p>{props.children}</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default DataTravel;