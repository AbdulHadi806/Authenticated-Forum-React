import React from 'react'
import AuthProvider from "../context/AuthContext"

//importing components
import SignUp from "./Signup"
import Login from "./Login"
import Dashboard from "./Dashboard"

// importing react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <><AuthProvider>
         <Router>
          <Routes>
          <Route path='/' element ={<SignUp />}></Route>
          <Route path ='/Login' element = {<Login />}></Route>
          <Route path ='/Dashboard' element = {<Dashboard />}></Route>
          </Routes>
         </Router>
      </AuthProvider>
    </>
  );
}

export default App;
