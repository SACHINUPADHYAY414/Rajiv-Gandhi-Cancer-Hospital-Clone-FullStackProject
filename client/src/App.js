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
        <Route path="/login" element={<><Nav /><Login handleLogin={handleLogin} /></>} /> 
        <Route path="/signup" element={<><Nav /><Signup setMobileNumber={setMobileNumber} setUserExists={setUserExists}/></>} />
        <Route path="/otp" element={<><Nav /><Otp userExists={userExists} /></>} />
        <Route path="/password" element={<><Nav /><Password username={mobileNumber}/></>} />
        <Route path="/deactive" element={<><Nav /><Deactivate /></>} />
        <Route path="/forgetpassword" element={<><Nav /><ForgotPassword /></>} />
        <Route path="/patient" element={<Patients setId={setId} token={token}/>} />
        <Route path="/ContactUs" element={<><Nav /><ContactUs /></>} />
        <Route path="/Blog" element={<><Nav /><Blog /></>} />
        {/* Pass isAuthenticated prop to PrivateRouteSidebar */}
        <Route path="/Sidebar/*" element={<PrivateRouteSidebar token={token} id={id} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
// import TelemedicineAppointment from './pages/TelemedicineAppointment';
// import InPersonAppointment from './pages/InPersonAppointment';
// import MyAppointment from './pages/MyAppointment';
// import ViewRadiologyReports from './pages/ViewRadiologyReports';
// import ViewLabReports from './pages/ViewLabReports';
// import ViewDischargeSummary from './pages/ViewDischargeSummary';
// import DownloadPrescription from './pages/DownloadPrescription';
// import UploadDocument from './pages/UploadDocument';
// import TeleconsultationReceipt from './pages/TeleconsultationReceipt';
// import FinalBill from './pages/FinalBill';
// import ExternalDocDownload from './pages/ExternalDocDownload';
// import ChangePassword from './pages/ChangePassword';
// import DeactivateAccount from './pages/DeactivateAccount';
// import TakeAppointments from './pages/TakeAppointments';

// const PrivateRouteSidebar = () => {
 

//   return (
//     <Sidebar>
//       <Routes>
//         <Route path="/Dashboard" element={<Dashboard />} />
//         <Route path="/Profile" element={<Profile />} />
//         <Route path="/TakeAppointments" element={<TakeAppointments />} />
//         <Route path="/TelemedicineAppointment" element={<TelemedicineAppointment />} />
//         <Route path="/InPersonAppointment" element={<InPersonAppointment />} />
//         <Route path="/MyaAppointment" element={<MyAppointment />} />
//         <Route path="/ViewRadiologyReports" element={<ViewRadiologyReports />} />
//         <Route path="/ViewLabReports" element={<ViewLabReports />} />
//         <Route path="/ViewDischargeSummary" element={<ViewDischargeSummary />} />
//         <Route path="/DownloadPrescription" element={<DownloadPrescription />} />
//         <Route path="/UploadDocument" element={<UploadDocument />} />
//         <Route path="/TeleconsultationReceipt" element={<TeleconsultationReceipt />} />
//         <Route path="/FinalBill" element={<FinalBill />} />
//         <Route path="/ExternalDocDownload" element={<ExternalDocDownload />} />
//         <Route path="/ChangePassword" element={<ChangePassword />} />
//         <Route path="/DeactivateAccount" element={<DeactivateAccount />} />
//       </Routes>
//     </Sidebar>
//   );
// }

// export default PrivateRouteSidebar;
