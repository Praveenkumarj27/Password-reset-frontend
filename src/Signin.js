import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "./config";


function Signin() {
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const register =await axios.post( `${config.api}/register`, values);
        alert(register.data.message);
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <div className="col-lg-12">
        <h2>Register Page</h2>
        <div className="row" style={{marginLeft:"200px", marginTop:"75px"}}>
          <form onSubmit={formik.handleSubmit}>
            <div class="col-lg-5">
              <label for="username" class="form-label mt-2">
                UserName:
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div class="col-lg-5">
              <label for="exampleInputEmail1" class="form-label mt-2">
                Email address:<span id="emailHelp" class="form-text">
                        (We'll never share your email with anyone else.)
              </span>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              
            </div>
            <div class="col-lg-5">
              <label for="exampleInputPassword1" class="form-label mt-2">
                Password:
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <button type="submit" class="btn btn-primary mt-3">
             
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
