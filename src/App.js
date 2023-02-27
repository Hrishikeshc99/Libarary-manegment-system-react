import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";

import Protected from "./Protected";
// import Crud from "./Crud";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route
            exact
            path="/dashboard"
            element={<Protected Component={Dashboard} />}
          />
          {/* <Route path="/crud" element={<Crud />} /> */}

          {/* <Route exact path="/example" element={<Example />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
