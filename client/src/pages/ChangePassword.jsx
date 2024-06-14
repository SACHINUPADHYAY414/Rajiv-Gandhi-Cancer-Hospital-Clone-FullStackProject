// import React, { useState } from "react";
// import { toast } from "react-toastify";
// // import { axios } from "axios";

// const ChangePassword = () => {
//   const[formData,setFormData] = useState({
//     newPassword:"",
//     password:"",
// })

// const[matchPassword,setMatchPassword] = useState(true)

// function changeHandler(e){
// const{name,value}=e.target;
// setFormData((prev) =>{
//     return {
//         ...prev,
//         [name]:value
//     }
// })
// }

// function submitHandler(e) {
// e.preventDefault();

// const password = formData.password;

// let data = {password}

// //  axios.post("http://192.168.25.187:8080/updateUserPassword", data)
// //     .then(response => {
// //         // const token = response.data.token;
// //         // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// //         console.log(response);
// //         e.target.reset();
// //         })
// //         .catch(err => {
// //         console.log("error due to ", err);
// //         toast.error("Error Occured");
// //     });

// // Password validation regex
// const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;

// // Check if the password matches the validation rules
// if (!passwordRegex.test(formData.newPassword)) {
//     toast.error("Password must contain at least 8 characters, including one capital letter, one small letter, one special character, and one digit.");
//     return;
// }

// // Check if the passwords match
// if (formData.newPassword !== formData.password) {
//     setMatchPassword(false);
//     toast.error("Passwords don't match.");
//     return;
// }

// // If all validations pass, show success message and navigate
// toast.success("Password Updated successfully");
// console.log(matchPassword)
// console.log(formData.password)
// }

//   return (
//     <div className="flex justify-center mt-10 items-center">
      // <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      //   <h1 className="text-2xl text-center font-bold mb-4">Change My Password</h1>
      //   <h3 className="text-sm mb-2 font-bold">Note:</h3>
      //   <p className="text-sm mb-4">
      //     1. Password should contain at least one number(0-9). <br />
      //     2. Password should contain at least one alphabet (either in lowercase or uppercase).<br />
      //     3. Password can have special characters like !,@,#..<br />
      //     4. Password should be a minimum of 6 and a maximum of 30 characters long.<br />
      //     5. Your password will be blocked after 3 wrong attempts.<br />
      //   </p>
//         <form onSubmit={submitHandler}>
//         <label className="block mb-2 font-bold rounded-lg">
//             Enter Old Password:
//             <div className="relative">
//               <input
//                 name="oldPassword"
//                 type="password"
//                 value={formData.oldPassword}
//                 onChange={changeHandler}
//                 className="w-full p-2 border rounded"
          
//               />
//             </div>
//           </label>
//           <label className="block mb-2 font-bold">
//             Enter New Password* :
//             <div className="relative">
//               <input
//                 name="newPassword"
//                 type="password"
//                 value={formData.newPassword}
//                 onChange={changeHandler}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//           </label>
//           <label className="block mb-2 font-bold">
//             Confirm Password*:
//             <div className="relative">
//               <input
//                 name="confirmPassword"
//                 type="password"
//                 value={formData.confirmPassword}
//                 onChange={changeHandler}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//           </label>
//           <button type="submit" className="w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3 text-lg font-bold mt-4">
//             Change Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate new password
    if (newPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    // Additional password validation using regex
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
    if (!passwordRegex.test(newPassword)) {
      setErrorMessage('Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.');
      return;
    }
    // Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }

    try {
      // Make API request to verify old password
      const response = await axios.post('/api/verifyOldPassword', { oldPassword });
      if (response.data.success) {
        // Old password is correct, proceed with changing password
        await axios.post('/api/changePassword', { newPassword });
        // Redirect to dashboard or any other page
        navigate('/dashboard');
      } else {
        // Old password is incorrect
        setErrorMessage('Old password is incorrect.');
      }
    } catch (error) {
      console.error('Error occurred while changing password:', error);
      setErrorMessage('An error occurred while changing password. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 flex justify-center items-center">
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-4">Change My Password</h1>
        <h3 className="text-sm mb-2 font-bold">Note:</h3>
        <p className="text-sm mb-4">
          1. Password should contain at least one number(0-9). <br />
          2. Password should contain at least one alphabet (either in lowercase or uppercase).<br />
          3. Password can have special characters like !,@,#..<br />
          4. Password should be a minimum of 6 and a maximum of 30 characters long.<br />
          5. Your password will be blocked after 3 wrong attempts.<br />
        </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <div>
          <label htmlFor="oldPassword" className="block font-bold" >Old Password</label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={oldPassword}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block font-bold">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block font-bold">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3 text-lg font-bold mt-4">Change Password</button>
      </form>
    </div>
    </div>
  );
};

export default ChangePasswordForm;
