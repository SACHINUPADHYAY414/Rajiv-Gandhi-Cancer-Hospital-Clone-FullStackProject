// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = ({ token, id }) => {
//   const [formData, setFormData] = useState({
//     userId: "",
//     name: "",
//     gender: "",
//     email: "",
//     mobile: "",
//     address: ""
//   });
//   console.log(token,id)

//   useEffect(() => {
//     fetchPatientDetails();
//   }, []);

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const fetchPatientDetails = async () => {
//     try {
//           const response = await axios.post(`http://192.168.25.187:8080/patientDetails`, {
//       userId: id
//     }, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//       console.log(response.data);
//       setFormData(response.data);
//     } catch (error) {
//       console.error("Error fetching patient details:", error);
//     }
//   };

//   return (
//     <div className="text-[#005457] mx-auto h-full w-full">
//       <h2 className="justify-center items-center text-center text-[30px] font-bold">
//         Welcome!!
//       </h2>
//       <div className="grid md:grid-cols-2 gap-3 rounded-lg md:mt-4 md:ml-4 md:mr-4">
//         <div className="border p-3 rounded-lg flex">
//           <label className="text-lg font-bold">
//             User Id:
//             <input
//               className="text-[0.875rem] m-1 leading-[1.376rem] text-base"
//               name="userId"
//               onChange={changeHandler}
//               value={formData.userId}
//             />
//           </label>
//         </div>

//         {/* {/ name /} */}
//         <div className="border border-gray-300 p-3 rounded-lg flex">
//           <label className="text-lg font-bold">
//             Name:
//             <input
//               className="text-[0.875rem] m-1 leading-[1.376rem] text-base"
//               name="name"
//               onChange={changeHandler}
//               value={formData.name}
//             />
//           </label>
//         </div>

//         {/* {/ gender /} */}
//         <div className="border border-gray-300 p-3 rounded-lg flex">
//           <label className="text-lg font-bold">
//             Gender:
//             <input
//               className="text-[0.875rem] m-1 leading-[1.376rem] text-base"
//               name="gender"
//               onChange={changeHandler}
//               value={formData.gender}
//             />
//           </label>
//         </div>

//         {/* {/ email /} */}
//         <div className="border border-gray-300 p-3 rounded-lg flex">
//           <label className="text-lg font-bold">
//             Email:
//             <input
//               className="text-[0.875rem] m-1 leading-[1.376rem] text-base"
//               name="email"
//               onChange={changeHandler}
//               value={formData.email}
//             />
//           </label>
//         </div>

//         {/* {/ mobile number /} */}
//         <div className="border border-gray-300 p-3 rounded-lg flex">
//           <label className="text-lg font-bold">
//             Mobile Number:
//             <input
//               className="text-[0.875rem] m-1 leading-[1.376rem] text-base"
//               name="mobile"
//               onChange={changeHandler}
//               value={formData.mobile}
//             />
//           </label>
//         </div>

//         {/* {/ address /} */}
//         <div className="border border-gray-300 p-3 rounded-lg flex">
//           <label className="text-lg font-bold">
//             Address:
//             <input
//               className="text-[0.875rem] m-1 leading-[1.376rem] text-base"
//               name="address"
//               onChange={changeHandler}
//               value={formData.address}
//             />
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ token, id }) => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    gender: "",
    email: "",
    mobile: "",
    address: ""
  });

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  const fetchPatientDetails = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/patientDetails`, {
        userId: id
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    }
  };

  return (
    <div className="text-[#005457] mx-auto mr-4 h-full w-full">
    <h2 className="justify-center items-center text-center text-[30px] font-bold">
      Welcome!!
    </h2>
    <div className="grid md:grid-cols-2 gap-3  rounded-lg md:mt-4 md:ml-4 md:mr-4">
      {/* User Id */}
      <div className="border border-gray-300 p-3 rounded-lg flex">
        <label className="text-lg font-bold">
          User Id:
        </label>
        <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">{formData.userId}</p>
      </div>
  
      {/* Name */}
      <div className="border border-gray-300 p-3 rounded-lg flex">
        <label className="text-lg font-bold">
          Name:
        </label>
        <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">{formData.name}</p>
      </div>
  
      {/* Gender */}
      <div className="border border-gray-300 p-3 rounded-lg flex">
        <label className="text-lg font-bold">
          Gender:
        </label>
        <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">{formData.gender}</p>
      </div>
  
      {/* Email */}
      <div className="border border-gray-300 p-3 rounded-lg flex">
        <label className="text-lg font-bold">
          Email:
        </label>
        <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">{formData.email}</p>
      </div>
  
      {/* Mobile Number */}
      <div className="border border-gray-300 p-3 rounded-lg flex">
        <label className="text-lg font-bold">
          Mobile Number:
        </label>
        <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">{formData.mobile}</p>
      </div>
  
      {/* Address */}
      <div className="border border-gray-300 p-3 rounded-lg flex">
        <label className="text-lg font-bold">
          Address:
        </label>
        <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">{formData.address}</p>
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
