import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import AppointmentTable from './MyAppointment';

const InPersonAppointment = ({ userId, token }) => {
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [department, setDepartment] = useState('');
  const [departmentList, setDepartmentList] = useState([]);
  
  const [clinician, setClinician] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [bookedAppointment, setBookedAppointment] = useState(null);
  const [cliniciansList, setCliniciansList] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const showTableHandler = () => {
    setShowTable(!showTable);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    // Reset department and clinician when location changes
    setDepartment('');
    setClinician('');
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
    // Reset clinician when department changes
    setClinician('');
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
    if (location) {
      // Fetch clinicians from the API based on location
      axios.get(`http://localhost:8080/api/clinicians?location=${location}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setCliniciansList(response.data); 
      })
      .catch(error => {
        console.error('Error fetching clinicians:', error);
      });
    }
  }, [location, token]);
  
  useEffect(() => {
    if (department) {
      // Fetch department from the API based on department
      axios.get(`http://localhost:8080/api/department?department=${department}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setDepartmentList(response.data); 
      })
      .catch(error => {
        console.error('Error fetching department:', error);
      });
    }
  }, [department, token]);
  

  useEffect(() => {
    if (location && selectedDate && clinician) {
      // Fetch appointments from the API
      fetchAppointments();
    }
  }, [location, clinician, selectedDate]);

  const fetchAppointments = () => {
    fetch(`http://localhost:8080/api/appointments?location=${location}&date=${selectedDate.toISOString()}&clinician=${clinician}`)
      .then(response => response.json())
      .then(data => {
        setAppointments(data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  };

  const maxDate = new Date(2050, 11, 31);

  return (
    <main className="main-content text-[#005457] w-full h-full text-sm justify-center flex-grow-1 px-0 overflow-x-auto">
      <div className='InPersonAppointment'>
        <h1 className="text-3xl font-bold mb-4 text-center underline">InPerson Appointment</h1>
        <div className='location mb-4 px-5 '>
          <label className="mr-2 font-bold text-[20px]">Location:</label>
          <select className="w-28 rounded border-2" value={location} onChange={handleLocationChange}>
            <option value="">Select Location</option>
            <option value="Rohini">Rohini</option>
            <option value="NitiBagh">NitiBagh</option>
          </select>
        </div>

        {location && (
          <div className='department mb-4 px-5 '>
            <label className="mr-2 font-bold text-[20px]">Department:</label>
            <select className="w-28 rounded border-2" value={department} onChange={handleDepartmentChange}>
              <option value="">Select Department</option>
              {departmentList.map(department => (
                <option key={department.id} value={department.name}>{department.name}</option>
              ))}
            </select>
          </div>
        )}

        {department && (
          <div className='Clinician mb-4 px-5'>
            <label className="mr-2 font-bold text-[20px]">Clinician: </label>
            <select className="w-28 rounded border-2" value={clinician} onChange={handleClinicianChange}>
              <option value="">Select Consultant</option>
              {cliniciansList.map(clinician => (
                <option key={clinician.id} value={clinician.name}>{clinician.name}</option>
              ))}
            </select>
          </div>
        )}

        <div className='AppointmentDate mb-5 px-5 flex'>
          <label className="mr-2 font-bold text-[20px]">Appointment Date: </label>
          <div className='flex space-x-4'>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            maxDate={maxDate}
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={50}
            dropdownMode="select"
            className="w-28 rounded border-2 text-center"
            required
          />
          <button className='border text-black border-gray-50 rounded-full px-3 text-center' onClick={showTableHandler}>
            {showTable ? 'Hide' : 'Show'} Table
          </button>
          {/* <button className='border text-black border-gray-50 rounded-full px-3 text-center' onClick={ShowTableHandler}>Show</button> */}
          </div>
        </div>
        
        <div className='justify-center items-center m-auto '>
            <ul className='flex grid-cols-4 space-x-3 justify-center items-center m-auto  text-2xl text-black mt-2 mb-2 '>
              <li className='px-1 py-1 border border-gray-500 bg-green-500 rounded-l-3xl'>Avalilable Slot</li>
              <li className='px-1 py-1 border border-gray-500 bg-red-400 rounded-b-3xl'>Booked Slot</li>
              <li className='px-1 py-1 border border-gray-500 bg-yellow-500 rounded-t-3xl'>Overbooking Available Slot</li>
              <li className='px-1 py-1 border border-gray-500 bg-red-600  rounded-r-3xl'>Blocked Slot</li>
            </ul>
        </div>
        
        {location && clinician && selectedDate && showTable && (
          <div className="flex justify-center">
            <table className="w-[80%] mb-2 border border-1 border-black bg-green-200"id='table'>
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

export default InPersonAppointment;
