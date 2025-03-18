import React from "react";

const DataBinding = () =>{
    const tutorialsName = "ReactJs Tutorial";
    const rollNumber = 142127;
    const isActive = false;
    const currentDate = new Date();

    const student = {
        name : "Atishhh",
        city : "pune",
        state : "MH"
    };


    const cityList = ['pune', 'mumbai','nagpur'];

    
    return (
        <div className="container text-center py-5">
            <div className="row">
            <h1>Data Binding</h1>
            <input type="text" value={tutorialsName} />

            <table className="table table-bordered border-dark">
                <tr>
                    <td>Tutorial Name- {tutorialsName}</td>
                    <td>roll Number - {rollNumber}</td>
                    <td>isActive - {isActive ? "Active" : "de-Active"}</td>
                    <td>Date {currentDate.toString()}</td>
                </tr>
                <tr>
                    <td>student Name : {student.name}</td>
                    <td>student City : {student.city}</td>
                    <td>student State : {student.state}</td>
                </tr>
                <tr>
                    <td>{cityList.toString() }</td>
                </tr>
            </table>
        </div>
        </div>
    );
};

export default DataBinding;