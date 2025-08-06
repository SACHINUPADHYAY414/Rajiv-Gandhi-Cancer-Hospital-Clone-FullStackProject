import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/original";
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import TelemedicineAppointment from './pages/TelemedicineAppointment';
import InPersonAppointment from './pages/InPersonAppointment';
import MyAppointment from './pages/MyAppointment';
import ViewRadiologyReports from './pages/ViewRadiologyReports';
import ViewLabReports from './pages/ViewLabReports';
import ViewDischargeSummary from './pages/ViewDischargeSummary';
import DownloadPrescription from './pages/DownloadPrescription';
import UploadDocument from './pages/UploadDocument';
import TeleconsultationReceipt from './pages/TeleconsultationReceipt';
import FinalBill from './pages/FinalBill';
import ExternalDocDownload from './pages/ExternalDocDownload';
import ChangePassword from './pages/ChangePassword';
import DeactivateAccount from './pages/DeactivateAccount';
import TakeAppointments from './pages/TakeAppointments';


const PrivateRouteSidebar = ({ isAuthenticated, Uid, token ,id }) => {
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  return (
    <Sidebar>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard Uid={Uid} token={token} id={id}/>} />
        
        <Route path="/Profile" element={<Profile  Uid={Uid} token={token} id={id} />} />
        <Route path="/TakeAppointments" element={<TakeAppointments />} />
        <Route path="/TelemedicineAppointment" element={<TelemedicineAppointment Uid={Uid} token={token} id={id} />} />
        <Route path="/InPersonAppointment" element={<InPersonAppointment Uid={Uid} token={token} id={id} />} />
        <Route path="/MyAppointment" element={<MyAppointment Uid={Uid} token={token} id={id} />} />
        <Route path="/ViewRadiologyReports" element={<ViewRadiologyReports />} />
        <Route path="/ViewLabReports" element={<ViewLabReports />} />
        <Route path="/ViewDischargeSummary" element={<ViewDischargeSummary />} />
        <Route path="/DownloadPrescription" element={<DownloadPrescription />} />
        <Route path="/UploadDocument" element={<UploadDocument />} />
        <Route path="/TeleconsultationReceipt" element={<TeleconsultationReceipt />} />
        <Route path="/FinalBill" element={<FinalBill />} />
        <Route path="/ExternalDocDownload" element={<ExternalDocDownload />} />
        <Route path="/ChangePassword" element={<ChangePassword Uid={Uid} token={token} id={id}/>} />
        <Route path="/DeactivateAccount" element={<DeactivateAccount Uid={Uid} token={token} id={id}/>} />
        
      </Routes>
      
    </Sidebar>
  );
}


export default PrivateRouteSidebar;
