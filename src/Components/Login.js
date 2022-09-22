import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "./config";

function Login() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const user = await axios.post(`${config.api}`, values);
        localStorage.setItem("react_app_token", user.data.token);
        alert(user.data.message);
        if (user.data.message === "Successfully Logged In!!") {
          navigate("/dashboard");
        }
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
          margin: "100px",
          marginTop: "50px",
          borderRadius:"15px"
        }}
      >
        <div className="col-lg-6" style={{ padding: "100px" }}>
          <h4>Login</h4>
          <div className="form-style">
            <form onSubmit={formik.handleSubmit}>
              <div class="col-lg-10">
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
              <div class="col-lg-10">
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
                <p className="form-label">
                  <Link
                    style={{
                      textDecoration: "none",
                      paddingLeft: "150px",
                      paddingTop: "10px",
                    }}
                    to="/resetpassword"
                  >
                    {" "}
                    Forget Password?
                  </Link>
                </p>
              </div>
              <button type="submit" class="btn btn-primary col-lg-10">
                Submit
              </button>

              <div class="mb-3">
                <p class="form-label mt-2">
                  Don't have account{" "}
                  <Link style={{ textDecoration: "none" }} to="/register">
                    Sign up
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
          <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Login;
