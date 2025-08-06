import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-6 py-8 mx-auto">
        <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            {/* Card 1 */}
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Paths */}
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    8,282
                  </h4>
                  <div className="text-gray-500">New Users</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Paths */}
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    200,521
                  </h4>
                  <div className="text-gray-500">Total Orders</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Paths */}
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    215,542
                  </h4>
                  <div className="text-gray-500">Available Products</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Paths */}
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    215,542
                  </h4>
                  <div className="text-gray-500">Available Products</div>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Paths */}
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    215,542
                  </h4>
                  <div className="text-gray-500">Available Products</div>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Paths */}
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    215,542
                  </h4>
                  <div className="text-gray-500">Available Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">{/* Additional content goes here */}</div>

        <div className="flex flex-col mt-8">
          <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Title
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Status
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Role
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-white">{/* Table rows go here */}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
