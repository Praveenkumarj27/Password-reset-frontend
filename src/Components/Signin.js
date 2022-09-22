import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { config } from "./config";

function Signin() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const register = await axios.post(`${config.api}/register`, values);
        alert(register.data.message);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <div
        className="row "
        style={{
          background: "white",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "50px",
          marginLeft: "100px",
          marginBottom: "30px",
          marginRight: "100px",
          borderRadius:"15px"
        }}
      >
        <div className="col-lg-6" style={{ padding: "100px" }}>
          <h4>Register</h4>
          <div className="form-style">
            <form onSubmit={formik.handleSubmit}>
              <div class="col-lg-12">
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
              <div class="col-lg-12">
                <label for="exampleInputEmail1" class="form-label mt-2">
                  Email address:
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
              <div class="col-lg-12">
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
              <button type="submit" class="btn btn-primary col-lg-12 mt-3">
                Submit
              </button>

              <div class="mb-3">
                <p class="form-label mt-2">
                  Already have an account?{" "}
                  <Link style={{ textDecoration: "none" }} to="/">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div
          className="col-lg-6"
          style={{ paddingTop: "100px", paddingLeft: "50px" }}
        >
          <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
