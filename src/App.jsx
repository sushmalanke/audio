import React from "react";
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import  SignInPage from './pages/signinpage/SignInPage';
import SignUpPage from './pages/signuppage/SignUppage';


function App() {
  return (
    <React.Fragment>
      
    <Routes>
      <Route path="/" element={<SignInPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
  </React.Fragment>
  );
}

export default App;
