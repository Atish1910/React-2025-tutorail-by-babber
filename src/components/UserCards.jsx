import React from "react";
import icons from "../assets/img/icons/1.webp";
function UserCards(){
return(
<>
  <div className="container">
    <div className="row">
      <h3>Components & Props</h3>
      <div className="col-lg-4">
        <div className="py-5 px-3 border border-dark rounded-3">
          <img src={icons} alt="" height="50px" />
          <h5>Card Title</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam. Delectus, commodi vero</p>
        </div>
      </div>
    </div>
  </div>
</>
)
}

export default UserCards