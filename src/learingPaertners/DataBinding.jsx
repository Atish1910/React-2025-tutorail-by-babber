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
        <div className="text-center">
            <h4>Data Binding</h4>
            <input type="text" value={tutorialsName} />

            <table>
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
    );
};

export default DataBinding;