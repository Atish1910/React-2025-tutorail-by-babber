import { Outlet, useNavigate } from "react-router-dom";

function Dashboard(){
  
  const navigate = useNavigate();
  function handleCick(){
    navigate("/")  // redirect to home
  }
  function handleCick2(){
    navigate("/about");
  }
  return(
    <>
    <h6>DashBoard</h6>
    <p>consectetur adipisicing elit. Voluptas doloremque consectetur adipisicing elit. Incidunt soluta, unde ut quaerat qui sequi. Ipsam unde consectetur provident optio facere, cupiditate adipisci aliquid vel consequatur, ex quae dignissimos ut?</p>
    <button className="btn btn-primary" onClick={handleCick}>Move to Home</button>
    <button className="btn btn-secondary" onClick={handleCick2}>Move to ABout us</button>
    
    <Outlet></Outlet>
    </>
  )
}
export default Dashboard;