import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FaUserEdit } from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { HiNewspaper } from "react-icons/hi2";
import { ImFolderDownload } from "react-icons/im";
import { TbReportMedical } from "react-icons/tb";
// import { ImUsers } from "react-icons/im";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { LuReceipt } from "react-icons/lu";
import { GrDocumentDownload } from "react-icons/gr";
import { RiBillFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import { TbUserOff } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import logo from '../images/logo.png';

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Rajiv Gandhi Cancer Institute & Research Centre';
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const clickAccount = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle logout
  const handleLogout = () => {
    navigate("/Login");
    
  };

  return (
    <div className="h-full w-full flex bg-emerald-100">
    {/* Sidebar */}
    
    <div className={`fixed h-full ${isSidebarOpen ? 'translate-x-0 transition-transform duration-400' : '-translate-x-full transition-transform duration-400'} ease-in-out bg-gradient-to-l from-[#70e2be] to-[#0ac269] to-90% ...0`}>
     
     <ul className=" mt-6 font-bold transition-all">
       
        <NavLink to="/Sidebar/Dashboard">
          <li
            className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/Dashboard' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <RxDashboard className="mr-2" />
             Dashboard
          </li>
        </NavLink>

        <NavLink to="/Sidebar/TakeAppointments">
          <li
            className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/TakeAppointments' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}
          >
            <FaUserEdit className="mr-2" />
            Take Appointments
          </li>
        </NavLink>

        {/* <NavLink to="/Sidebar/InPersonAppointment" >
           <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/InPersonAppointment' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
             <ImUsers className="mr-2" />
             InPerson Appointment
           </li>
         </NavLink> */}

        <NavLink to="/Sidebar/ViewRadiologyReports"  >
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/ViewRadiologyReports' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <HiNewspaper  className="mr-2"/>
            View Radiology Reports
          </li>
        </NavLink>

        <NavLink to="/Sidebar/ViewLabReports">
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/ViewLabReports' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <TbReportMedical  className="mr-2" /> 
            View Lab Reports
          </li>
        </NavLink>

        <NavLink to="/Sidebar/ViewDischargeSummary">
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/ViewDischargeSummary' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <MdOutlineMedicalInformation  className="mr-2"/> 
            View Discharge Summary
          </li>
        </NavLink>

        <NavLink to="/Sidebar/DownloadPrescription">
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/DownloadPrescription' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <ImFolderDownload  className="mr-2" /> 
            DownloadPrescription
          </li>
        </NavLink>

        <NavLink to="/Sidebar/UploadDocument">
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/UploadDocument' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <RiContactsBookUploadFill  className="mr-2"/> 
            Upload Document
          </li>
        </NavLink>

        <NavLink to="/Sidebar/TeleconsultationReceipt">
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/TeleconsultationReceipt' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <LuReceipt  className="mr-2"/>
            Teleconsultation Receipt
          </li>
        </NavLink>

        <NavLink to="/Sidebar/ExternalDocDownload">
          <li className=" flex items-center px-4 py-3 text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269]  hover:text-gray-800 transition-color cursor-pointer ">
            <GrDocumentDownload  className="mr-2" /> 
            External Doc Download
          </li>
        </NavLink>

        <NavLink to="/Sidebar/FinalBill">
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/ExternalDocDownload' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <RiBillFill  className="mr-2" />  
            Final Bill
          </li>
        </NavLink>

        <NavLink to="/Sidebar/ChangePassword">
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/ChangePassword' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <FaKey  className="mr-2" />
            Change Password
          </li>
        </NavLink>

        <NavLink to="/Sidebar/DeactivateAccount">
          <li className={`flex items-center px-4 py-3  text-black  hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269] hover:text-gray-800 transition-color cursor-pointer ${location.pathname === '/DeactivateAccount' ? 'bg-gradient-to-r from-[#70e2be] to-[#0ac269] text-gray-800' : ''}`}>
            <TbUserOff className="mr-2"/>
            Deactivate Account
          </li>
        </NavLink>
      </ul>
    </div>
   
    <div className={`h-full w-full bg-emerald-100 text-black ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Navbar */}
        <div className="flex px-2 py-4 mt-2 ml-2 mr-2 items-center bg-gradient-to-t from-[#70e2be] to-[#0ac269] to-90% ...0 shadow">
          <BiMenu className="text-white h-10 w-10 cursor-pointer" onClick={toggleSidebar} />
          <img src={logo} alt="Logo" className="w-10 h-10 ml-0" />
          <h1 className="text-xl font-bold italic text-gray-900">Rajiv Gandhi Cancer Institute & Research Centre</h1>
          <div className="ml-auto">
            <FaUserCircle className="text-black h-8 w-8 cursor-pointer" onClick={clickAccount} />
          </div>
          {showMenu && (
            <div className="absolute right-0 mt-8 bg-white text-gray-800 shadow-md" onClick={clickAccount}>
              <NavLink to="/Sidebar/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</NavLink>
              <NavLink to="/Sidebar/" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>Logout</NavLink>
            </div>
          )}
        </div>
        {/* Main Content */}
        <div className="h-screen mt-2 ml-5 relative" >
          <main className="text-black flex ">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;