import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

function Form(){

  const {
      register,
      handleSubmit,
      watch,
      formState: {errors},
  } = useForm();

  function onSubmit(data){
    console.log("You just submitted form", data);
  }

  return(
    <>
    <div className="container">
      <div className="row text-center justify-content-center">
        <h1>Form In React</h1>
        <div className="col-lg-6 border py-3 rounded-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"  className={errors.firstname ? "input-errors form-control" : " form-control"} placeholder="First Name"
            
            {
              ...register("firstname",
                {
                  required:true,
                  minLength:{value:3, message: "at least 3 char"},
                  maxLength:{value:10, message: "max 10 char"}
                }
              )
            }
            />
            {
              errors.firstname && <p className="text-danger">{errors.firstname.message}</p>
            }
            
            <input type="text"  className={errors.middleName ? "input-errors form-control my-3" : " form-control my-3"} placeholder="Middle Name"  {...register("middleName", 
              {
                required: true,
                minLength:{value:3, message: "min lenght should be at least 3 char"},
                maxLength:{value:10, message: "Max Lenght is 10char only"}
                })} />
                {
                  errors.middleName && <p className="text-danger">{errors.middleName.message}</p>
                }
            <input type="number" className={errors.phone ? "input-errors form-control my-3" : " form-control my-3"} placeholder="Enter Your 10 Digit Mobile Number"{...register("phone",
              {
                required: true,
                minLength:{value:10, message: "Enter Your Valid 10 Digit Mobile"},
                maxLength:{value:10, message:"max 10 Enter Valid Number"}
              }
            )} />
            {
              errors.phone && <p className="text-danger">{errors.phone.message}</p>
            }
            <input type="text"  className={errors.lastName ? "input-errors form-control my-3" : " form-control my-3"} placeholder="Last Name"  {...register("lastName", {required: true})} />
            <button className="btn btn-success mt-4" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Form;