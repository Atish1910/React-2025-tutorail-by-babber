

// function Card({name}){
function Card(props){
  return(
    <>
    <div className="container">
      <div className="row text-center">
        <h1>03 : Props </h1>
        <small>how to pass data from app.jsx to current component parent to child</small>
        <small>besically we can perform event handelling & nestted data fetcing from app.jsx to child.jsx</small>
        <div className="col-lg-12">
          {/* <h6>{name}</h6> */}
          <h6>{props.children}</h6>
        </div>
      </div>
    </div>
    </>
  )
}
export default Card;


// how to pass data from app.jsx to current component (parent to child)
// steps to use props in react
// when we calling object inside app.jsx we can define anything (name, discription , img) attribute and call that attribute inside child component useing props
// to access that veriable in function write props as paramenter
// if you want to fetch name go to h6 tag {prps.attribute} the data will automatically fetch
// in src tag do same oprtn 