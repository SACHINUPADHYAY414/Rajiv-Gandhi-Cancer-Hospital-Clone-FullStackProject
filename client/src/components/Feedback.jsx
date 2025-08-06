import React from "react";

const Feedback = () => {
  return (
    <div className="h-full w-full bg-white">
      <div className=" mt-10 mb-10 mx-4 md:mx-16 justify-center items-center bg-gray-100 rounded-lg" style={{ backgroundImage: "url('')" }}>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="md:mx-10 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">SHARE YOUR EXPERIENCE WITH US</h2>
            <p className="text-lg">Your inputs will help us improve</p>
          </div>

          <div className="text-center md:text-left">
            <button className="bg-red-700 hover:bg-transparent hover:text-red-600 border border-red-400 text-white py-2 px-4 rounded-lg mt-6 md:mt-0">
              <a href="https://www.rgcirc.org//home/patient-feedback/">Submit Your Feedback</a>
            </button>
          </div>

          <div className="text-center md:text-left">
            <img src="https://www.rgcirc.org/wp-content/themes/rgcirc/assets/img/feedback-img.png" alt="img" className="mx-auto md:mr-10 md:ml-0 mt-6 md:mt-0 max-w-full"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
