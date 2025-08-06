// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DeactivateAccount = () => {
//   const [error, setError] = useState('');
//   const [temporaryDeactivation, setTemporaryDeactivation] = useState(false);
//   const navigate = useNavigate();

//   const handleDeactivateAccount = async (e) => {
//     e.preventDefault();
    
//     // Validate if the user has selected to deactivate the account
//     if (!temporaryDeactivation) {
//       setError('Please confirm that you want to deactivate your account.');
//       return;
//     }

//     try {
//       // Call the API to deactivate the account
//       await axios.post('http://192.168.25.187:8080/deactivate-account', {
//         temporary: temporaryDeactivation,
//       });
//       // Navigate to a page indicating successful deactivation
//       navigate('/Home');
//     } catch (error) {
//       console.error('Error deactivating account:', error.message);
//       setError('An error occurred while trying to deactivate the account');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 flex justify-center items-center">
//     <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-4">Deactivate Account</h1>
//         <form onSubmit={handleDeactivateAccount}>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <div className="checkbox mb-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 checked={temporaryDeactivation}
//                 onChange={(e) => setTemporaryDeactivation(e.target.checked)}
//                 className="form-checkbox h-5 w-5 text-green-500"
//               />
//               <span className="ml-2">Deactivate Account</span>
//             </label>
//             <p className="mt-2 text-sm">This is temporary. Your Account will be disabled, and you will not be able to login again.</p>
//           </div>
//           <button type="submit" className="w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3 text-lg font-bold mt-4">
//             Deactivate Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DeactivateAccount;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeactivateAccount = ({token}) => {
  const [error, setError] = useState('');
  const [temporaryDeactivation, setTemporaryDeactivation] = useState(false);
  const [deactivationMessage, setDeactivationMessage] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setTemporaryDeactivation(e.target.checked);
  }

  const handleDeactivateAccount = async (e) => {
    e.preventDefault();
    if (!temporaryDeactivation) {
      setError('Please confirm that you want to deactivate your account.');
      return;
    }

    try {
      // Call your API to deactivate the account
      const response = await axios.post(
        "http://localhost:8080/deactivate",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        setDeactivationMessage('Account deactivated successfully!');
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      } else {
        setError('Failed to deactivate account.');
      }
    } catch (error) {
      console.error("Error deactivating account:", error);
      setError('An error occurred while deactivating the account.');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 flex justify-center items-center">
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Deactivate Account</h1>
        {deactivationMessage && <p className="text-green-500 text-center">{deactivationMessage}</p>}
        <form onSubmit={handleDeactivateAccount}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="checkbox mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={temporaryDeactivation}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-green-500"
              />
              <span className="ml-2">Deactivate Account</span>
            </label>
            <p className="mt-2 text-sm">This is temporary. Your Account will be disabled, and you will not be able to login again.</p>
          </div>
          <button 
            type="submit" 
            disabled={!temporaryDeactivation} // Disable the button if checkbox is not checked
            className={`w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3 text-lg font-bold mt-4 ${!temporaryDeactivation ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Deactivate Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeactivateAccount;
