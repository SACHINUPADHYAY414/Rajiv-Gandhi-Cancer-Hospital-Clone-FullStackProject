// import React from 'react'

// export default function Damo() {
    
//   return (
//     <body id="body-pd">
//       <nav class="navbar navbar-default no-margin">

//       <div class="navbar-header fixed-brand">
//          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
// <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>
// </button>
//          <a class="navbar-brand" href="#"><i class="fa fa-rocket fa-4"></i> M-33</a>
//       </div>

//       <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//          <ul class="nav navbar-nav">
//             <li class="active">
//                <button class="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>
//                </button>
//             </li>
//          </ul>
//       </div>
  
//    </nav>
//    <div id="wrapper">

//       <div id="sidebar-wrapper">
//          <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
//             <li class="active">
//                <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-dashboard fa-stack-1x "></i></span> Dashboard</a>
//                <ul class="nav-pills nav-stacked" style="list-style-type:none;">
//                   <li><a href="#">link1</a></li>
//                   <li><a href="#">link2</a></li>
//                </ul>
//             </li>
//             <li>
//                <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>Shortcut</a>
//                <ul class="nav-pills nav-stacked" style="list-style-type:none;">
//                   <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>link1</a></li>
//                   <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>link2</a></li>
//                </ul>
//             </li>
//             <li>
//                <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-cloud-download fa-stack-1x "></i></span>Overview</a>
//             </li>
//             <li>
//                <a href="#"> <span class="fa-stack fa-lg pull-left"><i class="fa fa-cart-plus fa-stack-1x "></i></span>Events</a>
//             </li>
//             <li>
//                <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-youtube-play fa-stack-1x "></i></span>About</a>
//             </li>
//             <li>
//                <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-wrench fa-stack-1x "></i></span>Services</a>
//             </li>
//             <li>
//                <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-server fa-stack-1x "></i></span>Contact</a>
//             </li>
//          </ul>
//       </div>

//       <div id="page-content-wrapper">
//          <div class="container-fluid xyz">
//             <div class="row">
//                <div class="col-lg-12">
//                   <h1>Simple Admin Sidebar With Bootstrap by <a href="http://http://codepen.io/hughbalboa/">@hughbalboa</a></h1>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laudantium nobis cum dignissimos ex inventore, velit blanditiis. Quod laborum soluta quidem culpa officia eligendi, quam, recusandae iste aliquid amet odit! </p>
//                </div>
//             </div>
//          </div>
//       </div>
  
//    </div>


// </body>
//   )
// }




import React, { useState } from 'react';
import { NavLink,useNavigate} from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { HiNewspaper } from "react-icons/hi2";
import { ImFolderDownload } from "react-icons/im";
import { TbReportMedical } from "react-icons/tb";
import { ImUsers } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { LuReceipt } from "react-icons/lu";
import { GrDocumentDownload } from "react-icons/gr";
import { RiBillFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import { TbUserOff } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const clickAccount = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  const Dashboard = () => {
    navigate("/Dashboard");
  };
  return (
    <div className="h-full flex">
      
      
      {/* Sidebar */}
      <nav className=" h-full font-bold bg-gradient-to-l from-[#70e2be]  to-[#0ac269] to-90% ...0 shadow-lg text-white">
        <ul className=" h-full bg-gradient-to-l from-[#70e2be]  to-[#0ac269] to-90% ...0 shadow-lg text-white">
          <NavLink to="/Dashboard">
          <li className=" flex items-center px-4 py-4  text-whiterounded-md hover:bg-gradient-to-r from-[#70e2be] to-[#0ac269]  hover:text-gray-800 transition-color cursor-pointer" >
            <FaUserEdit  className="mr-2"/> 
            Telemedicine Appointment
            </li> 
          </NavLink>

          <NavLink to="/InPersonAppointment" >
            <li className='flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer '>
              <ImUsers className="mr-2" />
              InPerson Appointment
            </li>
          </NavLink>

            <NavLink to="/ViewRadiologyReports"  >
            <li className="flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <HiNewspaper  className="mr-2"/>
             View Radiology Reports
            </li>
            </NavLink>

            <NavLink to="/ViewLabReports">
            <li className="flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <TbReportMedical  className="mr-2" /> 
            View Lab Reports
            </li>
            </NavLink>

            <NavLink to="/ViewDischargeSummary">
            <li className="flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <MdOutlineMedicalInformation  className="mr-2"/> 
            View Discharge Summary
            </li>
            </NavLink>

            <NavLink to="/DownloadPrescription">
            <li className="flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <ImFolderDownload  className="mr-2" /> 
            DownloadPrescription
            </li>
            </NavLink>

            <NavLink to="/UploadDocument">
            <li className="flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <RiContactsBookUploadFill  className="mr-2"/> 
            Upload Document
            </li>
            </NavLink>

            <NavLink to="/TeleconsultationReceipt">
            <li className=" flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <LuReceipt  className="mr-2"/>
            Teleconsultation Receipt
            </li>
            </NavLink>

            <NavLink to="/ExternalDocDownload">
            <li className=" flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <GrDocumentDownload  className="mr-2" /> 
            External Doc Download
            </li>
            </NavLink>

            <NavLink to="/FinalBill">
            <li className="flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <RiBillFill  className="mr-2" />  
            Final Bill
            </li>
            </NavLink>

            <NavLink to="/ChangePassword">
            <li className=" flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <FaKey  className="mr-2" />
            Change Password
            </li>
            </NavLink>

            <NavLink to="/DeactivateAccount">
            <li className="flex items-center px-4 py-4 text-white hover:bg-[#4fd1c5] hover:text-black cursor-pointer">
            <TbUserOff className="mr-2"/>
            Deactivate Account
            </li>
            </NavLink>

            <button className="flex items-center px-4 py-4 pb-4 text-white cursor-pointer" onClick={handleLogout} > 
            <TbUserOff  className="mr-2" />  
            Logout
            </button>
          </ul>
        </nav>

        <div>
                <main className="flex-grow bg-white text-[#005457] overflow-x-auto">
                    {children}
                </main>
        </div> {/* Main Content */}     
    </div>
  );
}

export default Sidebar;