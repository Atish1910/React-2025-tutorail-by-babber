import React from "react";

const ChildCallback = React.memo(
  (props) =>{
    
    console.log("I am Child Component i am of useCallback ");
    return(
      <>
        <div className="">
          <button  className="btn btn-secondary"
            onClick={props.handleClick}
          >{props.ButtonName}</button>
          {/* <div className="text-dark mt-5 border border-danger">
            <p>if we pass any name of value from parent top child it wont re render <br/> but if we pass any function React.Memo wont work our child component will re render</p></div> */}
            
        </div>
      </>
    )
  }
)
export default ChildCallback;