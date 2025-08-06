import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";

const Event = () => {
  return (
    <div className="w-full h-full bg-blue-50">
      <div className="py-4 text-center">
        <h2 className="text-gray-700 text-2xl sm:text-3xl font-bold">Events</h2>
        <div className="flex justify-center items-center">
          <span className="linespan h-1 w-10 bg-blue-300"></span>
          <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
          <span className="linespan h-1 w-10 bg-blue-300"></span>
        </div>
      </div>
      <p className="text-red-700 text-right mr-4 sm:mr-10 font-semibold underline">
        <a href="https://www.rgcirc.org//find-a-doctor/">View all</a>
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center py-4 px-4 sm:px-0 ">
        <div className="flex flex-col sm:flex-row justify-center items-center rounded-xl ml-16 mr-10 max-w-[48rem]  w-full sm:mr-4 mb-4 sm:mb-0">
          <div className="w-full  overflow-hidden">
            <img
              src="https://www.rgcirc.org/wp-content/uploads/2024/05/Event-Homepage-Pic_300x200.jpg"
              alt="IGNITE"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 w-full">
            <h6 className="mb-2 font-semibold text-base text-left text-black uppercase">
              IGNITE
            </h6>
            <div className="flex items-center">
                <SlCalender className="text-blue-900 h-4 w-8" />
                <p className="mb-2 text-blue-900">Date: 2024-06-08</p>
            </div>
            <div className="flex justify-center items-center">
                <IoLocationSharp className="text-blue-900 h-6 w-8" />
                <p className="mb-2 text-blue-900 ml-1 ">The Great Lawn, DLF City Club, Phase IV, Gurugram - 122002</p>
            </div>
            <button className="bg-red-700 hover:bg-transparent hover:text-red-600 border border-red-400 text-white py-1 px-2 rounded">
                <a href="https://www.rgcirc.org/event/ignite/">Read More</a>
            </button>
           
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center rounded-xl max-w-[48rem] w-full">
          <div className="w-full  overflow-hidden">
            <img
              src="https://www.rgcirc.org/wp-content/uploads/2024/01/300x200px.jpg"
              alt="FIT-A THON 2024"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 w-full">
            <h6 className="mb-2 font-semibold text-base text-left text-black uppercase">
              FIT-A THON 2024
            </h6>

            <div className="flex items-center">
                <SlCalender className="text-blue-900 h-4 w-8" />
                <p className="mb-2 text-blue-900">2024-03-17</p>
            </div>

            <div className="flex items-center">
                <IoTime className="text-blue-900 h-4 w-8" />
                <p className="mb-2 text-blue-900">5:30 am</p>
            </div>
         
            <div className="flex items-center">
                <IoLocationSharp className="text-blue-900 h-6 w-8" />
                <p className="mb-2 text-blue-900">Adventure Island</p>
            </div> 

            <button className="mt-2 bg-red-700 hover:bg-transparent hover:text-red-600 border border-red-400 text-white py-1 px-2 rounded">
              <a href="https://www.rgcirc.org/event/fit-a-thon-2024/">Read More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
