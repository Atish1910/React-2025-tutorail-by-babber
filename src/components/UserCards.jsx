import React from "react";
import icons from "../assets/img/icons/1.webp";

function UserCards(props){
return(
<>
  <div className="col-lg-4">
    <div className="py-5 px-3 border border-dark rounded-3">
      <img src={props.img} alt="" height="50px" />
      <h5 className="text-center ">{props.name}</h5>
      <p>{props.discription}</p>
    </div>
  </div>
    
</>
)
}

export default UserCards