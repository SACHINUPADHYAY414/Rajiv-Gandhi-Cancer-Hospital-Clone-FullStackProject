import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import donateImage from '../images/donate-icon.png'; 
// import logo from "../images/logo.png";
import { IoSearch } from "react-icons/io5";
// import axios from 'axios';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // const handleSearchInputChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleSearchSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/api/search', { query: searchQuery });
  //     setSearchResults(response.data);
  //   } catch (error) {
  //     console.error("Error searching:", error);
  //   }
  // };
  
  return (
    <div className="nav nav-lg">
      <div className="justify-end items-center flex px-5 p-0.5 gap-3 border-b border-blue-100 bg-gray-50">
        <button className='FindDoctor'>
          <a href="https://www.rgcirc.org/find-a-doctor/">Find a Doctor</a>
        </button>
        <button className='PatientOnlineService'>
          <a href="https://portal-rgci.parashmis.in/">Patient Online Service</a> 
        </button>
        <button className='PayBills text-white px-1 bg-[#0074bc] rounded-b-[4px]'>     
          <a href=" https://www.rgcirc.org/billpay/"> Pay Bills</a> 
        </button>
        <button className='donate font-bold flex mr-4 items-center'>
          <img src={donateImage} alt="Donate" className="w-6 h-6 mr-1" />
          <a href=" https://www.rgcirc.org/donors-and-volunteers/domestic-donation/DONATE"> DONATE</a> 
        </button>
      </div>

      <div className="flex justify-between items-center px-4 lg:px-20 py-4">
        <div className="flex justify-center items-center">
          {/* <Link to="/home"><img src={logo} alt="logo" className="w-10 h-10" /></Link> */}
             <a className="" href="http://localhost:3000/">
              <img src="https://www.rgcirc.org/wp-content/uploads/2023/10/RGCIRC-logo.svg" alt="logo" />
            </a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="block text-gray-500 hover:text-black focus:text-black focus:outline-none">
            <IoSearch onClick={toggleSearch} />
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
        {/* {searchOpen && (
          <div>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button type="submit">Search</button>
            </form>
            <div>
              {searchResults.map(result => (
                <div key={result._id}></div>
              ))}
            </div>
          </div>
        )} */}
        <ul className={`lg:flex ${menuOpen ? 'block' : 'hidden'} items-center space-x-4 mr-4 font-bold`}>
          <li><Link to="/" className="text-black">Home</Link></li>
          <li><Link to="/Career" className="text-black">Career</Link></li>
          <li><Link to="https://www.rgcirc.org/blog/" className="text-black">Blog</Link></li>
          <li><Link to="https://www.rgcirc.org/contact-us/" className="text-black">Contact Us</Link></li>
          <li className="cursor-pointer"><IoSearch onClick={toggleSearch} /></li>
          <li>
            <Link to="#">
              <button className="px-2 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700">Book an Appointment</button>
            </Link>
          </li>
        </ul>
      </div>

      <nav className="bg-[#0074bc] text-white text-right px-4 py-4">
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-black focus:text-black focus:outline-none">
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
        <ul className={`lg:flex ${menuOpen ? 'block' : 'hidden'} justify-center items-center font-bold px-4 gap-5 p-2 py-4 lg:p-0`}>
          <li><Link to="/Patient & Family" className="text-white">Patient & Family</Link></li>
          <li><Link to="/Education & Trainings" className="text-white">Education & Trainings</Link></li>
          <li><Link to="/Donors & Volunteers" className="text-white">Donors & Volunteers</Link></li>
          <li><Link to="/Clinical Service" className="text-white">Clinical Service</Link></li>
          <li><Link to="/Biorepository" className="text-white">Biorepository</Link></li>
          <li><Link to="/Clinical Trails" className="text-white">Clinical Trails</Link></li>
          <li><Link to="/Research" className="text-white">Research</Link></li>
          <li><Link to="/Other Links" className="text-white">Other Links</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
