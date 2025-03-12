import { Link, NavLink } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";

function Navbar(){
  return(
    <>
      <div className="row">
        <ul className="d-flex justify-content-around align-items-center style-unstyle">
          <li><NavLink className={({isActive}) => isActive ? "active-link": "nav-link"} to="/">Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "active-link": "nav-link"} to="/about">About</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "active-link": "nav-link"} to="/dashboard">Dashboard</NavLink></li>
          
        </ul>
      </div>
    </>
  )
}
export default Navbar;