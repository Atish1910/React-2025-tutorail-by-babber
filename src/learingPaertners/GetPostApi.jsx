import axios from "axios";
import React, { useState } from "react";

const GetPostApi = () =>{

    /// get API call Code Start
    const [userData, setUserData] = useState([]);
    const getUserData = async () =>{
        try {
            const apiCall = await axios.get("https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
            setUserData(apiCall.data.data);
            
        } catch (error) {
            alert("Failed to featch Data From API", error);
        }
    }
    /// get API call Code End

    // Post API Call Start
    const [userObj, setUserObj] = useState(
        {
            "userId": 0,
            "userName": "",
            "emailId": "",
            "fullName": "",
            "role": "",
            "createdDate": new Date(),
            "password": "",
            "projectName": "",
            "refreshToken": "",
            "refreshTokenExpiryTime": new Date()
        }
    );
    const updateFormValue = (event, key) =>{
        setUserObj(oldObj => ({...oldObj ,[key]: event.target.value}))
    }
    const saveNewUser = async  () =>{
        
        const createUserApiCall = await axios.post("https://projectapi.gerasim.in/api/BudgetPlanner/AddNewUser", userObj);
        setUserObj(createUserApiCall.data.data);

        if(createUserApiCall.data.result){
            alert("Create a New user");
            getUserData();
        }
        else{
            alert(createUserApiCall.data.message);
        }
    }


    return(
        
    <section>
    <div className="container-fluid border mt-5">
        <div className="row p-5">
            <h4>GetPostApi : API Call GET & Post</h4>
            <div className="col-lg-8">
                <div className="row bg-success py-3 mb-2">
                    <div className="col-lg-6 text-start">
                        <h5 className="text-white">Get Users</h5>
                        
                    </div>
                    <div className="col-lg-6 text-end">
                        <button className="btn btn-primary" onClick={getUserData}>Load Users</button>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Full Name</th>
                                <th>Project Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user) =>{
                                    return(
                                        <tr>
                                            <td>{user.userId}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.emailId}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.role}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-4 border ps-4">
            <div className="row bg-warning">
                    <div className="col-lg-6">
                        <h5 className="text-white">Create Users</h5>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <input type="text" className="form-control"  onChange={(event) => updateFormValue(event, "username")} placeholder="User Name"/>
                    </div>
                    <div class="col-lg-6">
                        <input type="email" className="form-control"  onChange={(event) => updateFormValue(event, "emailId")} placeholder="Email"/>
                    </div>
                    <div class="col-lg-6">
                        <input type="text" className="form-control"  onChange={(event) => updateFormValue(event, "fullName")} placeholder="Full Name"/>
                    </div>
                    <div class="col-lg-6">
                        <input type="text" className="form-control"  onChange={(event) => updateFormValue(event, "role")} placeholder="Roll"/>
                    </div>
                    <div class="col-lg-6">
                        <input type="password" className="form-control"  onChange={(event) => updateFormValue(event, "password")} placeholder="Password"/>
                    </div>
                    <div class="col-lg-6">
                        <input type="text" className="form-control"  onChange={(event) => updateFormValue(event, "projectName")} placeholder="Project Name"/>
                    </div>
                    <button class="btn btn-warning" onClick={saveNewUser}>Submit</button>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default GetPostApi;