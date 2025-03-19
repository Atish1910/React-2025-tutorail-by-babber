import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FormApi() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [userData, setUserData] = useState([]);
  
  const getUsers = async () => {
    try {
      const res = await axios.get("https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
      setUserData(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  const [userObj, setUserObj] = useState({
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date().toISOString(),  // Converts to 'YYYY-MM-DDTHH:mm:ss.sssZ'
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString() // 1 year from now
});

  async function saveNewUser(data) {
    debugger
    try {
      const res = await axios.post("https://projectapi.gerasim.in/api/BudgetPlanner/AddNewUser", data);
      setUserObj(res.data.data);
      if (res.data.result) {
        alert("New User Created");
        getUsers();
        reset(); // Reset form fields
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log("Error creating user: " + error.message);
    }
  }

  return (
    <>
      <section>
        <div className="container border mt-5">
          <div className="row p-5">
            <h1 className="mb-4">Form API: Validation "Get Post"</h1>
            <div className="col-lg-4 border ps-4">
              <div className="row text-center py-4">
                <h5 className="">Create Users</h5>
              </div>
              <form onSubmit={handleSubmit(saveNewUser)}>
                <div className="row text-center">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      {...register("userName", { required: "User Name is required" })}
                      className={`form-control ${errors.userName ? "is-invalid" : ""}`}
                      placeholder="User Name"
                    />
                    {errors.userName && <div className="invalid-feedback">{errors.userName.message}</div>}
                  </div>

                  <div className="col-lg-6 mb-3">
                    <input
                      type="email"
                      {...register("emailId", {
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
                      })}
                      className={`form-control ${errors.emailId ? "is-invalid" : ""}`}
                      placeholder="Email"
                    />
                    {errors.emailId && <div className="invalid-feedback">{errors.emailId.message}</div>}
                  </div>

                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      {...register("fullName", { required: "Full Name is required" })}
                      className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                      placeholder="Full Name"
                    />
                    {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
                  </div>

                  <div className="col-lg-6 mb-3">
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                      })}
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Password"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                  </div>

                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      {...register("role", { required: "Role is required" })}
                      className={`form-control ${errors.role ? "is-invalid" : ""}`}
                      placeholder="Role"
                    />
                    {errors.role && <div className="invalid-feedback">{errors.role.message}</div>}
                  </div>

                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-8 ps-5">
              <div className="row py-3 mb-2 border border-dark">
                <div className="col-lg-6 text-start">
                  <h5 className="">Get Users</h5>
                </div>
                <div className="col-lg-6 text-end">
                  <button className="btn btn-primary" onClick={getUsers}>
                    Load Users
                  </button>
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
                      <th>Role</th>
                      <th>Project Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.userName}</td>
                        <td>{user.emailId}</td>
                        <td>{user.fullName}</td>
                        <td>{user.role}</td>
                        <td>{user.projectName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default FormApi;
