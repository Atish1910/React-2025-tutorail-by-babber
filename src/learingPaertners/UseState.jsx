import React, { use, useState } from 'react';


const UseState = () =>{

    // on this button click text is not changing it will change but not able to displAY, it will display in console
    let courseName = "Learn React";
    const changeCourse = () =>{
        courseName = "Angular";
        console.log(courseName);
    }

    let [myName, setMyName] = useState("K")
    const changeMyName = () => {
        setMyName("Ashish K");
    }

    let [rollNo, setRollNo] = useState(142127);
    const changeRollNo = (e) =>{
        setRollNo(e.target.value);
    } 

    let[city, setCity] = useState("mumbai");
    const changeCity = (e) =>{
        setCity(e.target.value)
    }

    let[isActive, setIsActive] = useState(false);
    const changeIsActive = (e) =>{
        setIsActive(e.target.checked)
    }





    return(
        <section className="container">
                    <h6>Hey I Am Learning UseState</h6>
            <div className="row">
                <div className="col mb-4 py-5 border">
                    <p>{courseName}</p>
                    <button className='btn btn-primary' onClick={changeCourse}>Change Course Name</button>
                </div>
                <div className="col mb-4 py-5 border">
                    <p>{myName}</p>
                    <button className='btn btn-primary' onClick={() => changeMyName()}>Change Course Name</button>
                </div>
                <div className="col mb-4 py-5 border">
                    <p>{rollNo}</p>
                    <input type="text" onChange={(e) => changeRollNo(e)}></input>
                </div>
                <div className="col mb-4 py-5 border">
                    <p>{city}</p>
                    <select onChange={(e) => changeCity(e)}>
                        <option>Goa</option>
                        <option>pune</option>
                        <option>Nagpur</option>
                    </select>
                </div>
                <div className="col mb-4 py-5 border">
                    <p>{isActive ? "Active" : "De-Active"}</p>
                    <input type="checkbox" class="form-check-input" onChange={(e) => changeIsActive(e)}></input>
                </div>
            </div>
        </section>
    );
};

export default UseState;