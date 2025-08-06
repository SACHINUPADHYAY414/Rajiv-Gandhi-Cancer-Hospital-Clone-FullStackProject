import React from "react";
import { NavLink } from "react-router-dom";

const Conferences = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="">
        <h2 className="text-gray-700 py-4 text-center font-bold text-2xl sm:text-3xl">
          Conferences
        </h2>
        <div className="flex justify-center items-center">
          <span className="linespan h-1 w-10 bg-blue-300 "></span>
          <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
          <span className="linespan h-1 w-10 bg-blue-300"></span>
        </div>
        <p className="text-red-700 text-right mr-6 sm:mr-14 font-semibold underline">
          <a href="https://www.rgcirc.org/conferences/">View all</a>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 space-y-8 sm:space-y-0 sm:space-x-8 mb-8">
          <NavLink className="shadow-lg shadow-slate-400 rounded-b-lg w-full sm:w-auto" to="https://www.rgcirc.org/conference/cne-2024/">
            <img
              src="https://www.rgcirc.org/wp-content/uploads/2024/04/573-x-285-1.jpeg"
              alt="img"
              className="w-full h-full"
            />
            <p className="bg-[#1569AE] shadow-lg shadow-slate-400 py-4 px-4 rounded-b-lg text-white">
              <span className="text-lg">CNE 2024</span> <br></br>
              <span>10th-10th May, 2024</span>
            </p>
          </NavLink>
          <NavLink className="shadow-lg shadow-slate-400 rounded-lg w-full sm:w-auto" to="https://www.rgcirc.org/conference/ampinccon-2024/">
            <img
              src="https://www.rgcirc.org/wp-content/uploads/2023/12/Conferences-Image-Size-573-x-285.jpg"
              alt=""
              className="w-full h-full"
            />
            <p className="bg-[#1569AE] shadow-lg shadow-slate-400 py-4 px-4 rounded-b-lg text-white">
              <span className="text-lg">AMPI-NC 2024</span> <br></br>
              <span>13th - 14th April, 2024</span>
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Conferences;
