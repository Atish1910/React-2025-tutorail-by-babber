import { useNavigate } from "react-router-dom";

function Home(){

  const navigate = useNavigate();
  function handleClick(){
    navigate("/about")
  };
  
  function handleClick2(){
    navigate("/dashboard")
  };
  return(
    <>
    <h6>Home</h6>
    <p>lor sit amet consectetur adipisicing elit. Non totam dolore nulla minima recusandae omnis dolor. Ab facere labore iusto quos nam perferendis mollitia ex laborum animi, quasi modi nobis? Lorem, ipsum dolor sit amet consectetur  Blanditiis, dolorum.</p>
    <button className="btn btn-danger" onClick={handleClick}>Move to ABout page</button>
    <button className="btn btn-success" onClick={handleClick2}>Mve to Dashboard page</button>
    </>
  )
}

export default Home;