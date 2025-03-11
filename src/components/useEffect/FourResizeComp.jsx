import { useEffect, useState } from "react";

function ResizeComp(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() =>{

    const handleResize = () =>setWindowWidth(window.innerWidth);
    console.log("Event Listener Added")
    window.addEventListener("resize", handleResize);
    
    return () =>{
      console.log("Event Listener End")
      window.removeEventListener("resize", handleResize);
    };
  }, [])
  return(
    <>
    <h3>window Width : {windowWidth}px</h3>
    <p>calculate width of windows and </p>
    </>
  )
}
export default ResizeComp;