import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ token, id }) => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    gender: "",
    email: "",
    mobile: "",
    address: ""
  });
  const [editMode, setEditMode] = useState(false); 

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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

  const handleEdit = () => {
    setEditMode(true); // Enable edit mode
  };

  const handleSave = async () => {
    try {
      // Call API to save updated profile data
      await axios.post(`http://localhost:8080/updatePatientDetails`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setEditMode(false); // Disable edit mode after saving
    } catch (error) {
      console.error("Error saving patient details:", error);
    }
  };

  return (
    <div className="text-[#005457] mx-auto mr-4 h-full w-full">
      <h2 className="text-center text-3xl font-bold mb-4">
        Welcome!!
      </h2>
      <div className="grid md:grid-cols-2 gap-3 rounded-lg md:mt-4 md:ml-4 md:mr-4">
        {/* User Id */}
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">
           UHID:
          </label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1">{formData.userId}</p>
        </div>
        {/* Name */}
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">
            Name:
          </label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1">{formData.name}</p>
        </div>
        {/* Gender */}
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">
            Gender:
          </label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1">{formData.gender}</p>
        </div>
        {/* Email */}
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">
            Email:
          </label>
          {editMode ? (
            <input
              className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1"
              name="email"
              onChange={changeHandler}
              value={formData.email}
            />
          ) : (
            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1">{formData.email}</p>
          )}
        </div>
        {/* Mobile */}
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">
            Mobile Number:
          </label>
          {editMode ? (
            <input
              className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1"
              name="mobile"
              onChange={changeHandler}
              value={formData.mobile}
            />
          ) : (
            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1">{formData.mobile}</p>
          )}
        </div>
        {/* Address */}
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">
            Address:
          </label>
          {editMode ? (
            <input
              className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1"
              name="address"
              onChange={changeHandler}
              value={formData.address}
            />
          ) : (
            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base flex-1">{formData.address}</p>
          )}
        </div>
        {/* Add Edit and Save buttons */}
        <div className="flex justify-center mt-4 col-span-2">
          {editMode ? (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSave}>Save</button>
          ) : (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
