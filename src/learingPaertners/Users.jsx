import axios from "axios";
import React, { useState } from "react";

const Users = () =>{

    // fetching data from api
    const [userData, setUser] = useState([]);
    const getUsers = async () =>{
        try {
            const res = await axios.get("https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
            setUser(res.data.data);
            
        } catch (error) {
            console.log("Here is we get error". error);
        }
    }

    // create a new user in api 
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
        setUserObj(oldObj => ({...oldObj, [key]: event.target.value}));
    }
    const onSaveUser = async () =>{
        debugger
        const res = await axios.post("https://projectapi.gerasim.in/api/BudgetPlanner/AddNewUser", userObj);
        setUserObj(res.data.data);
        if(res.data.result){
            alert("You have successfully Create a new User");
        }
        else{
            alert(res.data.message);
        }
    }

    // This is Data that I Am fetching from general URL
    const [userList, setUserList] = useState([]);
    const getUsersData = async () =>{
        try {
            const APIcall = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserList(APIcall.data);
            
        } catch (error) {
            console.log("Here is we get error". error);
        }
    }
    // This is Data that I Am fetching from general URL

    // Edit data
    const editUserData = (data) =>{
        setUserObj(data);
    }

    return(
        <section>

        
<div className="container-fluid border mt-5">
            <div className="row p-5">
                <h4>API Call GET & Post</h4>
                <div className="col-lg-8">
                    <div className="row bg-success align-items-center py-3">
                        <div className="col-lg-6">
                            <h5 className="text-white text-start">Get Users</h5>
                            
                        </div>
                        <div className="col-lg-6 text-end">
                            <button className="btn btn-primary" onClick={getUsers}>Load Users</button>
                        </div>
                    </div>
                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Full Name</th>
                                    <th>Date</th>
                                    <th>Update / Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((user, index)=>{
                                        return(
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{user.userName}</td>
                                                <td>{user.emailId}</td>
                                                <td>{user.fullName}</td>
                                                <td>{user.createdDate}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => editUserData(data)}>Edit</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>

                                            </tr>
                                        )
                                    } )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-lg-4 ps-3 border">
                <div className="row bg-warning  align-items-center py-3 mb-5">
                        <div className="col-lg-12">
                            <h5 className="text-white text-center">Create User</h5>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mb-3">
                            <input value={userObj.userName} type="text"onChange={(event) => updateFormValue(event, "userName")} className="form-control" placeholder="User Name"/>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <input value={userObj.emailId} type="email"onChange={(event) => updateFormValue(event, "emailId")} className="form-control" placeholder="Email"/>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <input value={userObj.fullName} type="text"onChange={(event) => updateFormValue(event, "fullName")} className="form-control" placeholder="Full Name"/>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <input value={userObj.role} type="text"onChange={(event) => updateFormValue(event, "role")} className="form-control" placeholder="Roll"/>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <input value={userObj.password} type="password"onChange={(event) => updateFormValue(event, "password")} className="form-control" placeholder="Password"/>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <input value={userObj.projectName} type="text"onChange={(event) => updateFormValue(event, "projectName")} className="form-control" placeholder="Roll"/>
                        </div>
                        <div className="text-center">
                            <button class="btn btn-warning" onClick={onSaveUser}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {/* //////////////////////////////////////////////////// */}
        <div className="container border mt-5">
            <div className="row p-5">
                <h4>API Call GET & Post</h4>
                <div className="col-lg-12">
                    <div className="row bg-success align-items-center py-2">
                        <div className="col-lg-6">
                            <h5 className="text-white text-start">Get Users</h5>
                        </div>
                        <div className="col-lg-6  text-end">
                            <button className="btn btn-primary" onClick={getUsersData}>Load Users</button>
                        </div>
                    </div>
                    <div className="row">
                        <table className="table table-bordered">
                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>Address</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList.map((user) =>{
                                        return(
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td><a target="_blank" href={user.website}>{user.website}</a></td>
                                                <td>{user.address.street},{ user.address.street2},{ user.address.city},{ user.address.zipcode}</td>
                                                <td>{ user.address.geo.lat},{user.address.geo.lng}</td>
                                            </tr>

                                        );
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Users;