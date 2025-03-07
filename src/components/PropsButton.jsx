function Button (props){
  return(
    <>
      <p>{props.children}</p>
      <button className="btn btn-danger" onClick={props.clickEventFromParent}>
        {props.text}
      </button>
    </>
  )
}
export default Button; 


// here is a advance step of props how can we featch function(event handelling) & nested data from parent to child
// as we call compenent from parent inside that there are 3 4 sub nested content or data we write we need to fetch that data 
// go to child component and write {props.children} all data getting fetch
// same for sunction define function logic inside app.jsx and call that dunction from child.jsx
// onClick={props.handleClickEvent}
// besically we can perform event handelling & nestted data fetcing from app.jsx to child.jsx