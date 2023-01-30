import React, { useRef, useState, useContext } from "react";
import loginpage from "/home/hrishikeshc/Library Management System/my-app/src/loginpage.jpg";
import "./index.css";
import Dashboard from "./Dashboard";
import { Navigate, useNavigate} from "react-router-dom";
import Dashboarddemo from "./Dashboarddemo";
// import{ useHistory }from "react-router-dom"

// const Failed =() =>{
//     alert("Login failed")
// }

// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function Login() {
  
  const Navigate=useNavigate()
  
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = () => {

    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
      
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
      alert("Login Successfull..");
      Navigate("/dashboard")
    } 
    else alert("Login Failed..");
  };
  return (
    <>
      {
      getEmail && getPassword ? 
        <Dashboard />: 
        // <div style={{ backgroundColor: "#ffffff", height: "100vh", width: "100%" }}>
        //   <div className="loginbody">
        <div class="wrapper">
          <div class="logo">
            <img
              src="https://e7.pngegg.com/pngimages/142/76/png-clipart-white-and-orange-book-logo-symbol-yellow-orange-logo-ibooks-orange-logo-thumbnail.png"
              alt=""
            />
          </div>

          <div class="text-center mt-4 name">Book Login</div>

          <form className="p-3mt-3" onSubmit={handleSubmit}>
            <div class="form-field d-flex align-items-center">
              <span class="far fa-user"></span>
              <input
                type="text"
                name="userName"
                id="userName"
                required="required"
                placeholder="Username"
                ref={email}
              />
            </div>
            <div class="form-field d-flex align-items-center">
              <span class="fas fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                required="required"
                placeholder="Password"
                ref={password}
              />
            </div>
            <button class="btn mt-3">Login</button>
          </form>
        </div>
        //   </div>
        // </div>
}
    </>
  );
}
