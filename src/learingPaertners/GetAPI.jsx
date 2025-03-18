import axios from 'axios';
import React, { useState } from 'react';

    const GetAPI = () =>{

        const [userList, setUserList] = useState([]);
        const userData = async () =>{
            const responce = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserList(responce.data);
        }
    

        const [userListtwo, setUserListttwo] = useState([]);
        const userDatattwo = async () => {
            debugger
            try {
                const responcettwo = await axios.get("https://cors-anywhere.herokuapp.com/https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
                console.log(responcettwo); // Check the API response structure
                setUserListttwo(responcettwo.data); // Remove the extra .data if not needed
            } catch (error) {
                console.error("Error fetching API 2 data:", error);
            }
        };
        

    return (
        <section>
            <div class="container border mt-5">
                <div class="row p-5">
                    <h4>API Integration</h4>
                    <div class="col-md-6">
                        <button className='btn btn-warning' onClick={userData}>Call API</button>
                        <ul>
                            {
                                userList.map((user) =>{
                                    return(
                                        <li value={user.name}>{user.name}</li>
                                    )
                                })
                            }
                          
                            
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <button className='btn btn-warning' onClick={userDatattwo}>Call API 2</button>
                        <ul>
                            {
                                userListtwo.map((user) =>{
                                    return(
                                        <li value={user.name}>{user.name}</li>
                                    )
                                })
                            }
                          
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetAPI;