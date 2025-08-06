import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Otp from './components/Otp';
import Password from './components/Password';
import ForgotPassword from './components/ForgotPassword';
import Deactivate from './components/Deactivate';
import Patients from "./components/Patients";
import PrivateRouteSidebar from "./PrivateRouteSidebar";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";

function App() {
  const [id, setId] = useState(" ");
  const [token, setToken] = useState(null); 
  const [mobileNumber, setMobileNumber] = useState("");
  const [userExists, setUserExists] = useState("");


  // Function to handle login and set token
  const handleLogin = (token) => {
    setToken(token);
  };

  // Check if the user is authenticated
  const isAuthenticated = !!token;
  return (
    <div>
      <Routes>
    
        <Route index element={<><Nav /><Home /></>} />
        <Route path="/Home"element={<><Nav /><Home /></>} />
        <Route path="/login" element={<><Nav /><Login handleLogin={handleLogin} /></>} /> 
        <Route path="/signup" element={<><Nav /><Signup setMobileNumber={setMobileNumber} setUserExists={setUserExists}/></>} />
        <Route path="/otp" element={<><Nav /><Otp userExists={userExists} /></>} />
        <Route path="/password" element={<><Nav /><Password username={mobileNumber}/></>} />
        <Route path="/deactive" element={<><Nav /><Deactivate /></>} />
        <Route path="/forgetpassword" element={<><Nav /><ForgotPassword /></>} />
        <Route path="/patients" element={<Patients setId={setId} token={token}/>} />
        <Route path="/ContactUs" element={<><Nav /><ContactUs /></>} />
        <Route path="/Blog" element={<><Nav /><Blog /></>} />
        {/* Pass isAuthenticated prop to PrivateRouteSidebar */}
        <Route path="/Sidebar/*" element={<PrivateRouteSidebar token={token} id={id} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </div>
  );
}

export default App;
