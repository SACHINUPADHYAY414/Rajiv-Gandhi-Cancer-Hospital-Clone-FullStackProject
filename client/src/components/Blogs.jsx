import React from "react";

const Blogs = () => {



  return (
    <div className="w-full h-full ">
      <h2 className="text-gray-700 py-4 text-center font-bold text-2xl sm:text-3xl">
        Blogs
      </h2>
      <div className="flex justify-center items-center">
        <span className="linespan h-1 w-10 bg-blue-300 "></span>
        <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
        <span className="linespan h-1 w-10 bg-blue-300"></span>
      </div>
      <p className="text-red-700 text-right mr-6 sm:mr-14 font-semibold underline">
        <a href="https://www.rgcirc.org/blog/">View all</a>
      </p>

      <div className="flex flex-wrap justify-center items-center space-x-8 mb-6">
        <div className="max-w-sm md:w-1/3 bg-white border border-gray-200 rounded-lg shadow  dark:border-white mb-4">
          <img
            className="rounded-t-lg"
            src="https://www.rgcirc.org/wp-content/uploads/2024/01/Blog-Updated-Review-of-Head-and-Neck-Cancer.jpg"
            alt=""
          />

          <div className="p-6 ">
            <h2 className="mb-2 font-semibold text-black">
              Updated Review of Head and Neck Cancer : Indian Scenario
            </h2>

            <p className="mb-3 font-normal  dark:text-gray-400">
              UPDATED REVIEW ON HEAD AND NECK CANCER: INDIAN SCENARIO Head and
              Neck Cancer (HNC) is very common in India and originates from
              squamous cells located ...
            </p>
            <a
              href="https://www.rgcirc.org/blog/updated-review-of-head-and-neck-cancer-indian-scenario/"
              className="inline-flex items-center px-3 py-2 text-lg font-bold text-center text-blue-500"
            >
              Read more
            </a>
          </div>
        </div>

        <div className="max-w-sm md:w-1/3 bg-white border border-gray-200 rounded-lg shadow  dark:border-white mb-4">
          <img
            className="rounded-t-lg w-full h-full"
            src="https://www.rgcirc.org/wp-content/uploads/2023/12/Blog-Cancer-survival-–-is-it-improving.jpg"
            alt=""
          />

          <div className="p-6">
            <h2 className="mb-2 font-semibold text-black">
              Cancer Survival – Is It Improving?
            </h2>

            <p className="mb-3 font-normal  dark:text-gray-400">
              Survival statistics are of great interest to patients, clinicians,
              researchers, and policy markers. For cancer patients, the main
              statistic of interes...
            </p>
            <a
              href="https://www.rgcirc.org/blog/cancer-survival-is-it-improving/"
              className="inline-flex items-center px-3 py-2 mt-4 text-lg font-bold text-center text-blue-500"
            >
              Read more
            </a>
          </div>
        </div>

        <div className="max-w-sm md:w-1/3 bg-white border border-gray-200 rounded-lg shadow  dark:border-white mb-4">
          <img
            className="rounded-t-lg h-full w-full"
            src="https://www.rgcirc.org/wp-content/uploads/2023/12/Blog-Can-Yoga-be-Integrated-in-Palliative-Cancer-Care.jpg"
            alt=""
          />

          <div className="p-6">
            <h2 className="mb-2 font-semibold text-black">
              Can yoga be Integrated in Palliative Cancer Care?
            </h2>

            <p className="mb-3 font-normal  dark:text-gray-400">
              Surviving with cancer means a constant reminder about the disease,
              anxiety about recurrence and progression and impending death. This
              coupled with tre...
            </p>
            <a
              href="https://www.rgcirc.org/blog/can-yoga-be-integrated-in-palliative-cancer-care/"
              className="inline-flex items-center px-3 py-2 text-lg font-bold text-center text-blue-500"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
