import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import AppointmentTable from './MyAppointment';

const TelemedicineAppointment = ({ userId, token }) => {
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clinician, setClinician] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [bookedAppointment, setBookedAppointment] = useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClinicianChange = (event) => {
    setClinician(event.target.value);
  };

  const bookAppointment = (appointmentId) => {
    // Logic to book appointment with the given ID
    console.log("Booking appointment with ID:", appointmentId);

    // Make a POST request to book the appointment
    axios.post('http://localhost:8080/bookAppointment', {
      appointmentId,
      userId
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log("Appointment booked successfully:", response.data);
      // Update state to reflect the booked appointment
      setBookedAppointment(response.data);
    })
    .catch(error => {
      console.error('Error booking appointment:', error);
    });
  };

  useEffect(() => {
    if (location && selectedDate && clinician) {
      // Fetch appointments from the API
      fetch(`http://192.168.25.187:8080/api/appointments?location=${location}&date=${selectedDate.toString()}&clinician=${clinician}`)
        .then(response => response.json())
        .then(data => {
          setAppointments(data);
        })
        .catch(error => {
          console.error('Error fetching appointments:', error);
        });
    }
  }, [location, clinician, selectedDate]);

  // Render AppointmentTable if appointment is booked
  if (bookedAppointment) {
    return <AppointmentTable appointment={bookedAppointment} />;
  }

  const maxDate = new Date(2050, 11, 31);

  return (
    <main className="main-content text-[#005457] w-full h-full text-sm justify-center flex-grow-1 px-0 overflow-x-auto">
      <div className='TelemedicineAppointment'>
        <h1 className="text-3xl font-bold mb-4 text-center">Telemedicine Appointment</h1>
        <div className='location mb-4 px-5 '>
          <label className="mr-2 font-bold text-[20px]">Location:</label>
          <select className="  w-28 rounded border-2 " value={location} onChange={handleLocationChange}>
            <option value="">Select Location</option>
            <option value="Rohini">Rohini</option>
            <option value="NitiBagh">NitiBagh</option>
          </select>
        </div>

        {location === 'Rohini' && (
          <div className='Clinician mb-4 px-5'>
            <label className="mr-2 font-bold text-[20px]">Clinician: </label>
            <select className=" w-28 rounded border-2" value={clinician} onChange={handleClinicianChange}>
              <option value="">Select Consultant</option>
              <option value="Dr. Alok Kalyani/Tarun">Dr. Alok Kalyani/Tarun</option>
              <option value="Dr. Anjali Pahuja">Dr. Anjali Pahuja </option>
              <option value="Dr. Ashutosh ">Dr. Ashutosh </option>
              <option value="Dr. C.R Jain/Nitin/Aakash/Sueet ">Dr. C.R Jain/Nitin/Aakash/Sueet </option>
              <option value="Dr. Ct Appointments">Dr. Ct Appointments </option>
              <option value="Dr. D.C Doval/Pankaj ">Dr. D.C Doval/Pankaj </option>
              <option value="Dr. Dinesh Bhurani/Rohan/Roy ">Dr. Dinesh Bhurani/Rohan/Roy </option>
              <option value="Dr. Gauri Kapoor/Sandeep/Payal ">Dr. Gauri Kapoor/Sandeep/Payal </option>
              <option value="Dr. Himanshu Rohela ">Dr. Himanshu Rohela </option>
              <option value="Dr. I.C Premsagar ">Dr. I.C Premsagar </option>
            </select>
          </div>
        )}

       {location === 'NitiBagh' && (
      <div className='Clinician mb-4 px-5'>
        <label className="mr-2 font-bold text-[20px]">Clinician: </label>
        <select className=" w-28 rounded border-2" value={clinician} onChange={handleClinicianChange}>
          <option value="">Select Consultant</option>
               <option value="Dr. A.K Dewan">Dr. A.K Dewan</option>
               <option value="Dr. Anjali Pahuja">Dr. Anjali Pahuja</option>
               <option value="Dr. Anurag Shrikant Deshpanday">Dr. Anurag Shrikant Deshpanday</option>
               <option value="Dr. D.C Doval">Dr. D.C Doval </option>
               <option value="Dr. Dinesh Bhurani">Dr. Dinesh Bhurani </option>
               <option value="Dr Dinesh Bhurani/Rohan">Dr Dinesh Bhurani/Rohan </option>
               <option value="Dr. Gauri Kappor">Dr. Gauri Kappor </option>
            </select>
          </div>
        )}

        <div className='AppointmentDate mb-4 px-5'>
          <label className="mr-2 font-bold text-[20px]">Appointment Date: </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            maxDate={maxDate}
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={50}
            dropdownMode="select"
            className=" w-28 rounded border-2 text-center"
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-2 text-center font-bold px-10 py-10">
          <div className="rounded-lg px-2 py-2 bg-green-500">Available Slot</div>
          <div className="rounded-lg px-2 py-2 bg-red-500">Booked Slot</div>
          <div className="rounded-lg px-2 py-2 bg-yellow-400">Overbooking Slot</div>
          <div className="rounded-lg px-2 py-2 bg-blue-600">Blocked Slot</div>
        </div>
        
        {location && clinician && selectedDate && (
          <div className="flex justify-center">
          <table className="w-[80%] mb-2 border border-1 border-black bg-green-200">
            <thead>
              <tr className='border border-collapse border-1 border-black'>
                <th className="lg:px-4 px-1 md:px-0 py-2 border border-collapse border-1 border-black">Location</th>
                <th className="lg:px-4 px-1 md:px-0 py-2 border border-collapse border-1 border-black">Clinician</th>
                <th className="lg:px-4 px-1 md:px-0 py-2 border border-collapse border-1 border-black">Time Slot</th>
                <th className="lg:px-4 px-1 md:px-0 py-2 border border-collapse border-1 border-black">Status</th>
                <th className="lg:px-4 px-1 md:px-0 py-2 border border-collapse border-1 border-black">Book Appointment</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td className="lg:px-4 px-1 md:px-0 py-2">{appointment.location}</td>
                  <td className="lg:px-4 px-1 md:px-0 py-2">{appointment.clinician}</td>
                  <td className="lg:px-4 px-1 md:px-0 py-2">{appointment.time}</td>
                  <td className="lg:px-4 px-1 md:px-0 py-2">{appointment.status}</td>
                  <td className="lg:px-4 px-1 md:px-0 py-2">
                    {appointment.status === "Available" && (
                      <button onClick={() => bookAppointment(appointment.id)} className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Book Appointment</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default TelemedicineAppointment;
