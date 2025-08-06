import React from "react";

const OpportunityToHelp = () => {
  return (
    <div className="w-full h-full">
      <h2 className="text-gray-700 py-4 text-center font-bold text-2xl sm:text-3xl">
        Opportunity to Help
      </h2>
      <div className="flex justify-center items-center">
        <span className="linespan h-1 w-10 bg-blue-300"></span>
        <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
        <span className="linespan h-1 w-10 bg-blue-300"></span>
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-8 mb-6 mt-10">
        <div className="max-w-sm md:w-1/3 px-10 bg-red-700 hover:bg-transparent hover:text-black rounded-lg shadow mb-4 flex justify-center items-center">
          <div className="p-6 text-center text-white hover:text-black ">
            <img
              src="https://www.rgcirc.org/wp-content/uploads/2023/07/opportunity-icon1.png"
              alt="img"
              className="h-10 w-10 m-auto  "
            ></img>
            <h2 className="font-bold p-4">DONATE FOR CANCER CARE</h2>
            <p>
              As a society, RGCIRC is looking forward to getting support from
              generous people.
            </p>
            <button className="mb-2 mt-4 hover:bg-transparent hover:text-red-600 border border-white hover:border-red-400 text-white py-1 px-2 rounded">
              <a href="https://www.rgcirc.org/event/fit-a-thon-2024/">Read More</a>
            </button>
          </div>
        </div>

        <div className=" max-w-sm md:w-1/3  bg-yellow-500 hover:bg-transparent hover:text-black rounded-lg shadow mb-4 flex justify-center items-center">
          <div className="p-6 text-center text-white hover:text-black">
            <img
              src="https://www.rgcirc.org/wp-content/uploads/2023/07/opportunity-icon2.png"
              alt="img"
              className="h-10 w-10 m-auto"
            ></img>
            <h2 className="font-bold p-4">DONATE BLOOD</h2>
            <p>
              It is a fact that there are absolutely no substitutes to replace
              human blood.
            </p>
            <button className="mb-2 mt-4 hover:bg-transparent hover:text-red-600 border border-white hover:border-red-400 text-white py-1 px-2 rounded">
              <a href="https://www.rgcirc.org/event/fit-a-thon-2024/">Read More</a>
            </button>
          </div>
        </div>

        <div className="max-w-sm md:w-1/3  bg-blue-500 hover:bg-transparent hover:text-black rounded-lg shadow mb-4 flex justify-center items-center">
          <div className="p-6 text-center text-white hover:text-black">
            <img
              src="https://www.rgcirc.org/wp-content/uploads/2023/07/opportunity-icon3.png"
              alt="img"
              className="h-10 w-10 m-auto"
            ></img>
            <h2 className="font-bold p-4">DONATE TIME (VOLUNTEER)</h2>
            <p>
              Volunteers play an important role in today’s hospitals. They help
              the hospital run smoothly and provide invaluable assistance to
              patients and their families.
            </p>
            <button className="mb-4 mt-2 hover:bg-transparent hover:text-red-600 border border-white hover:border-red-400 text-white py-1 px-2 rounded">
              <a href="https://www.rgcirc.org/event/fit-a-thon-2024/">Read More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityToHelp;
