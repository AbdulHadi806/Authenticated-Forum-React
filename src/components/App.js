import React from 'react'
import AuthProvider from "../context/AuthContext"

//importing components
import Dashboard from "./Dashboard"
import SignUp from "./Signup"
import Login from "./Login"
import ProtectedRoute from './PrivateRoute'
import ForgotPassword from "./ForgotPassword"

// importing react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <><AuthProvider>
         <Router>
          <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route path='/SignUp' element ={<SignUp />}></Route>
          <Route path ='/Login' element = {<Login />}></Route>
          <Route path ='/forgotpassword' element = {<ForgotPassword />}></Route>
          </Routes>
         </Router>
      </AuthProvider>
    </>
  );
}

export default App;
