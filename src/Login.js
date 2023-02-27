import React, { useRef, useState } from "react";
// import loginpage from "/home/hrishikeshc/Library Management System/my-app/src/loginpage.jpg";
import "./index.css";
// import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
// import Protected from "./Protected";
// import "./demo.css"
export default function Login() {
  const Navigate = useNavigate();

  let userEvent = "";
  let passEvent = "";

  const [emailvalidation, setEmailvalidation] = useState(1);
  const [passvali, setPassvali] = useState(1);
  const [failed, setFailed] = useState("");

  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  //login submit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.current.value === "abc@gmail.com" &&
      password.current.value === "12345678"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345678");
      alert("Login Successfull..");
      Navigate("/dashboard");
      // window.location.href = "/dashboard";
    } else setFailed("wrong pass/email !");
    // alert("Login Failed..");
  };

  const uservalidation = (e) => {
    userEvent = e.target.value;
    if (userEvent.length < 13) {
      if (userEvent.length === 0) {
        setEmailvalidation(1);
      } else {
        setEmailvalidation(2);
      }
    } else {
      setEmailvalidation(1);
    }
  };

  const passvalidation = (e) => {
    passEvent = e.target.value;
    if (passEvent.length < 8) {
      if (passEvent.length === 0) {
        setPassvali(1);
      } else {
        setPassvali(2);
      }
    } else {
      setPassvali(1);
    }
  };
  return (
    <>
      <div class="main-content">
        {getEmail && getPassword ? (
          Navigate("/dashboard")
        ) : (
          <div class="wrapper">
            <div class="logo">
              <img
                src="https://e7.pngegg.com/pngimages/142/76/png-clipart-white-and-orange-book-logo-symbol-yellow-orange-logo-ibooks-orange-logo-thumbnail.png"
                alt=""
              />
            </div>

            <div class="text-center ">Book Login</div>

            <form className="p-3mt-3" onSubmit={handleSubmit}>
              <div class="form-field d-flex align-items-center">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  required="required"
                  placeholder="Username"
                  ref={email}
                  onChange={uservalidation}
                />
              </div>
              {emailvalidation === 1 ? (
                ""
              ) : (
                <ul>
                  <li style={{ color: "red" }}>Invalid Email</li>
                </ul>
              )}
              <div class="form-field d-flex align-items-center">
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  required="required"
                  placeholder="Password"
                  ref={password}
                  onChange={passvalidation}
                />
              </div>
              {passvali === 1 ? (
                ""
              ) : (
                <ul style={{ color: "red" }}>
                  <li>min 8 charhar required</li>
                </ul>
              )}
              <p
                style={{
                  color: "red",
                  fontSize: "20px",
                }}
              >
                {failed}
              </p>
              <button class="btn mt-3">Login</button>
            </form>
          </div>
        )}
      </div>
      {/* </div> */}
    </>
  );
}
