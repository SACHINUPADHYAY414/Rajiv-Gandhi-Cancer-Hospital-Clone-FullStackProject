import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuHelpingHand } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMoneyCheckAlt,
  faUserMd,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// import goldLogo from '../images/goldLogo.png';
// import SurgicalOncology from "../images/surgical_oncology.png";
import image1 from "../images/background.jpg";
import image2 from "../images/banner.png";
import image3 from "../images/home-banner-img2.webp";
import image4 from "../images/Conference-Detail-Image.jpg";
import DrSpacilistCard from "./DrSpacilistCard";
import OtherService from "./OtherService";
// import SearchHome from './SearchHome';
import WhatOurPatientSays from "./WhatOurPatientSays";
import Feedback from "./Feedback";
import Event from "./Event";
import Conferences from "./Conferences";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { FaArrowRight } from "react-icons/fa6";
import Blogs from "./Blogs";
import OpportunityToHelp from "./IndexComponents/OpportunityToHelp";
// import Notification from "./Notification/Notification";
import ClinicalService from "./IndexComponents/ClinicalService";
import toast from "react-hot-toast";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);
  const initialExperience = 27;
  const [yearlyExperience, setYearlyExperience] = useState(initialExperience);

  useEffect(() => {
    const initialDelay = initialExperience * 1000 * 60 * 60 * 24 * 365;
    const interval = setInterval(() => {
      setYearlyExperience((prevExperience) => prevExperience + 1);
    }, initialDelay);

    return () => clearInterval(interval);
  }, []);

  
  // for subscribe with email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        setError('');
      } else {
        toast.error('Failed to subscribe. Please try again.');
        setError('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      setError('An error occurred. Please try again later.');
    }
  };
  return (
    <div className="w-full h-full">
      {/* Home page code here */}
      {/* <Notification /> */}

      <div
        className="bg-cover bg-no-repeat flex"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="flex flex-col ml-20 items-center justify-center text-center text-white">
          <div className="h-24 w-px bg-gray-300  my-0"></div> {/* Vertical line */}
          <div>
            <Link
              to="/#"
              className="flex flex-col items-center justify-center"
            >
              <div className="flex h-20 w-20 bg-white hover:bg-red-500 rounded-full border border-none items-center justify-center">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  size="3x"
                  className="text-red-500 hover:text-white"
                />
              </div>
              <span className="text-black font-bold mt-2">
                Request an Appointment
              </span>
            </Link>
          </div>
          <div className="h-24 w-px bg-gray-300 my-0"></div> {/* Vertical line */}
          <div>
            <Link
              to="#"
              className="flex h-20 w-20 bg-white hover:bg-red-500 rounded-full border border-none items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faMoneyCheckAlt}
                size="3x"
                className="text-red-500 hover:text-white"
              />
            </Link>
            <span className="text-black font-bold mt-2">Pay Bills</span>
          </div>
          <div className="h-24 w-px bg-gray-300  my-0"></div> {/* Vertical line */}
          <div>
            <Link
              to="#"
              className="flex flex-col items-center justify-center"
            >
              <div className="flex h-20 w-20 bg-white hover:bg-red-500 rounded-full border border-none items-center justify-center">
                <FontAwesomeIcon
                  icon={faUserMd}
                  size="3x"
                  className="text-red-500 hover:text-white"
                />
              </div>
              <span className="text-black font-bold mt-2">Find a Doctor</span>
            </Link>
          </div>
          <div className="h-24 w-px bg-gray-300 my-0"></div> {/* Vertical line */}
        </div>
      </div>
      {/* Home page end */}

      {/* Help Corner */}
      <div className="fixed flex w-[4%] h-[22vh] items-center top-1/2 right-0 text-white bg-[#0074bc] rounded-sm">
        <button
          onClick={toggleMessage}
          className="focus:outline-none  hover:text-red-700 font-bold "
        >
          <h1 className="flex transform rotate-90">HELP CORNER</h1>
          <LuHelpingHand className="ml-4 mt-3 rotate-90" />
        </button>
        {/* Cross icon */}
        {showMessage && (
          <button
            onClick={toggleMessage}
            className="ml-auto mr-2 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>
      {/* Help Corner message */}
      {showMessage && (
        <div className="fixed right-0 text-left top-1/3 p-0 bg-white text-black">
          <div className="flex w-full py-4 px-4 justify-between bg-[rgb(0,116,188)] text-white font-bold">
            <h2>Help Corner</h2>
            <button onClick={toggleMessage} className="focus:outline-none">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="ml-4 mt-2">
            <h3 className="font-bold">Contact Number:</h3>
            <p>
              Rohini:{" "}
              <a href="tel:+91-11-47022222" className="text-blue-500">
                +91-11-47022222
              </a>
            </p>
            <p>
              Niti Bagh (South Delhi):{" "}
              <a href="tel:+91-11-47022222" className="text-blue-500">
                +91-11-47022222
              </a>
            </p>
          </div>
          <div className="ml-4 mt-2">
            <h3 className="font-bold">OPD Appointment:</h3>
            <p>
              Rohini:{" "}
              <a href="tel:+91-11-47022222" className="text-blue-500">
                +91-11-47022222
              </a>
            </p>
            <p>
              Niti Bagh (South Delhi):{" "}
              <a href="tel:+91-11-45822200" className="text-blue-500">
                +91-11-45822200
              </a>
            </p>
            <h3 className="font-bold"> OPD Timings: </h3>
            <p>
              09:00 am to 05:00 pm (All <br></br> Weekdays except Sunday and
              Holiday)
              <br></br> Emergency Services: 24x7 All Weekdays
            </p>
          </div>
          <div className="ml-4 mt-2 mb-2">
            <h3 className="font-bold">Email ID:</h3>
            <p>
              Rohini:{" "}
              <a href="mailto:Info@rgcirc.org" className="text-blue-500">
                Info@rgcirc.org
              </a>
            </p>
            <p>Niti Bagh (South Delhi): </p>
            <a
              href="mailto:Infosouthdelhi@rgcirc.org"
              className="text-blue-500"
            >
              Infosouthdelhi@rgcirc.org
            </a>
          </div>
        </div>
      )}
      {/* Help Corner code end */}

      {/* 2nd page start */}
      <div
        className="bg-[#0074bc] h-full w-full flex flex-col md:flex-row"
        style={{
          backgroundImage:
            "url('https://www.rgcirc.org/wp-content/themes/rgcirc/assets/img/why-choose-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#0074bc"
        }}
      >
        <div className="md:absolute right-1">
          <img
            className="w-28 h-auto mt-4"
            src="https://www.rgcirc.org/wp-content/themes/rgcirc/assets/img/vector-shapes.png"
            alt="Vector shape"
          />
        </div>

        <div className="md:w-1/2 px-10 py-10 flex flex-col justify-center">
          <h2 className="text-3xl text-white mb-4">
            Why Choose <span className="font-semibold">RGCIRC</span>: <br />
            <span>A Silver Line</span>
          </h2>
          <div className="flex items-center mb-4 ml-2">
            <span className="linespan h-1 w-10 bg-blue-300 "></span>
            <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
            <span className="linespan h-1 w-10 bg-blue-300 "></span>
          </div>
          <div className="text-white">
            <p className="mb-8 text-lg flex items-start">
              <span className="mr-2 font-bold text-red-500">&#10003;</span>
              Comprehensive cancer care provided under one roof.
            </p>
            <p className="mb-8 text-lg flex items-start">
              <span className="mr-2 font-bold text-red-500">&#10003;</span>
              We focus on all aspects of cancer care from prevention to
              palliation.
            </p>
            <p className="mb-8 text-lg flex items-start">
              <span className="mr-2 font-bold text-red-500">&#10003;</span>
              We practice evidence-based medicine.
            </p>
            <p className="mb-8 text-lg flex items-start">
              <span className="mr-2 font-bold text-red-500">&#10003;</span>
              Up to 21% discount on medicines and up to 50% discount on
              consumables.
            </p>
          </div>
          <div className="divide-x h-20 w-2 "></div>
          
          <button className="bg-red-700 ml-4 md:w-24 hover:bg-transparent hover:text-red-600 border border-red-400 text-white py-2 rounded-lg md:mt-0">
            <a
              href="https://www.rgcirc.org/about-rgcirc/"
              className="block md:inline-block "
            >
              Read More
            </a>
          </button>
        </div>

        <div className="h-50 w-px justify-center items-center mt-24 mb-24 bg-gray-400 "></div>

        {/* Second image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative">
            <img
              src="https://www.rgcirc.org/wp-content/themes/rgcirc/assets/img/years.png"
              alt="goldLogo"
              className="max-w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-white text-4xl font-bold">
                <span
                  className={
                    yearlyExperience === 27
                      ? "text-60px text-yellow-400 font-bold text-[80px]"
                      : ""
                  }
                >
                  <span className="flex items-center justify-center">
                    {yearlyExperience}
                  </span>
                </span>
                Years
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd page code end */}
      {/* 3rd page code here */}

      <ClinicalService />
      <OtherService />
      <DrSpacilistCard />
      <WhatOurPatientSays />
      <Feedback />
      <Event />
      <Conferences />
      <Blogs />
      <OpportunityToHelp />

      {/* about Section RGCIRC code here */}
<div class="w-full h-full bg-white">
  <div class="w-full md:h-40vh lg:h-60vh bg-[#b11016]">
    <div class="flex px-10 py-10 text-white justify-between items-center ml-10 mr-10">
      <h class="font-semibold text-white text-2xl">
        About <span class="semibold text-3xl">RGCIRC</span>
      </h>
      <div class="md:w-0.5 lg:h-20 bg-gray-400 mr-4 "></div>
      <p>
        Rajiv Gandhi Cancer Institute and Research Centre is today counted
        amongst Asia’s premier exclusive cancer centres that offer unique
        advantage of cutting edge technology,<br></br> put to use by
        renowned super specialists. This potent combination of man and
        machine ensures world-class cancer care to not only patients from
        India, but also from the <br></br> neighboring SAARC countries and
        others.
      </p>
    </div>
  </div>

  <div class="flex flex-col md:flex-row bg-[#eef5f] justify-center items-center space-y-6 md:space-y-0 md:space-x-6 px-10 py-10">
    <div class="text-center md:text-left">
      <p>
        Sir Chotu Ram Marg, Sector - 5, Rohini Industrial Area, Rohini,
        <br></br> New Delhi - 110085, India |{" "}
        <a href="tel:+91-11-47022222" class="text-[#0074bc]">
          +91-11-47022222
        </a>
      </p>

      <b>OPD Timings:</b>
      <span class="ml-2">
        09:00 am to 05:00 pm (All weekdays except Sunday and Holiday)
      </span>
      <br></br>
      <b>Emergency Services:</b>
      <span class="ml-2">24x7 All weekdays</span>
    </div>

    <div class="md:w-0.5 lg:h-20 bg-gray-400 "></div>

    <div class="text-center md:text-left">
      <p>
        Squadron Leader Mahendra Kumar Jain Marg, Block K, Niti <br></br>
        Bagh, New Delhi - 110049 |{" "}
        <a href="tel:+91-11-45822222" class="text-[#0074bc]">
          +91-11-45822222
        </a>
      </p>
      <b>OPD Timings:</b>
      <span class="ml-2">
        09:00 am to 05:00 pm (All Weekdays except Sunday and Holiday)
      </span>
      <br></br>
      <b>Emergency Services:</b>
      <span class="ml-2">24x7 All Weekdays</span>
    </div>

    <div class="md:w-0.5 lg:h-20 bg-gray-400 "></div>

    <div class="text-center md:text-left">
      <div onSubmit={handleSubmit}>
        <b class="text-[#0074bc]">
          Subscribe Today For Our Healthy Tips Newsletter
        </b>
        <div class="flex mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            class="px-2 py-2 border border-gray-400 rounded-md"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            class="ml-4 bg-red-700 hover:bg-transparent hover:text-red-600 border border-red-400 text-white py-2 px-2 rounded-md"
          >
            Subscribe
          </button>
        </div>
      </div>

      {error && (
        <div class="subscribe-error-pop">
          <p class="text-red-600 font-[16px]">{error}</p>
        </div>
      )}

      {subscribed && (
        <div class="subscribe-success-pop" id="subscribePop">
          <p class="text-[#008000] font-[16px]">
            Your subscription was successful! Kindly check your mailbox
            and confirm your subscription. If you don't see the email
            within a few minutes, check the spam/junk folder.
          </p>
        </div>
      )}
    </div>
  </div>
</div>


      {/* footer */}
      <footer className="bg-[#095c90] body-font">
        <div className="container mx-auto px-5 py-8 md:flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 md:text-left text-center w-full md:w-auto">
            <div className="lg:w-1/4 mt-4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-lg mb-3 pb-2 w-40 border-b-4 border-red-500 leading-normal">
                About RGCIRC
              </h2>
              <ul className="list-none justify-between">
                <li>
                  <Link
                    to="/About RGCIRC"
                    className="text-white hover:text-red-500"
                  >
                    About RGCIRC
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About ICSRC"
                    className="text-white hover:text-red-500"
                  >
                    About ICSRC
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Historyand Milestones"
                    className="text-white hover:text-red-500"
                  >
                    History and Milestones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Awards & Recognitions"
                    className="text-white hover:text-red-500"
                  >
                    Awards & Recognitions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Accreditations"
                    className="text-white hover:text-red-500"
                  >
                    Accreditations
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/4 mt-4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-lg mb-3 pb-2 w-40 border-b-4 border-red-500 leading-normal">
                About RGCIRC
              </h2>
              <ul className="list-none justify-between">
                <li>
                  <Link
                    to="/Preventive Health Program"
                    className="text-white hover:text-red-500"
                  >
                    Preventive Health Program
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Connecting with the Larger
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Extending a Hand
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Flying a dream
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Lining of Silver
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Continuous Medical Education (CME)
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/4 mt-4 md:w-1/2 w-full px-4">
              <h2 className=" font-bold text-white text-lg mb-3 pb-2  w-40 border-b-4 border-red-500 leading-normal">
                Insights
              </h2>
              <ul className="list-none mb-10">
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Conferences
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Newsletters
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Video Gallery
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Audio Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/4 mt-4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-lg mb-3 pb-2 w-40 border-b-4 border-red-500 leading-normal">
                About RGCIRC
              </h2>
              <ul className="list-none justify-between">
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Corporate Compliance
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    EWS Services/Bed Status – RGCIRC Rohini
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    EWS Services / Bed Status – RGCIRC Nitibagh
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Biomedical Waste Disposal Reports – RGCIRC – Rohini
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white hover:text-red-500">
                    Biomedical Waste Disposal Reports – RGCIRC – NitiBagh
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div>
            <hr className="text-white -mb-10 bg-white"></hr>
            <div className=" ">
              <img
                src="https://www.rgcirc.org/wp-content/uploads/2023/07/ftr-img-btm.png"
                alt="img"
                className="h-full w-auto m-auto  "
              ></img>
            </div>
          </div>

          <ul className="flex justify-center space-x-4 items-center text-white text-lg font-semibold mt-2 mb-2">
            {/* <i className="bg-[#b11016] rounded-full h-2 w-2 justify-center items-center"></i> */}
            <li>
              <a href="http://localhost:3000/">Home</a>
            </li>

            <i className="bg-[#b11016] rounded-full h-2 w-2 justify-center items-center "></i>
            <li>
              <a href="https://www.rgcirc.org/other-links/privacy-policy/">
                Privacy Policy
              </a>
            </li>

            <i className="bg-[#b11016] rounded-full h-2 w-2 justify-center items-center"></i>
            <li>
              <a href="https://www.rgcirc.org/newsletter/"> RGCI Newsletter</a>
            </li>

            <i className="bg-[#b11016] rounded-full h-2 w-2 justify-center items-center"></i>
            <li>
              <a href="https://www.rgcirc.org//sitemap/"> Sitemap </a>
            </li>

            <i className="bg-[#b11016] rounded-full h-2 w-2 justify-center items-center"></i>
            <li>
              <a href="https://www.rgcirc.org//contact-us/"> Contact Us</a>
            </li>
            <i className="bg-[#b11016] rounded-full h-2 w-2 justify-center items-center"></i>
          </ul>
        </div>

        <div className="bg-[#022f4c]">
          <div className="container mx-auto py-4 px-12 flex flex-wrap flex-col sm:flex-row items-center justify-between">
            <p className="text-white text-sm text-center sm:text-left mb-2 sm:mb-0">
              All © reserved to
              <a
                href="https://www.rgcirc.org/"
                className="text-white ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rajiv Gandhi Cancer Institute & Research Centre
              </a>
            </p>
            <span className="text-white text-sm sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center">
              Website Designing & SEO by Techmagnate
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
