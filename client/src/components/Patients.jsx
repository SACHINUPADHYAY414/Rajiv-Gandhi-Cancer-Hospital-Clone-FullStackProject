import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/logo.png";
import background from "../images/home-banner-img2.webp";
import toast from "react-hot-toast";
import axios from "axios";

const Patients = ({ token,setId }) => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patient: "", 
  });

  const [patients, setPatients] = useState([]);

    useEffect(() => {
    fetchPatients();
    },[]);

  
  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getLoginPatients", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setPatients(response.data);
      const Uid = response.data[0].userid ;
      setId(Uid)
      console.log(Uid);

       // Update patients state with fetched data
    } catch (error) {
      toast.error("Patient Not Avilable On this Mobile Number ");
      console.log('Error fetching Patients:', error);
    }
  };

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    toast.success("Patient selected successfully");
    console.log("submitted form :", formData);
    navigate("/Sidebar/Dashboard");
  }
  

  return (
    <div className="flex relative h-screen w-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex flex-col mx-auto my-auto items-center border rounded-lg p-8 bg-white">
        <img src={image} className="aspect-square w-16 h-16 pt-2" alt="logo" />
        <h3 className="flex flex-col mx-auto mt-8 mb-1 text-2xl"> Select the Patient</h3>

        <form onSubmit={submitHandler}>
          <div className="relative flex flex-col mx-auto mt-6 p-4 pt-4">
            <label className="w-full mb-2">
              <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Patient<sup className="text-rose-700 text-sm">*</sup></p>
              <select
                type="dropdown"
                required
                onChange={changeHandler}
                name="patient"
                value={formData.patient}
                className="border rounded-[0.5rem]  w-full p-2.5" 
              >
                {Array.isArray(patients) && patients.map(patient => (
                  <option key={patient.patientId} value={patient.patientId}>{patient.name}</option>
                ))}
              </select>
            </label>
          </div>

          <button
            className="w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3 hover:bg-sky-600 text-lg font-bold mt-4"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Patients;
