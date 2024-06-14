import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuHelpingHand } from 'react-icons/lu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMoneyCheckAlt, faUserMd, faTimes } from '@fortawesome/free-solid-svg-icons';
import goldLogo from '../images/goldLogo.png';
import SurgicalOncology from '../images/surgical_oncology.png';
import image1 from '../images/background.jpg';
import image2 from '../images/banner.png';
import image3 from '../images/home-banner-img2.webp';
import image4 from '../images/Conference-Detail-Image.jpg';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('file', file);

    fetch('http://192.168.25.187:8080/api/contact/submit', {
      method: 'POST',
      body: formDataToSend
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Handle success response from the server
      })
      .catch((error) => {
        console.error('There was an error!', error);
        // Handle error response from the server
      });
  };

  return (
    <div className="w-full h-full">
      {/* Home page code here */}
      <div className="bg-cover bg-no-repeat flex" style={{ backgroundImage: `url(${images[currentImageIndex]})`}}>  
        <div className="flex flex-col ml-20 items-center justify-center text-center text-white">
          <div className="h-24 w-px bg-black my-0"></div>   {/* Vertical line */}
          <div>
            <Link to="/request-appointment" className="flex flex-col items-center justify-center">
              <div className="flex h-20 w-20 bg-white hover:bg-red-500 rounded-full border border-none items-center justify-center">
                <FontAwesomeIcon icon={faCalendarAlt} size="3x" className="text-red-500 hover:text-white" />
              </div>
              <span className="text-black font-bold mt-2">Request an Appointment</span>
            </Link>
          </div>
          
          <div className="h-24 w-px bg-black my-0"></div>   {/* Vertical line */}
          <div>
            <Link to="/pay-bills" className="flex h-20 w-20 bg-white hover:bg-red-500 rounded-full border border-none items-center justify-center">
              <FontAwesomeIcon icon={faMoneyCheckAlt} size="3x" className="text-red-500 hover:text-white" />
            </Link>
            <span className="text-black font-bold mt-2">Pay Bills</span>
          </div>
          <div className="h-24 w-px bg-black my-0"></div> {/* Vertical line */}
          <div>
            <Link to="/find-doctor" className="flex flex-col items-center justify-center">
              <div className="flex h-20 w-20 bg-white hover:bg-red-500 rounded-full border border-none items-center justify-center">
                <FontAwesomeIcon icon={faUserMd} size="3x" className="text-red-500 hover:text-white" />
              </div>
              <span className="text-black font-bold mt-2">Find a Doctor</span>
            </Link>
          </div>
          <div className="h-24 w-px bg-black my-0"></div> {/* Vertical line */}
        </div>
      </div>
      {/* Home page end */}
      {/* Help Corner */}
      <div className="fixed flex w-[6%] items-center h-[30%] top-1/2 right-0 text-white bg-[#0074bc] text-lg">
        <button onClick={toggleMessage} className="focus:outline-none">
          <h1 className="inline-block transform rotate-90">HELP CORNER<LuHelpingHand className="ml-2 inline-block" /></h1>
        </button>
        {/* Cross icon */}
        {showMessage && (
          <button onClick={toggleMessage} className="ml-auto mr-2 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>
      {/* Help Corner message */}
      {showMessage && (
        <div className="fixed right-0 text-left top-1/3 p-0 bg-white text-black">
          <div className='flex w-full py-4 px-4 justify-between bg-[rgb(0,116,188)] text-white font-bold'> 
            <h2>Help Corner</h2>
            <button onClick={toggleMessage} className="focus:outline-none">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className='ml-4 mt-2'>
            <h3 className='font-bold'>Contact Number:</h3>
            <p>Rohini: <a href="tel:+91-11-47022222" className='text-blue-500'>+91-11-47022222</a></p>
            <p>Niti Bagh (South Delhi): <a href="tel:+91-11-47022222" className='text-blue-500'>+91-11-47022222</a></p>
          </div>
          <div className='ml-4 mt-2'>
            <h3 className='font-bold'>OPD Appointment:</h3>
            <p>Rohini: <a href="tel:+91-11-47022222" className='text-blue-500'>+91-11-47022222</a></p>
            <p>Niti Bagh (South Delhi): <a href="tel:+91-11-45822200" className='text-blue-500' >+91-11-45822200</a></p>
            <h3 className='font-bold'> OPD Timings: </h3>
            <p>09:00 am to 05:00 pm (All <br></br> Weekdays except Sunday and Holiday)
              <br></br> Emergency Services: 24x7 All Weekdays</p>
          </div>
          <div className='ml-4 mt-2 mb-2'>
            <h3 className='font-bold'>Email ID:</h3>
            <p>Rohini: <a href="mailto:Info@rgcirc.org" className='text-blue-500'>Info@rgcirc.org</a></p>
            <p>Niti Bagh (South Delhi): </p>
            <a href="mailto:Infosouthdelhi@rgcirc.org" className='text-blue-500' >Infosouthdelhi@rgcirc.org</a>
          </div>
        </div>
      )} 
      {/* Help Corner code end */}
      {/* 2nd page start */}
      <div className="bg-[#0074bc] min-h-screen flex flex-col md:flex-row">
        <div className="md:w-1/2 m-10 flex flex-col justify-center">
          <h1 className="text-white mb-5 text-3xl font-bold">Why Choose RGCIRC : A Silver Line</h1>
          <div className="text-white">
            <p className="mb-8 text-lg flex items-start">
              <span className="mr-2 font-bold text-red-500">&#10003;</span>
              Comprehensive cancer care provided under one roof.
            </p>
            <p className="mb-8 text-lg flex items-start">
              <span className="mr-2 font-bold text-red-500">&#10003;</span>
              We focus on all aspects of cancer care from prevention to palliation.
            </p>
            <p className="mb-8 text-lg flex items-start">
              <span className="mr-2 font-bold text-red-500">&#10003;</span>
              We practice evidence-based medicine.
            </p>
            <p className="mb-8 text-lg flex items-start">
              <span className="mr-2 font-bold text-red-500">&#10003;</span>
              Up to 21% discount on medicines and up to 50% discount on consumables.
            </p>
          </div>
          <Link to="/ReadMore">
            <button className="px-4 py-2 rounded bg-red-500 text-white cursor-pointer">Read More</button>
          </Link>
        </div>  
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={goldLogo} alt="goldLogo" className="max-w-full h-auto" />
        </div>
      </div>
      {/* 2nd page code end */}
      {/* 3rd page code here */}
      <div className="bg-[#eef5fa] "> 
        <h2 className=" text-gray-700 py-4 sm:px-6 lg:px-8 lg:py-4 text-center font-bold text-3xl sm:text-4xl">Clinical <span className="text-black">Services</span></h2>
        <div className="mx-auto  ml-6 mr-6 flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="flex w-3/6  ">
            <img src={SurgicalOncology} alt="Logo" className='rounded-lg'/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Surgical Oncology Services</h1>
            <p className="mb-8 text-black leading-relaxed">
              The Best Surgical Oncologist in India can provide unique surgical expertise in surgical cases unfamiliar to general surgeons. The Surgical Oncology Department aims at the following:
            </p>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>  
          </div>
        </div>
      </div>
      {/* 3rd page code end */}


  {/* footer */}
  <footer className="bg-[#1569AE] body-font">
                <div className="container mx-auto px-5 py-8 md:flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 md:text-left text-center w-full md:w-auto">

                    <div className="lg:w-1/4 mt-4 md:w-1/2 w-full px-4">
                        <h2 className="font-bold text-white text-lg mb-3 pb-2 w-40 border-b-4 border-red-500 leading-normal">About RGCIRC</h2>
                        <ul className="list-none justify-between">
                        <li>
                          <Link to="/About RGCIRC" className="text-white hover:text-gray-800">About RGCIRC</Link>
                        </li>
                        <li>
                          <Link to="/About ICSRC" className="text-white hover:text-gray-800">About ICSRC</Link>
                        </li>
                        <li>
                          <Link to="/Historyand Milestones" className="text-white hover:text-gray-800">History and Milestones</Link>
                        </li>
                        <li>
                          <Link to="/Awards & Recognitions" className="text-white hover:text-gray-800">Awards & Recognitions</Link>
                        </li>
                        <li>
                          <Link to="/Accreditations" className="text-white hover:text-gray-800">Accreditations</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="lg:w-1/4 mt-4 md:w-1/2 w-full px-4">
                        <h2 className="font-bold text-white text-lg mb-3 pb-2 w-40 border-b-4 border-red-500 leading-normal">About RGCIRC</h2>
                        <ul className="list-none justify-between">
                        <li>
                          <Link to="/Preventive Health Program" className="text-white hover:text-gray-800">Preventive Health Program</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Connecting with the Larger</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Extending a Hand</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Flying a dream</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Lining of Silver</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Continuous Medical Education (CME)</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="lg:w-1/4 mt-4 md:w-1/2 w-full px-4">
                      <h2 className=" font-bold text-white text-lg mb-3 pb-2  w-40 border-b-4 border-red-500 leading-normal">Insights</h2>
                      <ul className="list-none mb-10">
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Latest News</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Events</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Conferences</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Newsletters</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Photo Gallery</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Video Gallery</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Audio Gallery</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="lg:w-1/4 mt-4 md:w-1/2 w-full px-4">
                        <h2 className="font-bold text-white text-lg mb-3 pb-2 w-40 border-b-4 border-red-500 leading-normal">About RGCIRC</h2>
                        <ul className="list-none justify-between">
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Refund & Cancellation Policy</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Corporate Compliance</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">EWS Services/Bed Status – RGCIRC Rohini</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">EWS Services / Bed Status – RGCIRC Nitibagh</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Biomedical Waste Disposal Reports – RGCIRC – Rohini</Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white hover:text-gray-800">Biomedical Waste Disposal Reports – RGCIRC – NitiBagh</Link>
                        </li>
                      </ul>
                    </div> 
                  </div>
                </div>

                  <div className="bg-[#022f4c]">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
                        <p className="text-white text-sm text-center sm:text-left mb-2 sm:mb-0">All © reserved to
                            <a href="https://www.rgcirc.org/" className="text-white ml-1" target="_blank" rel="noopener noreferrer">Rajiv Gandhi Cancer Institute & Research Centre</a>
                        </p>
                        <span className="text-white text-sm sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center">Website Designing & SEO by Techmagnate</span>
                    </div>
                  </div>
            </footer>
    </div>
  );
};

export default Home;