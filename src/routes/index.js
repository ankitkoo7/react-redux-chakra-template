import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/common/PrivateRoute";
import Home from "../views";
import Example from "../views/Example";
import { Login } from "../views/Login";

function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/example"
          element={
            <PrivateRoute>
              <Example />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;
