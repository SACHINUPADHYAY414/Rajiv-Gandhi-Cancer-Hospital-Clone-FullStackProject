import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckboxExample = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setIsChecked1(!isChecked1);
      if (!isChecked1) {
        navigate('/Sidebar/InPersonAppointment');
      } else {
        navigate('/'); 
      }
    } else if (checkboxNumber === 2) {
      setIsChecked2(!isChecked2);
      if (!isChecked2) {
        navigate('/Sidebar/TelemedicineAppointment'); 
      } else {
        navigate('/'); 
      }
    }
  };

  return (
    <div className="flex justify-center  mt-4 w-full items-center">
    <div className="flex flex-col ">
      <h1 className=' font-bold text-[20px] mb-5'>Choose Appointment Type</h1>
      <label className="text-center font-bold">
        InPerson Appointment
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={() => handleCheckboxChange(1)}
          className="ml-4"
        />
      </label>

      <label className="text-center font-bold">
        Telemedicine Appointment
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => handleCheckboxChange(2)}
          className="ml-4"
        />
      </label>
    </div>
  </div>


  );
};

export default CheckboxExample;
