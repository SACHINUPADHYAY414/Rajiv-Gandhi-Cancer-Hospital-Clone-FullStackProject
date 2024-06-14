import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import donateImage from '../images/donate-icon.png'; 
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    patientFamily: false,
    educationTrainings: false,
    donorsVolunteers: false
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName]
    }));
  };

  return (
    <div className="bg-white">
      {/* Banners */}
      <div className="flex justify-between items-center px-5 py-1 gap-3 bg-gray-50 sm:px-3.5 sm:before:flex-1">
        <button className='FindDoctor'>Find a Doctor</button>
        <button className='PatientOnlineService'>Patient Online Service</button>
        <button className='PayBills text-white px-1 bg-[#0074bc]  rounded-b-[4px]'>Pay Bills</button>
        <button className='donate font-bold flex mr-4 items-center'>
          <img src={donateImage} alt="Donate" className="w-6 h-6 mr-1" />
          DONATE
        </button>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-4 lg:px-8 py-4">
        <div className="flex justify-center items-center">
          <Link to="/home"><img src={logo} alt="logo" className="w-10 h-10" /></Link>
          <Link to="/home" className="text-2xl font-bold text-black ml-0 ">
            Rajiv Gandhi Cancer Institute & Research Centre
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="block text-gray-500 hover:text-black focus:text-black focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`lg:flex ${menuOpen ? 'block' : 'hidden'} items-center space-x-4 mr-4 font-bold`}>
          <li><Link to="/" className="text-black">Home</Link></li>
          <li><Link to="/Career" className="text-black">Career</Link></li>
          <li><Link to="/Blog" className="text-black">Blog</Link></li>
          <li><Link to="/ContactUs" className="text-black">Contact Us</Link></li>
          <li>
            <Link to="/login">
              <button className="px-2 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700">Book an Appointment</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className="bg-[#0074bc] text-white text-center">
        <ul className="flex justify-center space-x-10 font-medium p-3">
          <li className="main-navbar relative hover:text-red-500"> Patient & Family 
            <span className='new-dropdown ml-1 ' onClick={() => toggleDropdown('patientFamily')}>
              {dropdownStates.patientFamily ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
            </span>
            {dropdownStates.patientFamily && (
              <div className="dropdown-options absolute top-full left-0 mt-2 bg-white border border-gray-300">
                <Link to="/Blood & Marrow Stem Cell Transplantation ">Blood & Marrow Stem Cell Transplantation</Link>
                <Link to="/Chemotherapy">Chemotherapy</Link>
                <Link to="/Immunotherapy Cancer Treatment">Immunotherapy Cancer Treatment</Link>
                <Link to="/Interventional Radiology">Interventional Radiology</Link>
                <Link to="/Radiation Therapy for Cancer">Radiation Therapy for Cancer</Link>
                <Link to="/Surgery">Surgery</Link>
              </div>
            )}
          </li>

          <li className="main-navbar relative hover:text-red-500"> Education & Trainings
            <span className='new-dropdown ml-1' onClick={() => toggleDropdown('educationTrainings')}>
              {dropdownStates.educationTrainings ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
            </span>
            {dropdownStates.educationTrainings && (
              <div className="dropdown-options absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md">       
                <Link to="/educationOption1">Education Option 1</Link>
                <Link to="/educationOption2">Education Option 2</Link>
              </div>
            )}
          </li>

          <li className="main-navbar relative hover:text-red-500"> Donors & Volunteers
            <span className='new-dropdown ml-1' onClick={() => toggleDropdown('donorsVolunteers')}>
              {dropdownStates.donorsVolunteers ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
            </span>
            {dropdownStates.donorsVolunteers && (
              <div className="dropdown-options absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                <Link to="/donationOption1">Donation Option 1</Link>
                <Link to="/donationOption2">Donation Option 2</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
