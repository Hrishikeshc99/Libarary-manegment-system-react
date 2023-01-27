import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  link,
  Switch,
  Routes,
} from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";

//navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "/home/hrishikeshc/Library Management System/my-app/src/index.css";
import navlogo from "/home/hrishikeshc/Library Management System/my-app/src/logo.jpg";

import { useState, useEffect } from "react";
import Dashboarddemo from "./Dashboarddemo";
import Addbookform from "./Addbookform";
import Example from "./Example";
// import { AppBar, Toolbar, Typography } from "@mui/material";
// import './App.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import '/home/hrishikeshc/Library Management System/my-app/src/index.css';
// import navlogo from '/home/hrishikeshc/Library Management System/my-app/src/logo.jpg';

const App = () => {

  return (
    <>

      <Router>
        <Routes>
          {/* <switch>  */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/addform" element={<Addbookform />} />
          <Route exact path="/example" element={<Example />} />

          {/* </switch>  */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
