import React, { useState } from 'react';

const UseStateObject = () => {
    
    const [studentObj, setStudentObj] = useState({
        name : "Atish K",
        school : "Shree Shivaji maratha High School",
        company : "GladOwl Pvt Ltd"
    });

    const changeStudentObj = (e) =>{
        setStudentObj (oldObj => ( {...oldObj, name: e.target.value} ))
    }
    
    const changeStudentObjSchool = (e) =>{
        setStudentObj (oldObj => ( {...oldObj, school: e.target.value} ))
    }
    const changeStudentObjCompany = (e) =>{
        setStudentObj (oldObj => ( {...oldObj, company: e.target.value} ))
    }
    return (
        <section className="container">
                    <h6>Hey I Am Learning UseState</h6>
            <div className="row">
                <div className="col mb-4 py-5 border">
                    <p>{JSON.stringify(studentObj)}</p>
                        <div class="mb-3">
                            <input type="text" class="form-control" onChange={(e) =>changeStudentObj(e)} placeholder='name'/>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" onChange={(e) =>changeStudentObjSchool(e)} placeholder='Schoo Name'/>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" onChange={(e) =>changeStudentObjCompany(e)} placeholder='Schoo Name'/>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default UseStateObject;