import React from "react";
import AuthProvider from "./context/AuthContext";

//importing components
import Dashboard from "./components/Dashboard";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateInfo from "./components/UpdateInfo";

// importing react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/UpdateInfo" element={<UpdateInfo />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
