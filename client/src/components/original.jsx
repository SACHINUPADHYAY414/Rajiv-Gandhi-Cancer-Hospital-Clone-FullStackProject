import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaUserEdit } from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { HiNewspaper } from "react-icons/hi2";
import { ImFolderDownload } from "react-icons/im";
import { TbReportMedical } from "react-icons/tb";
import { ImUsers } from "react-icons/im";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { LuReceipt } from "react-icons/lu";
import { GrDocumentDownload } from "react-icons/gr";
import { RiBillFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import { TbUserOff } from "react-icons/tb";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../images/logo.png";

const Sidebar = ({ children, token }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const logouthandler = async () => {
    try {
      const response = await fetch("http://localhost:8080/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  const navLink = [
    { icon: <RxDashboard />, name: "Dashboard", path: "/Sidebar/Dashboard" },
    // {
    //   icon: <FaUserEdit />,
    //   name: "Take Appointments",
    //   path: "/Sidebar/TakeAppointments"
    // },
    {
      icon: <FaUserEdit />,
      name: "My Appointment",
      path: "/Sidebar/MyAppointment"
    },
    {
      icon: <ImUsers />,
      name: "InPerson Appointment",
      path: "/Sidebar/InPersonAppointment"
    },
    {
      icon: <HiNewspaper />,
      name: "View Radiology Reports",
      path: "/Sidebar/ViewRadiologyReports"
    },
    {
      icon: <TbReportMedical />,
      name: "View Lab Reports",
      path: "/Sidebar/ViewLabReports"
    },
    {
      icon: <MdOutlineMedicalInformation />,
      name: "View Discharge Summary",
      path: "/Sidebar/ViewDischargeSummary"
    },
    {
      icon: <ImFolderDownload />,
      name: "Download Prescription",
      path: "/Sidebar/DownloadPrescription"
    },
    {
      icon: <RiContactsBookUploadFill />,
      name: "Upload Document",
      path: "/Sidebar/UploadDocument"
    },
    {
      icon: <LuReceipt />,
      name: "Teleconsultation Receipt",
      path: "/Sidebar/TeleconsultationReceipt"
    },
    {
      icon: <GrDocumentDownload />,
      name: "External Doc Download",
      path: "/Sidebar/ExternalDocDownload"
    },
    { icon: <RiBillFill />, name: "Final Bill", path: "/Sidebar/FinalBill" },
    {
      icon: <FaKey />,
      name: "Change Password",
      path: "/Sidebar/ChangePassword"
    },
    {
      icon: <TbUserOff />,
      name: "Deactivate Account",
      path: "/Sidebar/DeactivateAccount"
    }
  ];

  return (
   <div className="flex bg-gray-200">
      <div className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}onClick={toggleSidebar}></div>
      <div
        className={`fixed mt-2 left-0 z-30 w-64 transition duration-300 transform bg-[#00C9A7] lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      >
        <ul className="h-full mt-6 font-bold">
          {navLink.map((link, index) => (
            <NavLink key={index} to={link.path}>
              <li
                className={`flex items-center px-3 py-4 ml-3 text-black rounded-l-lg cursor-pointer ${
                  location.pathname === link.path
                    ? "bg-[#0AD8B5] text-white ml-3 rounded-l-lg"
                    : ""
                }`}
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div className="h-screen ml-2 mt-2 flex flex-col flex-1 overflow-hidden transition-all">
        {/* Header */}
        <header className="flex items-center px-6 mr-2 py-4 bg-[#03DAC5]">
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="text-gray-500 ml-0 focus:outline-none lg:hidden"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          {/* Navbar Logo */}
          <img src={logo} alt="Logo" className="w-10 h-10" />
          {/* Company Name */}
          <h1 className="text-xl font-bold">Rajiv Gandhi Cancer Hospital</h1>
          {/* Account Icon */}
          <div className="relative ml-auto">
            <FaUser
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown}
            />
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg">
                <ul className="py-1">
                  <li className="hover:bg-gray-100">
                    <button
                      onClick={closeDropdown}
                      className="block px-2 py-2 text-sm text-gray-800 w-full text-left"
                    >
                      <NavLink to="/Sidebar/Profile">Profile</NavLink>
                    </button>
                  </li>
                  <li className="hover:bg-gray-100">
                    <button
                      onClick={logouthandler}
                      className="block px-2 py-2 text-sm text-gray-800 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-200">
          <div className="container px-6 py-8 mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;