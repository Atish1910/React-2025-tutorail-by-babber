import { useNavigate } from "react-router-dom";

function About(){

  const navitage = useNavigate();
  function handleClick(){
    navitage("/");
  }
  function handleClick2(){
    navitage("/Dashboard");
  }
  return(
    <>
    <h6>About us</h6>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore optio suscipit minus dicta eveniet mollitia minima? Excepturi molestias repellendus quo incidunt, voluptate cupiditate repellat at molestiae id optio soluta dicta.</p>
    <button className="btn btn-danger" onClick={handleClick}>Move to Home page</button>
    <button className="btn btn-success" onClick={handleClick2}>Mve to Dashboard page</button>
    </>
  )
}
export default About;