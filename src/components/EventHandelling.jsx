function EventHandelling (){

  function handleClick(){
    alert("button Click By User");
  }
  function handleHoverButton(){
    alert("You Just Hover on Button")
  }
  function onInputChange(e){
      console.log("value till Now is : ", e.target.value)
  }
  function formSubmission(){
    alert("Form Submission Successful");
  }
  return(
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1>Event Handelling on Button Click</h1>
          </div>
          <div className="col-lg-4 py-5 border">
            <button className="btn btn-success" onClick={handleClick}>Button Click button</button>
          </div>
          <div className="col-lg-4 py-5 border">
            <button className="btn btn-primary" onMouseOver={handleHoverButton}>Button Hover on button</button>
          </div>
          <div className="col-lg-4 py-5 border">
            <form action="">
              <input type="text" onChange={onInputChange} />
            </form>
          </div>
          <div className="col-lg-4 py-5 border">
            <form action="" onSubmit={formSubmission}>
              <input type="text" />
              <button className="btn btn-danger" type="submit">Submit</button>
            </form>
          </div>
          <div className="col-lg-4 py-5 border">
            <button className="btn btn-success" onClick={() => alert("Button Click By USer")}>click me</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default EventHandelling;